using TaskBoard.Domain.Common;

namespace TaskBoard.Domain.Entities;

public sealed class BoardMember : BaseEntity
{
    public Guid BoardId { get; set; }
    public Board Board { get; set; } = null!;

    public Guid UserId { get; set; }
    public AppUser User { get; set; } = null!;
}
