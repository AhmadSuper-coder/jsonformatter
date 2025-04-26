import { Link } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-card shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h1 className="ml-2 text-xl font-semibold text-foreground">JSON Formatter Tool</h1>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            </nav>
            
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

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium text-foreground">JSON Formatter Tool</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A free online tool to format, minify, validate, compare JSON data and convert JSON to CSV.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Features</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground">Pretty Print</a></li>
                <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground">Minify</a></li>
                <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground">Validate</a></li>
                <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground">Compare</a></li>
                <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground">JSON to CSV</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Resources</h3>
              <ul className="mt-2 space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
                <li><a href="https://github.com" target="_blank" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Legal</h3>
              <ul className="mt-2 space-y-2">
                <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} JSONFormatters.online. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}