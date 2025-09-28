@echo off
echo Cleaning up old TypeScript files...

REM Remove old .tsx files
del /q "client\App.tsx" 2>nul
del /q "client\components\*.tsx" 2>nul
del /q "client\pages\*.tsx" 2>nul
del /q "client\hooks\*.tsx" 2>nul
del /q "client\hooks\use-toast.ts" 2>nul

REM Remove TypeScript config files
del /q "tsconfig.json" 2>nul
del /q "vite.config.ts" 2>nul
del /q "tailwind.config.ts" 2>nul
del /q "vite.config.server.ts" 2>nul

REM Remove vite-env.d.ts
del /q "client\vite-env.d.ts" 2>nul

REM Remove TypeScript files from lib
del /q "client\lib\*.ts" 2>nul

echo Cleanup completed!
echo.
echo Your project has been converted from TypeScript to JSX!
echo.
echo Next steps:
echo 1. Run: npm install (to update dependencies)
echo 2. Run: npm run dev (to start development server)
echo.
echo Note: UI components in client/components/ui/ are kept as .tsx
echo They will work with your JSX project.
echo.
pause