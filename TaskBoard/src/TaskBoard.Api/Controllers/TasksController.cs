using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskBoard.Domain.Entities;
using TaskBoard.Infrastructure.Data;

namespace TaskBoard.Api.Controllers;

[ApiController]
[Authorize]
public sealed class TasksController(TaskBoardDbContext dbContext) : ControllerBase
{
    [HttpPost("api/columns/{columnId:guid}/tasks")]
    public async Task<IActionResult> CreateTask(Guid columnId, [FromBody] CreateTaskRequest request)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var column = await dbContext.Columns.Include(c => c.Board).ThenInclude(b => b.Members)
            .FirstOrDefaultAsync(c => c.Id == columnId);
        if (column is null) return NotFound();

        var hasAccess = column.Board.OwnerId == userId || column.Board.Members.Any(m => m.UserId == userId);
        if (!hasAccess) return Forbid();

        var maxOrder = await dbContext.Tasks.Where(t => t.ColumnId == columnId)
            .Select(t => (int?)t.Order).MaxAsync() ?? 0;

        var task = new TaskItem
        {
            ColumnId = columnId,
            Title = string.IsNullOrWhiteSpace(request.Title) ? "New Task" : request.Title.Trim(),
            Description = request.Description?.Trim(),
            Priority = request.Priority,
            Status = request.Status,
            DueDateUtc = request.DueDateUtc,
            Order = request.Order <= 0 ? maxOrder + 1 : request.Order,
            CreatedById = userId.Value
        };

        dbContext.Tasks.Add(task);
        await dbContext.SaveChangesAsync();
        return Ok(task);
    }

    [HttpGet("api/columns/{columnId:guid}/tasks")]
    public async Task<IActionResult> GetTasksByColumn(Guid columnId)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var column = await dbContext.Columns.Include(c => c.Board).ThenInclude(b => b.Members)
            .FirstOrDefaultAsync(c => c.Id == columnId);
        if (column is null) return NotFound();

        var hasAccess = column.Board.OwnerId == userId || column.Board.Members.Any(m => m.UserId == userId);
        if (!hasAccess) return Forbid();

        var tasks = await dbContext.Tasks.Where(t => t.ColumnId == columnId)
            .OrderBy(t => t.Order)
            .ToListAsync();

        return Ok(tasks);
    }

    [HttpPatch("api/tasks/{taskId:guid}")]
    public async Task<IActionResult> UpdateTask(Guid taskId, [FromBody] UpdateTaskRequest request)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var task = await dbContext.Tasks
            .Include(t => t.Column).ThenInclude(c => c.Board)
            .ThenInclude(b => b.Members)
            .FirstOrDefaultAsync(t => t.Id == taskId);
        if (task is null) return NotFound();

        var hasAccess = task.Column.Board.OwnerId == userId || task.Column.Board.Members.Any(m => m.UserId == userId);
        if (!hasAccess) return Forbid();

        if (!string.IsNullOrWhiteSpace(request.Title)) task.Title = request.Title.Trim();
        task.Description = request.Description?.Trim();
        if (request.Priority.HasValue) task.Priority = request.Priority.Value;
        if (request.Status.HasValue) task.Status = request.Status.Value;
        task.DueDateUtc = request.DueDateUtc;
        if (request.Order is > 0) task.Order = request.Order.Value;

        await dbContext.SaveChangesAsync();
        return Ok(task);
    }

    [HttpPatch("api/tasks/{taskId:guid}/move")]
    public async Task<IActionResult> MoveTask(Guid taskId, [FromQuery] Guid targetColumnId, [FromQuery] int order = 1)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var task = await dbContext.Tasks
            .Include(t => t.Column).ThenInclude(c => c.Board).ThenInclude(b => b.Members)
            .FirstOrDefaultAsync(t => t.Id == taskId);
        var targetColumn = await dbContext.Columns.Include(c => c.Board).ThenInclude(b => b.Members)
            .FirstOrDefaultAsync(c => c.Id == targetColumnId);
        if (task is null || targetColumn is null) return NotFound();

        var hasAccess = targetColumn.Board.OwnerId == userId || targetColumn.Board.Members.Any(m => m.UserId == userId);
        if (!hasAccess) return Forbid();

        task.ColumnId = targetColumnId;
        task.Order = order <= 0 ? 1 : order;
        await dbContext.SaveChangesAsync();
        return Ok(task);
    }

    [HttpDelete("api/tasks/{taskId:guid}")]
    public async Task<IActionResult> DeleteTask(Guid taskId)
    {
        var userId = GetUserId();
        if (userId is null) return Unauthorized();

        var task = await dbContext.Tasks
            .Include(t => t.Column).ThenInclude(c => c.Board)
            .FirstOrDefaultAsync(t => t.Id == taskId);
        if (task is null) return NotFound();
        if (task.Column.Board.OwnerId != userId && task.CreatedById != userId) return Forbid();

        dbContext.Tasks.Remove(task);
        await dbContext.SaveChangesAsync();
        return NoContent();
    }

    [HttpPost("api/tasks/{taskId:guid}/assignees/{userId:guid}")]
    public async Task<IActionResult> AssignTask(Guid taskId, Guid userId)
    {
        var callerId = GetUserId();
        if (callerId is null) return Unauthorized();

        var task = await dbContext.Tasks
            .Include(t => t.Column)
            .ThenInclude(c => c.Board)
            .ThenInclude(b => b.Members)
            .FirstOrDefaultAsync(t => t.Id == taskId);
        var user = await dbContext.Users.FirstOrDefaultAsync(u => u.Id == userId);
        if (task is null || user is null) return NotFound();

        var hasAccess = task.Column.Board.OwnerId == callerId || task.Column.Board.Members.Any(m => m.UserId == callerId);
        if (!hasAccess) return Forbid();

        var exists = await dbContext.TaskAssignments.AnyAsync(x => x.TaskItemId == taskId && x.AssigneeId == userId);
        if (!exists)
        {
            dbContext.TaskAssignments.Add(new TaskAssignment { TaskItemId = taskId, AssigneeId = userId });
            await dbContext.SaveChangesAsync();
        }

        return NoContent();
    }

    [HttpDelete("api/tasks/{taskId:guid}/assignees/{userId:guid}")]
    public async Task<IActionResult> UnassignTask(Guid taskId, Guid userId)
    {
        var callerId = GetUserId();
        if (callerId is null) return Unauthorized();

        var assignment = await dbContext.TaskAssignments
            .Include(x => x.TaskItem)
            .ThenInclude(t => t.Column)
            .ThenInclude(c => c.Board)
            .ThenInclude(b => b.Members)
            .FirstOrDefaultAsync(x => x.TaskItemId == taskId && x.AssigneeId == userId);
        if (assignment is null) return NotFound();

        var hasAccess = assignment.TaskItem.Column.Board.OwnerId == callerId
                        || assignment.TaskItem.Column.Board.Members.Any(m => m.UserId == callerId);
        if (!hasAccess) return Forbid();

        dbContext.TaskAssignments.Remove(assignment);
        await dbContext.SaveChangesAsync();
        return NoContent();
    }

    private Guid? GetUserId()
    {
        var claim = User.FindFirstValue(ClaimTypes.NameIdentifier);
        return Guid.TryParse(claim, out var userId) ? userId : null;
    }
}

public sealed class CreateTaskRequest
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int Order { get; set; }
    public DateTime? DueDateUtc { get; set; }
    public TaskBoard.Domain.Enums.TaskPriority Priority { get; set; } = TaskBoard.Domain.Enums.TaskPriority.Medium;
    public TaskBoard.Domain.Enums.TaskItemStatus Status { get; set; } = TaskBoard.Domain.Enums.TaskItemStatus.Todo;
}

public sealed class UpdateTaskRequest
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int? Order { get; set; }
    public DateTime? DueDateUtc { get; set; }
    public TaskBoard.Domain.Enums.TaskPriority? Priority { get; set; }
    public TaskBoard.Domain.Enums.TaskItemStatus? Status { get; set; }
}
