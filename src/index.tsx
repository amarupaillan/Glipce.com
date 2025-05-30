import { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Desktop } from "./screens/Desktop/Desktop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Theme configuration
import { ThemeProvider } from './components/ui/theme-provider';
import { TranslationProvider } from './hooks/useTranslation';
import './assets/fonts/typography.css';

// Loading component for suspense fallback
const Loader = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center bg-background">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
    </div>
    <p className="mt-4 text-muted-foreground">Cargando Glipce...</p>
  </div>
);

// Add favicon function
function addFavicon() {
  if (!document.querySelector('link[rel="icon"]')) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/assets/images/logo.png';
    document.head.appendChild(link);
  }
}

// Add favicon when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addFavicon);
} else {
  addFavicon();
}

// App wrapper component to handle effects
const App = () => {
  useEffect(() => {
    // Add favicon when app mounts
    addFavicon();
    
    // Set theme based on user preference if not already set
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      localStorage.setItem('theme', 'dark');
    }
    
    // Add smooth scrolling behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Analytics and performance monitoring
    console.log('%cGlipce %cWebsite loaded successfully', 
      'color: #2563eb; font-size: 18px; font-weight: bold;', 
      'color: inherit; font-size: 14px;');
    
    // Prefetch common resources
    const links = [
      'https://calendly.com/amarupaillan1966/30min'
    ];
    
    links.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <TranslationProvider>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Desktop />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="https://calendly.com/amarupaillan1966/30min" />} />
          </Routes>
        </BrowserRouter>
        <Analytics debug={false} />
        <SpeedInsights />
      </ThemeProvider>
    </TranslationProvider>
  );
};

// Render the app
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>
);
