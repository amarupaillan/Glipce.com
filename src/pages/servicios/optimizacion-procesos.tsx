import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";

export const OptimizacionProcesosPage = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Optimización de Procesos</h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Analizamos y mejoramos sus flujos de trabajo actuales para eliminar ineficiencias 
              y reducir tiempos de operación, maximizando la productividad.
            </p>
            
            <div className="mb-12">
              <img 
                src="/src/assets/images/servicios/optimizacion.jpg" 
                alt="Optimización de procesos"
                className="w-full h-auto rounded-xl mb-8"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Optimizacion+de+Procesos";
                }}
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">¿Por qué optimizar sus procesos?</h2>
                <p className="text-gray-300">
                  Los procesos no optimizados suelen contener cuellos de botella, redundancias y 
                  pasos innecesarios que consumen recursos sin aportar valor. La optimización permite 
                  identificar estas áreas de mejora y rediseñar los flujos de trabajo para máxima eficiencia.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Metodología</h2>
                <p className="text-gray-300 mb-4">
                  Utilizamos metodologías probadas como Lean y Six Sigma, potenciadas con tecnología 
                  de IA para analizar, rediseñar e implementar procesos optimizados.
                </p>
                <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                  <li>Mapeo detallado de procesos actuales</li>
                  <li>Análisis de tiempos, costos y calidad</li>
                  <li>Identificación de áreas de mejora</li>
                  <li>Rediseño de procesos con enfoque en eficiencia</li>
                  <li>Implementación de soluciones tecnológicas</li>
                  <li>Medición de resultados y ajuste continuo</li>
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Resultados que puede esperar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-white font-semibold mb-2">Reducción de tiempos</h3>
                    <p className="text-gray-400">30-50% de reducción en tiempos de ciclo</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-white font-semibold mb-2">Mejora en calidad</h3>
                    <p className="text-gray-400">Reducción de errores y reprocesos hasta en un 70%</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-white font-semibold mb-2">Mayor satisfacción</h3>
                    <p className="text-gray-400">Aumento en satisfacción de clientes y empleados</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-white font-semibold mb-2">ROI significativo</h3>
                    <p className="text-gray-400">Retorno de inversión típico de 5:1 a 10:1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
                <h3 className="text-xl font-bold text-white mb-3">No pierda tiempo en tareas repetitivas</h3>
                <p className="text-gray-300 mb-4">
                  Nuestro lema es ayudarle a liberar el potencial de su equipo, 
                  eliminando tareas rutinarias que pueden ser optimizadas o automatizadas.
                </p>
                <a href="/contacto" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg inline-block font-medium transition-colors">
                  Solicitar diagnóstico gratuito
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