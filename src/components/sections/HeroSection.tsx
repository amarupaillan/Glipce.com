import React from "react";
import { Button } from "../ui/button";
import { useTranslation } from "../../hooks/useTranslation";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-blue-50/20 dark:to-blue-950/10 z-0"></div>
      
      {/* Background pattern with WhatsApp mockup overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-[url('/assets/images/hero/whatsapp-mockup-bg.png')] bg-no-repeat bg-right-top bg-contain opacity-5 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-10 md:right-40 w-32 h-32 md:w-64 md:h-64 bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 left-10 md:left-40 w-32 h-32 md:w-64 md:h-64 bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-3xl z-0"></div>

      {/* Clinical scene instead of floating decorative items */}
      <div className="absolute top-1/4 right-5 md:right-20 w-32 h-32 md:w-56 md:h-56 z-0 opacity-60">
        <img src="/assets/images/hero/doctor-with-phone.png" alt="Doctora con celular" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-1/4 left-5 md:left-20 w-32 h-32 md:w-56 md:h-56 z-0 opacity-60">
        <img src="/assets/images/hero/appointment-calendar.png" alt="Calendario de citas" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content - Left side */}
          <div className="lg:w-3/5 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0 mx-auto">
            {/* Pre-heading badge */}
            <div className="inline-block mb-6 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-blue-700 dark:text-blue-300 text-sm font-semibold">
                Para clínicas dentales que buscan <strong className="text-shimmer">pacientes</strong>, no likes
              </span>
            </div>
            
            {/* Main Heading - Sin animación de rotación */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                ¿Tu clínica recibe likes, pero necesita <strong className="text-shimmer">pacientes</strong>?
              </h1>
            </div>
            
            {/* Sub-heading with key value proposition */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
              <strong className="text-blue-600 dark:text-blue-400">Contenido audiovisual de calidad profesional</strong> que atrae a <strong className="text-shimmer">pacientes reales</strong>, 
              no solo seguidores. Grabamos, editamos y publicamos por ti mientras tú atiendes tu clínica.
            </p>
            
            {/* Action buttons with hover effects and pulse animation for CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-900/20 px-8 py-6 text-lg font-semibold hover:opacity-90 transition-all w-full sm:w-auto transform hover:translate-y-[-2px] hover:shadow-xl animate-pulse-subtle relative overflow-hidden"
                onClick={() => window.open("https://calendly.com/amarupaillan1966/30min", '_blank')}
              >
                <span className="relative z-10">Quiero <strong>videos</strong> que atraigan <strong>pacientes</strong></span>
                <span className="absolute inset-0 bg-white/20 animate-glow"></span>
              </Button>
              <Button 
                variant="outline" 
                className="bg-background border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg font-semibold transition-all w-full sm:w-auto transform hover:translate-y-[-2px]"
                onClick={() => {
                  const targetElement = document.getElementById('soluciones');
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ver producción audiovisual
              </Button>
            </div>
            
            {/* Trust badges / Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Producción <strong className="text-blue-600 dark:text-blue-400">profesional</strong>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Grabación y edición de alta calidad
                </p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Garantía de <strong className="text-shimmer">resultados</strong>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  O te devolvemos tu dinero
                </p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                  ROI <strong className="text-blue-600 dark:text-blue-400">medible</strong>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Incremento promedio: <strong className="text-shimmer">+40% de citas</strong>
                </p>
              </div>
            </div>
          </div>
          
          {/* Hero image - Right side */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              {/* Main image with animation */}
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 border-4 border-white dark:border-gray-800">
                <img 
                  src="/assets/images/hero/video-production.jpg" 
                  alt="Producción de video en clínica dental" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating card 1 - Production notification */}
              <div className="absolute -left-10 top-1/4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl animate-float-slow transform hover:translate-y-[-5px] transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Video producido</p>
                    <p className="text-sm font-semibold"><strong className="text-shimmer">120K</strong> visualizaciones</p>
                  </div>
                </div>
              </div>
              
              {/* Floating card 2 - Stats */}
              <div className="absolute -right-5 bottom-1/4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl animate-float transform hover:translate-y-[-5px] transition-transform duration-300">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Nuevos pacientes</p>
                  <p className="text-2xl font-bold text-blue-600"><strong className="text-shimmer">+47</strong></p>
                  <div className="flex items-center justify-center gap-1 text-green-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-xs font-medium"><strong>68%</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 