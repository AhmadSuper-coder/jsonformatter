// A simple script to help set up the project for local development
// This only needs to be run once to prepare your project for local development

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Modified Node.js version of path checking
const localDevScript = `
// Local development entry point
import { createServer } from "http";
import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import { setupVite, log } from "./server/vite.local.js";

// Get directory name using URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure we handle environment variables across platforms
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Create Express app and HTTP server
const app = express();
const server = createServer(app);

async function main() {
  try {
    // Setup Vite development server
    log("Setting up Vite development server...");
    await setupVite(app, server);
    
    // Start the server
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
      log(\`serving on port \${PORT}\`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

main();
`;

async function main() {
  try {
    console.log('Setting up local development environment...');
    await fs.writeFile(path.join(__dirname, 'local-dev-server.js'), localDevScript);
    console.log('Created local development script!');
    
    // Create a batch file for Windows users
    const batchScript = '@echo off\necho Starting JSON Formatter Tool in local mode...\nnode local-dev-server.js\npause';
    await fs.writeFile(path.join(__dirname, 'start-local.bat'), batchScript);
    
    // Create a shell script for Mac/Linux users
    const shScript = '#!/bin/bash\necho "Starting JSON Formatter Tool in local mode..."\nnode local-dev-server.js';
    await fs.writeFile(path.join(__dirname, 'start-local.sh'), shScript);
    await fs.chmod(path.join(__dirname, 'start-local.sh'), 0o755);
    
    console.log('\nSetup complete!');
    console.log('\n-------------------------------');
    console.log('To start the project locally:');
    console.log('- On Windows: Double-click start-local.bat');
    console.log('- On Mac/Linux: Run ./start-local.sh');
    console.log('- Or simply run: node local-dev-server.js');
    console.log('-------------------------------\n');
  } catch (error) {
    console.error('Error during setup:', error.message);
  }
}

main();