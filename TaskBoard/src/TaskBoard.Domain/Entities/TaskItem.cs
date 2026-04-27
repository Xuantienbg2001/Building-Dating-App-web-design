using TaskBoard.Domain.Common;
using TaskBoard.Domain.Enums;

namespace TaskBoard.Domain.Entities;

public sealed class TaskItem : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public int Order { get; set; }
    public DateTime? DueDateUtc { get; set; }
    public TaskPriority Priority { get; set; } = TaskPriority.Medium;
    public TaskItemStatus Status { get; set; } = TaskItemStatus.Todo;

    public Guid ColumnId { get; set; }
    public BoardColumn Column { get; set; } = null!;

    public Guid CreatedById { get; set; }
    public AppUser CreatedBy { get; set; } = null!;

    public ICollection<TaskAssignment> Assignments { get; set; } = new List<TaskAssignment>();
}
