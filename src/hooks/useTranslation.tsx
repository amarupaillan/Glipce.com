import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tipos para el contexto
type Language = 'en' | 'es';
type NestedTranslations = Record<string, any>;

type TranslationContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Crear el contexto con valores predeterminados
const TranslationContext = createContext<TranslationContextType>({
  language: 'es',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Spanish translations 
const spanishTranslations: NestedTranslations = {
  // Form translations
  form: {
    next: "Siguiente",
    previous: "Anterior",
    submit: "Enviar",
    selectOption: "Selecciona una opción",
    errors: {
      required: "Este campo es obligatorio",
      generic: "Ocurrió un error. Por favor, inténtalo de nuevo."
    },
    hints: {
      keyboardSubmit: "Presiona Enter para continuar",
      textareaSubmit: "Presiona Ctrl+Enter para continuar"
    },
    success: {
      title: "¡Gracias por tu mensaje!",
      message: "Nos pondremos en contacto contigo lo antes posible.",
      restart: "Comenzar de nuevo"
    },
    error: {
      title: "Error de envío",
      message: "Hubo un problema al enviar tu formulario.",
      retry: "Intentar de nuevo"
    }
  },
  
  // Homepage sections
  homepage: {
    hero: {
      title: "Potencia tu negocio con contenido y AI",
      subtitle: "Creamos embudos de venta completos: desde videos virales y páginas web efectivas hasta agentes de IA que automatizan la atención al cliente y ventas.",
      cta: "Agenda tu llamada gratuita"
    }
  },
  
  // Hero Section additional elements
  heroSection: {
    viewServices: "Ver servicios",
    cta: {
      secondary: "Ver planes"
    },
    features: {
      fast: "Tiempos de entrega récord",
      support: "Proceso sistematizado",
      roi: "Calidad superior"
    },
    decorative: {
      cubeHelix: "Cubo decorativo",
      helix: "Hélice decorativa",
      star: "Estrella decorativa",
      bulb: "Bombilla decorativa"
    }
  },
  
  // Features card section
  featuresCard: {
    title: "Tu embudo de ventas completo",
    subtitle: "Creamos un sistema integral que conecta todos los puntos de contacto con tus clientes: desde el primer video hasta la conversión automatizada.",
    items: [
      {
        title: "Producción de Contenido",
        description: "Creamos videos virales para tus redes sociales con guiones profesionales, grabación en tu negocio y edición de alta calidad que captura la atención de tu audiencia."
      },
      {
        title: "Landing Pages & Web",
        description: "Diseñamos y desarrollamos páginas web y landing pages optimizadas para convertir las visitas que generan tus videos en prospectos y clientes."
      },
      {
        title: "Agentes IA & Automatización",
        description: "Desarrollamos chatbots inteligentes y sistemas de agendamiento automático que capturan leads, resuelven dudas y facilitan la conversión 24/7 sin intervención humana."
      }
    ]
  },
  
  // Navigation items
  Servicios: "Servicios",
  Planes: "Planes",
  Contacto: "Contacto",
  "Agendar llamada": "Agendar llamada",
  "Cerrar menú": "Cerrar menú",
  "Abrir menú": "Abrir menú",
  "Soluciones digitales para tu negocio": "Soluciones digitales para tu negocio",
  "Potencia tu negocio con tiempos récord y calidad superior": "Potencia tu negocio con tiempos récord y calidad superior",
  "Nuestro proceso sistematizado garantiza eficiencia sin sacrificar calidad. Creamos tu embudo de ventas completo: desde videos virales y páginas web efectivas hasta agentes IA que automatizan la atención.": "Nuestro proceso sistematizado garantiza eficiencia sin sacrificar calidad. Creamos tu embudo de ventas completo: desde videos virales y páginas web efectivas hasta agentes IA que automatizan la atención.",
  "Agendar llamada gratuita": "Agendar llamada gratuita",
  "Ver planes": "Ver planes"
};

// English translations
const englishTranslations: NestedTranslations = {
  // Form translations
  form: {
    next: "Next",
    previous: "Previous",
    submit: "Submit",
    selectOption: "Select an option",
    errors: {
      required: "This field is required",
      generic: "An error occurred. Please try again."
    },
    hints: {
      keyboardSubmit: "Press Enter to continue",
      textareaSubmit: "Press Ctrl+Enter to continue"
    },
    success: {
      title: "Thanks for your submission!",
      message: "We'll get back to you as soon as possible.",
      restart: "Start again"
    },
    error: {
      title: "Submission Error",
      message: "There was a problem submitting your form.",
      retry: "Try again"
    }
  },
  
  // Homepage sections
  homepage: {
    hero: {
      title: "Intelligent Digital Transformation for Businesses",
      subtitle: "AI-powered automation solutions that optimize processes, reduce costs and accelerate growth",
      cta: "Request a Demo"
    }
  },
  
  // Hero Section additional elements
  heroSection: {
    viewServices: "View Services",
    cta: {
      secondary: "View Plans"
    },
    features: {
      fast: "Implementation in just 2 weeks",
      support: "Priority 24/7 support",
      roi: "300% ROI guaranteed"
    },
    decorative: {
      cubeHelix: "Decorative cube helix image",
      helix: "Decorative helix image",
      star: "Decorative star image",
      bulb: "Decorative light bulb image"
    }
  },
  
  // Features card section
  featuresCard: {
    title: "Solutions That Transform Your Business",
    subtitle: "Discover how our AI solutions can revolutionize your operations",
    items: [
      {
        title: "Process Automation",
        description: "Reduce time and errors by automating repetitive tasks"
      },
      {
        title: "Business Intelligence",
        description: "Advanced analytics for data-driven decisions"
      },
      {
        title: "AI Customer Support",
        description: "24/7 service with intelligent virtual assistants"
      }
    ]
  },
  
  // Navigation items
  Servicios: "Services",
  Planes: "Plans",
  Contacto: "Contact",
  "Agendar llamada": "Schedule a call",
  "Cerrar menú": "Close menu",
  "Abrir menú": "Open menu",
  "Soluciones digitales para tu negocio": "Digital solutions for your business",
  "Potencia tu negocio con tiempos récord y calidad superior": "Power your business with record time and superior quality",
  "Nuestro proceso sistematizado garantiza eficiencia sin sacrificar calidad. Creamos tu embudo de ventas completo: desde videos virales y páginas web efectivas hasta agentes IA que automatizan la atención.": "Our systematic process guarantees efficiency without sacrificing quality. We create your complete sales funnel: from viral videos and effective web pages to AI agents that automate customer service.",
  "Agendar llamada gratuita": "Schedule free call",
  "Ver planes": "View plans",
  
  // Service links
  "Creación de Contenido": "Content Creation",
  "Landing Pages": "Landing Pages",
  "Agentes de IA": "AI Agents"
};

// Merge the additional translations
// Object.assign(englishTranslations, spanishTranslations);

// Combined translations - simplified type
const translations: Record<Language, NestedTranslations> = {
  en: englishTranslations,
  es: spanishTranslations
};

// Proveedor de traducciones
export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Intenta obtener el idioma guardado en localStorage, o usa la preferencia del navegador
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      return savedLanguage;
    }
    
    // Detecta el idioma del navegador
    const browserLanguage = navigator.language.split('-')[0];
    return browserLanguage === 'en' ? 'en' : 'es';
  });

  // Función para traducir texto - actualizada para manejar claves anidadas
  const t = (key: string): string => {
    // Si la clave contiene puntos, acceder a las propiedades anidadas
    if (key.includes('.')) {
      const keys = key.split('.');
      let value: any = translations[language];
      
      // Navegar a través de la estructura anidada
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // Si no se encuentra la clave en algún nivel, devolver la clave original
          return key;
        }
      }
      
      // Si el valor final es una cadena, devolverlo
      if (typeof value === 'string') {
        return value;
      }
      
      // Si no es una cadena (por ejemplo, es un objeto), devolver la clave original
      return key;
    }
    
    // Para claves simples, usar el método original
    const translation = translations[language][key];
    return typeof translation === 'string' ? translation : key;
  };

  // Función para cambiar el idioma
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    // Agrega la clase al HTML para posibles estilos específicos por idioma
    document.documentElement.setAttribute('lang', newLanguage);
  };

  // Establece el atributo lang en el HTML al montar el componente
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Hook personalizado para usar traducciones
export const useTranslation = () => useContext(TranslationContext); 