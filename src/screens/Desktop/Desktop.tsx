import React from "react";
import { Header } from "../../components/sections/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { CtaSection } from "../../components/sections/CtaSection";
import { FooterSection } from "../../components/sections/FooterSection";
import { useTranslation } from "../../hooks/useTranslation";
import { Button } from "../../components/ui/button";

export const Desktop = (): JSX.Element => {
  const { t } = useTranslation();

  // Retrieve array translations and check if they are actually arrays
  const painPoints = t("dentalClinic.problems.painPoints");
  const automatedSolutionDescription = t("dentalClinic.howWeWork.automatedSolutionDescription");
  const funnelPhases = t("dentalClinic.howWeWork.funnelPhases");

  const isPainPointsArray = Array.isArray(painPoints);
  const isAutomatedSolutionDescriptionArray = Array.isArray(automatedSolutionDescription);
  const isFunnelPhasesArray = Array.isArray(funnelPhases);

  // Testimonials array translation check (used directly in JSX)
  const testimonials = t("dentalClinic.cases.testimonials");
  const isTestimonialsArray = Array.isArray(testimonials);
  
  // Efecto para manejar el botón de mutear/desmutear video
  React.useEffect(() => {
    const videoElement = document.getElementById('calendarVideo') as HTMLVideoElement;
    const toggleButton = document.getElementById('toggleMute');
    const muteIcon = document.querySelector('.mute-icon');
    const unmuteIcon = document.querySelector('.unmute-icon');
    
    if (videoElement && toggleButton && muteIcon && unmuteIcon) {
      toggleButton.addEventListener('click', () => {
        videoElement.muted = !videoElement.muted;
        
        if (videoElement.muted) {
          muteIcon.classList.add('hidden');
          unmuteIcon.classList.remove('hidden');
        } else {
          muteIcon.classList.remove('hidden');
          unmuteIcon.classList.add('hidden');
        }
      });
    }
    
    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col overflow-hidden bg-background text-foreground">
      <Header />
      <HeroSection />
      {/* Sistema Glipce - Nueva sección simplificada */}
      <section id="soluciones" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20 z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        {/* Decorative elements */}        
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl z-0"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl z-0"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
              Creamos <strong>videos virales</strong> que llenan tu agenda de <strong>pacientes</strong>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Producimos y publicamos <strong>contenido profesional</strong> que convierte: grabamos, editamos y hacemos los anuncios por ti mientras tú atiendes a tus pacientes.
            </p>
          </div>
          
          {/* Proceso Simple de 3 Pasos con línea conectora */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-20 relative">
            {/* Línea conectora animada para desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-4 z-0">
              <svg className="w-full h-16" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M0,50 C150,20 250,80 500,50 C750,20 850,80 1000,50" 
                  stroke="url(#gradient)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  className="animate-flow-line"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Paso 1: Producción de video */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900/30 flex flex-col items-center transition-transform hover:translate-y-[-5px] relative z-10">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border-2 border-blue-200">
                <img 
                  src="/assets/images/process/video-recording.jpg" 
                  alt="Grabación profesional en clínica" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                <strong>Grabamos</strong> en tu clínica
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nuestro equipo profesional captura <strong>contenido audiovisual</strong> de alta calidad directamente en tus instalaciones.
              </p>
              
              {/* Visualización de producción de video */}
              <div className="mt-auto w-full h-44 md:h-52 rounded-lg overflow-hidden">
                <img 
                  src="/assets/images/process/camera-crew.jpg" 
                  alt="Equipo de grabación profesional" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Indicador de paso - solo móvil */}
              <div className="flex justify-center mt-4 md:hidden">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            
            {/* Paso 2: Edición profesional */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900/30 flex flex-col items-center transition-transform hover:translate-y-[-5px] relative z-10">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border-2 border-purple-200">
                <img 
                  src="/assets/images/process/video-editing.jpg" 
                  alt="Edición profesional de video" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                <strong>Editamos</strong> y optimizamos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Transformamos el material en <strong>contenido atractivo</strong> diseñado para convertir visualizaciones en <strong>pacientes reales</strong>.
              </p>
              
              {/* Visualización de edición de video */}
              <div className="mt-auto w-full max-w-full h-44 md:h-52 bg-gray-100 dark:bg-gray-700 rounded-lg p-2 overflow-hidden">
                <img 
                  src="/assets/images/process/editing-timeline.jpg" 
                  alt="Línea de tiempo de edición" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
              {/* Indicador de paso - solo móvil */}
              <div className="flex justify-center mt-4 md:hidden">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            
            {/* Paso 3: Publicación estratégica */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-green-100 dark:border-green-900/30 flex flex-col items-center transition-transform hover:translate-y-[-5px] relative z-10">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border-2 border-green-200">
                <img 
                  src="/assets/images/process/social-publishing.jpg" 
                  alt="Publicación en redes sociales" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                <strong>Publicamos</strong> y promocionamos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Gestionamos la <strong>distribución estratégica</strong> en redes sociales y creamos <strong>anuncios optimizados</strong> para captar pacientes.
              </p>
              
              {/* Visualización de redes sociales */}
              <div className="mt-auto w-full h-44 md:h-52 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src="/assets/images/process/social-analytics.jpg" 
                  alt="Análisis de redes sociales" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Indicador final - solo móvil */}
              <div className="flex justify-center mt-4 md:hidden">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Sección de Garantía con Calendario Animado */}
          <div className="mt-20 py-16 px-4 sm:px-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <span className="text-indigo-700 dark:text-indigo-300 text-sm font-semibold uppercase tracking-wider">
                  Garantía <strong>Exclusiva</strong>
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-primary">
                Llenamos tu clínica en <strong>30 días</strong> o trabajamos <strong>gratis</strong>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Esto no es una promesa vacía. <strong>Es una garantía por contrato.</strong> Si no ves resultados en tu agenda, te devolvemos el dinero.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-10">
              {/* Calendario con animación de llenado */}
              <div className="lg:w-7/12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-[1.01] transition-transform duration-300 relative">
                  <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
                    <h3 className="text-xl font-bold">Así se ve una clínica después de <strong>automatizar</strong> con Glipce</h3>
                    <button className="p-2 rounded hover:bg-indigo-700 focus:outline-none" id="toggleMute">
                      <svg className="w-6 h-6 mute-icon hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                      <svg className="w-6 h-6 unmute-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Video en bucle en lugar del calendario animado */}
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <video 
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      id="calendarVideo"
                    >
                      <source src="/assets/videos/agenda-llenandose.mp4" type="video/mp4" />
                      Tu navegador no soporta videos HTML5.
                    </video>
                  </div>
                  
                  {/* Notificación animada */}
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg animate-pulse z-10">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Sección de garantía y KPIs */}
              <div className="lg:w-5/12">
                {/* Bloque de garantía */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-indigo-200 dark:border-indigo-800/30 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Garantía Glipce: Resultados o devolución</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Clientes reales ya han llenado su agenda sin responder WhatsApp ni perder tiempo. Nuestro sistema está respaldado por un contrato legal que te protege.
                      </p>
                      <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300">
                        Garantizado por contrato
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Indicadores visuales llamativos - KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-blue-100 dark:border-blue-900/30 flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Citas nuevas/mes</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">+47</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-green-100 dark:border-green-900/30 flex flex-col items-center">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tasa conversión</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">90%</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-purple-100 dark:border-purple-900/30 flex flex-col items-center">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Horas ahorradas</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">25h</p>
                  </div>
                </div>
                
                {/* Testimonios destacados */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-6">
                  <div className="flex items-center mb-4">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-3">
                    "La agenda de mi clínica se llenó en menos de 3 semanas y dejé de pasar horas respondiendo mensajes. El retorno ha sido excepcional."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center mr-2 text-xs font-semibold text-indigo-800">
                      MD
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Dr. Manuel Díaz</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Clínica Dental Madrid</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA final con garantía */}
            <div className="text-center mt-10">
              <Button 
                className="bg-indigo-700 hover:bg-indigo-800 shadow-xl shadow-indigo-900/20 px-10 py-6 text-xl font-semibold transition-all transform hover:translate-y-[-2px]"
                onClick={() => window.open("https://calendly.com/amarupaillan1966/30min", '_blank')}
              >
                Quiero llenar mi clínica este mes
              </Button>
              <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">
                Y si no funciona, me devuelven el dinero.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Casos de Éxito Section - Video Testimonial */}
      <section id="casos" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-3xl z-0"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl z-0"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
                Testimonio <strong>Real</strong>
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-primary">
              Clínicas <strong>reales</strong>. Resultados <strong>reales</strong>.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              No te mostramos promesas, te mostramos lo que pasó en la <strong>vida real</strong>.
            </p>
          </div>
          
          {/* Testimonio en video */}
          <div className="flex flex-col lg:flex-row items-center gap-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200 dark:border-gray-700">
            {/* Video principal */}
            <div className="lg:w-3/5 relative rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
                  controls 
                  poster="/assets/images/testimonials/testimonial-poster.jpg"
                >
                  <source src="/assets/videos/testimonio-clinica.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Cita y detalles */}
            <div className="lg:w-2/5 text-left">
              <div className="text-4xl text-indigo-400 mb-4">"</div>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                Glipce nos ayudó a mejorar nuestra presencia online con un servicio <strong>profesional</strong> y diferente a las típicas agencias que cobran sin resultados. Ahora tenemos <strong>más de 30 citas nuevas al mes</strong> y no podríamos estar más satisfechos.
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src="/assets/images/testimonials/dr-garcia-avatar.jpg" 
                  alt="Dr. Carlos Martínez" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200 mr-4" 
                />
                <div>
                  <div className="flex items-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100"><strong>Dr. Carlos Martínez</strong></p>
                    <div className="ml-2 bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Director, Clínica Dental Eurodent</p>
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA button */}
          <div className="mt-12">
            <Button 
              className="bg-gradient-to-r from-indigo-600 to-primary shadow-xl shadow-indigo-900/20 px-8 py-6 text-lg font-semibold hover:opacity-90 transition-all transform hover:translate-y-[-2px]"
              onClick={() => window.open("https://calendly.com/amarupaillan1966/30min", '_blank')}
            >
              Yo también quiero estos resultados
            </Button>
          </div>
        </div>
      </section>
      {/* Garantía Section */}
      <section id="garantia" className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-green-950/30 dark:via-gray-900 dark:to-green-950/30 text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 blur-2xl z-0"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-green-100 dark:bg-green-900/20 blur-3xl z-0"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                SOLO PAGAS SI FUNCIONA
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-primary">
              Estamos tan seguros que lo respaldamos por contrato
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-primary rounded-full mb-8"></div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-green-200 dark:border-green-800/30 mb-12 max-w-3xl">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
                No más falsas promesas. Nuestro contrato estipula claramente: si no logramos aumentar tus citas y pacientes en los primeros 60 días, te devolvemos cada peso invertido. Tú trabajas en tu clínica, nosotros nos encargamos de traerte pacientes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Contrato Legal</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Todo respaldado por un contrato formal que te protege</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Devolución Total</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Te devolvemos tu inversión si no obtienes resultados</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Resultados Rápidos</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Verás mejoras significativas en las primeras semanas</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Todas las agencias prometen, solo Glipce garantiza
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                ¿Por qué arriesgarte con sistemas que no funcionan? El Sistema Glipce está validado en decenas de clínicas y respaldado con una garantía legal que ninguna otra agencia se atreve a ofrecer.
              </p>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-green-600 to-primary shadow-xl shadow-green-900/20 px-8 py-6 text-lg font-semibold hover:opacity-90 transition-all"
              size="lg"
              onClick={() => window.open("https://calendly.com/amarupaillan1966/30min", '_blank')}
            >
              Ver contrato de garantía y comenzar hoy mismo
            </Button>
          </div>
        </div>
      </section>
      <CtaSection />
      <FooterSection />
    </main>
  );
};
