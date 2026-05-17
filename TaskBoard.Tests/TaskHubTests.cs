using System;
using System.Threading;
using System.Threading.Tasks;
using API.SignalR;
using Microsoft.AspNetCore.SignalR;
using Moq;
using Xunit;


public class TestTaskHub : TaskHub
{
    public string MockBoardId { get; set; }

    protected override string GetBoardId()
    {
        return MockBoardId;
    }
}


public class TaskHubTests
{
    private readonly Mock<IHubCallerClients> _mockClients;
    private readonly Mock<IClientProxy> _mockClientProxy;
    private readonly Mock<IGroupManager> _mockGroups;
    private readonly Mock<HubCallerContext> _mockContext;

    private readonly TestTaskHub _hub;


    public TaskHubTests()
    {
        _mockClients =
            new Mock<IHubCallerClients>();

        _mockClientProxy =
            new Mock<IClientProxy>();

        _mockGroups =
            new Mock<IGroupManager>();

        _mockContext =
            new Mock<HubCallerContext>();


        _mockClients
            .Setup(c => c.Group(It.IsAny<string>()))
            .Returns(_mockClientProxy.Object);


        _hub =
            new TestTaskHub
            {
                Context = _mockContext.Object,
                Clients = _mockClients.Object,
                Groups = _mockGroups.Object
            };
    }


    private void SetupMockQueryString(string boardId)
    {
        _hub.MockBoardId = boardId;
    }



    [Fact]
    public async Task Test1_UpdateTask_ShouldBroadcast_TaskUpdated_ToSpecificBoardGroup()
    {
        string boardId = "board-123";

        var updatedTask = new
        {
            TaskId = 99,
            Title = "Xây dựng tính năng Realtime"
        };

        await _hub.UpdateTask(
            boardId,
            updatedTask);

        _mockClients.Verify(
            c => c.Group(boardId),
            Times.Once);

        _mockClientProxy.Verify(
            x => x.SendCoreAsync(
                "TaskUpdated",
                It.Is<object[]>(o =>
                    o.Length == 1 &&
                    o[0] == updatedTask),
                default),
            Times.Once);
    }



    [Fact]
    public async Task Test2_UpdateTask_ShouldNotBroadcast_ToOtherGroups()
    {
        string targetBoardId =
            "board-target";

        string wrongBoardId =
            "board-wrong";

        var updatedTask = new
        {
            TaskId = 99
        };

        await _hub.UpdateTask(
            targetBoardId,
            updatedTask);

        _mockClients.Verify(
            c => c.Group(wrongBoardId),
            Times.Never);
    }



    [Fact]
    public async Task Test3_OnConnectedAsync_ShouldAdd_ConnectionToBoardGroup()
    {
        string connectionId =
            "conn-datingapp-hub";

        string boardId =
            "board-green-sprint";

        _mockContext
            .Setup(c => c.ConnectionId)
            .Returns(connectionId);

        SetupMockQueryString(boardId);

        await _hub.OnConnectedAsync();

        _mockGroups.Verify(
            g => g.AddToGroupAsync(
                connectionId,
                boardId,
                It.IsAny<CancellationToken>()),
            Times.Once);
    }



    [Fact]
    public async Task Test4_OnDisconnectedAsync_ShouldRemove_ConnectionFromBoardGroup()
    {
        string connectionId =
            "conn-datingapp-hub";

        string boardId =
            "board-green-sprint";

        _mockContext
            .Setup(c => c.ConnectionId)
            .Returns(connectionId);

        SetupMockQueryString(boardId);

        await _hub.OnDisconnectedAsync(
            new Exception());

        _mockGroups.Verify(
            g => g.RemoveFromGroupAsync(
                connectionId,
                boardId,
                It.IsAny<CancellationToken>()),
            Times.Once);
    }



    [Fact]
    public async Task Test5_OnDisconnectedAsync_WithMissingBoardId_ShouldHandleGracefully()
    {
        string connectionId =
            "conn-datingapp-hub";

        _mockContext
            .Setup(c => c.ConnectionId)
            .Returns(connectionId);

        _hub.MockBoardId = null;

        await _hub.OnDisconnectedAsync(null);

        _mockGroups.Verify(
            g => g.RemoveFromGroupAsync(
                It.IsAny<string>(),
                It.IsAny<string>(),
                It.IsAny<CancellationToken>()),
            Times.Never);
    }
}