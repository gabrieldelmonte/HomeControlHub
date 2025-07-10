#!/bin/bash

# Simple setup script for HomeControlHub Backend-Frontend Integration Test

echo "🏠 HomeControlHub - Backend & Frontend Integration Setup"
echo "======================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the src directory"
    exit 1
fi

echo ""
echo "📦 Step 1: Building backend..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Backend build failed"
    exit 1
fi

echo "✅ Backend built successfully"

echo ""
echo "🎨 Step 2: Building frontend..."
npm run build:ui

if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed"
    exit 1
fi

echo "✅ Frontend built successfully"

echo ""
echo "🚀 Step 3: Starting development servers..."
echo ""
echo "To start the integrated application:"
echo "1. Start backend: npm run start (runs on port 8080)"
echo "2. Start frontend: npm run dev:ui (runs on port 3000 with proxy to backend)"
echo ""
echo "📝 Integration Summary:"
echo "- ✅ Backend updated to handle email-based authentication"
echo "- ✅ User model extended with email field"
echo "- ✅ AuthController updated for email login/register"
echo "- ✅ Frontend updated to make real API calls"
echo "- ✅ Proxy configuration: Frontend (3000) -> Backend (8080)"
echo ""
echo "🔑 Test Credentials (when database is set up):"
echo "- Admin: admin@smarthome.com / Admin@1234"
echo "- User: user@smarthome.com / User@1234"
echo ""
echo "⚠️  Note: Database needs to be running for full functionality"
echo "Run 'docker compose up db -d' in docker/compose/ directory to start database"
