using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskBoard.Domain.Entities;
using TaskBoard.Infrastructure.Data;

namespace TaskBoard.Api.Controllers;

[ApiController]
[Authorize]
[Route("api/boards/{boardId:guid}/columns")]
public sealed class ColumnsController(TaskBoardDbContext dbContext) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> CreateColumn(Guid boardId, [FromBody] CreateColumnRequest request)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var hasAccess = await dbContext.Boards.AnyAsync(b =>
            b.Id == boardId && (b.OwnerId == userId || b.Members.Any(m => m.UserId == userId)));
        if (!hasAccess) return NotFound();

        var maxOrder = await dbContext.Columns.Where(c => c.BoardId == boardId)
            .Select(c => (int?)c.Order).MaxAsync() ?? 0;

        var column = new BoardColumn
        {
            BoardId = boardId,
            Name = string.IsNullOrWhiteSpace(request.Name) ? "New Column" : request.Name.Trim(),
            Order = request.Order <= 0 ? maxOrder + 1 : request.Order
        };

        dbContext.Columns.Add(column);
        await dbContext.SaveChangesAsync();
        return Ok(column);
    }

    [HttpPatch("{columnId:guid}")]
    public async Task<IActionResult> UpdateColumn(Guid boardId, Guid columnId, [FromBody] UpdateColumnRequest request)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var column = await dbContext.Columns.Include(c => c.Board)
            .FirstOrDefaultAsync(c => c.Id == columnId && c.BoardId == boardId);
        if (column is null) return NotFound();
        if (column.Board.OwnerId != userId) return Forbid();

        if (!string.IsNullOrWhiteSpace(request.Name))
        {
            column.Name = request.Name.Trim();
        }

        if (request.Order is > 0)
        {
            column.Order = request.Order.Value;
        }

        await dbContext.SaveChangesAsync();
        return Ok(column);
    }

    [HttpDelete("{columnId:guid}")]
    public async Task<IActionResult> DeleteColumn(Guid boardId, Guid columnId)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var column = await dbContext.Columns.Include(c => c.Board)
            .FirstOrDefaultAsync(c => c.Id == columnId && c.BoardId == boardId);
        if (column is null) return NotFound();
        if (column.Board.OwnerId != userId) return Forbid();

        dbContext.Columns.Remove(column);
        await dbContext.SaveChangesAsync();
        return NoContent();
    }

    private Guid? GetUserId()
    {
        var claim = User.FindFirstValue(ClaimTypes.NameIdentifier);
        return Guid.TryParse(claim, out var userId) ? userId : null;
    }
}

public sealed class CreateColumnRequest
{
    public string? Name { get; set; }
    public int Order { get; set; }
}

public sealed class UpdateColumnRequest
{
    public string? Name { get; set; }
    public int? Order { get; set; }
}
