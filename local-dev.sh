#!/bin/bash
# Script to run the project locally

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js to continue."
    exit 1
fi

# Check if NPM is installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install npm to continue."
    exit 1
fi

# Move the local Vite config to the main config temporarily
echo "Setting up local development environment..."
cp vite.config.local.ts vite.config.tmp.ts
cp vite.config.ts vite.config.backup.ts
cp vite.config.tmp.ts vite.config.ts

# Run the development server
echo "Starting development server..."
NODE_ENV=development tsx server/index.ts

# Clean up - restore original config
echo "Cleaning up..."
cp vite.config.backup.ts vite.config.ts
rm vite.config.backup.ts
rm vite.config.tmp.ts

echo "Done!"