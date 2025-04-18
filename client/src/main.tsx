import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom CSS for JSON syntax highlighting
import "./utils/jsonFormatters";

createRoot(document.getElementById("root")!).render(<App />);
