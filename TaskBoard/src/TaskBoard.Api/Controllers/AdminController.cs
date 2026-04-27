using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskBoard.Domain.Enums;
using TaskBoard.Infrastructure.Data;

namespace TaskBoard.Api.Controllers;

[ApiController]
[Authorize(Roles = nameof(UserRole.Admin))]
[Route("api/admin/users")]
public sealed class AdminController(TaskBoardDbContext dbContext) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        var users = await dbContext.Users
            .Select(u => new { u.Id, u.UserName, u.Email, Role = u.Role.ToString(), u.IsActive })
            .ToListAsync();
        return Ok(users);
    }

    [HttpPatch("{userId:guid}/role")]
    public async Task<IActionResult> UpdateRole(Guid userId, [FromQuery] UserRole role)
    {
        var user = await dbContext.Users.FindAsync(userId);
        if (user is null) return NotFound();

        user.Role = role;
        await dbContext.SaveChangesAsync();
        return Ok(new { user.Id, Role = user.Role.ToString() });
    }

    [HttpPatch("{userId:guid}/lock")]
    public async Task<IActionResult> SetLock(Guid userId, [FromQuery] bool locked)
    {
        var user = await dbContext.Users.FindAsync(userId);
        if (user is null) return NotFound();

        user.IsActive = !locked;
        await dbContext.SaveChangesAsync();
        return Ok(new { user.Id, user.IsActive });
    }
}
