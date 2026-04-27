using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskBoard.Api.Contracts.Auth;
using TaskBoard.Api.Security;
using TaskBoard.Domain.Entities;
using TaskBoard.Domain.Enums;
using TaskBoard.Infrastructure.Data;

namespace TaskBoard.Api.Controllers;

[ApiController]
[Route("api/auth")]
public sealed class AuthController(TaskBoardDbContext dbContext, ITokenService tokenService) : ControllerBase
{
    [HttpPost("register")]
    public async Task<ActionResult<AuthResponse>> Register(RegisterRequest request)
    {
        var normalizedUserName = request.UserName.Trim().ToLowerInvariant();
        var normalizedEmail = request.Email.Trim().ToLowerInvariant();
        if (string.IsNullOrWhiteSpace(normalizedUserName) ||
            string.IsNullOrWhiteSpace(normalizedEmail) ||
            string.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest("Username, email, and password are required.");
        }

        var existed = await dbContext.Users.AnyAsync(x =>
            x.UserName.ToLower() == normalizedUserName || x.Email.ToLower() == normalizedEmail);
        if (existed)
        {
            return Conflict("Username or email already exists.");
        }

        PasswordHasher.CreatePasswordHash(request.Password, out var hash, out var salt);
        var user = new AppUser
        {
            UserName = request.UserName.Trim(),
            Email = request.Email.Trim(),
            PasswordHash = hash,
            PasswordSalt = salt,
            Role = UserRole.Member
        };

        dbContext.Users.Add(user);
        await dbContext.SaveChangesAsync();
        return Ok(tokenService.CreateToken(user));
    }

    [HttpPost("login")]
    public async Task<ActionResult<AuthResponse>> Login(LoginRequest request)
    {
        var key = request.UserNameOrEmail.Trim().ToLowerInvariant();
        var user = await dbContext.Users.FirstOrDefaultAsync(x =>
            x.UserName.ToLower() == key || x.Email.ToLower() == key);
        if (user is null || !PasswordHasher.VerifyPassword(request.Password, user.PasswordHash, user.PasswordSalt))
        {
            return Unauthorized("Invalid credentials.");
        }

        if (!user.IsActive)
        {
            return Unauthorized("User account is locked.");
        }

        return Ok(tokenService.CreateToken(user));
    }
}
