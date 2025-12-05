#!/bin/bash

# Blackjack Java Game Deployment Script
echo "🚀 Deploying Blackjack Java Game to Render..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Blackjack Java game with portfolio-matched design"

# Set remote origin (update with your actual repository URL)
echo "🔗 Setting up remote repository..."
echo "Please update the repository URL in this script before running!"

# Uncomment and update the following line with your actual repository URL:
# git remote add origin https://github.com/tobiasrogerhammer/blackjack-java.git

# Push to repository
echo "📤 Pushing to repository..."
echo "Please run the following commands manually:"
echo "1. git remote add origin https://github.com/tobiasrogerhammer/blackjack-java.git"
echo "2. git push -u origin master"
echo ""
echo "Then go to render.com and create a new Blueprint with your repository!"

echo "✅ Deployment files ready!"
echo "📋 Next steps:"
echo "1. Upload files to GitHub repository: tobiasrogerhammer/blackjack-java"
echo "2. Go to render.com and create Blueprint"
echo "3. Connect your repository and deploy"
echo "4. Update your portfolio with the live URL"
