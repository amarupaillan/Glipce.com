import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";

export const ServiciosPage = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Nuestros Servicios</h1>
          
          <p className="text-gray-300 text-lg mb-12 max-w-3xl">
            Ofrecemos soluciones de automatización inteligente que transforman su empresa, 
            optimizan costos y mejoran la eficiencia operativa. No pierda tiempo en tareas repetitivas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Automatización</h2>
              <p className="text-gray-400 mb-4">
                Automatizamos procesos repetitivos para que su equipo se enfoque en tareas 
                de mayor valor, reduciendo costos operativos y minimizando errores.
              </p>
              <a href="/servicios/automatizacion" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Optimización de procesos</h2>
              <p className="text-gray-400 mb-4">
                Analizamos y mejoramos sus procesos actuales, eliminando ineficiencias y 
                reduciendo tiempos de respuesta con tecnología inteligente.
              </p>
              <a href="/servicios/optimizacion-procesos" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Inteligencia de negocio</h2>
              <p className="text-gray-400 mb-4">
                Transforme sus datos en insights accionables para tomar decisiones 
                estratégicas basadas en información real y actualizada.
              </p>
              <a href="/servicios/inteligencia-negocio" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Gestión Viral de Redes Sociales</h2>
              <p className="text-gray-400 mb-4">
                Automatizamos la creación de contenido con IA y nos conectamos con estudios de filmación locales 
                para crear contenido viral que convierte seguidores en clientes.
              </p>
              <a href="/servicios/social-media-viral-management" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Soporte al cliente con IA</h2>
              <p className="text-gray-400 mb-4">
                Potenciamos su equipo de atención con asistentes virtuales que responden mensajes
                y llamadas de voz en tiempo real con voz natural.
              </p>
              <a href="/servicios/soporte-cliente-ia" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Gestión de facturas</h2>
              <p className="text-gray-400 mb-4">
                Automatice la creación, envío y seguimiento de boletas y facturas,
                ahorrando tiempo y evitando errores en procesos administrativos.
              </p>
              <a href="/servicios/gestion-facturas" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}; 