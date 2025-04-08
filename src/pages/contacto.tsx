import React, { useEffect } from "react";
import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";

export const ContactPage: React.FC = () => {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700 mb-6">
              Contacto
            </h1>
            <p className="text-xl text-gray-300">
              ¿Listo para transformar su empresa? Complete el formulario y nos pondremos en contacto con usted.
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            
            {/* Typeform embed */}
            <div className="relative z-10 bg-gray-900/50 p-6 rounded-xl border border-gray-800 shadow-xl shadow-purple-900/10 mb-16 min-h-[600px]">
              <div 
                data-tf-widget="VUPBmfRX" 
                data-tf-opacity="100" 
                data-tf-iframe-props="title=Formulario de Contacto" 
                data-tf-transitive-search-params 
                data-tf-medium="snippet" 
                data-tf-hidden="utm_source=website,utm_medium=contactpage"
                className="h-[600px] w-full"
              ></div>
            </div>
          </div>
          
          {/* Alternative contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all">
              <div className="mb-4 bg-purple-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Email</h3>
              <p className="text-gray-400 mb-3">Envíenos un mensaje directo</p>
              <a href="mailto:info@glipce.com" className="text-purple-400 hover:text-purple-300 transition-colors">info@glipce.com</a>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all">
              <div className="mb-4 bg-purple-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Teléfono</h3>
              <p className="text-gray-400 mb-3">De lunes a viernes, 9:00 - 18:00</p>
              <a href="tel:+34911234567" className="text-purple-400 hover:text-purple-300 transition-colors">+34 911 234 567</a>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all">
              <div className="mb-4 bg-purple-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Chat en vivo</h3>
              <p className="text-gray-400 mb-3">Soporte en tiempo real</p>
              <button onClick={() => alert('Función de chat en desarrollo')} className="text-purple-400 hover:text-purple-300 transition-colors">Iniciar chat</button>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default ContactPage; 