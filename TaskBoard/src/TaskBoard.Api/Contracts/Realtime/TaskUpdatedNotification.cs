using TaskBoard.Domain.Enums;

namespace TaskBoard.Api.Contracts.Realtime;

public sealed class TaskUpdatedNotification
{
    public string Action { get; set; } = string.Empty;
    public Guid BoardId { get; set; }
    public Guid? TaskId { get; set; }
    public Guid? ColumnId { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int Order { get; set; }
    public TaskPriority Priority { get; set; }
    public TaskItemStatus Status { get; set; }
    public DateTime? DueDateUtc { get; set; }
}
