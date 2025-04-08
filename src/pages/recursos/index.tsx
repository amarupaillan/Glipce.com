import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";

export const RecursosPage = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Recursos</h1>
          
          <p className="text-gray-300 text-lg mb-12 max-w-3xl">
            Acceda a contenido exclusivo, herramientas y recursos diseñados para ayudarle a 
            comprender mejor la automatización y la transformación digital de su empresa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Secciones de recursos */}
            <div className="bg-gray-900 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-purple-900 to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Blog</h2>
                <p className="text-gray-400 mb-4">
                  Artículos, guías y novedades sobre automatización, IA y productividad empresarial 
                  para mantenerse al día con las últimas tendencias.
                </p>
              </div>
              <div className="px-6 pb-6">
                <a href="/recursos/blog" className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-medium transition-colors">
                  Ver blog
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Whitepapers</h2>
                <p className="text-gray-400 mb-4">
                  Investigaciones detalladas, estudios de casos y documentos técnicos que profundizan 
                  en las soluciones de automatización y sus beneficios.
                </p>
              </div>
              <div className="px-6 pb-6">
                <a href="/recursos/whitepapers" className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-medium transition-colors">
                  Acceder
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-green-900 to-teal-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Calculadora ROI</h2>
                <p className="text-gray-400 mb-4">
                  Herramienta interactiva para calcular el retorno de inversión potencial 
                  al implementar nuestras soluciones de automatización.
                </p>
              </div>
              <div className="px-6 pb-6">
                <a href="/recursos/calculadora-roi" className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-medium transition-colors">
                  Calcular
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Recursos más populares</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-gray-800 rounded-lg overflow-hidden group hover:border-purple-500/50 transition-all">
                <div className="p-5">
                  <span className="text-xs font-medium text-purple-400 mb-2 block">BLOG</span>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    Cómo la IA está transformando la atención al cliente
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Descubra cómo los chatbots y asistentes virtuales están revolucionando la experiencia del cliente.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">5 min de lectura</span>
                    <a href="/recursos/blog/ia-transformando-atencion-cliente" className="text-purple-400 hover:text-purple-300 text-sm">Leer más →</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border border-gray-800 rounded-lg overflow-hidden group hover:border-purple-500/50 transition-all">
                <div className="p-5">
                  <span className="text-xs font-medium text-purple-400 mb-2 block">WHITEPAPER</span>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    Automatización de procesos: Guía para empresas
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Guía completa sobre cómo implementar la automatización en diferentes áreas de su negocio.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">PDF • 28 páginas</span>
                    <a href="/recursos/whitepapers/guia-automatizacion" className="text-purple-400 hover:text-purple-300 text-sm">Descargar →</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border border-gray-800 rounded-lg overflow-hidden group hover:border-purple-500/50 transition-all">
                <div className="p-5">
                  <span className="text-xs font-medium text-purple-400 mb-2 block">CASO DE ÉXITO</span>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    Cómo una empresa logística redujo costos en un 35%
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Historia real de transformación digital y los resultados obtenidos en solo 6 meses.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Caso de estudio</span>
                    <a href="/empresa/casos-exito/empresa-logistica" className="text-purple-400 hover:text-purple-300 text-sm">Ver caso →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-800/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">¿No encuentra lo que busca?</h2>
              <p className="text-gray-300 mb-6">
                Nuestro equipo está a su disposición para resolver cualquier duda o 
                proporcionar información adicional que necesite.
              </p>
              <a href="/contacto" className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-medium transition-colors">
                Contáctenos
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}; 