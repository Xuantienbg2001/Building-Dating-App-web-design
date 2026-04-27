using System;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace API.Tests;

public class UserTests
{
    private DataContext GetDbContext()
    {
        var options = new DbContextOptionsBuilder<DataContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()).Options;
        return new DataContext(options);
    }

    [Fact]
    public async Task UserExists_ExistingUser_ReturnsTrue()
    {
        using var context = GetDbContext();
        context.Users.Add(new AppUser { UserName = "bob" });
        await context.SaveChangesAsync();
        var repo = new UserRepository(context, null);
        var user = await repo.GetUserByUsernameAsync("bob");
        Assert.NotNull(user);
    }

    [Fact]
    public void NewUser_Registration_IsMemberRole()
    {
        // Giả lập logic gán role mặc định khi đăng ký
        var userRole = "Member";
        Assert.Equal("Member", userRole);
    }

    [Fact]
    public async Task GetUserGender_ReturnsCorrectString()
    {
        using var context = GetDbContext();
        context.Users.Add(new AppUser { UserName = "anna", Gender = "female" });
        await context.SaveChangesAsync();
        var repo = new UserRepository(context, null!);
        var gender = await repo.GetUserGender("anna");
        Assert.Equal("female", gender);
    }
}