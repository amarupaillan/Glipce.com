import React, { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced FAQ item component with animation and hover effects
const FaqItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="border border-gray-200 dark:border-gray-700/20 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        className={`flex w-full justify-between items-center text-left focus:outline-none p-6 ${
          isOpen ? 'bg-purple-50 dark:bg-purple-900/10' : 'hover:bg-gray-50 dark:hover:bg-gray-800/30'
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium ${isOpen ? 'text-purple-600 dark:text-purple-400' : 'text-foreground'}`}>
          {t(question)}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-6 h-6 flex items-center justify-center rounded-full ${
            isOpen ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : 
            'text-gray-500 dark:text-gray-400'
          }`}
        >
          <svg 
            className="w-4 h-4"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-700/20">
              <p className="text-gray-600 dark:text-gray-300">
                {t(answer)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FaqSection = (): JSX.Element => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // Preguntas frecuentes actualizadas
  const faqItems = [
    {
      question: "¿Cómo funciona el proceso de producción de videos?",
      answer: "Nuestro proceso de producción es completo: creamos guiones profesionales, nos encargamos de la grabación en tu negocio y realizamos la edición con alta calidad. Los videos están diseñados para captar atención y generar engagement en redes sociales, dirigiendo tráfico a tus landing pages."
    },
    {
      question: "¿Qué incluye el desarrollo de una landing page?",
      answer: "Nuestras landing pages están diseñadas para maximizar conversiones. Incluyen diseño responsive, formularios de captura de leads, integración con tus herramientas de marketing, optimización SEO básica y están preparadas para recibir el tráfico de tus videos de redes sociales."
    },
    {
      question: "¿Cómo funcionan los agentes de IA?",
      answer: "Desarrollamos chatbots personalizados para atender clientes 24/7, resolver dudas frecuentes y capturar leads. Pueden implementarse en tu sitio web, WhatsApp Business o redes sociales. Los agentes son entrenados con información de tu negocio para ofrecer respuestas precisas y relevantes."
    },
    {
      question: "¿Cuánto tiempo toma implementar todo el embudo de ventas?",
      answer: "Nuestro proceso sistematizado permite tiempos de entrega récord. Una implementación completa (videos + landing page + agente IA) puede estar funcionando en 3-4 semanas. Priorizamos la calidad y la eficiencia en cada paso del proceso para que puedas ver resultados lo antes posible."
    },
    {
      question: "¿Los precios incluyen IVA?",
      answer: "No, los precios mostrados en nuestros planes son sin IVA. El impuesto se añadirá en la factura final según las leyes fiscales aplicables en tu país o región."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full py-20 bg-background/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          {t("Preguntas frecuentes")}
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("Respondemos a las dudas más comunes sobre nuestros servicios y cómo pueden ayudarte a potenciar tu negocio")}
        </p>
        
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            {t("¿Tienes más preguntas?")}
          </p>
          <button 
            onClick={() => window.open('/contacto', '_self')}
            className="mt-2 text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            {t("Contáctanos para obtener respuestas personalizadas")} →
          </button>
        </div>
      </div>
    </div>
  );
}; 