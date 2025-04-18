// Add CSS for syntax highlighting
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .json-key { color: #3B82F6; }
  .json-string { color: #10B981; }
  .json-number { color: #8B5CF6; }
  .json-boolean { color: #F59E0B; }
  .json-null { color: #6B7280; }
  .diff-added { background-color: rgba(16, 185, 129, 0.2); }
  .diff-removed { background-color: rgba(239, 68, 68, 0.2); }
`;
document.head.appendChild(styleSheet);

/**
 * Format JSON string with proper indentation or minify it
 */
export function formatJSON(jsonString: string, pretty: boolean = true): string {
  try {
    // Parse the JSON string to validate and standardize
    const parsedJson = JSON.parse(jsonString);
    
    // Format with or without indentation
    return JSON.stringify(parsedJson, null, pretty ? 2 : 0);
  } catch (error) {
    throw error;
  }
}

/**
 * Apply syntax highlighting to JSON string
 */
export function syntaxHighlight(json: string): string {
  return json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      let cls = 'json-number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'json-key';
        } else {
          cls = 'json-string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'json-boolean';
      } else if (/null/.test(match)) {
        cls = 'json-null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
}

/**
 * Validate JSON string and provide detailed error information
 */
export function validateJSON(jsonString: string): {
  isValid: boolean;
  error?: {
    message: string;
    lineNumber?: number;
    columnNumber?: number;
    excerpt?: string;
  };
} {
  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Try to extract line and column information from the error message
      const errorMessage = error.message;
      let lineNumber: number | undefined;
      let columnNumber: number | undefined;
      
      // Different browsers might have different error message formats
      const positionMatch = errorMessage.match(/position\s+(\d+)/i);
      
      if (positionMatch && positionMatch[1]) {
        const position = parseInt(positionMatch[1], 10);
        
        // Calculate line and column from position
        const lines = jsonString.substring(0, position).split('\n');
        lineNumber = lines.length;
        columnNumber = lines[lines.length - 1].length + 1;
      }
      
      // Try to extract context around the error
      let excerpt: string | undefined;
      if (lineNumber && columnNumber) {
        const lines = jsonString.split('\n');
        if (lineNumber <= lines.length) {
          excerpt = lines[lineNumber - 1];
        }
      }
      
      return {
        isValid: false,
        error: {
          message: errorMessage,
          lineNumber,
          columnNumber,
          excerpt
        }
      };
    }
    
    return {
      isValid: false,
      error: {
        message: error instanceof Error ? error.message : String(error)
      }
    };
  }
}

/**
 * Compare two JSON objects and find differences
 */
export function compareJSON(jsonString1: string, jsonString2: string): Array<{
  path: string;
  value1: any;
  value2: any;
}> {
  try {
    const obj1 = JSON.parse(jsonString1);
    const obj2 = JSON.parse(jsonString2);
    
    const differences: Array<{
      path: string;
      value1: any;
      value2: any;
    }> = [];
    
    findDifferences(obj1, obj2, '', differences);
    
    return differences;
  } catch (error) {
    throw error;
  }
}

/**
 * Recursively find differences between two objects
 */
function findDifferences(
  obj1: any, 
  obj2: any, 
  path = '', 
  differences: Array<{
    path: string;
    value1: any;
    value2: any;
  }> = []
): void {
  // Different types
  if (typeof obj1 !== typeof obj2) {
    differences.push({
      path: path,
      value1: obj1,
      value2: obj2
    });
    return;
  }
  
  // Handle primitive types or null
  if (typeof obj1 !== 'object' || obj1 === null || obj2 === null) {
    if (obj1 !== obj2) {
      differences.push({
        path: path,
        value1: obj1,
        value2: obj2
      });
    }
    return;
  }
  
  // Handle arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      differences.push({
        path: path ? `${path}.length` : 'length',
        value1: obj1.length,
        value2: obj2.length
      });
    }
    
    const maxLength = Math.max(obj1.length, obj2.length);
    for (let i = 0; i < maxLength; i++) {
      findDifferences(
        obj1[i], 
        obj2[i], 
        path ? `${path}[${i}]` : `[${i}]`, 
        differences
      );
    }
    return;
  }
  
  // Handle objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  // Check for missing keys
  keys1.forEach(key => {
    if (!keys2.includes(key)) {
      differences.push({
        path: path ? `${path}.${key}` : key,
        value1: obj1[key],
        value2: undefined
      });
    }
  });
  
  keys2.forEach(key => {
    if (!keys1.includes(key)) {
      differences.push({
        path: path ? `${path}.${key}` : key,
        value1: undefined,
        value2: obj2[key]
      });
    }
  });
  
  // Check for differing values
  keys1.filter(key => keys2.includes(key)).forEach(key => {
    findDifferences(
      obj1[key], 
      obj2[key],
      path ? `${path}.${key}` : key,
      differences
    );
  });
}

/**
 * Convert JSON array to CSV format
 */
export function jsonToCsv(jsonString: string): string {
  try {
    const data = JSON.parse(jsonString);
    
    // Check if input is an array
    if (!Array.isArray(data)) {
      throw new Error('Input must be an array of objects');
    }
    
    if (data.length === 0) {
      return '';
    }
    
    // Get headers (all unique keys from all objects)
    const headers = Array.from(
      new Set(
        data.flatMap(obj => Object.keys(obj))
      )
    );
    
    // Create CSV header row
    let csv = headers.join(',') + '\n';
    
    // Create CSV data rows
    data.forEach(obj => {
      const row = headers.map(header => {
        const value = obj[header] === undefined ? '' : obj[header];
        
        // Handle commas, quotes, and newlines in values
        if (typeof value === 'string') {
          // Escape quotes with another quote
          const escaped = value.replace(/"/g, '""');
          
          // Enclose in quotes if value contains comma, quote, or newline
          return (value.includes(',') || value.includes('"') || value.includes('\n'))
            ? `"${escaped}"`
            : value;
        } else if (value === null) {
          return '';
        } else if (typeof value === 'object') {
          // For objects and arrays, use JSON string
          return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
        }
        
        return value;
      }).join(',');
      
      csv += row + '\n';
    });
    
    return csv.trim();
  } catch (error) {
    throw error;
  }
}
