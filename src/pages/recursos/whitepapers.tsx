import React, { useState } from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";

export default function Whitepapers(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  
  // Available categories
  const categories = ["Todos", "Automatización", "Estrategia", "Inteligencia Artificial", "RPA"];
  
  // Sample whitepapers data
  const whitepapers = [
    {
      id: 1,
      title: "Guía definitiva de automatización de procesos empresariales",
      excerpt: "Descubra cómo implementar la automatización de procesos de manera efectiva en su organización para maximizar la eficiencia y reducir costos.",
      image: "/src/assets/images/whitepapers/automatizacion-procesos.jpg",
      fallbackImage: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Process+Automation",
      category: "Automatización",
      date: "Marzo 2023",
      pages: 32,
      downloadCount: "1.2k",
      featured: true,
      color: "purple"
    },
    {
      id: 2,
      title: "Transformación digital en la era post-pandemia",
      excerpt: "Análisis de las tendencias y estrategias de transformación digital que están definiendo el éxito empresarial en el nuevo contexto global.",
      image: "/src/assets/images/whitepapers/transformacion-digital.jpg",
      fallbackImage: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Digital+Transformation",
      category: "Estrategia",
      date: "Febrero 2023",
      pages: 45,
      downloadCount: "984",
      featured: false,
      color: "blue"
    },
    {
      id: 3,
      title: "Inteligencia artificial aplicada a la atención al cliente",
      excerpt: "Investigación sobre cómo implementar soluciones de IA para mejorar la experiencia del cliente y reducir tiempos de respuesta.",
      image: "/src/assets/images/whitepapers/ia-atencion-cliente.jpg",
      fallbackImage: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=AI+Customer+Service",
      category: "Inteligencia Artificial",
      date: "Enero 2023",
      pages: 28,
      downloadCount: "765",
      featured: false,
      color: "indigo"
    },
    {
      id: 4,
      title: "Manual de implementación de RPA para finanzas",
      excerpt: "Guía paso a paso para implementar Robotic Process Automation en departamentos financieros, incluyendo casos de uso y métricas de éxito.",
      image: "/src/assets/images/whitepapers/rpa-finanzas.jpg",
      fallbackImage: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=RPA+Finance",
      category: "RPA",
      date: "Diciembre 2022",
      pages: 36,
      downloadCount: "1.5k",
      featured: false,
      color: "green"
    }
  ];

  // Filter whitepapers by category
  const filteredWhitepapers = activeCategory === "Todos" 
    ? whitepapers.filter(wp => !wp.featured) 
    : whitepapers.filter(wp => wp.category === activeCategory && !wp.featured);
  
  // Get featured whitepaper
  const featuredWhitepaper = whitepapers.find(wp => wp.featured);

  // Function to get the appropriate color style based on category
  const getCategoryColor = (color: string) => {
    const colors = {
      purple: "bg-purple-600/20 text-purple-400 border-purple-500/30",
      blue: "bg-blue-600/20 text-blue-400 border-blue-500/30",
      indigo: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30",
      green: "bg-green-600/20 text-green-400 border-green-500/30"
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        {/* Decorative background elements */}
        <div className="absolute top-0 inset-x-0 h-72 bg-gradient-to-b from-purple-900/20 to-transparent z-0"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-10 w-1 h-1 rounded-full bg-purple-400 opacity-50 animate-pulse"></div>
          <div className="absolute right-24 top-20 w-2 h-2 rounded-full bg-purple-600 opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute right-60 top-32 w-1 h-1 rounded-full bg-blue-400 opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute left-20 top-40 w-1 h-1 rounded-full bg-purple-400 opacity-50 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute left-40 top-60 w-2 h-2 rounded-full bg-indigo-600 opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10">
          {/* Hero section */}
          <div className="bg-gradient-to-b from-purple-900/20 via-black/50 to-black pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-7xl text-purple-600/10 font-bold z-0 whitespace-nowrap">
                    RECURSOS
                  </span>
                  Whitepapers
                </h1>
                
                <p className="text-gray-300 text-lg relative z-10 mt-4">
                  Investigaciones y guías detalladas sobre automatización, inteligencia artificial
                  y mejores prácticas para la transformación digital de su empresa.
                </p>
              </div>
              
              {/* Featured whitepaper */}
              {featuredWhitepaper && (
                <div className="rounded-2xl overflow-hidden border border-purple-800/20 bg-gradient-to-br from-gray-900 to-black mb-16 shadow-xl shadow-purple-900/10">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 h-60 lg:h-auto overflow-hidden relative">
                      <img 
                        src={featuredWhitepaper.image} 
                        alt={featuredWhitepaper.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = featuredWhitepaper.fallbackImage;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent lg:hidden"></div>
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-xs border ${getCategoryColor(featuredWhitepaper.color)} backdrop-blur-sm`}>
                          {featuredWhitepaper.category}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center relative">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full text-purple-500">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      
                      <span className="text-sm text-purple-400">Whitepaper destacado</span>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mt-2 mb-4">
                        {featuredWhitepaper.title}
                      </h2>
                      <p className="text-gray-400 mb-6">
                        {featuredWhitepaper.excerpt}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{featuredWhitepaper.date}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <span>{featuredWhitepaper.pages} páginas</span>
                        </div>
                        
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span>{featuredWhitepaper.downloadCount} descargas</span>
                        </div>
                      </div>
                      <a
                        href={`/recursos/whitepapers/${featuredWhitepaper.id}`}
                        className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors self-start mt-auto group"
                      >
                        Descargar whitepaper
                        <svg className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Category tabs */}
              <div className="flex flex-wrap justify-center mb-12 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20" 
                        : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
              {filteredWhitepapers.map((whitepaper) => (
                <div 
                  key={whitepaper.id} 
                  className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-900/10 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 lg:w-1/4 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-gray-900 to-transparent z-10 md:z-0 opacity-60 md:opacity-0"></div>
                      <img 
                        src={whitepaper.image} 
                        alt={whitepaper.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = whitepaper.fallbackImage;
                        }}
                      />
                      <div className="absolute top-4 left-4 z-20 md:hidden">
                        <span className={`px-3 py-1 rounded-full text-xs border ${getCategoryColor(whitepaper.color)} backdrop-blur-sm`}>
                          {whitepaper.category}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-2/3 lg:w-3/4 p-6 md:p-8">
                      <div className="flex items-center text-xs mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs border hidden md:inline-block ${getCategoryColor(whitepaper.color)}`}>
                          {whitepaper.category}
                        </span>
                        <span className="ml-0 md:ml-4 text-gray-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {whitepaper.date}
                        </span>
                      </div>
                      
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {whitepaper.title}
                      </h2>
                      
                      <p className="text-gray-400 mb-6">
                        {whitepaper.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span>{whitepaper.pages} páginas</span>
                          </div>
                          
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span>{whitepaper.downloadCount} descargas</span>
                          </div>
                        </div>
                        
                        <a
                          href={`/recursos/whitepapers/${whitepaper.id}`}
                          className="inline-flex items-center px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white text-sm font-medium rounded-md transition-colors group-hover:shadow-lg group-hover:shadow-purple-900/20"
                        >
                          Descargar PDF
                          <svg className="ml-2 -mr-1 w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Request form with more decorative elements */}
            <div className="mt-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-8 rounded-2xl border border-purple-900/20 shadow-xl shadow-purple-900/5 relative overflow-hidden">
              {/* Decorative glowing orbs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
              
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Solicite un whitepaper personalizado</h2>
                  <div className="hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-8">
                  ¿Necesita información específica sobre cómo la automatización puede mejorar un área particular de su empresa?
                  Nuestro equipo de expertos puede preparar un análisis personalizado según sus necesidades.
                </p>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-black/50 backdrop-blur-sm border-gray-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white px-4 py-3"
                        placeholder="Su nombre"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">Empresa</label>
                      <input
                        type="text"
                        id="company"
                        className="w-full bg-black/50 backdrop-blur-sm border-gray-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white px-4 py-3"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-black/50 backdrop-blur-sm border-gray-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white px-4 py-3"
                      placeholder="correo@empresa.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-400 mb-1">Tema de interés</label>
                    <select
                      id="topic"
                      className="w-full bg-black/50 backdrop-blur-sm border-gray-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white px-4 py-3"
                    >
                      <option>Automatización de procesos</option>
                      <option>Inteligencia artificial</option>
                      <option>Transformación digital</option>
                      <option>RPA (Robotic Process Automation)</option>
                      <option>Otro (especificar en el mensaje)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Su solicitud</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-black/50 backdrop-blur-sm border-gray-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white px-4 py-3"
                      placeholder="Describa el tipo de información que necesita..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900 transition-colors shadow-lg shadow-purple-900/20 flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Solicitar whitepaper personalizado
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
} 