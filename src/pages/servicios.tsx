import React, { useState } from "react";
import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";
import { Button } from "../components/ui/button";
import { Check } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";

// Componente para la sección de servicio
const ServiceSection = ({
  title,
  subtitle,
  imageSrc,
  problems,
  solutions,
  id,
  color = "purple"
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  problems: { question: string; answer: string }[];
  solutions: string[];
  id: string;
  color?: "purple" | "blue" | "teal";
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  
  const colorMap = {
    purple: {
      light: "from-purple-500/10 to-purple-600/5",
      dark: "from-purple-900/20 to-purple-800/10",
      border: "border-purple-200 dark:border-purple-800/30",
      accent: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
    },
    blue: {
      light: "from-blue-500/10 to-blue-600/5",
      dark: "from-blue-900/20 to-blue-800/10",
      border: "border-blue-200 dark:border-blue-800/30",
      accent: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
    },
    teal: {
      light: "from-teal-500/10 to-teal-600/5",
      dark: "from-teal-900/20 to-teal-800/10",
      border: "border-teal-200 dark:border-teal-800/30",
      accent: "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300"
    }
  };
  
  return (
    <section id={id} className={`py-20 relative overflow-hidden border-b border-gray-200 dark:border-gray-800`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[color].light} dark:${colorMap[color].dark} opacity-50 -z-10`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${colorMap[color].accent} mb-4`}>
            {t(subtitle)}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t(title)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.div 
              className={`rounded-xl overflow-hidden bg-black mb-8 border ${colorMap[color].border} shadow-lg transition-all duration-300 transform max-h-[400px] flex items-center justify-center`}
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <img 
                src={imageSrc} 
                alt={t(title)} 
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </motion.div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                {t("Nuestras soluciones")}
              </h3>
              <ul className="space-y-3">
                {solutions.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {t(item)}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full md:w-auto mt-6"
                onClick={() => window.open('https://calendly.com/amarupaillan1966/30min', '_blank')}
              >
                {t("Solicitar información")}
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">
              {t("Problemas que resolvemos")}
            </h3>
            <div className="space-y-6">
              {problems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`bg-card/50 border ${colorMap[color].border} rounded-xl p-6 hover:shadow-md transition-all duration-300`}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {t(item.question)}
                  </h4>
                  <p className="text-muted-foreground">
                    {t(item.answer)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiciosPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Datos para servicios de creación de contenido
  const contentCreationProblems = [
    {
      question: "¿Tu contenido actual no genera engagement?",
      answer: "Muchas empresas publican contenido que no resuena con su audiencia, resultando en bajas tasas de interacción y conversión."
    },
    {
      question: "¿Falta de tiempo para crear contenido regularmente?",
      answer: "La creación de contenido de calidad requiere tiempo y recursos que muchas empresas simplemente no tienen disponibles internamente."
    },
    {
      question: "¿Tu contenido no refleja la calidad de tu marca?",
      answer: "Un contenido poco profesional puede dañar tu imagen de marca y reducir la confianza de tus clientes potenciales."
    }
  ];
  
  const contentCreationSolutions = [
    "Videos optimizados para cada plataforma",
    "Estrategia de contenido personalizada",
    "Copywriting persuasivo",
    "Diseño gráfico profesional",
    "Calendario editorial consistente"
  ];

  // Datos para servicios de desarrollo web
  const webProblems = [
    {
      question: "¿Tu sitio web actual no convierte visitantes en clientes?",
      answer: "Muchos sitios web están diseñados sin tener en cuenta la experiencia del usuario y los principios de conversión."
    },
    {
      question: "¿Tu página web tarda en cargar o no es responsive?",
      answer: "Un sitio lento o que no se adapta a dispositivos móviles puede aumentar la tasa de rebote hasta en un 40%."
    },
    {
      question: "¿No tienes forma de capturar leads efectivamente?",
      answer: "Sin las herramientas adecuadas, estás perdiendo potenciales clientes que visitan tu sitio pero no dan el siguiente paso."
    }
  ];
  
  const webSolutions = [
    "Diseño web personalizado y responsive",
    "Optimización para conversión (CRO)",
    "Integraciones con CRM y herramientas de marketing",
    "Formularios y embudos de captación de leads",
    "Optimización de velocidad de carga"
  ];

  // Datos para servicios de agentes IA
  const aiProblems = [
    {
      question: "¿No puedes dar atención 24/7 a tus clientes?",
      answer: "La falta de disponibilidad fuera de horario comercial puede resultar en la pérdida de clientes potenciales y ventas."
    },
    {
      question: "¿Procesos repetitivos consumen el tiempo de tu equipo?",
      answer: "Tu equipo dedica horas a tareas administrativas que podrían automatizarse, reduciendo su productividad."
    },
    {
      question: "¿Dificultad para escalar tu servicio al cliente?",
      answer: "Contratar más personal para soporte es costoso, pero no hacerlo limita tu capacidad para crecer."
    }
  ];
  
  const aiSolutions = [
    "Asistentes virtuales personalizados para tu negocio",
    "Automatización de procesos de atención al cliente",
    "Integración con tus sistemas existentes",
    "Aprendizaje continuo y mejora constante",
    "Analítica detallada de conversaciones e interacciones"
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-background via-background/80 to-background/50 py-16 relative overflow-hidden">
          {/* Decoration elements */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-purple-300/20 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/20 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              {t("Servicios para impulsar tu negocio")}
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
              {t("Todo lo que necesitas para crear un embudo de ventas efectivo: desde la captación con contenido viral hasta la conversión automatizada.")}
            </p>
          </div>
        </div>

        <ServiceSection 
          id="content-creation"
          title="Producción profesional"
          subtitle="Creación de Contenido"
          imageSrc="/assets/images/servicios/Content creation.png"
          problems={contentCreationProblems}
          solutions={contentCreationSolutions}
          color="purple"
        />

        <ServiceSection 
          id="web-development"
          title="Diseño y desarrollo"
          subtitle="Landing Pages a Medida"
          imageSrc="/assets/images/servicios/LAding pages.jpeg"
          problems={webProblems}
          solutions={webSolutions}
          color="blue"
        />

        <ServiceSection
          id="ai-agents"
          title="Automatización inteligente"
          subtitle="Agentes de IA para tu Negocio"
          imageSrc="/assets/images/servicios/AgentAI.png"
          problems={aiProblems}
          solutions={aiSolutions}
          color="teal"
        />
      </main>
      
      <div className="bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-teal-50/50 dark:from-purple-900/10 dark:via-blue-900/5 dark:to-teal-900/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
            {t("¿Listo para impulsar tu negocio?")}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            {t("Nuestro enfoque de embudo completo multiplica los resultados. Combina estos servicios para crear un sistema de captación, conversión y fidelización que funciona automáticamente.")}
          </p>
          <Button 
            size="lg"
            className="shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            onClick={() => window.open('https://calendly.com/amarupaillan1966/30min', '_blank')}
          >
            {t("Solicitar una consulta gratuita")}
          </Button>
        </div>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default ServiciosPage; 