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
  <div className="w-full h-screen flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

// Add favicon function
function addFavicon() {
  if (!document.querySelector('link[rel="icon"]')) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/favicon.ico';
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
  }, []);

  return (
    <TranslationProvider>
      <ThemeProvider defaultTheme="dark">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Desktop />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="https://calendly.com/amarupaillan1966/30min" />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
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
