import { useState } from "react";
import { useCopyToClipboard } from "@/hooks/use-clipboard";
import { jsonToCsv } from "@/utils/jsonFormatters";

interface JsonToCsvTabProps {
  showNotification: (message: string, isSuccess?: boolean) => void;
}

const JsonToCsvTab = ({ showNotification }: JsonToCsvTabProps) => {
  const [input, setInput] = useState<string>(`[
  {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
  },
  {
    "name": "Jane Smith",
    "age": 25,
    "city": "Los Angeles"
  },
  {
    "name": "Bob Johnson",
    "age": 40,
    "city": "Chicago"
  }
]`);
  const [output, setOutput] = useState<string>("");
  const { copyToClipboard } = useCopyToClipboard();

  const handleConvertToCsv = () => {
    try {
      const csv = jsonToCsv(input);
      setOutput(csv);
      showNotification("Converted to CSV successfully!");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Invalid JSON";
      setOutput(`Error: ${errorMessage}`);
      showNotification(`Error converting to CSV: ${errorMessage}`, false);
    }
  };

  const handleCopyToClipboard = () => {
    copyToClipboard(output, () => {
      showNotification("Copied to clipboard!");
    });
  };

  const handleDownloadCsv = () => {
    if (!output || output.startsWith('Error:')) {
      showNotification('No valid CSV to download', false);
      return;
    }
    
    const blob = new Blob([output], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('CSV downloaded!');
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Input Section */}
      <div className="bg-card rounded-lg shadow">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-lg font-medium text-card-foreground">Input JSON</h2>
        </div>
        <div className="p-4">
          <textarea
            id="csvInput"
            className="block w-full h-80 px-3 py-2 border border-input rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-primary focus:border-primary font-mono text-sm"
            placeholder="Paste your JSON data here (array of objects)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="px-4 py-3 bg-muted flex justify-end space-x-3 rounded-b-lg">
          <button 
            className="inline-flex items-center px-3 py-2 border border-input text-sm leading-4 font-medium rounded-md text-foreground bg-background hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleClear}
          >
            Clear
          </button>
          <button 
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleConvertToCsv}
          >
            Convert to CSV
          </button>
        </div>
      </div>
      
      {/* Output Section */}
      <div className="bg-card rounded-lg shadow">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-lg font-medium text-card-foreground">CSV Output</h2>
        </div>
        <div className="p-4">
          <pre 
            id="csvOutput" 
            className="block w-full h-80 px-3 py-2 bg-muted border border-input rounded-md shadow-inner overflow-auto font-mono text-sm text-foreground"
          >
            {output || "Convert a JSON to CSV to see the result here..."}
          </pre>
        </div>
        <div className="px-4 py-3 bg-muted flex justify-end space-x-3 rounded-b-lg">
          <button 
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleCopyToClipboard}
            disabled={!output}
          >
            Copy to Clipboard
          </button>
          <button 
            className="inline-flex items-center px-3 py-2 border border-input text-sm leading-4 font-medium rounded-md text-foreground bg-background hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleDownloadCsv}
            disabled={!output || output.startsWith('Error:')}
          >
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default JsonToCsvTab;
