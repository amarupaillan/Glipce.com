import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Definición de tipos
type Language = 'es' | 'en';

// Definir la estructura del objeto de traducciones
interface TranslationDictionary {
  [key: string]: string;
}

interface Translations {
  es: TranslationDictionary;
  en: TranslationDictionary;
}

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Creación del contexto
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Traducciones
export const translations: Translations = {
  es: {
    // Header
    'nav.services': 'Servicios',
    'nav.plans': 'Planes',
    'nav.how_we_work': 'Cómo trabajamos',
    'nav.contact': 'Contacto',
    'nav.schedule_call': 'Agendar llamada',
    
    // Servicios dropdown
    'services.content': 'Producción de Contenido',
    'services.web': 'Diseño Web Estratégico',
    'services.ai': 'Inteligencia Artificial',
    
    // Servicios página
    'services.what_we_offer': 'Lo que ofrecemos',
    'services.benefits': 'Beneficios',
    'services.plans_include': 'Planes que lo incluyen',
    
    // Hero Section
    'hero.title': 'Transforma Tu Presencia Digital',
    'hero.subtitle': 'Diseño web estratégico y producción de contenido que convierte visitantes en clientes fieles.',
    'hero.cta': 'Comienza Ahora',
    'hero.secondary_cta': 'Ver Servicios',
    
    // Features Section
    'features.title': 'Soluciones Digitales Completas',
    'features.subtitle': 'Todo lo que necesitas para destacar en línea',
    
    // Plans Section
    'plans.title': 'Planes a tu Medida',
    'plans.subtitle': 'Elige el plan perfecto para tu negocio',
    'plans.monthly': 'Mensual',
    'plans.annual': 'Anual',
    'plans.basic': 'Básico',
    'plans.pro': 'Profesional',
    'plans.enterprise': 'Empresarial',
    'plans.custom': 'Personalizado',
    'plans.month': '/mes',
    'plans.year': '/año',
    'plans.get_started': 'Comenzar',
    'plans.contact_us': 'Contactar',
    'plans.save': 'Ahorra',
    
    // CTA Section
    'cta.title': '¿Listo para impulsar tu negocio?',
    'cta.subtitle': 'Comienza hoy y transforma tu presencia digital.',
    'cta.button': 'Contáctanos Ahora',
    
    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Respuestas a tus dudas más comunes',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.plans': 'Plans',
    'nav.how_we_work': 'How We Work',
    'nav.contact': 'Contact',
    'nav.schedule_call': 'Schedule Call',
    
    // Servicios dropdown
    'services.content': 'Content Production',
    'services.web': 'Strategic Web Design',
    'services.ai': 'Artificial Intelligence',
    
    // Servicios página
    'services.what_we_offer': 'What We Offer',
    'services.benefits': 'Benefits',
    'services.plans_include': 'Plans that include it',
    
    // Hero Section
    'hero.title': 'Transform Your Digital Presence',
    'hero.subtitle': 'Strategic web design and content production that converts visitors into loyal customers.',
    'hero.cta': 'Get Started',
    'hero.secondary_cta': 'View Services',
    
    // Features Section
    'features.title': 'Complete Digital Solutions',
    'features.subtitle': 'Everything you need to stand out online',
    
    // Plans Section
    'plans.title': 'Plans that Fit Your Needs',
    'plans.subtitle': 'Choose the perfect plan for your business',
    'plans.monthly': 'Monthly',
    'plans.annual': 'Annual',
    'plans.basic': 'Basic',
    'plans.pro': 'Professional',
    'plans.enterprise': 'Enterprise',
    'plans.custom': 'Custom',
    'plans.month': '/month',
    'plans.year': '/year',
    'plans.get_started': 'Get Started',
    'plans.contact_us': 'Contact Us',
    'plans.save': 'Save',
    
    // CTA Section
    'cta.title': 'Ready to boost your business?',
    'cta.subtitle': 'Start today and transform your digital presence.',
    'cta.button': 'Contact Us Now',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to your most common questions',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
  }
};

// Proveedor del contexto
export const TranslationProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Intenta recuperar el idioma del localStorage o usa 'es' como predeterminado
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' ? 'en' : 'es') as Language;
  });

  // Actualiza el idioma y guárdalo en localStorage
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  // Función para obtener una traducción
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Establece el idioma del documento cuando cambia el idioma
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Hook personalizado para usar las traducciones
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}; 