import { useState } from "react";
import JsonFormatter from "@/components/JsonFormatter";
import Layout from "@/components/Layout";

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
    <Layout>
      <div className="bg-primary/5 py-5">
        <div className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-2">
          <div className="text-center">
            <div className="inline-flex flex-wrap justify-center gap-2">
              <h1 className="text-2xl md:text-2xl font-bold text-foreground inline-block">
              JSON Formatter Tool
              </h1>,
              <h1 className="text-2xl md:text-2xl font-bold text-foreground inline-block">
              Format JSON
              </h1>,
              <h1 className="text-2xl md:text-2xl font-bold text-foreground inline-block">
              Minify JSON
              </h1>,
              <h1 className="text-2xl md:text-2xl font-bold text-foreground inline-block">
              Validate JSON
              </h1>,
              <h1 className="text-2xl md:text-2xl font-bold text-foreground inline-block">
              Compare JSON
              </h1>,
              <h1 className="text-2xl md:text-2xl font-bold text-foreground inline-block">
              Convert JSON
              </h1>
            </div>
            {/* <p className="mt-2 max-w-3xl mx-auto text-xl text-muted-foreground">
              Format, minify, validate, compare and convert JSON with our free online tool
            </p> */}
          </div>
        </div>
      </div>

      {/* <div className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder position="top" />
        </div>
      </div> */}

      <div className="flex-1">
        <div className="max-w-full mx-auto px-6 sm:px-6 lg:px-8 py-3">
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
      </div>
    </Layout>
  );
}
