# JSON Formatter Tool

A comprehensive, free online JSON formatter tool with pretty print, minification, validation, comparison, and CSV conversion features.

## Features

- **Pretty Print**: Format JSON with proper indentation and syntax highlighting
- **Minify**: Compress JSON by removing whitespace
- **Validate**: Check JSON for syntax errors with detailed feedback
- **Compare**: View differences between two JSON objects
- **JSON to CSV**: Convert JSON arrays to CSV format

## Live Demo

Visit [https://jsonformatter.replit.app](https://jsonformatter.replit.app) to see the tool in action.

## Local Development

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (comes with Node.js)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/json-formatter-tool.git
   cd json-formatter-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the setup script to prepare for local development:
   ```bash
   node local-setup.js
   ```

4. Start the application using one of these methods:
   ```bash
   # Method 1 - Using the simple script:
   node local-dev-server.js
   
   # Method 2 - For Windows users:
   # Double-click start-local.bat
   
   # Method 3 - For Mac/Linux users:
   ./start-local.sh
   ```

The application will be available at http://localhost:5000

### Project Structure

- `client/` - Frontend React application
- `server/` - Backend Express server
- `shared/` - Shared types and schemas
- `local-setup.js` - Setup script for local development
- `local-dev-server.js` - Generated script for running locally
- `start-local.bat`/`start-local.sh` - Startup scripts for Windows/Mac/Linux
- `build-netlify.js` - Build script for Netlify deployment
- `netlify.toml` - Configuration file for Netlify
- `vite.config.netlify.ts` - Specialized Vite config for Netlify builds

## SEO Features

This application is optimized for search engines with:

- Comprehensive meta tags
- Semantic HTML
- Structured content with proper headings
- Responsive design for all devices
- Fast loading time and optimized performance
- Sitemap and robots.txt for search engine crawlers

## Deployment

### Replit Deployment
The application is configured for easy deployment on Replit. Simply click the "Deploy" button in the Replit interface.

### Netlify Deployment (Free)
You can deploy this application for free on Netlify by following these steps:

1. Build the project for Netlify:
   ```bash
   node build-netlify.js
   ```

2. Install the Netlify CLI if you haven't already:
   ```bash
   npm install -g netlify-cli
   ```

3. Log in to your Netlify account (or create one if you don't have it):
   ```bash
   netlify login
   ```

4. Deploy a preview version:
   ```bash
   netlify deploy --dir=dist/public
   ```

5. Once you verify that the preview looks good, deploy to production:
   ```bash
   netlify deploy --dir=dist/public --prod
   ```

This will give you a free hosted version of your JSON Formatter Tool with a Netlify subdomain. You can also configure your own custom domain in the Netlify dashboard.

## License

MIT