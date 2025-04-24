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
          id="contenido"
          subtitle="Producción profesional"
          title="Creación de Contenido"
          imageSrc="/src/assets/images/servicios/Content creation.png"
          color="purple"
          problems={[
            {
              question: "¿No tienes tiempo para crear contenido constantemente?",
              answer: "La mayoría de los negocios saben que necesitan publicar en redes sociales, pero el día a día los consume y terminan abandonando esta tarea crucial."
            },
            {
              question: "¿Tu contenido no genera suficiente engagement?",
              answer: "Publicar por publicar no funciona. Sin una estrategia y calidad profesional, tus videos pasan desapercibidos entre miles de contenidos."
            },
            {
              question: "¿Inviertes en publicidad pero no logras conversiones?",
              answer: "Sin un contenido que conecte emocionalmente con tu audiencia, incluso las mejores campañas publicitarias fallan en convertir."
            }
          ]}
          solutions={[
            "Creamos guiones profesionales enfocados en tu audiencia y objetivos de negocio",
            "Nos encargamos de la grabación in situ con equipo profesional, sin molestias para ti",
            "Editamos y optimizamos los videos para cada plataforma (Instagram, TikTok, YouTube)",
            "Implementamos estrategias de storytelling que generan conexión emocional",
            "Te entregamos calendario editorial y recomendaciones para maximizar el alcance"
          ]}
        />

        <ServiceSection 
          id="landing"
          subtitle="Diseño y desarrollo"
          title="Landing Pages a Medida"
          imageSrc="/src/assets/images/servicios/LAding pages.jpeg"
          color="blue"
          problems={[
            {
              question: "¿Tu sitio web actual no convierte visitantes en clientes?",
              answer: "Muchos sitios web son bonitos pero no están diseñados con un embudo de conversión claro, por lo que pierden potenciales clientes en cada visita."
            },
            {
              question: "¿Tus campañas generan tráfico pero pocas ventas?",
              answer: "Sin una landing page específica para cada campaña, estás desperdiciando tu inversión en publicidad al enviar usuarios a páginas genéricas."
            },
            {
              question: "¿No sabes qué está funcionando y qué no en tu sitio?",
              answer: "Sin analítica implementada correctamente, es imposible optimizar tu sitio web y tomar decisiones basadas en datos."
            }
          ]}
          solutions={[
            "Diseñamos landing pages centradas en conversión con una estructura que guía al usuario",
            "Implementamos formularios optimizados que maximizan la captura de leads",
            "Integramos tu landing con herramientas de email marketing, CRM y analítica",
            "Optimizamos la velocidad de carga y experiencia móvil para reducir el abandono",
            "Realizamos pruebas A/B para mejorar continuamente las tasas de conversión"
          ]}
        />

        <ServiceSection 
          id="agentes"
          subtitle="Automatización inteligente"
          title="Agentes de IA para tu Negocio"
          imageSrc="/src/assets/images/servicios/AgentAI.png"
          color="teal"
          problems={[
            {
              question: "¿Tu equipo pierde tiempo respondiendo las mismas preguntas?",
              answer: "Las consultas repetitivas saturan a tu personal y les impiden enfocarse en tareas de mayor valor que realmente necesitan intervención humana."
            },
            {
              question: "¿Pierdes clientes potenciales fuera del horario laboral?",
              answer: "Cuando un cliente interesado no recibe respuesta inmediata, la probabilidad de que contacte a tu competencia aumenta significativamente."
            },
            {
              question: "¿El proceso de ventas o atención es inconsistente?",
              answer: "Sin automatización, la calidad del servicio depende de quién atiende, su estado de ánimo o carga de trabajo, creando experiencias dispares."
            }
          ]}
          solutions={[
            "Implementamos chatbots inteligentes entrenados con la información específica de tu negocio",
            "Configuramos integraciones con WhatsApp Business, tu web y redes sociales",
            "Automatizamos procesos de calificación de leads y agendamiento de citas",
            "Programamos escenarios de conversación que reflejan el tono de tu marca",
            "Proporcionamos reportes detallados de conversaciones e insights para mejorar tu negocio"
          ]}
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