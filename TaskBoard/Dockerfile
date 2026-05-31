FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY TaskBoard.sln ./
COPY src/TaskBoard.Api/TaskBoard.Api.csproj src/TaskBoard.Api/
COPY src/TaskBoard.Domain/TaskBoard.Domain.csproj src/TaskBoard.Domain/
COPY src/TaskBoard.Infrastructure/TaskBoard.Infrastructure.csproj src/TaskBoard.Infrastructure/

RUN dotnet restore TaskBoard.sln

COPY src/ src/

RUN dotnet publish src/TaskBoard.Api/TaskBoard.Api.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000

ENTRYPOINT ["dotnet", "TaskBoard.Api.dll"]
