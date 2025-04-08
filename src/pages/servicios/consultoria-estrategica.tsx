import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { useTranslation } from "react-i18next";

export const ConsultoriaEstrategicaPage = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700 mb-8">
              {t('services.strategicConsulting.title')}
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              {t('services.strategicConsulting.description')}
            </p>
            
            <div className="mb-12">
              <img 
                src="/src/assets/images/servicios/social-media-viral.jpg" 
                alt={t('services.strategicConsulting.heroImage.alt')}
                className="w-full h-auto rounded-xl mb-8 shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Social+Media+Viral";
                }}
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('services.strategicConsulting.sections.overview.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('services.strategicConsulting.sections.overview.paragraph1')}
                </p>
                <p className="text-gray-300">
                  {t('services.strategicConsulting.sections.overview.paragraph2')}
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('services.strategicConsulting.sections.leadGeneration.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('services.strategicConsulting.sections.leadGeneration.description')}
                </p>
                
                <div className="space-y-4 mt-4">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-900/40 flex items-center justify-center flex-shrink-0 border border-purple-700">
                        <span className="text-lg font-bold text-purple-400">{index + 1}</span>
                      </div>
                      <div className="flex items-center">
                        <p className="text-gray-300">
                          {t(`services.strategicConsulting.sections.leadGeneration.steps.${index}`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-purple-900/30 p-8 rounded-xl border border-purple-800/50">
                <h3 className="text-xl font-semibold text-white mb-4">{t('services.strategicConsulting.benefits.title')}</h3>
                <ul className="space-y-4">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <h4 className="font-medium text-white">{t(`services.strategicConsulting.benefits.items.${index}.title`)}</h4>
                        <p className="text-gray-400 text-sm">{t(`services.strategicConsulting.benefits.items.${index}.description`)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">{t('services.strategicConsulting.cta.title')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('services.strategicConsulting.cta.description')}
                </p>
                <a 
                  href="/contacto" 
                  className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg inline-block font-medium transition-colors shadow-lg shadow-purple-900/20"
                >
                  {t('services.strategicConsulting.cta.button')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('services.strategicConsulting.features.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t(`services.strategicConsulting.features.items.${index}.title`)}</h3>
                  <p className="text-gray-400">
                    {t(`services.strategicConsulting.features.items.${index}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Final Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-black rounded-2xl p-8 border border-purple-500/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t('common.readyToTransform')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              {t('common.transformDescription')}
            </p>
            <a 
              href="/contacto" 
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg inline-block font-medium transition-colors"
            >
              {t('common.contactTeam')}
            </a>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}; 