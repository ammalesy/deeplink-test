#!/bin/bash

echo "🚀 Starting deployment process..."

# Initialize git repository if not exists
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Apple Universal Link to production"

echo "✅ Project is ready for deployment!"
echo ""
echo "📋 Next steps:"
echo "1. Create a GitHub repository"
echo "2. Add remote origin:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo "3. Push to GitHub:"
echo "   git push -u origin main"
echo "4. Go to vercel.com and connect your GitHub repository"
echo ""
echo "🌐 Alternative deployment options:"
echo "• Netlify: Drag & drop the 'out' folder to netlify.com"
echo "• Firebase: Run 'firebase init hosting' and 'firebase deploy'"
echo "• GitHub Pages: Enable Pages in repository settings"
echo ""
echo "🔍 After deployment, test your Universal Link:"
echo "https://YOUR_DOMAIN/.well-known/apple-app-site-association"
