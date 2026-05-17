using Microsoft.AspNetCore.SignalR;
using TaskBoard.Api.Contracts.Realtime;
using TaskBoard.Api.Hubs;
using TaskBoard.Domain.Entities;

namespace TaskBoard.Api.Services;

public sealed class BoardNotifier(IHubContext<BoardHub> hubContext) : IBoardNotifier
{
    public Task NotifyTaskChangedAsync(Guid boardId, TaskItem task, string action)
    {
        var payload = new TaskUpdatedNotification
        {
            Action = action,
            BoardId = boardId,
            TaskId = task.Id,
            ColumnId = task.ColumnId,
            Title = task.Title,
            Description = task.Description,
            Order = task.Order,
            Priority = task.Priority,
            Status = task.Status,
            DueDateUtc = task.DueDateUtc
        };

        return hubContext.Clients.Group(boardId.ToString()).SendAsync("TaskUpdated", payload);
    }

    public Task NotifyTaskDeletedAsync(Guid boardId, Guid taskId, Guid columnId)
    {
        var payload = new TaskUpdatedNotification
        {
            Action = "deleted",
            BoardId = boardId,
            TaskId = taskId,
            ColumnId = columnId
        };

        return hubContext.Clients.Group(boardId.ToString()).SendAsync("TaskUpdated", payload);
    }
}
