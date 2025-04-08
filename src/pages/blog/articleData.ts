export interface ArticleContent {
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  tableOfContents: string[];
  content: ArticleContent[];
}

// Sample blog articles data
export const blogArticles: Article[] = [
  {
    id: 1,
    slug: "beneficios-automatizacion-empresarial",
    title: "7 Beneficios Clave de la Automatización Empresarial en 2024",
    category: "Automatización",
    date: "20 mayo, 2024",
    excerpt: "Descubra cómo la automatización empresarial puede transformar su negocio, aumentar la productividad y reducir costos operativos significativamente.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["automatización", "productividad", "eficiencia", "transformación digital"],
    tableOfContents: [
      "Reducción de costos operativos",
      "Aumento de la productividad",
      "Mejora de la experiencia del cliente",
      "Reducción de errores",
      "Escalabilidad de procesos",
      "Mayor análisis de datos",
      "Ventajas competitivas"
    ],
    content: [
      {
        title: "Reducción de costos operativos",
        paragraphs: [
          "La automatización de procesos empresariales permite reducir significativamente los costos operativos al eliminar tareas manuales repetitivas que consumen gran cantidad de tiempo y recursos.",
          "Las empresas que implementan soluciones de automatización reportan una reducción media del 40% en sus costos operativos relacionados con procesos administrativos. Esta disminución se debe principalmente a la menor necesidad de intervención humana y a la optimización de recursos."
        ],
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        imageAlt: "Gráfico mostrando reducción de costos operativos",
        imageCaption: "Análisis comparativo de costos antes y después de implementar automatización"
      },
      {
        title: "Aumento de la productividad",
        paragraphs: [
          "Al automatizar tareas repetitivas, los empleados pueden concentrarse en actividades de mayor valor que requieren creatividad, pensamiento estratégico y habilidades interpersonales.",
          "Según estudios recientes, las organizaciones que implementan automatización inteligente experimentan un aumento medio del 35% en la productividad general, permitiendo completar más tareas en menos tiempo y con mayor calidad."
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "inteligencia-artificial-servicio-cliente",
    title: "Cómo Implementar IA en el Servicio al Cliente para Mejorar la Satisfacción",
    category: "Inteligencia Artificial",
    date: "15 mayo, 2024",
    excerpt: "La inteligencia artificial está revolucionando el servicio al cliente. Descubra estrategias prácticas para implementar IA y aumentar la satisfacción de sus clientes.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["inteligencia artificial", "servicio al cliente", "chatbots", "experiencia cliente"],
    tableOfContents: [
      "El impacto de la IA en servicio al cliente",
      "Implementación de chatbots inteligentes",
      "Personalización a través de IA",
      "Análisis predictivo de necesidades",
      "Casos de éxito"
    ],
    content: [
      {
        title: "El impacto de la IA en servicio al cliente",
        paragraphs: [
          "La inteligencia artificial ha transformado radicalmente la manera en que las empresas interactúan con sus clientes, permitiendo respuestas más rápidas, personalizadas y efectivas a cualquier hora del día.",
          "Según un estudio de Gartner, las organizaciones que implementan IA en su servicio al cliente experimentan una reducción del 70% en el tiempo de resolución de consultas y un aumento del 25% en la satisfacción general."
        ],
        image: "https://images.unsplash.com/photo-1535378273068-9bb67d5bb288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        imageAlt: "Interfaz de servicio al cliente con IA",
        imageCaption: "Sistema de atención al cliente potenciado por inteligencia artificial"
      }
    ]
  }
];

// Add more sample articles
blogArticles.push(
  {
    id: 3,
    slug: "big-data-toma-decisiones",
    title: "Big Data: La Clave para la Toma de Decisiones Estratégicas",
    category: "Análisis de Datos",
    date: "10 mayo, 2024",
    excerpt: "El análisis de grandes volúmenes de datos está revolucionando la forma en que las empresas toman decisiones. Descubra cómo implementar Big Data en su estrategia empresarial.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["big data", "análisis", "toma de decisiones", "estrategia"],
    tableOfContents: [
      "Fundamentos del Big Data",
      "Infraestructura necesaria",
      "Análisis predictivo",
      "Visualización de datos",
      "Casos prácticos"
    ],
    content: [
      {
        title: "Fundamentos del Big Data",
        paragraphs: [
          "El Big Data se refiere al análisis de conjuntos de datos extremadamente grandes y complejos que las aplicaciones de procesamiento de datos tradicionales no pueden manejar adecuadamente.",
          "Este enfoque permite identificar patrones, tendencias y correlaciones ocultas que pueden transformar la forma en que una empresa toma decisiones estratégicas y operativas."
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "automatizacion-procesos-rpa",
    title: "RPA: La Revolución Silenciosa en la Automatización de Procesos",
    category: "Automatización",
    date: "5 mayo, 2024",
    excerpt: "La Automatización Robótica de Procesos (RPA) está transformando la manera en que las empresas gestionan tareas repetitivas. Descubra cómo implementarla efectivamente.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["RPA", "automatización", "procesos", "robótica"],
    tableOfContents: [
      "¿Qué es RPA?",
      "Beneficios principales",
      "Casos de uso comunes",
      "Implementación exitosa",
      "El futuro del RPA"
    ],
    content: [
      {
        title: "¿Qué es RPA?",
        paragraphs: [
          "La Automatización Robótica de Procesos (RPA) es una tecnología que permite configurar software o 'robots' para capturar e interpretar aplicaciones existentes con el fin de procesar transacciones, manipular datos, desencadenar respuestas y comunicarse con otros sistemas digitales.",
          "A diferencia de otras formas de automatización, RPA puede adaptarse a casi cualquier proceso de negocio sin necesidad de cambiar la infraestructura existente."
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "ciberseguridad-empresarial-2024",
    title: "Ciberseguridad Empresarial: Protegiendo su Negocio en la Era Digital",
    category: "Seguridad",
    date: "1 mayo, 2024",
    excerpt: "Con el aumento de los ciberataques, proteger los activos digitales se ha vuelto crucial. Descubra las mejores prácticas en ciberseguridad para empresas.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["ciberseguridad", "protección", "datos", "seguridad informática"],
    tableOfContents: [
      "Amenazas actuales",
      "Estrategias de protección",
      "Gestión de incidentes",
      "Capacitación del personal",
      "Tecnologías emergentes"
    ],
    content: [
      {
        title: "Amenazas actuales",
        paragraphs: [
          "El panorama de amenazas cibernéticas evoluciona constantemente, con atacantes desarrollando métodos cada vez más sofisticados para vulnerar la seguridad de las empresas.",
          "Según informes recientes, los ataques de ransomware aumentaron un 150% en el último año, mientras que las filtraciones de datos afectaron a más de 35 millones de registros empresariales a nivel mundial."
        ]
      }
    ]
  },
  {
    id: 6,
    slug: "cloud-computing-transformacion-digital",
    title: "Cloud Computing: El Pilar Fundamental de la Transformación Digital",
    category: "Tecnología",
    date: "25 abril, 2024",
    excerpt: "La migración a la nube está redefiniendo cómo operan las empresas. Explore las ventajas, desafíos y estrategias para una implementación exitosa del cloud computing.",
    image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["cloud", "SaaS", "transformación digital", "infraestructura"],
    tableOfContents: [
      "Modelos de servicio en la nube",
      "Beneficios empresariales",
      "Consideraciones de seguridad",
      "Estrategias de migración",
      "Tendencias futuras"
    ],
    content: [
      {
        title: "Modelos de servicio en la nube",
        paragraphs: [
          "El cloud computing ofrece diversos modelos de servicio que las empresas pueden adoptar según sus necesidades específicas: IaaS (Infraestructura como Servicio), PaaS (Plataforma como Servicio) y SaaS (Software como Servicio).",
          "Cada modelo proporciona diferentes niveles de control, flexibilidad y responsabilidad compartida entre el proveedor y el cliente, permitiendo a las organizaciones elegir la opción que mejor se adapte a sus objetivos estratégicos y operativos."
        ]
      }
    ]
  },
  {
    id: 7,
    slug: "blockchain-aplicaciones-empresariales",
    title: "Blockchain Más Allá de las Criptomonedas: Aplicaciones Empresariales",
    category: "Innovación",
    date: "20 abril, 2024",
    excerpt: "La tecnología blockchain está encontrando aplicaciones revolucionarias en diversos sectores empresariales. Descubra cómo esta tecnología puede transformar sus procesos de negocio.",
    image: "https://images.unsplash.com/photo-1621501473324-89cce33e2266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["blockchain", "contratos inteligentes", "trazabilidad", "descentralización"],
    tableOfContents: [
      "Fundamentos de blockchain",
      "Contratos inteligentes",
      "Cadena de suministro",
      "Finanzas descentralizadas",
      "Casos de éxito"
    ],
    content: [
      {
        title: "Fundamentos de blockchain",
        paragraphs: [
          "Blockchain es una tecnología de registro distribuido que permite almacenar información de manera inmutable, transparente y descentralizada, eliminando la necesidad de intermediarios y aumentando la confianza entre las partes.",
          "Su arquitectura única garantiza que una vez que los datos se registran, no pueden ser alterados sin que todos los participantes de la red sean notificados, lo que proporciona un nivel sin precedentes de seguridad y trazabilidad."
        ]
      }
    ]
  },
  {
    id: 8,
    slug: "inteligencia-artificial-generativa-empresas",
    title: "Inteligencia Artificial Generativa: Nuevas Oportunidades para Empresas",
    category: "Inteligencia Artificial",
    date: "15 abril, 2024",
    excerpt: "La IA generativa está creando nuevas posibilidades para la innovación empresarial. Explore cómo esta tecnología puede potenciar la creatividad y eficiencia en su organización.",
    image: "https://images.unsplash.com/photo-1677442135645-61d16f0b19fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["IA generativa", "innovación", "creatividad", "automatización"],
    tableOfContents: [
      "Qué es la IA generativa",
      "Aplicaciones en marketing",
      "Diseño y desarrollo de productos",
      "Optimización de contenidos",
      "Implementación práctica"
    ],
    content: [
      {
        title: "Qué es la IA generativa",
        paragraphs: [
          "La Inteligencia Artificial Generativa se refiere a algoritmos capaces de crear contenido nuevo y original, como texto, imágenes, música o diseños, tras haber sido entrenados con grandes cantidades de datos existentes.",
          "A diferencia de la IA tradicional que se centra en analizar y clasificar información, la IA generativa puede producir resultados completamente nuevos que no existían previamente, abriendo enormes posibilidades para la innovación empresarial."
        ],
        image: "https://images.unsplash.com/photo-1678995632928-896623cf8363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        imageAlt: "Representación visual de IA generativa",
        imageCaption: "Visualización de patrones generados por IA creativa"
      }
    ]
  }
); 