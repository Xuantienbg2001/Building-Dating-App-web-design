using API.Data;
using API.Helpers;
using API.Interfaces;
using API.Services;
using API.SignalR;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;


namespace API.Extensions
{
    public static class ApplicationServiceExtenstions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddSingleton<PresenceTracker>();
            services.Configure<CloudinarySettings>(config.GetSection("CloudinarySettings"));
            
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IPhotoService, PhotoService>();
            services.AddScoped<LogUserActivity>();  
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            // SỬA DÒNG NÀY: Cấu hình tường minh để tránh lỗi System.Char trên .NET 8
            services.AddAutoMapper(cfg => 
            {
                cfg.AddProfile<AutoMapperProfiles>();
            }, typeof(AutoMapperProfiles).Assembly);

            // Thay vì .UseSqlite, hãy đổi thành .UseSqlServer
           services.AddDbContext<DataContext>(options =>
           {
               options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
           });

            return services;
        }
    }
}