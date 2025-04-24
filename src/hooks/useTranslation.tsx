import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tipos para el contexto
type Language = 'en' | 'es';
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

// Traducciones en inglés
const englishTranslations: Record<string, string> = {
  // Navigation
  "Servicios": "Services",
  "Planes": "Plans",
  "Contacto": "Contact",
  "Agendar llamada": "Schedule a call",
  "Cerrar menú": "Close menu",
  "Abrir menú": "Open menu",
  
  // Plans section
  "Planes simples, resultados extraordinarios": "Simple plans, extraordinary results",
  "Soluciones claras para impulsar tu negocio con tecnología, contenido y estrategia. Sin complicaciones.": "Clear solutions to boost your business with technology, content, and strategy. No complications.",
  "Presencia web profesional con IA": "Professional web presence with AI",
  "Contenido estratégico con IA": "Strategic content with AI",
  "Solución digital completa": "Complete digital solution",
  "Desde": "From",
  "Características principales:": "Key features:",
  "Ideal para:": "Ideal for:",
  "Negocios que necesitan una presencia web profesional con atención automatizada.": "Businesses that need a professional web presence with automated attention.",
  "Negocios con web que necesitan contenido constante para sus plataformas digitales.": "Businesses with a website that need constant content for their digital platforms.",
  "Empresas que quieren delegar completamente su presencia digital y enfocarse en su negocio.": "Companies that want to fully delegate their digital presence and focus on their business.",
  "Página web profesional": "Professional website",
  "agente de IA personalizado": "customized AI agent",
  "Soporte técnico por email": "Technical support via email",
  "Creación de contenido": "Content creation",
  "Videos mensuales": "Monthly videos",
  "videos mensuales para redes": "monthly videos for social media",
  "Creación de contenido SEO": "SEO content creation",
  "Soporte prioritario": "Priority support",
  "Creación de contenido premium": "Premium content creation",
  "Estrategia y análisis mensual": "Monthly strategy and analysis",
  "Empezar con PRO": "Start with PRO",
  "Escalar con PRO+": "Scale with PRO+",
  "Trabajar con Glipce": "Work with Glipce",
  
  // Value proposition
  "¿Por qué elegir Glipce?": "Why choose Glipce?",
  "Nos diferenciamos por combinar tecnología avanzada con un enfoque personalizado.": "We stand out by combining advanced technology with a personalized approach.",
  "Simple y efectivo": "Simple and effective",
  "Sin complicaciones. Soluciones claras y resultados medibles para tu negocio.": "No complications. Clear solutions and measurable results for your business.",
  "Todo integrado": "All integrated",
  "Web, contenido y automatización trabajando juntos, no por separado.": "Web, content, and automation working together, not separately.",
  "Atención humana": "Human attention",
  "Tecnología potente con soporte humano. Nunca estarás solo.": "Powerful technology with human support. You'll never be alone.",
  
  // Final CTA
  "¿Dudas sobre qué plan elegir?": "Not sure which plan to choose?",
  "Agenda una llamada gratuita de 15 minutos. Te ayudamos a encontrar la solución ideal para tu negocio.": "Schedule a free 15-minute call. We'll help you find the ideal solution for your business.",
  "Agendar llamada gratuita": "Schedule free call",

  // Plan links
  "Todos los Planes": "All Plans",
  "Plan PRO": "PRO Plan",
  "Plan PRO+": "PRO+ Plan",
  "Plan PLATINO": "PLATINUM Plan",

  // Service links
  "Creación de Contenido": "Content Creation",
  "Landing Pages": "Landing Pages",
  "Agentes de IA": "AI Agents",

  // Comparison table
  "Comparación de planes": "Plans comparison",
  "Característica": "Feature",
  "Incluido": "Included",
  "No incluido": "Not included",
  "Encuentra el plan ideal para tu negocio con esta comparativa completa de características.": "Find the ideal plan for your business with this complete feature comparison.",
  "Precio": "Price",

  // Footer
  "Producción de videos": "Video Production",
  "Landing Pages & Web": "Landing Pages & Web",
  "Empresa": "Company",
  "Nuestros Planes": "Our Plans",
  "Todos los derechos reservados.": "All rights reserved.",
  "Cambiar a Español": "Switch to Spanish",
  "Switch to English": "Switch to English",
  "Creamos embudos de venta completos con videos profesionales, landing pages efectivas y agentes IA que automatizan la atención al cliente y las ventas.": "We create complete sales funnels with professional videos, effective landing pages, and AI agents that automate customer service and sales.",

  // Numbers (as strings for dynamic content)
  "1": "1",
  "4": "4",
  "6": "6",
  
  // Form translations
  "form.next": "Next",
  "form.previous": "Previous",
  "form.submit": "Submit",
  "form.selectOption": "Select an option",
  "form.errors.required": "This field is required",
  "form.errors.generic": "An error occurred. Please try again.",
  "form.hints.keyboardSubmit": "Press Enter to continue",
  "form.hints.textareaSubmit": "Press Ctrl+Enter to continue",
  "form.success.title": "Thanks for your submission!",
  "form.success.message": "We'll get back to you as soon as possible.",
  "form.success.restart": "Start again",
  "form.error.title": "Submission Error",
  "form.error.message": "There was a problem submitting your form.",
  "form.error.retry": "Try again",
  
  // Contact page form labels
  "Hablemos sobre tu proyecto": "Let's talk about your project",
  "Respuesta en menos de 24 horas": "Response in less than 24 hours",
  "Completa el formulario y te contactaremos para discutir cómo podemos ayudarte": "Complete the form and we'll contact you to discuss how we can help you",
  "Otras formas de contacto": "Other ways to contact us",
  "Email": "Email",
  "Escríbenos para cualquier consulta comercial": "Write to us for any business inquiry",
  "Teléfono": "Phone",
  "Disponible de lunes a viernes de 9:00 a 18:00": "Available Monday to Friday from 9:00 to 18:00",
  "WhatsApp": "WhatsApp",
  "Respuesta rápida vía WhatsApp Business": "Quick response via WhatsApp Business",
  "Iniciar chat": "Start chat",
  "Nuestro compromiso": "Our commitment",
  "Te responderemos en menos de 24 horas con un análisis personalizado de tu proyecto y las mejores opciones para alcanzar tus objetivos.": "We'll respond in less than 24 hours with a personalized analysis of your project and the best options to achieve your goals."
};

// Additional translations for services page
const additionalEnglishTranslations = {
  // Services page titles
  "Servicios para impulsar tu negocio": "Services to boost your business",
  "Todo lo que necesitas para crear un embudo de ventas efectivo: desde la captación con contenido viral hasta la conversión automatizada.": "Everything you need to create an effective sales funnel: from capturing leads with viral content to automated conversion.",
  
  // Service section headings
  "Producción profesional": "Professional production",
  "Creación de Contenido": "Content Creation",
  "Diseño y desarrollo": "Design and development",
  "Landing Pages a Medida": "Custom Landing Pages",
  "Automatización inteligente": "Intelligent automation",
  "Agentes de IA para tu Negocio": "AI Agents for your Business",
  
  // Service section components
  "Nuestras soluciones": "Our solutions",
  "Problemas que resolvemos": "Problems we solve",
  "Solicitar información": "Request information",
  "¿Listo para impulsar tu negocio?": "Ready to boost your business?",
  "Nuestro enfoque de embudo completo multiplica los resultados. Combina estos servicios para crear un sistema de captación, conversión y fidelización que funciona automáticamente.": "Our complete funnel approach multiplies results. Combine these services to create an automated lead generation, conversion, and loyalty system.",
  "Solicitar una consulta gratuita": "Request a free consultation",
  
  // Content creation problem statements
  "¿No tienes tiempo para crear contenido constantemente?": "Don't have time to create content constantly?",
  "La mayoría de los negocios saben que necesitan publicar en redes sociales, pero el día a día los consume y terminan abandonando esta tarea crucial.": "Most businesses know they need to post on social media, but day-to-day operations consume them, and they end up abandoning this crucial task.",
  "¿Tu contenido no genera suficiente engagement?": "Is your content not generating enough engagement?",
  "Publicar por publicar no funciona. Sin una estrategia y calidad profesional, tus videos pasan desapercibidos entre miles de contenidos.": "Publishing for the sake of publishing doesn't work. Without a strategy and professional quality, your videos go unnoticed among thousands of content pieces.",
  "¿Inviertes en publicidad pero no logras conversiones?": "Do you invest in advertising but fail to get conversions?",
  "Sin un contenido que conecte emocionalmente con tu audiencia, incluso las mejores campañas publicitarias fallan en convertir.": "Without content that connects emotionally with your audience, even the best advertising campaigns fail to convert.",
  
  // Content creation solutions
  "Creamos guiones profesionales enfocados en tu audiencia y objetivos de negocio": "We create professional scripts focused on your audience and business objectives",
  "Nos encargamos de la grabación in situ con equipo profesional, sin molestias para ti": "We handle on-site recording with professional equipment, without hassle for you",
  "Editamos y optimizamos los videos para cada plataforma (Instagram, TikTok, YouTube)": "We edit and optimize videos for each platform (Instagram, TikTok, YouTube)",
  "Implementamos estrategias de storytelling que generan conexión emocional": "We implement storytelling strategies that generate emotional connection",
  "Te entregamos calendario editorial y recomendaciones para maximizar el alcance": "We provide you with an editorial calendar and recommendations to maximize reach",
  
  // Landing pages problem statements
  "¿Tu sitio web actual no convierte visitantes en clientes?": "Is your current website not converting visitors into customers?",
  "Muchos sitios web son bonitos pero no están diseñados con un embudo de conversión claro, por lo que pierden potenciales clientes en cada visita.": "Many websites are pretty but not designed with a clear conversion funnel, losing potential customers on every visit.",
  "¿Tus campañas generan tráfico pero pocas ventas?": "Do your campaigns generate traffic but few sales?",
  "Sin una landing page específica para cada campaña, estás desperdiciando tu inversión en publicidad al enviar usuarios a páginas genéricas.": "Without a specific landing page for each campaign, you're wasting your advertising investment by sending users to generic pages.",
  "¿No sabes qué está funcionando y qué no en tu sitio?": "Don't know what's working and what's not on your site?",
  "Sin analítica implementada correctamente, es imposible optimizar tu sitio web y tomar decisiones basadas en datos.": "Without properly implemented analytics, it's impossible to optimize your website and make data-driven decisions.",
  
  // Landing pages solutions
  "Diseñamos landing pages centradas en conversión con una estructura que guía al usuario": "We design conversion-focused landing pages with a structure that guides the user",
  "Implementamos formularios optimizados que maximizan la captura de leads": "We implement optimized forms that maximize lead capture",
  "Integramos tu landing con herramientas de email marketing, CRM y analítica": "We integrate your landing page with email marketing, CRM, and analytics tools",
  "Optimizamos la velocidad de carga y experiencia móvil para reducir el abandono": "We optimize loading speed and mobile experience to reduce abandonment",
  "Realizamos pruebas A/B para mejorar continuamente las tasas de conversión": "We conduct A/B tests to continuously improve conversion rates",
  
  // AI agents problem statements
  "¿Tu equipo pierde tiempo respondiendo las mismas preguntas?": "Does your team waste time answering the same questions?",
  "Las consultas repetitivas saturan a tu personal y les impiden enfocarse en tareas de mayor valor que realmente necesitan intervención humana.": "Repetitive inquiries overwhelm your staff and prevent them from focusing on higher-value tasks that truly need human intervention.",
  "¿Pierdes clientes potenciales fuera del horario laboral?": "Are you losing potential customers outside business hours?",
  "Cuando un cliente interesado no recibe respuesta inmediata, la probabilidad de que contacte a tu competencia aumenta significativamente.": "When an interested customer doesn't receive an immediate response, the likelihood they'll contact your competition increases significantly.",
  "¿El proceso de ventas o atención es inconsistente?": "Is your sales or customer service process inconsistent?",
  "Sin automatización, la calidad del servicio depende de quién atiende, su estado de ánimo o carga de trabajo, creando experiencias dispares.": "Without automation, service quality depends on who attends, their mood, or workload, creating disparate experiences.",
  
  // AI agents solutions
  "Implementamos chatbots inteligentes entrenados con la información específica de tu negocio": "We implement intelligent chatbots trained with specific information about your business",
  "Configuramos integraciones con WhatsApp Business, tu web y redes sociales": "We set up integrations with WhatsApp Business, your website, and social media",
  "Automatizamos procesos de calificación de leads y agendamiento de citas": "We automate lead qualification processes and appointment scheduling",
  "Programamos escenarios de conversación que reflejan el tono de tu marca": "We program conversation scenarios that reflect your brand's tone",
  "Proporcionamos reportes detallados de conversaciones e insights para mejorar tu negocio": "We provide detailed reports of conversations and insights to improve your business",
  
  // Contact form elements
  "Nombre completo": "Full name",
  "Ingresa tu nombre completo": "Enter your full name",
  "Correo electrónico": "Email address",
  "correo@ejemplo.com": "email@example.com",
  "Por favor, ingresa un correo electrónico válido": "Please enter a valid email address",
  "Teléfono (opcional)": "Phone (optional)",
  "Formato de teléfono inválido": "Invalid phone format",
  "Empresa": "Company",
  "Nombre de tu empresa": "Your company name",
  "¿Qué servicio te interesa?": "Which service are you interested in?",
  "Selecciona un servicio": "Select a service",
  "Otro / No estoy seguro": "Other / Not sure",
  "¿Cómo podemos ayudarte?": "How can we help you?",
  "Cuéntanos un poco sobre tu proyecto o necesidad": "Tell us a bit about your project or need",
  "Error al enviar el formulario": "Error sending the form",
  "Error al enviar el formulario:": "Error sending the form:",
  "Embudo de ventas completo": "Complete sales funnel",
};

// Merge the additional translations
Object.assign(englishTranslations, additionalEnglishTranslations);

// Spanish translations (identical keys and values since it's the default language)
const spanishTranslations: Record<string, string> = {
  // Form translations
  "form.next": "Siguiente",
  "form.previous": "Anterior",
  "form.submit": "Enviar",
  "form.selectOption": "Selecciona una opción",
  "form.errors.required": "Este campo es obligatorio",
  "form.errors.generic": "Ocurrió un error. Por favor, inténtalo de nuevo.",
  "form.hints.keyboardSubmit": "Presiona Enter para continuar",
  "form.hints.textareaSubmit": "Presiona Ctrl+Enter para continuar",
  "form.success.title": "¡Gracias por tu mensaje!",
  "form.success.message": "Nos pondremos en contacto contigo lo antes posible.",
  "form.success.restart": "Comenzar de nuevo",
  "form.error.title": "Error de envío",
  "form.error.message": "Hubo un problema al enviar tu formulario.",
  "form.error.retry": "Intentar de nuevo",
  
  // Homepage hero section
  "homepage.hero.title": "Potencia tu negocio con contenido y AI",
  "homepage.hero.subtitle": "Creamos embudos de venta completos: desde videos virales y páginas web efectivas hasta agentes de IA que automatizan la atención al cliente y ventas.",
  "homepage.hero.cta": "Agenda tu llamada gratuita",
  
  // Hero Section additional elements
  "heroSection.viewServices": "Ver servicios",
  "heroSection.cta.secondary": "Ver planes",
  "heroSection.features.fast": "Tiempos de entrega récord",
  "heroSection.features.support": "Proceso sistematizado",
  "heroSection.features.roi": "Calidad superior",
  "heroSection.decorative.cubeHelix": "Cubo decorativo",
  "heroSection.decorative.helix": "Hélice decorativa",
  "heroSection.decorative.star": "Estrella decorativa",
  "heroSection.decorative.bulb": "Bombilla decorativa"
};

// Fill Spanish translations with identical keys as values for keys not explicitly defined
Object.keys(englishTranslations).forEach(key => {
  if (!spanishTranslations[key]) {
    spanishTranslations[key] = key;
  }
});

// Combined translations
const translations: Record<Language, Record<string, string>> = {
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

  // Función para traducir texto
  const t = (key: string): string => {
    return translations[language][key] || key;
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