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
      <section id="soluciones" className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20 z-0"></section>
      {/* Casos de Éxito Section - Video Testimonial */}
      <section id="casos" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl z-0"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-200/50 dark:bg-blue-800/20 blur-3xl z-0"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Testimonio <strong>Real</strong>
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
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
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Cita y detalles */}
            <div className="lg:w-2/5 text-left">
              <div className="text-4xl text-blue-400 mb-4">"</div>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                Hace 6 meses mi agenda tenía <strong>huecos</strong> y gastaba dinero en agencias que solo cobraban sin dar resultados. Ahora con Glipce tenemos <strong>más de 30 citas nuevas al mes</strong> y mi equipo está feliz porque ya no pierden tiempo respondiendo mensajes.
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src="/assets/images/testimonials/dr-garcia-avatar.jpg" 
                  alt="Dr. Carlos Rodríguez" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 mr-4" 
                />
                <div>
                  <div className="flex items-center">
                    <p className="font-bold text-gray-900 dark:text-gray-100"><strong>Dr. Carlos Rodríguez</strong></p>
                    <div className="ml-2 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
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
              className="bg-gradient-to-r from-blue-600 to-primary shadow-xl shadow-blue-900/20 px-8 py-6 text-lg font-semibold hover:opacity-90 transition-all transform hover:translate-y-[-2px]"
              onClick={() => window.open("https://calendly.com/amarupaillan1966/30min", '_blank')}
            >
              Yo también quiero estos resultados
            </Button>
          </div>
        </div>
      </section>
      {/* Garantía Section */}
      <section id="garantia" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/30 dark:via-gray-900 dark:to-blue-950/30 text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-2xl z-0"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl z-0"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                SOLO PAGAS SI FUNCIONA
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
              Estamos tan seguros que lo respaldamos por contrato
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-primary rounded-full mb-8"></div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-blue-800/30 mb-12 max-w-3xl">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
                No más falsas promesas. Nuestro contrato estipula claramente: si no logramos aumentar tus citas y pacientes en los primeros 60 días, te devolvemos cada peso invertido. Tú trabajas en tu clínica, nosotros nos encargamos de traerte pacientes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Contrato Legal</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Todo respaldado por un contrato formal que te protege</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Devolución Total</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Te devolvemos tu inversión si no obtienes resultados</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="bg-gradient-to-r from-blue-600 to-primary shadow-xl shadow-blue-900/20 px-8 py-6 text-lg font-semibold hover:opacity-90 transition-all"
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
