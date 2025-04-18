import { useState } from "react";
import JsonFormatter from "@/components/JsonFormatter";
import { ThemeToggle } from "@/components/ThemeToggle";

// This component will be used for AdSense placements
const AdPlaceholder = ({ position }: { position: 'top' | 'bottom' | 'sidebar' }) => {
  // When you get your AdSense code, replace this component with actual AdSense code
  return (
    <div className={`ad-placeholder ad-${position} border border-dashed border-muted-foreground/30 rounded-md bg-background/50 p-3 flex items-center justify-center h-full min-h-[90px] text-center text-muted-foreground text-sm`}>
      <p>Ad Space - {position}</p>
    </div>
  );
};

export default function Home() {
  const [showFullContent, setShowFullContent] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-card shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h1 className="ml-2 text-xl font-semibold text-foreground">JSON Formatter Tool</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-primary/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              JSON Formatter Tool
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-muted-foreground">
              Format, minify, validate, compare and convert JSON with our free online tool
            </p>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder position="top" />
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="w-full">
            <JsonFormatter />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">About our JSON Formatter Tool</h2>
            <div className={`prose dark:prose-invert max-w-none ${!showFullContent && 'line-clamp-4'}`}>
              <p>
                Our free online JSON Formatter provides a simple way to format, beautify, minify, validate, and analyze your JSON data. Whether you're a developer working with APIs, databases, or configuration files, our tool makes it easy to work with JSON.
              </p>
              <h3>Key Features:</h3>
              <ul>
                <li><strong>Pretty Print:</strong> Format your JSON with proper indentation and syntax highlighting for better readability.</li>
                <li><strong>Minify:</strong> Remove all whitespace from your JSON to reduce file size for production use.</li>
                <li><strong>Validate:</strong> Check if your JSON is valid with detailed error messages if issues are found.</li>
                <li><strong>Compare:</strong> See the differences between two JSON objects side by side.</li>
                <li><strong>JSON to CSV:</strong> Convert JSON arrays to CSV format for use in spreadsheet applications.</li>
              </ul>
              <p>
                All processing happens in your browser, so your data never leaves your computer. Use our tool with confidence for sensitive data.
              </p>
              <h3>Why Use Our JSON Formatter?</h3>
              <ul>
                <li>Fast and responsive interface</li>
                <li>Works on all devices (desktop, tablet, mobile)</li>
                <li>Both light and dark themes available</li>
                <li>No registration or sign-up required</li>
                <li>Completely free to use</li>
              </ul>
              <p>Whether you're debugging an API response, cleaning up a configuration file, or just trying to understand JSON data better, our JSON Formatter Tool has you covered.</p>
            </div>
            {!showFullContent && (
              <button 
                onClick={() => setShowFullContent(true)}
                className="mt-2 text-primary hover:text-primary/90 text-sm font-medium"
              >
                Read more
              </button>
            )}
          </div>
        </div>

        <div className="py-4 mb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdPlaceholder position="bottom" />
          </div>
        </div>
      </main>

      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium text-foreground">JSON Formatter Tool</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A free online tool to format, minify, validate, compare JSON data and convert JSON to CSV.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Home</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Feedback</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Legal</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} JSON Formatter Tool. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
