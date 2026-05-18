# Sử dụng .NET SDK để build ứng dụng (Ví dụ này dùng .NET 8.0, nếu bạn dùng bản khác như 6.0 hay 7.0 thì sửa số lại nhé)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

# Sao chép các file dự án và khôi phục (restore) các thư viện
COPY *.sln ./
COPY *.csproj ./
RUN dotnet restore

# Sao chép toàn bộ code và build
COPY . ./
RUN dotnet publish -c Release -o out

# Tạo ảnh chạy (runtime image) nhẹ hơn
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /app/out .

# Render yêu cầu ứng dụng lắng nghe qua cổng được cấp bởi biến môi trường $PORT
ENV ASPNETCORE_URLS=http://+:10000

ENTRYPOINT ["dotnet", API.csproj]