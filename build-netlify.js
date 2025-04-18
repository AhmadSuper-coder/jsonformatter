// Script to build the project for Netlify deployment
import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viteConfigPath = path.join(__dirname, 'vite.config.ts');
const viteConfigNetlifyPath = path.join(__dirname, 'vite.config.netlify.ts');
const viteConfigBackupPath = path.join(__dirname, 'vite.config.backup.ts');

async function main() {
  try {
    console.log('Setting up Netlify build environment...');
    
    // Backup original config
    console.log('Backing up original Vite config...');
    const originalConfig = await fs.readFile(viteConfigPath, 'utf8');
    await fs.writeFile(viteConfigBackupPath, originalConfig);
    
    // Replace with Netlify config
    console.log('Setting up Netlify Vite config...');
    const netlifyConfig = await fs.readFile(viteConfigNetlifyPath, 'utf8');
    await fs.writeFile(viteConfigPath, netlifyConfig);
    
    // Build
    console.log('Building project for Netlify...');
    execSync('npx vite build', { stdio: 'inherit' });
    
    // Restore original config
    console.log('Restoring original configuration...');
    const backupConfig = await fs.readFile(viteConfigBackupPath, 'utf8');
    await fs.writeFile(viteConfigPath, backupConfig);
    await fs.unlink(viteConfigBackupPath);

    console.log('\n✅ Build completed! Your files are ready in the dist/public directory.');
    console.log('\nTo deploy to Netlify:');
    console.log('1. Sign up for a free Netlify account if you don\'t have one');
    console.log('2. Install Netlify CLI: npm install -g netlify-cli');
    console.log('3. Run: netlify login');
    console.log('4. Run: netlify deploy --dir=dist/public');
    console.log('5. Once you verify the preview, run: netlify deploy --dir=dist/public --prod');
    
  } catch (error) {
    console.error('Error during build:', error.message);
    
    // Try to restore original config if error occurs
    try {
      console.log('Attempting to restore original configuration...');
      if (await fs.access(viteConfigBackupPath).then(() => true).catch(() => false)) {
        const backupConfig = await fs.readFile(viteConfigBackupPath, 'utf8');
        await fs.writeFile(viteConfigPath, backupConfig);
        await fs.unlink(viteConfigBackupPath);
      }
    } catch (restoreError) {
      console.error('Error restoring config:', restoreError.message);
    }
  }
}

main();