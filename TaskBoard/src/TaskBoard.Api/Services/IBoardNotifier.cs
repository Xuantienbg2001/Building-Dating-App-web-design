using TaskBoard.Api.Contracts.Realtime;
using TaskBoard.Domain.Entities;

namespace TaskBoard.Api.Services;

public interface IBoardNotifier
{
    Task NotifyTaskChangedAsync(Guid boardId, TaskItem task, string action);
    Task NotifyTaskDeletedAsync(Guid boardId, Guid taskId, Guid columnId);
}
