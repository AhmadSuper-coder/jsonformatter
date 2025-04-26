
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
      log(`serving on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

main();
