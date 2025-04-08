import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Desktop } from "./screens/Desktop/Desktop";
import ContactPage from "./pages/contacto";

// Service pages
import AutomatizacionProcesosPage from "./pages/servicios/automatizacion-procesos";
import { InteligenciaNegocioPage } from "./pages/servicios/inteligencia-negocio";
import { SoporteClienteIAPage } from "./pages/servicios/soporte-cliente-ia";
import { GestionFacturasPage } from "./pages/servicios/gestion-facturas";
import { SocialMediaViralManagementPage } from "./pages/servicios/social-media-viral-management";

// Company pages
import SobreNosotrosPage from "./pages/empresa/sobre-nosotros";
import ExitoPage from "./pages/empresa/casos-exito";

// Blog pages
import BlogPage from "./pages/blog/index";
import BlogArticle from "./pages/blog/article";

// i18n configuration
import './lib/i18n';

// Loading component for suspense fallback
const Loader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Desktop />} />
          
          {/* Servicios routes */}
          <Route path="/servicios" element={<Navigate to="/" />} />
          <Route path="/servicios/automatizacion-procesos" element={<AutomatizacionProcesosPage />} />
          <Route path="/servicios/inteligencia-negocio" element={<InteligenciaNegocioPage />} />
          <Route path="/servicios/soporte-cliente-ia" element={<SoporteClienteIAPage />} />
          <Route path="/servicios/gestion-facturas" element={<GestionFacturasPage />} />
          <Route path="/servicios/social-media-viral-management" element={<SocialMediaViralManagementPage />} />
          
          {/* Redirect from old page to new page */}
          <Route path="/servicios/consultoria-estrategica" element={<Navigate to="/servicios/social-media-viral-management" replace />} />
          
          {/* Empresa routes */}
          <Route path="/empresa" element={<Navigate to="/empresa/sobre-nosotros" />} />
          <Route path="/empresa/sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="/empresa/casos-exito" element={<ExitoPage />} />
          
          {/* Updated routes for the blog section */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          
          {/* Legacy routes for backward compatibility */}
          <Route path="/recursos/blog" element={<Navigate to="/blog" replace />} />
          <Route path="/recursos/blog/:slug" element={<Navigate to="/blog/:slug" replace />} />
          <Route path="/recursos" element={<Navigate to="/blog" />} />
          
          {/* Contact page */}
          <Route path="/contacto" element={<ContactPage />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
);
