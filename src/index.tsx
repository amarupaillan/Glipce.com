import { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Desktop } from "./screens/Desktop/Desktop";
import ContactPage from "./pages/contacto";
import ServiciosPage from "./pages/servicios";
import PlanesPage from "./pages/planes";
import { Analytics } from "@vercel/analytics/react";

// Theme configuration
import { ThemeProvider } from './components/ui/theme-provider';
import { TranslationProvider } from './hooks/useTranslation';
import { inter, injectInterFont, calsans, injectCalSansFont } from './fonts';

// Loading component for suspense fallback
const Loader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

// Inject Google Fonts
injectInterFont();
injectCalSansFont();

// Aplica la fuente Inter al estilo global
const fontStyles = `
:root {
  --font-inter: "Inter Tight", Sans-serif;
  --font-calsans: ${calsans.style.fontFamily};
}

body {
  font-family: "Inter Tight", Sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Inter Tight", Sans-serif;
}
`;

// Insertar estilos en el documento
const injectStyles = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = fontStyles;
  document.head.appendChild(styleElement);
};

// Ejecutar después de que el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectStyles);
} else {
  injectStyles();
}

// Add favicon
const addFavicon = () => {
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.setAttribute('rel', 'shortcut icon');
  link.setAttribute('href', '/favicon.ico');
  document.head.appendChild(link);
};

// Add favicon when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addFavicon);
} else {
  addFavicon();
}

// App wrapper component to handle effects
const App = () => {
  useEffect(() => {
    // This ensures the font is injected when the app mounts
    injectInterFont();
    injectCalSansFont();
    injectStyles();
    addFavicon();
  }, []);

  return (
    <TranslationProvider>
      <ThemeProvider defaultTheme="system">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Desktop />} />
            
            {/* Servicios page */}
            <Route path="/servicios" element={<ServiciosPage />} />
            
            {/* Planes page */}
            <Route path="/planes" element={<PlanesPage />} />
            
            {/* Contact page */}
            <Route path="/contacto" element={<ContactPage />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="https://calendly.com/amarupaillan1966/30min" />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </ThemeProvider>
    </TranslationProvider>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>,
);
