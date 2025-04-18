import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // The application is completely client-side, no API routes required
  const httpServer = createServer(app);
  return httpServer;
}
