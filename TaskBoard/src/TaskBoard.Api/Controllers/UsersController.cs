using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskBoard.Infrastructure.Data;

namespace TaskBoard.Api.Controllers;

[ApiController]
[Authorize]
[Route("api/users")]
public sealed class UsersController(TaskBoardDbContext dbContext) : ControllerBase
{
    [HttpGet("me")]
    public async Task<IActionResult> Me()
    {
        var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (!Guid.TryParse(userIdClaim, out var userId)) return Unauthorized();

        var user = await dbContext.Users.Where(u => u.Id == userId)
            .Select(u => new { u.Id, u.UserName, u.Email, Role = u.Role.ToString(), u.IsActive })
            .FirstOrDefaultAsync();

        return user is null ? NotFound() : Ok(user);
    }
}
