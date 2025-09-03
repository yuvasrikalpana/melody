Write-Host "🚀 Starting Samosa Application..." -ForegroundColor Green
Write-Host ""

Write-Host "📡 Starting Backend Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run server" -WindowStyle Normal

Write-Host "Waiting for backend to start..." -ForegroundColor Gray
Start-Sleep -Seconds 3

Write-Host "🌐 Starting Frontend Development Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "✅ Both servers are starting..." -ForegroundColor Green
Write-Host "📡 Backend: http://localhost:5000" -ForegroundColor Cyan
Write-Host "🌐 Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to close this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
