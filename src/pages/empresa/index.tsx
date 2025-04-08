import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";

export const EmpresaPage = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Nuestra Empresa</h1>
          
          <p className="text-gray-300 text-lg mb-12 max-w-3xl">
            Conozca más sobre Glipce, nuestro equipo y misión de transformar empresas 
            mediante la automatización inteligente e inteligencia artificial.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Secciones de la empresa */}
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800 group">
              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Sobre Nosotros</h2>
              <p className="text-gray-400 mb-4">
                Conozca nuestra historia, visión y los valores que nos definen como 
                empresa líder en soluciones de IA y automatización.
              </p>
              <a href="/empresa/sobre-nosotros" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800 group">
              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Blog</h2>
              <p className="text-gray-400 mb-4">
                Artículos, guías y recursos sobre automatización, inteligencia artificial 
                y transformación digital para empresas.
              </p>
              <a href="/empresa/blog" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800 group">
              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Casos de Éxito</h2>
              <p className="text-gray-400 mb-4">
                Historias reales de empresas que han transformado sus operaciones 
                y logrado resultados extraordinarios con nuestras soluciones.
              </p>
              <a href="/empresa/casos-exito" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all border border-gray-800 group">
              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Equipo</h2>
              <p className="text-gray-400 mb-4">
                Conozca a los expertos detrás de Glipce, profesionales apasionados por 
                la tecnología y la innovación empresarial.
              </p>
              <a href="/empresa/equipo" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-800/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">¿Quiere saber más sobre nosotros?</h2>
              <p className="text-gray-300 mb-6">
                Estaremos encantados de contarle más sobre nuestra empresa y cómo podemos 
                ayudarle a transformar sus procesos de negocio.
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