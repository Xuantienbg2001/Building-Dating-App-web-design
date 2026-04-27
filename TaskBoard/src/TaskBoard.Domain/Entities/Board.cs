using TaskBoard.Domain.Common;

namespace TaskBoard.Domain.Entities;

public sealed class Board : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }

    public Guid OwnerId { get; set; }
    public AppUser Owner { get; set; } = null!;

    public ICollection<BoardColumn> Columns { get; set; } = new List<BoardColumn>();
    public ICollection<BoardMember> Members { get; set; } = new List<BoardMember>();
}
