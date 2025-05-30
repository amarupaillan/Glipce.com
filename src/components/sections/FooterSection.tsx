import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ui/theme-toggle";
import { LanguageToggle } from "../ui/language-toggle";
import { useTranslation } from "../../hooks/useTranslation";

export const FooterSection = (): JSX.Element => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-bold text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-primary group">
              Glipce<span className="text-primary group-hover:text-purple-600 transition-colors duration-300">.com</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Transformamos clínicas frustradas con marketing digital en negocios que atraen pacientes automáticamente. Sistema patentado con garantía de resultados.
            </p>
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
              {/* Certificación de garantía */}
              <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Garantizado</span>
              </div>
            </div>
          </div>
          
          {/* Services links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-foreground flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Sistema Glipce
            </h3>
            <ul className="space-y-3">
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link to="/#soluciones" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Automatización 24/7
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link to="/#casos" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Casos de éxito
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link to="/#garantia" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Garantía de resultados
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-foreground flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Ventajas
            </h3>
            <ul className="space-y-3">
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ahorro de tiempo
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Respuesta 24/7
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pacientes verificados
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sin riesgo financiero
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-foreground flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40 transition-colors duration-300">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:hola@glipce.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  hola@glipce.com
                </a>
              </li>
              <li className="flex items-center gap-3 group transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/40 transition-colors duration-300">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  WhatsApp directo
                </a>
              </li>
              <li className="mt-6">
                <a 
                  href="https://calendly.com/amarupaillan1966/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-primary text-white px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Agenda una llamada
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-10"></div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-6 md:mb-0">
            &copy; {currentYear} Glipce.com — Sistema Glipce: método patentado de automatización para clínicas dentales. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors text-sm hover:underline">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors text-sm hover:underline">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors text-sm hover:underline">
              Contrato de garantía
            </a>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mt-10">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}; 