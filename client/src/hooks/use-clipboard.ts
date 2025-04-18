export function useCopyToClipboard() {
  /**
   * Copy text to clipboard
   * @param text - Text to copy
   * @param onSuccess - Callback when text is successfully copied
   * @param onError - Callback when there's an error copying text
   */
  const copyToClipboard = (
    text: string, 
    onSuccess?: () => void, 
    onError?: (error: Error) => void
  ) => {
    if (!text) {
      onError?.(new Error("No text to copy"));
      return;
    }
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          onSuccess?.();
        })
        .catch(err => {
          onError?.(err);
        });
    } else {
      // Fallback for older browsers
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        
        // Make the textarea out of viewport
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        textarea.style.top = '-999999px';
        document.body.appendChild(textarea);
        
        textarea.focus();
        textarea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        
        if (successful) {
          onSuccess?.();
        } else {
          onError?.(new Error("Unable to copy to clipboard"));
        }
      } catch (err) {
        onError?.(err instanceof Error ? err : new Error("Unknown error"));
      }
    }
  };

  return { copyToClipboard };
}
