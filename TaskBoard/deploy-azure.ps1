# Deploy TaskBoard API to Azure App Service (Free F1)
# Prerequisites: az login

$ErrorActionPreference = "Stop"
$ResourceGroup = "rg-taskboard"
$AppName = "taskboard-xuantienbg2001"
$Location = "southeastasia"
$PlanName = "$AppName-plan"
$ProjectPath = "$PSScriptRoot\src\TaskBoard.Api"
$PublishDir = "$PSScriptRoot\..\publish-api"
$ZipPath = "$PSScriptRoot\..\api.zip"

Write-Host "Checking Azure login..."
az account show | Out-Null

Write-Host "Creating resource group (if missing)..."
az group create --name $ResourceGroup --location $Location | Out-Null

Write-Host "Creating App Service plan F1 (if missing)..."
az appservice plan create `
  --name $PlanName `
  --resource-group $ResourceGroup `
  --sku F1 `
  --is-linux 2>$null | Out-Null

Write-Host "Creating Web App (if missing)..."
az webapp create `
  --name $AppName `
  --resource-group $ResourceGroup `
  --plan $PlanName `
  --runtime "DOTNET:8" 2>$null | Out-Null

Write-Host "Publishing .NET app..."
dotnet publish $ProjectPath -c Release -o $PublishDir

if (Test-Path $ZipPath) { Remove-Item $ZipPath -Force }
Compress-Archive -Path "$PublishDir\*" -DestinationPath $ZipPath

Write-Host "Deploying zip to Azure..."
az webapp deploy `
  --resource-group $ResourceGroup `
  --name $AppName `
  --src-path $ZipPath `
  --type zip `
  --async true

Write-Host "Setting app configuration..."
az webapp config appsettings set `
  --resource-group $ResourceGroup `
  --name $AppName `
  --settings `
    ASPNETCORE_ENVIRONMENT=Production `
    WEBSITES_ENABLE_APP_SERVICE_STORAGE=true `
    Jwt__SigningKey="$([guid]::NewGuid().ToString() + [guid]::NewGuid().ToString())" | Out-Null

Write-Host ""
Write-Host "Done! API URL: https://$AppName.azurewebsites.net"
Write-Host "Swagger:    https://$AppName.azurewebsites.net/swagger"
