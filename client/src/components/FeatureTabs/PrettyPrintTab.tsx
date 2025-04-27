import { useState, useRef } from "react";
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
  const outputRef = useRef<HTMLPreElement>(null);

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

  // Resize logic for the output area
  const handleResize = (e: React.MouseEvent) => {
    if (outputRef.current) {
      const initialHeight = outputRef.current.clientHeight;
      const initialY = e.clientY;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newHeight = initialHeight + (moveEvent.clientY - initialY);
        if (newHeight > 100) {
          outputRef.current.style.height = `${newHeight}px`;
        }
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
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
            id="jsonInput"
            className="block w-full h-80 px-3 py-2 border border-input rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-primary focus:border-primary font-mono text-sm"
            placeholder="Paste your JSON data here..."
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
            onClick={handleFormatJson}
          >
            Format
          </button>
        </div>
      </div>
      
      {/* Output Section */}
      <div className="bg-card rounded-lg shadow relative">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-lg font-medium text-card-foreground">Formatted JSON</h2>
        </div>
        <div className="p-4">
          <pre
            ref={outputRef}
            id="jsonOutput"
            className="block w-full h-80 px-3 py-2 bg-muted border border-input rounded-md shadow-inner overflow-auto font-mono text-sm"
            dangerouslySetInnerHTML={{ __html: formattedHtml || "Format a JSON to see the result here..." }}
          />
        </div>
        {/* Resize Handle */}
        <div
          className="absolute bottom-0 left-0 w-full h-6 bg-gray-400 cursor-ns-resize"
          onMouseDown={handleResize}
        />
        <div className="px-4 py-3 bg-muted flex justify-end space-x-3 rounded-b-lg">
          <button 
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
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
