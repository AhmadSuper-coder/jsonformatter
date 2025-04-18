// Script to run the project locally
import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vite config files
const viteConfigPath = path.join(__dirname, 'vite.config.ts');
const viteConfigLocalPath = path.join(__dirname, 'vite.config.local.ts');
const viteConfigBackupPath = path.join(__dirname, 'vite.config.backup.ts');

// Server vite files
const serverVitePath = path.join(__dirname, 'server', 'vite.ts');
const serverViteLocalPath = path.join(__dirname, 'server', 'vite.local.ts');
const serverViteBackupPath = path.join(__dirname, 'server', 'vite.backup.ts');

async function main() {
  try {
    console.log('Setting up local development environment...');
    
    // Backup and replace vite.config.ts
    console.log('Configuring Vite...');
    const originalConfig = await fs.readFile(viteConfigPath, 'utf8');
    await fs.writeFile(viteConfigBackupPath, originalConfig);
    
    const localConfig = await fs.readFile(viteConfigLocalPath, 'utf8');
    await fs.writeFile(viteConfigPath, localConfig);
    
    // Backup and replace server/vite.ts
    console.log('Configuring server...');
    const originalServerVite = await fs.readFile(serverVitePath, 'utf8');
    await fs.writeFile(serverViteBackupPath, originalServerVite);
    
    const localServerVite = await fs.readFile(serverViteLocalPath, 'utf8');
    await fs.writeFile(serverVitePath, localServerVite);
    
    // Set up cross-platform command
    const isWindows = process.platform === 'win32';
    const startCommand = isWindows 
      ? 'set NODE_ENV=development && npx tsx server/index.ts'
      : 'NODE_ENV=development npx tsx server/index.ts';
    
    console.log('Starting development server...');
    try {
      execSync(startCommand, { stdio: 'inherit' });
    } catch (error) {
      // The server might be terminated with Ctrl+C, which throws an error
      console.log('Server stopped.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    try {
      // Restore original configs
      console.log('Restoring original configurations...');
      
      // Restore vite.config.ts
      const backupConfig = await fs.readFile(viteConfigBackupPath, 'utf8');
      await fs.writeFile(viteConfigPath, backupConfig);
      await fs.unlink(viteConfigBackupPath);
      
      // Restore server/vite.ts
      const backupServerVite = await fs.readFile(serverViteBackupPath, 'utf8');
      await fs.writeFile(serverVitePath, backupServerVite);
      await fs.unlink(serverViteBackupPath);
      
      console.log('Done!');
    } catch (restoreError) {
      console.error('Error restoring configs:', restoreError.message);
    }
  }
}

main();