using Microsoft.AspNetCore.SignalR;

namespace TaskBoard.Api.Hubs;

public sealed class BoardHub : Hub
{
    public Task JoinBoard(string boardId)
    {
        return Groups.AddToGroupAsync(Context.ConnectionId, boardId);
    }

    public Task LeaveBoard(string boardId)
    {
        return Groups.RemoveFromGroupAsync(Context.ConnectionId, boardId);
    }
}
