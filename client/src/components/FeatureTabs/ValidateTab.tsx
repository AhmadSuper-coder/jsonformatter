import { useState } from "react";
import { validateJSON } from "@/utils/jsonFormatters";

interface ValidateTabProps {
  showNotification: (message: string, isSuccess?: boolean) => void;
}

const ValidateTab = ({ showNotification }: ValidateTabProps) => {
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
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    error?: {
      message: string;
      lineNumber?: number;
      columnNumber?: number;
      excerpt?: string;
    };
  } | null>(null);

  const handleValidateJson = () => {
    const result = validateJSON(input);
    setValidationResult(result);
    
    if (result.isValid) {
      showNotification("JSON is valid!");
    } else {
      showNotification(`JSON is invalid: ${result.error?.message}`, false);
    }
  };

  const handleClear = () => {
    setInput("");
    setValidationResult(null);
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
            id="validateInput"
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
            onClick={handleValidateJson}
          >
            Validate
          </button>
        </div>
      </div>
      
      {/* Output Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Validation Result</h2>
        </div>
        <div className="p-4">
          <div id="validateOutput" className="block w-full h-80 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-inner overflow-auto">
            {validationResult === null ? (
              <div className="text-gray-500 text-sm">
                Validate a JSON to see the result here...
              </div>
            ) : validationResult.isValid ? (
              <div className="flex items-center p-3 bg-green-50 rounded-md">
                <svg className="h-5 w-5 text-success" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2 text-green-700">JSON is valid!</span>
              </div>
            ) : (
              <div className="flex items-start p-3 bg-red-50 rounded-md">
                <svg className="h-5 w-5 text-error" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="ml-2">
                  <span className="text-red-700 font-medium">JSON is invalid</span>
                  <p className="text-red-600 text-sm mt-1">{validationResult.error?.message}</p>
                  {validationResult.error?.lineNumber && (
                    <p className="text-red-600 text-sm mt-1">
                      Line: {validationResult.error.lineNumber}, Column: {validationResult.error.columnNumber}
                    </p>
                  )}
                  {validationResult.error?.excerpt && (
                    <pre className="mt-2 p-2 bg-red-100 rounded text-red-800 text-xs overflow-auto">
                      <code>{validationResult.error.excerpt}</code>
                    </pre>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidateTab;
