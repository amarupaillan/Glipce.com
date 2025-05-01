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
        title: "Creación de Contenido Profesional",
        description: "Grabamos y producimos contenido profesional para tus redes sociales, creando videos virales con guiones profesionales y edición de alta calidad."
      },
      {
        title: "Creación de Páginas Web",
        description: "Diseñamos landing pages completas para aterrizar todos tus clientes potenciales, optimizadas para convertir visitas en prospectos y ventas."
      },
      {
        title: "Agentes de Inteligencia Artificial",
        description: "Creamos chatbots personalizados para tu negocio y servicio al cliente que atienden consultas y generan leads automáticamente 24/7."
      }
    ]
  },
  
  // Interface section
  "Proceso": "Proceso",
  "¿Cómo trabajamos?": "¿Cómo trabajamos?",
  "Un proceso simple y efectivo para transformar tu negocio con tecnología de vanguardia": "Un proceso simple y efectivo para transformar tu negocio con tecnología de vanguardia",
  "Reunión de diagnóstico": "Reunión de diagnóstico",
  "Entendemos tu negocio, objetivos y necesidades específicas para crear una estrategia personalizada.": "Entendemos tu negocio, objetivos y necesidades específicas para crear una estrategia personalizada.",
  "Kickoff": "Kickoff",
  "Definimos metas concretas, establecemos accesos necesarios y acordamos plazos de entrega realistas.": "Definimos metas concretas, establecemos accesos necesarios y acordamos plazos de entrega realistas.",
  "Desarrollo": "Desarrollo",
  "Diseñamos, programamos e integramos soluciones personalizadas que se ajustan a tus necesidades específicas.": "Diseñamos, programamos e integramos soluciones personalizadas que se ajustan a tus necesidades específicas.",
  "Seguimiento": "Seguimiento",
  "Realizamos optimización constante de resultados y proponemos mejoras adicionales para maximizar tu inversión.": "Realizamos optimización constante de resultados y proponemos mejoras adicionales para maximizar tu inversión.",
  "Anterior": "Anterior",
  "Siguiente": "Siguiente",
  
  // FAQ section
  "Preguntas frecuentes": "Preguntas frecuentes",
  "Respondemos a las dudas más comunes sobre nuestros servicios y cómo pueden ayudarte a potenciar tu negocio": "Respondemos a las dudas más comunes sobre nuestros servicios y cómo pueden ayudarte a potenciar tu negocio",
  "¿Cómo funciona el proceso de producción de videos?": "¿Cómo funciona el proceso de producción de videos?",
  "Nuestro proceso de producción es completo: creamos guiones profesionales, nos encargamos de la grabación en tu negocio y realizamos la edición con alta calidad. Los videos están diseñados para captar atención y generar engagement en redes sociales, dirigiendo tráfico a tus landing pages.": "Nuestro proceso de producción es completo: creamos guiones profesionales, nos encargamos de la grabación en tu negocio y realizamos la edición con alta calidad. Los videos están diseñados para captar atención y generar engagement en redes sociales, dirigiendo tráfico a tus landing pages.",
  "¿Qué incluye el desarrollo de una landing page?": "¿Qué incluye el desarrollo de una landing page?",
  "Nuestras landing pages están diseñadas para maximizar conversiones. Incluyen diseño responsive, formularios de captura de leads, integración con tus herramientas de marketing, optimización SEO básica y están preparadas para recibir el tráfico de tus videos de redes sociales.": "Nuestras landing pages están diseñadas para maximizar conversiones. Incluyen diseño responsive, formularios de captura de leads, integración con tus herramientas de marketing, optimización SEO básica y están preparadas para recibir el tráfico de tus videos de redes sociales.",
  "¿Cómo funcionan los agentes de IA?": "¿Cómo funcionan los agentes de IA?",
  "Desarrollamos chatbots personalizados para atender clientes 24/7, resolver dudas frecuentes y capturar leads. Pueden implementarse en tu sitio web, WhatsApp Business o redes sociales. Los agentes son entrenados con información de tu negocio para ofrecer respuestas precisas y relevantes.": "¿Cómo funcionan los agentes de IA?",
  "¿Cuánto tiempo toma implementar todo el embudo de ventas?": "¿Cuánto tiempo toma implementar todo el embudo de ventas?",
  "Nuestro proceso sistematizado permite tiempos de entrega récord. Una implementación completa (videos + landing page + agente IA) puede estar funcionando en 3-4 semanas. Priorizamos la calidad y la eficiencia en cada paso del proceso para que puedas ver resultados lo antes posible.": "Nuestro proceso sistematizado permite tiempos de entrega récord. Una implementación completa (videos + landing page + agente IA) puede estar funcionando en 3-4 semanas. Priorizamos la calidad y la eficiencia en cada paso del proceso para que puedas ver resultados lo antes posible.",
  "¿Los precios incluyen IVA?": "¿Los precios incluyen IVA?",
  "No, los precios mostrados en nuestros planes son sin IVA. El impuesto se añadirá en la factura final según las leyes fiscales aplicables en tu país o región.": "No, los precios mostrados en nuestros planes son sin IVA. El impuesto se añadirá en la factura final según las leyes fiscales aplicables en tu país o región.",
  "¿Tienes más preguntas?": "¿Tienes más preguntas?",
  "Contáctanos para obtener respuestas personalizadas": "Contáctanos para obtener respuestas personalizadas",
  
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
  "Ver planes": "Ver planes",
  
  // Pricing features
  "Página web optimizada / personalizada": "Página web optimizada / personalizada",
  "Agente de IA 24/7": "Agente de IA 24/7",
  "SEO básico": "SEO básico",
  "Vídeos mensuales": "Vídeos mensuales",
  "Contenido SEO": "Contenido SEO",
  "Estrategia de contenido": "Estrategia de contenido",
  "Característica": "Característica",
  "Precio": "Precio",
  "Incluido": "Incluido",
  "No incluido": "No incluido",
  "Desde": "Desde",
  "Características principales:": "Características principales:",
  "Ideal para:": "Ideal para:",

  // Pricing plans titles and CTAs
  "Planes simples, resultados extraordinarios": "Planes simples, resultados extraordinarios",
  "Soluciones claras para impulsar tu negocio con tecnología, contenido y estrategia. Sin complicaciones.": "Soluciones claras para impulsar tu negocio con tecnología, contenido y estrategia. Sin complicaciones.",
  "Comparación de planes": "Comparación de planes",
  "Encuentra el plan ideal para tu negocio con esta comparativa completa de características.": "Encuentra el plan ideal para tu negocio con esta comparativa completa de características.",
  "¿Por qué elegir Glipce?": "¿Por qué elegir Glipce?",
  "Nos diferenciamos por combinar tecnología avanzada con un enfoque personalizado.": "Nos diferenciamos por combinar tecnología avanzada con un enfoque personalizado.",
  "Simple y efectivo": "Simple y efectivo",
  "Sin complicaciones. Soluciones claras y resultados medibles para tu negocio.": "Sin complicaciones. Soluciones claras y resultados medibles para tu negocio.",
  "Todo integrado": "Todo integrado",
  "Web, contenido y automatización trabajando juntos, no por separado.": "Web, contenido y automatización trabajando juntos, no por separado.",
  "Atención humana": "Atención humana",
  "Tecnología potente con soporte humano. Nunca estarás solo.": "Tecnología potente con soporte humano. Nunca estarás solo.",
  "¿Dudas sobre qué plan elegir?": "¿Dudas sobre qué plan elegir?",
  "Agenda una llamada gratuita de 15 minutos. Te ayudamos a encontrar la solución ideal para tu negocio.": "Agenda una llamada gratuita de 15 minutos. Te ayudamos a encontrar la solución ideal para tu negocio.",
  "Empezar con PRO": "Empezar con PRO",
  "Escalar con PRO+": "Escalar con PRO+",
  "Trabajar con Glipce": "Trabajar con Glipce",
  
  // Additional translations for plan descriptions
  "Presencia web profesional con IA": "Presencia web profesional con IA",
  "Contenido estratégico con IA": "Contenido estratégico con IA",
  "Solución digital completa": "Solución digital completa",
  "Negocios que necesitan una presencia web profesional con atención automatizada.": "Negocios que necesitan una presencia web profesional con atención automatizada.",
  "Negocios con web que necesitan contenido constante para sus plataformas digitales.": "Negocios con web que necesitan contenido constante para sus plataformas digitales.",
  "Empresas que quieren delegar completamente su presencia digital y enfocarse en su negocio.": "Empresas que quieren delegar completamente su presencia digital y enfocarse en su negocio.",
  
  // Footer translations
  "Cambiar a Español": "Cambiar a Español",
  "Switch to English": "Switch to English",
  "Producción de videos": "Producción de videos",
  "Landing Pages & Web": "Landing Pages & Web",
  "Empresa": "Empresa",
  "Nuestros Planes": "Nuestros Planes",
  "Creamos embudos de venta completos con videos profesionales, landing pages efectivas y agentes IA que automatizan la atención al cliente y las ventas.": "Creamos embudos de venta completos con videos profesionales, landing pages efectivas y agentes IA que automatizan la atención al cliente y las ventas.",
  "Todos los derechos reservados.": "Todos los derechos reservados.",
  
  // Services page translations
  "Servicios para impulsar tu negocio": "Servicios para impulsar tu negocio",
  "Todo lo que necesitas para crear un embudo de ventas efectivo: desde la captación con contenido viral hasta la conversión automatizada.": "Todo lo que necesitas para crear un embudo de ventas efectivo: desde la captación con contenido viral hasta la conversión automatizada.",
  "Producción profesional": "Producción profesional",
  "Creación de Contenido": "Creación de Contenido",
  "Diseño y desarrollo": "Diseño y desarrollo",
  "Landing Pages a Medida": "Landing Pages a Medida",
  "Automatización inteligente": "Automatización inteligente",
  "Agentes de IA para tu Negocio": "Agentes de IA para tu Negocio",
  "Nuestras soluciones": "Nuestras soluciones",
  "Problemas que resolvemos": "Problemas que resolvemos",
  "Solicitar información": "Solicitar información",
  "¿No tienes tiempo para crear contenido constantemente?": "¿No tienes tiempo para crear contenido constantemente?",
  "La mayoría de los negocios saben que necesitan publicar en redes sociales, pero el día a día los consume y terminan abandonando esta tarea crucial.": "La mayoría de los negocios saben que necesitan publicar en redes sociales, pero el día a día los consume y terminan abandonando esta tarea crucial.",
  "¿Tu contenido no genera suficiente engagement?": "¿Tu contenido no genera suficiente engagement?",
  "Publicar por publicar no funciona. Sin una estrategia y calidad profesional, tus videos pasan desapercibidos entre miles de contenidos.": "Publicar por publicar no funciona. Sin una estrategia y calidad profesional, tus videos pasan desapercibidos entre miles de contenidos.",
  "¿Inviertes en publicidad pero no logras conversiones?": "¿Inviertes en publicidad pero no logras conversiones?",
  "Sin un contenido que conecte emocionalmente con tu audiencia, incluso las mejores campañas publicitarias fallan en convertir.": "Sin un contenido que conecte emocionalmente con tu audiencia, incluso las mejores campañas publicitarias fallan en convertir.",
  "Creamos guiones profesionales enfocados en tu audiencia y objetivos de negocio": "Creamos guiones profesionales enfocados en tu audiencia y objetivos de negocio",
  "Nos encargamos de la grabación in situ con equipo profesional, sin molestias para ti": "Nos encargamos de la grabación in situ con equipo profesional, sin molestias para ti",
  "Editamos y optimizamos los videos para cada plataforma (Instagram, TikTok, YouTube)": "Editamos y optimizamos los videos para cada plataforma (Instagram, TikTok, YouTube)",
  "Implementamos estrategias de storytelling que generan conexión emocional": "Implementamos estrategias de storytelling que generan conexión emocional",
  "Te entregamos calendario editorial y recomendaciones para maximizar el alcance": "Te entregamos calendario editorial y recomendaciones para maximizar el alcance",
  "¿Tu sitio web actual no convierte visitantes en clientes?": "¿Tu sitio web actual no convierte visitantes en clientes?",
  "Muchos sitios web son bonitos pero no están diseñados con un embudo de conversión claro, por lo que pierden potenciales clientes en cada visita.": "Muchos sitios web son bonitos pero no están diseñados con un embudo de conversión claro, por lo que pierden potenciales clientes en cada visita.",
  "¿Tus campañas generan tráfico pero pocas ventas?": "¿Tus campañas generan tráfico pero pocas ventas?",
  "Sin una landing page específica para cada campaña, estás desperdiciando tu inversión en publicidad al enviar usuarios a páginas genéricas.": "Sin una landing page específica para cada campaña, estás desperdiciando tu inversión en publicidad al enviar usuarios a páginas genéricas.",
  "¿No sabes qué está funcionando y qué no en tu sitio?": "¿No sabes qué está funcionando y qué no en tu sitio?",
  "Sin analítica implementada correctamente, es imposible optimizar tu sitio web y tomar decisiones basadas en datos.": "Sin analítica implementada correctamente, es imposible optimizar tu sitio web y tomar decisiones basadas en datos.",
  "Diseñamos landing pages centradas en conversión con una estructura que guía al usuario": "Diseñamos landing pages centradas en conversión con una estructura que guía al usuario",
  "Implementamos formularios optimizados que maximizan la captura de leads": "Implementamos formularios optimizados que maximizan la captura de leads",
  "Integramos tu landing con herramientas de email marketing, CRM y analítica": "Integramos tu landing con herramientas de email marketing, CRM y analítica",
  "Optimizamos la velocidad de carga y experiencia móvil para reducir el abandono": "Optimizamos la velocidad de carga y experiencia móvil para reducir el abandono",
  "Realizamos pruebas A/B para mejorar continuamente las tasas de conversión": "Realizamos pruebas A/B para mejorar continuamente las tasas de conversión",
  "¿Tu equipo pierde tiempo respondiendo las mismas preguntas?": "¿Tu equipo pierde tiempo respondiendo las mismas preguntas?",
  "Las consultas repetitivas saturan a tu personal y les impiden enfocarse en tareas de mayor valor que realmente necesitan intervención humana.": "Las consultas repetitivas saturan a tu personal y les impiden enfocarse en tareas de mayor valor que realmente necesitan intervención humana.",
  "¿Pierdes clientes potenciales fuera del horario laboral?": "¿Pierdes clientes potenciales fuera del horario laboral?",
  "Cuando un cliente interesado no recibe respuesta inmediata, la probabilidad de que contacte a tu competencia aumenta significativamente.": "Cuando un cliente interesado no recibe respuesta inmediata, la probabilidad de que contacte a tu competencia aumenta significativamente.",
  "¿El proceso de ventas o atención es inconsistente?": "¿El proceso de ventas o atención es inconsistente?",
  "Sin automatización, la calidad del servicio depende de quién atiende, su estado de ánimo o carga de trabajo, creando experiencias dispares.": "Sin automatización, la calidad del servicio depende de quién atiende, su estado de ánimo o carga de trabajo, creando experiencias dispares.",
  "Implementamos chatbots inteligentes entrenados con la información específica de tu negocio": "Implementamos chatbots inteligentes entrenados con la información específica de tu negocio",
  "Configuramos integraciones con WhatsApp Business, tu web y redes sociales": "Configuramos integraciones con WhatsApp Business, tu web y redes sociales",
  "Automatizamos procesos de calificación de leads y agendamiento de citas": "Automatizamos procesos de calificación de leads y agendamiento de citas",
  "Programamos escenarios de conversación que reflejan el tono de tu marca": "Programamos escenarios de conversación que reflejan el tono de tu marca",
  "Proporcionamos reportes detallados de conversaciones e insights para mejorar tu negocio": "Proporcionamos reportes detallados de conversaciones e insights para mejorar tu negocio",
  "¿Listo para impulsar tu negocio?": "¿Listo para impulsar tu negocio?",
  "Nuestro enfoque de embudo completo multiplica los resultados. Combina estos servicios para crear un sistema de captación, conversión y fidelización que funciona automáticamente.": "Nuestro enfoque de embudo completo multiplica los resultados. Combina estos servicios para crear un sistema de captación, conversión y fidelización que funciona automáticamente.",
  "Solicitar una consulta gratuita": "Solicitar una consulta gratuita",
  
  // Contact page translations
  "Hablemos sobre tu proyecto": "Hablemos sobre tu proyecto",
  "Respuesta en menos de 24 horas": "Respuesta en menos de 24 horas",
  "Completa el formulario y te contactaremos para discutir cómo podemos ayudarte": "Completa el formulario y te contactaremos para discutir cómo podemos ayudarte",
  "Nombre completo": "Nombre completo",
  "Ingresa tu nombre completo": "Ingresa tu nombre completo",
  "Correo electrónico": "Correo electrónico",
  "Por favor, ingresa un correo electrónico válido": "Por favor, ingresa un correo electrónico válido",
  "Teléfono (opcional)": "Teléfono (opcional)",
  "Formato de teléfono inválido": "Formato de teléfono inválido",
  "Nombre de tu empresa": "Nombre de tu empresa",
  "¿Qué servicio te interesa?": "¿Qué servicio te interesa?",
  "Selecciona un servicio": "Selecciona un servicio",
  "Landing page / Página web": "Landing page / Página web",
  "Embudo de ventas completo": "Embudo de ventas completo",
  "Otro / No estoy seguro": "Otro / No estoy seguro",
  "¿Cómo podemos ayudarte?": "¿Cómo podemos ayudarte?",
  "Cuéntanos un poco sobre tu proyecto o necesidad": "Cuéntanos un poco sobre tu proyecto o necesidad",
  "Error al enviar el formulario": "Error al enviar el formulario",
  "Error al enviar el formulario:": "Error al enviar el formulario:",
  "Otras formas de contacto": "Otras formas de contacto",
  "Escríbenos para cualquier consulta comercial": "Escríbenos para cualquier consulta comercial",
  "Teléfono": "Teléfono",
  "Disponible de lunes a viernes de 9:00 a 18:00": "Disponible de lunes a viernes de 9:00 a 18:00",
  "WhatsApp": "WhatsApp",
  "Respuesta rápida vía WhatsApp Business": "Respuesta rápida vía WhatsApp Business",
  "Iniciar chat": "Iniciar chat",
  "Nuestro compromiso": "Nuestro compromiso",
  "Te responderemos en menos de 24 horas con un análisis personalizado de tu proyecto y las mejores opciones para alcanzar tus objetivos.": "Te responderemos en menos de 24 horas con un análisis personalizado de tu proyecto y las mejores opciones para alcanzar tus objetivos."
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
      title: "Thank you for your message!",
      message: "We'll get back to you as soon as possible.",
      restart: "Start over"
    },
    error: {
      title: "Submission error",
      message: "There was a problem submitting your form.",
      retry: "Try again"
    }
  },
  
  // Homepage sections
  homepage: {
    hero: {
      title: "Power up your business with content and AI",
      subtitle: "We create complete sales funnels: from viral videos and effective web pages to AI agents that automate customer service and sales.",
      cta: "Schedule your free call"
    }
  },
  
  // Hero Section additional elements
  heroSection: {
    viewServices: "View services",
    cta: {
      secondary: "View plans"
    },
    features: {
      fast: "Record delivery times",
      support: "Systematized process",
      roi: "Superior quality"
    },
    decorative: {
      cubeHelix: "Decorative cube",
      helix: "Decorative helix",
      star: "Decorative star",
      bulb: "Decorative bulb"
    }
  },
  
  // Features card section
  featuresCard: {
    title: "Your complete sales funnel",
    subtitle: "We create an integrated system that connects all touchpoints with your customers: from the first video to automated conversion.",
    items: [
      {
        title: "Professional Content Creation",
        description: "We record and produce professional content for your social media platforms, creating viral videos with professional scripts and high-quality editing."
      },
      {
        title: "Web Page Creation",
        description: "We design complete landing pages to land all your potential customers, optimized to convert visits into leads and sales."
      },
      {
        title: "AI Agents",
        description: "We create custom chatbots for your business and customer service that answer queries and generate leads automatically 24/7."
      }
    ]
  },
  
  // Interface section
  "Proceso": "Process",
  "¿Cómo trabajamos?": "How do we work?",
  "Un proceso simple y efectivo para transformar tu negocio con tecnología de vanguardia": "A simple and effective process to transform your business with cutting-edge technology",
  "Reunión de diagnóstico": "Diagnostic Meeting",
  "Entendemos tu negocio, objetivos y necesidades específicas para crear una estrategia personalizada.": "We understand your business, goals, and specific needs to create a personalized strategy.",
  "Kickoff": "Kickoff",
  "Definimos metas concretas, establecemos accesos necesarios y acordamos plazos de entrega realistas.": "We define concrete goals, establish necessary accesses, and agree on realistic delivery deadlines.",
  "Desarrollo": "Development",
  "Diseñamos, programamos e integramos soluciones personalizadas que se ajustan a tus necesidades específicas.": "We design, program, and integrate customized solutions that adjust to your specific needs.",
  "Seguimiento": "Follow-up",
  "Realizamos optimización constante de resultados y proponemos mejoras adicionales para maximizar tu inversión.": "We perform constant optimization of results and propose additional improvements to maximize your investment.",
  "Anterior": "Previous",
  "Siguiente": "Next",
  
  // FAQ section
  "Preguntas frecuentes": "Frequently Asked Questions",
  "Respondemos a las dudas más comunes sobre nuestros servicios y cómo pueden ayudarte a potenciar tu negocio": "We answer the most common questions about our services and how they can help you boost your business",
  "¿Cómo funciona el proceso de producción de videos?": "How does the video production process work?",
  "Nuestro proceso de producción es completo: creamos guiones profesionales, nos encargamos de la grabación en tu negocio y realizamos la edición con alta calidad. Los videos están diseñados para captar atención y generar engagement en redes sociales, dirigiendo tráfico a tus landing pages.": "Our production process is complete: we create professional scripts, handle the recording at your business, and perform high-quality editing. The videos are designed to capture attention and generate engagement on social media, driving traffic to your landing pages.",
  "¿Qué incluye el desarrollo de una landing page?": "What does landing page development include?",
  "Nuestras landing pages están diseñadas para maximizar conversiones. Incluyen diseño responsive, formularios de captura de leads, integración con tus herramientas de marketing, optimización SEO básica y están preparadas para recibir el tráfico de tus videos de redes sociales.": "Our landing pages are designed to maximize conversions. They include responsive design, lead capture forms, integration with your marketing tools, basic SEO optimization, and are prepared to receive traffic from your social media videos.",
  "¿Cómo funcionan los agentes de IA?": "How do AI agents work?",
  "Desarrollamos chatbots personalizados para atender clientes 24/7, resolver dudas frecuentes y capturar leads. Pueden implementarse en tu sitio web, WhatsApp Business o redes sociales. Los agentes son entrenados con información de tu negocio para ofrecer respuestas precisas y relevantes.": "We develop custom chatbots to serve customers 24/7, resolve frequent questions, and capture leads. They can be implemented on your website, WhatsApp Business, or social media. The agents are trained with information about your business to offer precise and relevant answers.",
  "¿Cuánto tiempo toma implementar todo el embudo de ventas?": "How long does it take to implement the entire sales funnel?",
  "Nuestro proceso sistematizado permite tiempos de entrega récord. Una implementación completa (videos + landing page + agente IA) puede estar funcionando en 3-4 semanas. Priorizamos la calidad y la eficiencia en cada paso del proceso para que puedas ver resultados lo antes posible.": "Our systematized process allows for record delivery times. A complete implementation (videos + landing page + AI agent) can be functioning within 3-4 weeks. We prioritize quality and efficiency at each step of the process so you can see results as soon as possible.",
  "¿Los precios incluyen IVA?": "Do prices include VAT?",
  "No, the prices shown in our plans are without VAT. The tax will be added to the final invoice according to applicable tax laws in your country or region.": "No, the prices shown in our plans are without VAT. The tax will be added to the final invoice according to applicable tax laws in your country or region.",
  "¿Tienes más preguntas?": "Do you have more questions?",
  "Contáctanos para obtener respuestas personalizadas": "Contact us for personalized answers",
  
  // Navigation items
  Servicios: "Services",
  Planes: "Plans",
  Contacto: "Contact",
  "Agendar llamada": "Schedule call",
  "Cerrar menú": "Close menu",
  "Abrir menú": "Open menu",
  "Soluciones digitales para tu negocio": "Digital solutions for your business",
  "Potencia tu negocio con tiempos récord y calidad superior": "Power up your business with record times and superior quality",
  "Nuestro proceso sistematizado garantiza eficiencia sin sacrificar calidad. Creamos tu embudo de ventas completo: desde videos virales y páginas web efectivas hasta agentes IA que automatizan la atención.": "Our systematized process guarantees efficiency without sacrificing quality. We create your complete sales funnel: from viral videos and effective web pages to AI agents that automate customer service.",
  "Agendar llamada gratuita": "Schedule a free call",
  "Ver planes": "View plans",

  // Pricing features
  "Página web optimizada / personalizada": "Optimized / custom web page",
  "Agente de IA 24/7": "24/7 AI agent",
  "SEO básico": "Basic SEO",
  "Vídeos mensuales": "Monthly videos",
  "Contenido SEO": "SEO content",
  "Estrategia de contenido": "Content strategy",
  "Característica": "Feature",
  "Precio": "Price",
  "Incluido": "Included",
  "No incluido": "Not included",
  "Desde": "From",
  "Características principales:": "Key features:",
  "Ideal para:": "Ideal for:",

  // Pricing plans titles and CTAs
  "Planes simples, resultados extraordinarios": "Simple plans, extraordinary results",
  "Soluciones claras para impulsar tu negocio con tecnología, contenido y estrategia. Sin complicaciones.": "Clear solutions to boost your business with technology, content, and strategy. No complications.",
  "Comparación de planes": "Plan comparison",
  "Encuentra el plan ideal para tu negocio con esta comparativa completa de características.": "Find the ideal plan for your business with this complete feature comparison.",
  "¿Por qué elegir Glipce?": "Why choose Glipce?",
  "Nos diferenciamos por combinar tecnología avanzada con un enfoque personalizado.": "We differ by combining advanced technology with a personalized approach.",
  "Simple y efectivo": "Simple and effective",
  "Sin complicaciones. Soluciones claras y resultados medibles para tu negocio.": "No complications. Clear solutions and measurable results for your business.",
  "Todo integrado": "All integrated",
  "Web, contenido y automatización trabajando juntos, no por separado.": "Web, content, and automation working together, not separately.",
  "Atención humana": "Human attention",
  "Tecnología potente con soporte humano. Nunca estarás solo.": "Powerful technology with human support. You'll never be alone.",
  "¿Dudas sobre qué plan elegir?": "Doubts about which plan to choose?",
  "Agenda una llamada gratuita de 15 minutos. Te ayudamos a encontrar la solución ideal para tu negocio.": "Schedule a free 15-minute call. We help you find the ideal solution for your business.",
  "Empezar con PRO": "Start with PRO",
  "Escalar con PRO+": "Scale with PRO+",
  "Trabajar con Glipce": "Work with Glipce",
  
  // Additional translations for plan descriptions
  "Presencia web profesional con IA": "Professional web presence with AI",
  "Contenido estratégico con IA": "Strategic content with AI",
  "Solución digital completa": "Complete digital solution",
  "Negocios que necesitan una presencia web profesional con atención automatizada.": "Businesses that need a professional web presence with automated attention.",
  "Negocios con web que necesitan contenido constante para sus plataformas digitales.": "Businesses with a website that need constant content for their digital platforms.",
  "Empresas que quieren delegar completamente su presencia digital y enfocarse en su negocio.": "Companies that want to completely delegate their digital presence and focus on their business.",
  
  // Footer translations
  "Cambiar a Español": "Switch to Spanish",
  "Producción de videos": "Video production",
  "Landing Pages & Web": "Landing Pages & Web",
  "Empresa": "Company",
  "Nuestros Planes": "Our Plans",
  "Creamos embudos de venta completos con videos profesionales, landing pages efectivas y agentes IA que automatizan la atención al cliente y las ventas.": "We create complete sales funnels with professional videos, effective landing pages, and AI agents that automate customer service and sales.",
  "Todos los derechos reservados.": "All rights reserved.",
  
  // Services page translations
  "Servicios para impulsar tu negocio": "Services to boost your business",
  "Todo lo que necesitas para crear un embudo de ventas efectivo: desde la captación con contenido viral hasta la conversión automatizada.": "Everything you need to create an effective sales funnel: from attracting with viral content to automated conversion.",
  "Producción profesional": "Professional production",
  "Creación de Contenido": "Content Creation",
  "Diseño y desarrollo": "Design and development",
  "Landing Pages a Medida": "Custom Landing Pages",
  "Automatización inteligente": "Intelligent automation",
  "Agentes de IA para tu Negocio": "AI Agents for your Business",
  "Nuestras soluciones": "Our solutions",
  "Problemas que resolvemos": "Problems we solve",
  "Solicitar información": "Request information",
  "¿No tienes tiempo para crear contenido constantemente?": "Don't have time to create content constantly?",
  "La mayoría de los negocios saben que necesitan publicar en redes sociales, pero el día a día los consume y terminan abandonando esta tarea crucial.": "Most businesses know they need to post on social media, but day-to-day operations consume them and they end up abandoning this crucial task.",
  "¿Tu contenido no genera suficiente engagement?": "Does your content not generate enough engagement?",
  "Publicar por publicar no funciona. Sin una estrategia y calidad profesional, tus videos pasan desapercibidos entre miles de contenidos.": "Posting for the sake of posting doesn't work. Without a strategy and professional quality, your videos go unnoticed among thousands of content pieces.",
  "¿Inviertes en publicidad pero no logras conversiones?": "Investing in advertising but not achieving conversions?",
  "Sin un contenido que conecte emocionalmente con tu audiencia, incluso las mejores campañas publicitarias fallan en convertir.": "Without content that connects emotionally with your audience, even the best advertising campaigns fail to convert.",
  "Creamos guiones profesionales enfocados en tu audiencia y objetivos de negocio": "We create professional scripts focused on your audience and business objectives",
  "Nos encargamos de la grabación in situ con equipo profesional, sin molestias para ti": "We handle on-site recording with professional equipment, without hassle for you",
  "Editamos y optimizamos los videos para cada plataforma (Instagram, TikTok, YouTube)": "We edit and optimize videos for each platform (Instagram, TikTok, YouTube)",
  "Implementamos estrategias de storytelling que generan conexión emocional": "We implement storytelling strategies that generate emotional connection",
  "Te entregamos calendario editorial y recomendaciones para maximizar el alcance": "We provide an editorial calendar and recommendations to maximize reach",
  "¿Tu sitio web actual no convierte visitantes en clientes?": "Does your current website not convert visitors into customers?",
  "Muchos sitios web son bonitos pero no están diseñados con un embudo de conversión claro, por lo que pierden potenciales clientes en cada visita.": "Many websites are pretty but not designed with a clear conversion funnel, so they lose potential customers on each visit.",
  "¿Tus campañas generan tráfico pero pocas ventas?": "Do your campaigns generate traffic but few sales?",
  "Sin una landing page específica para cada campaña, estás desperdiciando tu inversión en publicidad al enviar usuarios a páginas genéricas.": "Without a specific landing page for each campaign, you're wasting your advertising investment by sending users to generic pages.",
  "¿No sabes qué está funcionando y qué no en tu sitio?": "Not sure what's working and what's not on your site?",
  "Sin analítica implementada correctamente, es imposible optimizar tu sitio web y tomar decisiones basadas en datos.": "Without properly implemented analytics, it's impossible to optimize your website and make data-driven decisions.",
  "Diseñamos landing pages centradas en conversión con una estructura que guía al usuario": "We design conversion-focused landing pages with a structure that guides the user",
  "Implementamos formularios optimizados que maximizan la captura de leads": "We implement optimized forms that maximize lead capture",
  "Integramos tu landing con herramientas de email marketing, CRM y analítica": "We integrate your landing page with email marketing, CRM, and analytics tools",
  "Optimizamos la velocidad de carga y experiencia móvil para reducir el abandono": "We optimize loading speed and mobile experience to reduce bounce rate",
  "Realizamos pruebas A/B para mejorar continuamente las tasas de conversión": "We conduct A/B tests to continuously improve conversion rates",
  "¿Tu equipo pierde tiempo respondiendo las mismas preguntas?": "Does your team waste time answering the same questions?",
  "Las consultas repetitivas saturan a tu personal y les impiden enfocarse en tareas de mayor valor que realmente necesitan intervención humana.": "Repetitive queries saturate your staff and prevent them from focusing on higher-value tasks that truly need human intervention.",
  "¿Pierdes clientes potenciales fuera del horario laboral?": "Losing potential customers outside business hours?",
  "Cuando un cliente interesado no recibe respuesta inmediata, la probabilidad de que contacte a tu competencia aumenta significativamente.": "When an interested customer doesn't receive an immediate response, the likelihood of them contacting your competition increases significantly.",
  "¿El proceso de ventas o atención es inconsistente?": "Is your sales or customer service process inconsistent?",
  "Sin automatización, la calidad del servicio depende de quién atiende, su estado de ánimo o carga de trabajo, creando experiencias dispares.": "Without automation, service quality depends on who attends, their mood, or workload, creating disparate experiences.",
  "Implementamos chatbots inteligentes entrenados con la información específica de tu negocio": "We implement intelligent chatbots trained with specific information about your business",
  "Configuramos integraciones con WhatsApp Business, tu web y redes sociales": "We set up integrations with WhatsApp Business, your website, and social media",
  "Automatizamos procesos de calificación de leads y agendamiento de citas": "We automate lead qualification processes and appointment scheduling",
  "Programamos escenarios de conversación que reflejan el tono de tu marca": "We program conversation scenarios that reflect your brand's tone",
  "Proporcionamos reportes detallados de conversaciones e insights para mejorar tu negocio": "We provide detailed reports of conversations and insights to improve your business",
  "¿Listo para impulsar tu negocio?": "Ready to boost your business?",
  "Nuestro enfoque de embudo completo multiplica los resultados. Combina estos servicios para crear un sistema de captación, conversión y fidelización que funciona automáticamente.": "Our complete funnel approach multiplies results. Combine these services to create a system of attraction, conversion, and loyalty that works automatically.",
  "Solicitar una consulta gratuita": "Request a free consultation",
  
  // Contact page translations
  "Hablemos sobre tu proyecto": "Let's talk about your project",
  "Respuesta en menos de 24 horas": "Response within 24 hours",
  "Completa el formulario y te contactaremos para discutir cómo podemos ayudarte": "Complete the form and we'll contact you to discuss how we can help",
  "Nombre completo": "Full name",
  "Ingresa tu nombre completo": "Enter your full name",
  "Por favor, ingresa un correo electrónico válido": "Please enter a valid email address",
  "Teléfono (opcional)": "Phone (optional)",
  "Formato de teléfono inválido": "Invalid phone format",
  "Nombre de tu empresa": "Your company name",
  "¿Qué servicio te interesa?": "Which service are you interested in?",
  "Selecciona un servicio": "Select a service",
  "Landing page / Página web": "Landing page / Website",
  "Embudo de ventas completo": "Complete sales funnel",
  "Otro / No estoy seguro": "Other / Not sure",
  "¿Cómo podemos ayudarte?": "How can we help you?",
  "Cuéntanos un poco sobre tu proyecto o necesidad": "Tell us a bit about your project or need",
  "Error al enviar el formulario": "Error sending the form",
  "Error al enviar el formulario:": "Error sending the form:",
  "Otras formas de contacto": "Other ways to contact us",
  "Email": "Email",
  "Escríbenos para cualquier consulta comercial": "Write to us for any commercial inquiry",
  "Teléfono": "Phone",
  "Disponible de lunes a viernes de 9:00 a 18:00": "Available Monday to Friday from 9:00 to 18:00",
  "WhatsApp": "WhatsApp",
  "Respuesta rápida vía WhatsApp Business": "Quick response via WhatsApp Business",
  "Iniciar chat": "Start chat",
  "Nuestro compromiso": "Our commitment",
  "Te responderemos en menos de 24 horas con un análisis personalizado de tu proyecto y las mejores opciones para alcanzar tus objetivos.": "We'll respond within 24 hours with a personalized analysis of your project and the best options to achieve your goals."
};

// Merge the additional translations
// Object.assign(englishTranslations, spanishTranslations);

// Combined translations - simplified type
const translations: Record<Language, NestedTranslations> = {
  en: englishTranslations,
  es: spanishTranslations
};

// Flatten nested translations for simpler access
const flattenTranslations = (obj: any, prefix = ''): Record<string, string> => {
  return Object.keys(obj).reduce((acc: Record<string, string>, k: string) => {
    const pre = prefix.length ? `${prefix}.` : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenTranslations(obj[k], `${pre}${k}`));
    } else {
      acc[`${pre}${k}`] = String(obj[k]);
    }
    return acc;
  }, {});
};

// Create flattened versions of our translations
const flatEnglishTranslations = flattenTranslations(englishTranslations);
const flatSpanishTranslations = flattenTranslations(spanishTranslations);

// Flattened translations for direct key access
const flatTranslations: Record<Language, Record<string, string>> = {
  en: flatEnglishTranslations,
  es: flatSpanishTranslations
};

// Proveedor de traducciones
export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Intenta obtener el idioma guardado en localStorage, o usa la preferencia del navegador
    try {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      return savedLanguage;
      }
    } catch (error) {
      console.warn('Error accessing localStorage', error);
    }
    
    // Detecta el idioma del navegador
    try {
    const browserLanguage = navigator.language.split('-')[0];
    return browserLanguage === 'en' ? 'en' : 'es';
    } catch (error) {
      console.warn('Error detecting browser language', error);
      return 'es'; // Default fallback
    }
  });

  // Simplified translation function using flattened translations
  const t = (key: string): string => {
    try {
      // Check if the key exists in flattened translations
      if (flatTranslations[language][key]) {
        return flatTranslations[language][key];
      }
      
      // Navigating through nested objects using the dot notation
      const parts = key.split('.');
      let value: any = translations[language];
      
      for (const part of parts) {
        if (value && typeof value === 'object' && part in value) {
          value = value[part];
        } else {
          value = undefined;
          break;
        }
      }
      
      if (value !== undefined && typeof value !== 'object') {
        return String(value);
      }
      
      // Fall back to direct lookup for simple keys
      if (translations[language][key] !== undefined) {
        return String(translations[language][key]);
      }
      
      // If not found in current language, check if it exists in 'es' (default)
      if (language === 'en') {
        // Try nested lookup in spanish
        let fallbackValue: any = translations['es'];
        for (const part of parts) {
          if (fallbackValue && typeof fallbackValue === 'object' && part in fallbackValue) {
            fallbackValue = fallbackValue[part];
          } else {
            fallbackValue = undefined;
            break;
          }
        }
        
        if (fallbackValue !== undefined && typeof fallbackValue !== 'object') {
          return String(fallbackValue);
        }
        
        // Try direct lookup in spanish
        if (translations['es'][key] !== undefined) {
          return String(translations['es'][key]);
        }
      }
      
      // Development warning for missing translations
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Translation missing for key: ${key}`);
      }
      
      // Fallback to the key itself if not found
      return key;
    } catch (error) {
      console.error(`Translation error for key "${key}"`, error);
      return key;
    }
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