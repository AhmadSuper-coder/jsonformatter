import { useState } from "react";
import { useCopyToClipboard } from "@/hooks/use-clipboard";
import { formatJSON, syntaxHighlight } from "@/utils/jsonFormatters";

interface PrettyPrintTabProps {
  showNotification: (message: string, isSuccess?: boolean) => void;
}

const PrettyPrintTab = ({ showNotification }: PrettyPrintTabProps) => {
  const [input, setInput] = useState<string>(`{
  "name": "John Doe",
  "age": 30,
  "isEmployed": true,
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA"
  },
  "hobbies": ["reading", "hiking", "coding"]
}`);
  const [output, setOutput] = useState<string>("");
  const [formattedHtml, setFormattedHtml] = useState<string>("");
  const { copyToClipboard } = useCopyToClipboard();

  const handleFormatJson = () => {
    try {
      const formatted = formatJSON(input, true);
      setOutput(formatted);
      setFormattedHtml(syntaxHighlight(formatted));
      showNotification("JSON formatted successfully!");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Invalid JSON";
      setOutput(`Error: ${errorMessage}`);
      setFormattedHtml(`<span class="text-error">Error: ${errorMessage}</span>`);
      showNotification(`Invalid JSON: ${errorMessage}`, false);
    }
  };

  const handleCopyToClipboard = () => {
    copyToClipboard(output, () => {
      showNotification("Copied to clipboard!");
    });
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setFormattedHtml("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Input Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Input JSON</h2>
        </div>
        <div className="p-4">
          <textarea
            id="jsonInput"
            className="block w-full h-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary font-mono text-sm"
            placeholder="Paste your JSON data here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="px-4 py-3 bg-gray-50 flex justify-end space-x-3 rounded-b-lg">
          <button 
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleClear}
          >
            Clear
          </button>
          <button 
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleFormatJson}
          >
            Format
          </button>
        </div>
      </div>
      
      {/* Output Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Formatted JSON</h2>
        </div>
        <div className="p-4">
          <pre 
            id="jsonOutput" 
            className="block w-full h-80 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-inner overflow-auto font-mono text-sm"
            dangerouslySetInnerHTML={{ __html: formattedHtml || "Format a JSON to see the result here..." }}
          />
        </div>
        <div className="px-4 py-3 bg-gray-50 flex justify-end space-x-3 rounded-b-lg">
          <button 
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleCopyToClipboard}
            disabled={!output}
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrettyPrintTab;
