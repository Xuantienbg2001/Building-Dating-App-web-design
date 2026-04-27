using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskBoard.Domain.Entities;
using TaskBoard.Infrastructure.Data;

namespace TaskBoard.Api.Controllers;

[ApiController]
[Authorize]
[Route("api/boards")]
public sealed class BoardsController(TaskBoardDbContext dbContext) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetBoards()
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var boards = await dbContext.Boards
            .Where(b => b.OwnerId == userId || b.Members.Any(m => m.UserId == userId))
            .Select(b => new
            {
                b.Id,
                b.Name,
                b.Description,
                b.OwnerId,
                MemberCount = b.Members.Count
            })
            .ToListAsync();

        return Ok(boards);
    }

    [HttpGet("{boardId:guid}")]
    public async Task<IActionResult> GetBoardById(Guid boardId)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var board = await dbContext.Boards
            .Include(b => b.Columns.OrderBy(c => c.Order))
                .ThenInclude(c => c.Tasks.OrderBy(t => t.Order))
            .Include(b => b.Members)
            .FirstOrDefaultAsync(b => b.Id == boardId &&
                                      (b.OwnerId == userId || b.Members.Any(m => m.UserId == userId)));

        return board is null ? NotFound() : Ok(board);
    }

    [HttpPost]
    public async Task<IActionResult> CreateBoard([FromBody] CreateBoardRequest request)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();
        if (string.IsNullOrWhiteSpace(request.Name)) return BadRequest("Board name is required.");

        var board = new Domain.Entities.Board
        {
            Name = request.Name.Trim(),
            Description = request.Description?.Trim(),
            OwnerId = userId.Value
        };

        dbContext.Boards.Add(board);
        dbContext.BoardMembers.Add(new BoardMember { BoardId = board.Id, UserId = userId.Value });
        await dbContext.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBoardById), new { boardId = board.Id }, board);
    }

    [HttpPatch("{boardId:guid}")]
    public async Task<IActionResult> UpdateBoard(Guid boardId, [FromBody] UpdateBoardRequest request)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var board = await dbContext.Boards.FirstOrDefaultAsync(b => b.Id == boardId && b.OwnerId == userId);
        if (board is null) return NotFound();

        board.Name = string.IsNullOrWhiteSpace(request.Name) ? board.Name : request.Name.Trim();
        board.Description = request.Description?.Trim();
        await dbContext.SaveChangesAsync();
        return Ok(board);
    }

    [HttpDelete("{boardId:guid}")]
    public async Task<IActionResult> DeleteBoard(Guid boardId)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var board = await dbContext.Boards.FirstOrDefaultAsync(b => b.Id == boardId && b.OwnerId == userId);
        if (board is null) return NotFound();

        dbContext.Boards.Remove(board);
        await dbContext.SaveChangesAsync();
        return NoContent();
    }

    [HttpPost("{boardId:guid}/members")]
    public async Task<IActionResult> AddMember(Guid boardId, [FromQuery] Guid userId)
    {
        var callerId = GetUserId();
        if (callerId is null) return Unauthorized();

        var board = await dbContext.Boards.FirstOrDefaultAsync(b => b.Id == boardId && b.OwnerId == callerId);
        if (board is null) return NotFound();

        var userExists = await dbContext.Users.AnyAsync(u => u.Id == userId && u.IsActive);
        if (!userExists) return NotFound("User not found or inactive.");

        var memberExists = await dbContext.BoardMembers.AnyAsync(m => m.BoardId == boardId && m.UserId == userId);
        if (!memberExists)
        {
            dbContext.BoardMembers.Add(new BoardMember { BoardId = boardId, UserId = userId });
            await dbContext.SaveChangesAsync();
        }

        return NoContent();
    }

    [HttpDelete("{boardId:guid}/members/{userId:guid}")]
    public async Task<IActionResult> RemoveMember(Guid boardId, Guid userId)
    {
        var callerId = GetUserId();
        if (callerId is null) return Unauthorized();

        var board = await dbContext.Boards.FirstOrDefaultAsync(b => b.Id == boardId && b.OwnerId == callerId);
        if (board is null) return NotFound();

        var membership = await dbContext.BoardMembers
            .FirstOrDefaultAsync(m => m.BoardId == boardId && m.UserId == userId);
        if (membership is null) return NotFound();

        dbContext.BoardMembers.Remove(membership);
        await dbContext.SaveChangesAsync();
        return NoContent();
    }

    private Guid? GetUserId()
    {
        var claim = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue(ClaimTypes.Name);
        return Guid.TryParse(claim, out var userId) ? userId : null;
    }
}

public sealed class CreateBoardRequest
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
}

public sealed class UpdateBoardRequest
{
    public string? Name { get; set; }
    public string? Description { get; set; }
}
