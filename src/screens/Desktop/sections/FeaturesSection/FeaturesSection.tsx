import React from "react";
import { CheckIcon } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardTitle, 
  CardDescription 
} from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Badge } from "../../../../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { NavigationMenu, NavigationMenuList } from "../../../../components/ui/navigation-menu";

export const FeaturesSection = (): JSX.Element => {
  // Data for feature cards
  const featureCards = [
    {
      title: "Automatización Inteligente",
      description: "Mejore la eficiencia de su empresa mediante la automatización de procesos repetitivos, liberando a su personal para tareas de mayor valor."
    },
    {
      title: "Análisis Predictivo",
      description: "Optimice la toma de decisiones con modelos de IA que analizan tendencias y predicen comportamientos para anticiparse a las necesidades del mercado."
    },
    {
      title: "Seguridad Avanzada",
      description: "Proteja sus datos con la más avanzada tecnología en ciberseguridad, garantizando la confidencialidad y cumplimiento normativo."
    }
  ];

  // Data for pricing plans
  const pricingPlans = [
    {
      title: "Básico",
      price: "$1,499",
      tag: "/mensual",
      buttonText: "Comenzar ahora",
      features: [
        "Diagnóstico inicial gratuito",
        "Automatización de 1 proceso clave",
        "Soporte técnico básico",
        "Implementación en 2 semanas",
        "Formación básica para el equipo"
      ]
    },
    {
      title: "Empresarial",
      price: "$4,999",
      tag: "/mensual",
      buttonText: "Solicitar demostración",
      popular: true,
      features: [
        "Diagnóstico completo de procesos",
        "Automatización de 5 procesos",
        "Soporte técnico prioritario",
        "Implementación en 4 semanas",
        "Análisis de datos avanzado",
        "Formación completa para el equipo",
        "Informe mensual de ahorros"
      ]
    },
    {
      title: "Personalizado",
      price: "Consultar",
      tag: "",
      buttonText: "Contactar ahora",
      features: [
        "Evaluación estratégica completa",
        "Automatización de procesos ilimitada",
        "Soporte técnico 24/7",
        "Consultoría estratégica",
        "Análisis predictivo avanzado",
        "Integración total con sistemas existentes",
        "Formación especializada para equipos",
        "Desarrollo de soluciones a medida",
        "Dashboard ejecutivo de KPIs",
        "Gerente de cuenta dedicado"
      ]
    }
  ];

  // Data for testimonials
  const testimonials = [
    {
      text: "Desde que implementamos las soluciones de IA de esta consultora, nuestros procesos de facturación son 75% más rápidos y hemos reducido errores en un 90%.",
      name: "Carlos Méndez",
      handle: "@cmendez_finanzas",
      image: "/ellipse-1.png"
    },
    {
      text: "La automatización de nuestro servicio al cliente nos permitió reducir los tiempos de respuesta de 24 horas a solo 5 minutos, aumentando la satisfacción del cliente en un 63%.",
      name: "Laura Gómez",
      handle: "@lgomez",
      image: "/ellipse-1-1.png"
    },
    {
      text: "Implementar la solución de análisis predictivo nos ayudó a anticipar las tendencias del mercado y optimizar nuestro inventario, ahorrando más de $300,000 en el primer trimestre.",
      name: "Javier Ortega",
      handle: "@jortega_retail",
      image: "/ellipse-1-2.png"
    },
    {
      text: "La productividad de nuestro equipo aumentó un 45% desde que automatizamos los procesos administrativos. La inversión se recuperó en menos de 3 meses.",
      name: "Patricia Sánchez",
      handle: "@psanchez_ceo",
      image: "/ellipse-1-8.png"
    },
    {
      text: "La plataforma de IA nos permitió optimizar rutas de entrega reduciendo costos de combustible en un 30% y mejorando los tiempos de entrega en un 25%.",
      name: "Rodrigo Torres",
      handle: "@rtorres_logistics",
      image: "/ellipse-1-5.png"
    },
    {
      text: "Con las soluciones implementadas, automatizamos el 85% de las tareas manuales que realizaba nuestro departamento de RR.HH., permitiéndoles enfocarse en estrategias de desarrollo del talento.",
      name: "Sofía Morales",
      handle: "@smorales_rrhh",
      image: "/ellipse-1-3.png"
    },
    {
      text: "La IA transformó por completo nuestro proceso de atención al cliente, reduciendo el tiempo de resolución de incidencias en un 70% y aumentando la satisfacción del cliente.",
      name: "Miguel Ángel López",
      handle: "@malopez_customercare",
      image: "/ellipse-1-7.png"
    },
    {
      text: "La capacidad de integración con nuestros sistemas existentes fue excepcional, sin necesidad de cambiar toda nuestra infraestructura para implementar soluciones avanzadas.",
      name: "Elena García",
      handle: "@egarcia_tech",
      image: "/ellipse-1-6.png"
    },
    {
      text: "El retorno de inversión superó todas nuestras expectativas. En 6 meses recuperamos la inversión y ahora ahorramos más de $500,000 anuales en costos operativos.",
      name: "Daniel Martínez",
      handle: "@dmartinez_cfo",
      image: "/ellipse-1-4.png"
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "¿Cómo funciona el proceso de implementación de las soluciones?",
      answer: "Comenzamos con un diagnóstico para identificar oportunidades, diseñamos la solución a medida, implementamos gradualmente y monitoreamos el rendimiento para optimización continua."
    },
    {
      question: "¿Cuánto tiempo se tarda en implementar las soluciones?",
      answer: "El tiempo varía según la complejidad, pero generalmente entre 2 y 12 semanas. Nuestro enfoque ágil permite obtener resultados parciales durante el proceso."
    },
    {
      question: "¿Qué retorno de inversión puedo esperar?",
      answer: "Nuestros clientes suelen experimentar un ROI entre 3-10 veces su inversión durante el primer año, con ahorros que continúan creciendo con el tiempo."
    },
    {
      question: "¿Se integran sus soluciones con nuestros sistemas actuales?",
      answer: "Sí, nuestras soluciones están diseñadas para integrarse perfectamente con los sistemas existentes, sin necesidad de reemplazar su infraestructura actual."
    }
  ];

  // Company logos
  const companyLogos = [
    { src: "/acme-1.png", alt: "Acme", width: "146.42px", height: "32px" },
    { src: "/quantum-1.png", alt: "Quantum", width: "125.09px", height: "32px" },
    { src: "/echo-1.png", alt: "Echo", width: "160px", height: "28.12px" },
    { src: "/celestia-1.png", alt: "Celestia", width: "115.39px", height: "28.12px" },
    { src: "/pulse-1.png", alt: "Pulse", width: "100.85px", height: "22.3px" },
    { src: "/apex-1.png", alt: "Apex", width: "85.33px", height: "27.15px" }
  ];

  return (
    <section className="flex flex-col w-full items-center">
      {/* Announcement banner */}
      <div className="w-full bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center">
          <p className="text-black text-sm font-medium">
            Consultoría gratuita para las primeras 5 empresas
          </p>
          <a href="#" className="ml-3 flex items-center text-sm font-medium text-black hover:text-gray-800">
            Agendar ahora
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header className="w-full bg-transparent backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-white to-purple-600 text-transparent bg-clip-text">
              Glipce.com
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Nosotros</a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Soluciones</a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Clientes</a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Blog</a>
              <Button className="bg-white text-black hover:bg-gray-100 transition-colors rounded-lg">
                Agendar ahora
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button className="md:hidden bg-white text-black hover:bg-gray-100 transition-colors rounded-lg">
              Menú
            </Button>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <div className="w-full relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black z-0"></div>
        
        {/* Curved shape */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-black rounded-t-[50%] border-t border-purple-400 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40">
          <div className="flex flex-col items-center text-center">
            <Badge className="mb-6 border border-gray-800 bg-black/50 hover:bg-black/80 transition-colors cursor-pointer px-4 py-2 rounded-full">
              <span className="text-white text-xs">AI Transformadora</span>
              <div className="ml-2 flex items-center">
                <span className="text-white text-xs">Saber más</span>
                <svg className="ml-1 w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-none">
              Ahorra <br />
              con la AI
            </h1>
            
            <p className="max-w-2xl text-white text-lg mb-8">
              Automatizamos los procesos de su empresa mediante inteligencia artificial 
              avanzada, optimizando recursos y reduciendo costos operativos 
              hasta en un 40%.
            </p>
            
            <Button className="bg-white text-black hover:bg-gray-100 rounded-lg px-8 py-3 text-lg font-semibold">
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <img
          className="hidden md:block absolute top-1/4 left-1/4 transform -translate-x-1/2 w-44 h-44 blur-md z-0 opacity-70"
          alt="Cursor"
          src="/cursor-2.png"
        />
        <img
          className="hidden md:block absolute top-1/4 left-1/4 transform -translate-x-1/2 translate-y-2 w-36 h-36 z-0 opacity-90"
          alt="Cursor"
          src="/cursor-2.png"
        />
        <img
          className="hidden md:block absolute top-1/4 right-1/4 transform translate-x-1/2 w-44 h-44 blur-md z-0 opacity-70"
          alt="Message"
          src="/message-1.png"
        />
        <img
          className="hidden md:block absolute top-1/4 right-1/4 transform translate-x-1/2 translate-y-2 w-36 h-36 z-0 opacity-90"
          alt="Message"
          src="/message-1.png"
        />
      </div>

      {/* Trusted by section */}
      <div className="w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-12">
              Confiado por las empresas más innovadoras del mercado
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center w-full">
              {companyLogos.map((logo, index) => (
                <img
                  key={index}
                  className="object-contain filter grayscale opacity-70 hover:filter-none hover:opacity-100 transition-all duration-300"
                  style={{ 
                    maxWidth: "100%", 
                    height: "auto",
                  }}
                  alt={logo.alt}
                  src={logo.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="w-full py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Todo lo que necesita
            </h2>
            <p className="max-w-2xl text-white text-center">
              Disfrute de soluciones personalizadas, herramientas de colaboración 
              y monitoreo inteligente en una plataforma integral. Optimice procesos, 
              obtenga insights y vea resultados de forma inmediata.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <Card key={index} className="bg-black border border-gray-700 hover:border-white rounded-xl transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <CardContent className="p-8">
                  <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300">
                    <img
                      className="w-5 h-5"
                      alt="Icon"
                      src="/icons-15.svg"
                    />
                  </div>
                  <CardTitle className="text-white text-xl font-semibold mb-3">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Intuitive interface section */}
      <div className="w-full py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Interfaz Intuitiva
            </h2>
            <p className="max-w-2xl text-white text-center">
              Celebre el éxito de su transformación digital con una plataforma diseñada 
              para seguir el progreso, motivar a sus equipos y celebrar los logros
              operativos, proceso a proceso.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              alt="App night"
              src="/app-night.png"
            />
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="w-full py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <Badge className="mb-3 border border-white/50 bg-transparent hover:border-purple-400 transition-colors px-4 py-1 rounded-full">
              <span className="text-white text-xs">Impulse su productividad</span>
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Una forma más efectiva de optimizar procesos
            </h2>
            <p className="max-w-2xl text-white text-center">
              Transforme sin esfuerzo sus operaciones manuales en procesos 
              automatizados y eficientes en cuestión de semanas, 
              con resultados medibles y un retorno de inversión 
              garantizado.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {pricingPlans.map((plan, index) => {
              const isMiddlePlan = index === 1;
              
              return (
                <div 
                  key={index} 
                  className={`flex-1 ${isMiddlePlan ? 'lg:-mt-8 lg:mb-0' : ''}`}
                  style={{maxWidth: "400px"}}
                >
                  <Card 
                    className={`h-full bg-black border-3 border-gray-700 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] ${isMiddlePlan ? 'relative z-10' : ''}`}
                  >
                    <CardContent className="p-8">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-white">
                          {plan.title}
                        </h3>
                        {isMiddlePlan && (
                          <Badge className="bg-gradient-to-r from-purple-900 to-purple-700 text-white border-none px-3 py-1">
                            Recomendado
                          </Badge>
                        )}
                      </div>
                      
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        {plan.tag && <span className="ml-1 text-lg text-white/70">{plan.tag}</span>}
                      </div>
                      
                      <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-lg py-3 mb-8">
                        {plan.buttonText}
                      </Button>
                      
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 group">
                            <CheckIcon className="w-5 h-5 text-white mt-0.5 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                            <span className="text-sm text-white group-hover:text-purple-300 transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="w-full py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <Badge className="mb-3 border border-white/50 bg-transparent hover:border-purple-400 transition-colors px-4 py-1 rounded-full">
              <span className="text-white text-xs">Testimonios</span>
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          
          {/* Desktop testimonials grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <p className="text-gray-800 mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-3"
                      alt={testimonial.name}
                      src={testimonial.image}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.handle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Mobile testimonial carousel */}
          <div className="md:hidden space-y-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white rounded-xl overflow-hidden"
              >
                <CardContent className="p-6">
                  <p className="text-gray-800 mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-3"
                      alt={testimonial.name}
                      src={testimonial.image}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.handle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="w-full py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Preguntas frecuentes
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-gray-700 py-6"
              >
                <AccordionTrigger className="flex justify-between w-full text-left text-white hover:text-purple-300 transition-colors text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 mt-3 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* CTA section */}
      <div className="w-full py-20 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Solicite acceso ahora
            </h2>
            <p className="max-w-2xl text-gray-400 mb-10">
              Comience hoy a transformar su empresa con nuestras soluciones
              de IA y automatización de procesos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Input 
                className="bg-white/20 border-none text-white placeholder:text-gray-400 rounded-lg px-4 py-3"
                placeholder="nombre@empresa.com"
              />
              <Button className="bg-white text-black hover:bg-gray-100 rounded-lg px-6 py-3">
                Solicitar información
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <img
          className="hidden md:block absolute top-10 left-10 w-56 h-56 opacity-20"
          alt="Emojistar"
          src="/emojistar-1.png"
        />
        <img
          className="hidden md:block absolute bottom-10 right-10 w-56 h-56 opacity-20"
          alt="Helix"
          src="/helix2-1.png"
        />
      </div>
    </section>
  );
};