import { useState } from "react";
import { useCopyToClipboard } from "@/hooks/use-clipboard";
import { compareJSON } from "@/utils/jsonFormatters";

interface CompareTabProps {
  showNotification: (message: string, isSuccess?: boolean) => void;
}

interface Difference {
  path: string;
  value1: any;
  value2: any;
}

const CompareTab = ({ showNotification }: CompareTabProps) => {
  const [input1, setInput1] = useState<string>(`{
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA"
  }
}`);
  const [input2, setInput2] = useState<string>(`{
  "name": "John Doe",
  "age": 31,
  "address": {
    "street": "123 Main St",
    "city": "Newtown",
    "state": "CA"
  }
}`);
  const [differences, setDifferences] = useState<Difference[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { copyToClipboard } = useCopyToClipboard();

  const handleCompareJson = () => {
    try {
      const result = compareJSON(input1, input2);
      setDifferences(result);
      setError(null);
      showNotification(
        result.length > 0 
        ? `Comparison complete! Found ${result.length} difference${result.length !== 1 ? 's' : ''}.` 
        : "No differences found. The JSON objects are identical."
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Invalid JSON";
      setError(errorMessage);
      setDifferences(null);
      showNotification(`Error comparing JSON: ${errorMessage}`, false);
    }
  };

  const handleCopyToClipboard = () => {
    if (!differences && !error) return;
    
    let content = "";
    if (error) {
      content = `Error: ${error}`;
    } else if (differences) {
      if (differences.length === 0) {
        content = "No differences found. The JSON objects are identical.";
      } else {
        content = "Differences found:\n\n";
        differences.forEach((diff, index) => {
          content += `${index + 1}. Path: ${diff.path}\n`;
          content += `   - First: ${formatValue(diff.value1)}\n`;
          content += `   - Second: ${formatValue(diff.value2)}\n\n`;
        });
      }
    }
    
    copyToClipboard(content, () => {
      showNotification("Copied to clipboard!");
    });
  };

  const handleClear = () => {
    setInput1("");
    setInput2("");
    setDifferences(null);
    setError(null);
  };

  const formatValue = (value: any): string => {
    if (value === undefined) {
      return "undefined";
    }
    return JSON.stringify(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* First JSON Input */}
      <div className="bg-card rounded-lg shadow">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-lg font-medium text-card-foreground">First JSON</h2>
        </div>
        <div className="p-4">
          <textarea
            id="compareInput1"
            className="block w-full h-64 px-3 py-2 border border-input rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-primary focus:border-primary font-mono text-sm"
            placeholder="Paste your first JSON data here..."
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
      </div>
      
      {/* Second JSON Input */}
      <div className="bg-card rounded-lg shadow">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-lg font-medium text-card-foreground">Second JSON</h2>
        </div>
        <div className="p-4">
          <textarea
            id="compareInput2"
            className="block w-full h-64 px-3 py-2 border border-input rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-primary focus:border-primary font-mono text-sm"
            placeholder="Paste your second JSON data here..."
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
      </div>
      
      {/* Comparison Controls */}
      <div className="lg:col-span-2 flex justify-center space-x-3 py-2">
        <button 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={handleCompareJson}
        >
          Compare
        </button>
        <button 
          className="inline-flex items-center px-4 py-2 border border-input text-sm font-medium rounded-md text-foreground bg-background hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      
      {/* Comparison Result */}
      <div className="lg:col-span-2 bg-card rounded-lg shadow">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-lg font-medium text-card-foreground">Comparison Result</h2>
        </div>
        <div className="p-4">
          <div 
            id="compareOutput" 
            className="block w-full h-80 px-3 py-2 bg-muted border border-input rounded-md shadow-inner overflow-auto font-mono text-sm text-foreground"
          >
            {error ? (
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded-md text-red-700 dark:text-red-400">
                Error: {error}
              </div>
            ) : differences === null ? (
              <div className="text-muted-foreground text-sm">
                Compare two JSON objects to see the differences here...
              </div>
            ) : differences.length === 0 ? (
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-md text-green-700 dark:text-green-400">
                No differences found. The JSON objects are identical.
              </div>
            ) : (
              <div className="p-3">
                <p className="font-medium text-foreground mb-3">Differences found:</p>
                <ul className="space-y-2">
                  {differences.map((diff, index) => (
                    <li key={index}>
                      <span className="font-medium">Path: </span>
                      <code className="bg-background px-1 rounded">{diff.path}</code>
                      <div className="flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0 mt-1">
                        <div className="diff-removed rounded px-2 py-1">
                          <span className="font-medium">First: </span>
                          <code>{formatValue(diff.value1)}</code>
                        </div>
                        <div className="diff-added rounded px-2 py-1">
                          <span className="font-medium">Second: </span>
                          <code>{formatValue(diff.value2)}</code>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="px-4 py-3 bg-muted flex justify-end space-x-3 rounded-b-lg">
          <button 
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleCopyToClipboard}
            disabled={!differences && !error}
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareTab;
