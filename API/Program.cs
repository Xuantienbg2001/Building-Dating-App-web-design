using API.Data;
using API.Entities;
using API.Extensions;
using API.Middleware;
using API.SignalR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Builder; // Để sửa lỗi WebApplication
using Microsoft.Extensions.DependencyInjection; 
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging; // Để sửa lỗi ILogger
using System; // Để sửa lỗi Exception

var builder = WebApplication.CreateBuilder(args);

// --- 1. CẤU HÌNH SERVICES (Thay thế ConfigureServices) ---

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddControllers();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
});

builder.Services.AddCors();
builder.Services.AddIdentityService(builder.Configuration);
builder.Services.AddSignalR();

var app = builder.Build();

// --- 2. CẤU HÌNH HTTP PIPELINE (Thay thế Configure) ---

app.UseMiddleware<ExceptionMiddleware>();

app.UseHttpsRedirection();

// Cấu hình CORS (Lưu ý: Đặt giữa UseRouting và UseAuthorization nếu có)
app.UseCors(x => x.AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials()
    .WithOrigins("https://localhost:4200"));

app.UseAuthentication();
app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

// Mapping Endpoints (Thay thế cho UseEndpoints)
app.MapControllers();
app.MapHub<PresenceHub>("hubs/presence");
app.MapHub<MessageHub>("hubs/message");

// --- 3. SEED DATA (Thay thế logic trong Main cũ) ---

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<DataContext>();
    var userManager = services.GetRequiredService<UserManager<AppUser>>();
    var roleManager = services.GetRequiredService<RoleManager<AppRole>>();
    
    await context.Database.MigrateAsync();
    await Seed.SeedUser(userManager, roleManager);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred during migrating the database.");
}

app.Run();