using TaskBoard.Domain.Common;

namespace TaskBoard.Domain.Entities;

public sealed class TaskAssignment : BaseEntity
{
    public Guid TaskItemId { get; set; }
    public TaskItem TaskItem { get; set; } = null!;

    public Guid AssigneeId { get; set; }
    public AppUser Assignee { get; set; } = null!;
}
