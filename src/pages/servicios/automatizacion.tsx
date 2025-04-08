import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";

export const AutomatizacionPage = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Automatización</h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Automatizamos procesos repetitivos para liberar el potencial de su equipo 
              y mejorar la eficiencia operativa de su empresa.
            </p>
            
            <div className="mb-12">
              <img 
                src="/src/assets/images/servicios/automatizacion.jpg" 
                alt="Automatización de procesos"
                className="w-full h-auto rounded-xl mb-8"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Automatizacion";
                }}
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">¿Por qué automatizar?</h2>
                <p className="text-gray-300">
                  Las tareas manuales repetitivas consumen tiempo valioso que su equipo 
                  podría dedicar a actividades estratégicas. La automatización no solo 
                  reduce costos, sino que minimiza errores y acelera procesos.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Nuestro enfoque</h2>
                <p className="text-gray-300 mb-4">
                  Identificamos los procesos que más se beneficiarían de la automatización
                  y diseñamos soluciones personalizadas que se integran perfectamente con 
                  sus sistemas existentes.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Análisis inicial de procesos</li>
                  <li>Identificación de oportunidades de automatización</li>
                  <li>Diseño de soluciones personalizadas</li>
                  <li>Implementación gradual y medición de resultados</li>
                  <li>Optimización continua</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Beneficios clave</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Reducción de costos</h3>
                    <p className="text-gray-400">Disminuya gastos operativos hasta en un 40%</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Mayor precisión</h3>
                    <p className="text-gray-400">Elimine errores humanos en procesos críticos</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Eficiencia mejorada</h3>
                    <p className="text-gray-400">Acelere procesos hasta 10 veces</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Escalabilidad</h3>
                    <p className="text-gray-400">Crezca sin aumentar proporcionalmente su personal</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <a href="/contacto" className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg inline-block font-medium transition-colors">
                  Solicitar una demostración
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}; 