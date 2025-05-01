import React, { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";

export const InterfaceSection = (): JSX.Element => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  
  const workflowSteps = [
    {
      title: "Reunión de diagnóstico",
      description: "Entendemos tu negocio, objetivos y necesidades específicas para crear una estrategia personalizada.",
      icon: (
        <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      image: "/assets/images/cta/10.svg"
    },
    {
      title: "Kickoff",
      description: "Definimos metas concretas, establecemos accesos necesarios y acordamos plazos de entrega realistas.",
      icon: (
        <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "/assets/images/cta/Goals.svg"
    },
    {
      title: "Desarrollo",
      description: "Diseñamos, programamos e integramos soluciones personalizadas que se ajustan a tus necesidades específicas.",
      icon: (
        <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      image: "/assets/images/cta/cube-helix 1.svg"
    },
    {
      title: "Seguimiento",
      description: "Realizamos optimización constante de resultados y proponemos mejoras adicionales para maximizar tu inversión.",
      icon: (
        <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      image: "/assets/images/cta/Stonks.svg"
    }
  ];

  return (
    <div id="proceso" className="w-full py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-purple-50/30 dark:to-purple-900/10 -z-10"></div>
      
      {/* Decorative blurred circles */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 -z-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-900/30 rounded-full filter blur-3xl opacity-30 -z-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center mb-16">
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
            {t("Proceso")}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            {t("¿Cómo trabajamos?")}
          </h2>
          
          <p className="max-w-2xl text-center text-lg text-muted-foreground">
            {t("Un proceso simple y efectivo para transformar tu negocio con tecnología de vanguardia")}
          </p>
        </div>
        
        {/* Interactive step navigator */}
        <div className="relative mb-12">
          <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between relative">
            {workflowSteps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center mb-10 md:mb-0 cursor-pointer group"
                onClick={() => setActiveStep(index)}
              >
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 z-10 transition-all duration-300 transform 
                    ${activeStep >= index 
                      ? 'bg-gradient-to-br from-purple-500 to-purple-700 scale-110 shadow-lg shadow-purple-500/20' 
                      : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-600'}`}
                >
                  {index + 1}
                </div>
                <div className={`text-center transition-colors font-medium ${
                  activeStep === index 
                    ? 'text-purple-700 dark:text-purple-400' 
                    : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300'
                }`}>
                  {t(step.title)}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Step details */}
        <div className="mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl shadow-xl transition-all duration-500 ease-in-out transform bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-700 shadow-gray-200/40 dark:shadow-none overflow-hidden"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8">
                <div className="md:col-span-2 bg-purple-50 dark:bg-purple-900/20 relative h-64 md:h-full flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10 bg-gradient-pattern"></div>
                  <img 
                    src={workflowSteps[activeStep].image} 
                    alt={`Step ${activeStep + 1} illustration`}
                    className="w-40 h-40 object-contain relative z-10"
                  />
                </div>
                
                <div className="p-8 md:p-10 md:col-span-3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900/30">
                      {workflowSteps[activeStep].icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground">
                      {activeStep + 1}. {t(workflowSteps[activeStep].title)}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    {t(workflowSteps[activeStep].description)}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700/50 flex justify-between">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveStep(prev => Math.max(0, prev - 1));
                      }}
                      disabled={activeStep === 0}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                        ${activeStep === 0
                          ? 'opacity-50 cursor-not-allowed'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white'}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      {t("Anterior")}
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveStep(prev => Math.min(workflowSteps.length - 1, prev + 1));
                      }}
                      disabled={activeStep === workflowSteps.length - 1}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                        ${activeStep === workflowSteps.length - 1
                          ? 'opacity-50 cursor-not-allowed'
                          : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/20'}`}
                    >
                      {t("Siguiente")}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};