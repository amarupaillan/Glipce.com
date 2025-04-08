import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { useTranslation } from "react-i18next";

export const InteligenciaNegocioPage = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700 mb-8">
              {t('services.businessIntelligence.title.part1')} <span className="text-white">{t('services.businessIntelligence.title.part2')}</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              {t('services.businessIntelligence.description')}
            </p>
            
            <div className="mb-12">
              <img 
                src="/src/assets/images/servicios/business-intelligence.jpg" 
                alt={t('services.businessIntelligence.heroImage.alt')}
                className="w-full h-auto rounded-xl mb-8 shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Business+Intelligence";
                }}
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('services.businessIntelligence.sections.dataDriven.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('services.businessIntelligence.sections.dataDriven.paragraph1')}
                </p>
                <p className="text-gray-300">
                  {t('services.businessIntelligence.sections.dataDriven.paragraph2')}
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('services.businessIntelligence.sections.capabilities.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('services.businessIntelligence.sections.capabilities.description')}
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index}>{t(`services.businessIntelligence.sections.capabilities.items.${index}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-purple-900/30 p-8 rounded-xl border border-purple-800/50">
                <h3 className="text-xl font-semibold text-white mb-4">{t('services.businessIntelligence.benefits.title')}</h3>
                <ul className="space-y-4">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <h4 className="font-medium text-white">{t(`services.businessIntelligence.benefits.items.${index}.title`)}</h4>
                        <p className="text-gray-400 text-sm">{t(`services.businessIntelligence.benefits.items.${index}.description`)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">{t('services.businessIntelligence.cta.title')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('services.businessIntelligence.cta.description')}
                </p>
                <a 
                  href="/contacto" 
                  className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg inline-block font-medium transition-colors shadow-lg shadow-purple-900/20"
                >
                  {t('services.businessIntelligence.cta.button')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Metrics Section */}
          <div className="bg-black border border-purple-900/30 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">{t('services.businessIntelligence.metrics.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-purple-900/20 p-6 rounded-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">
                  {t('services.businessIntelligence.metrics.items.0.value')}
                </div>
                <p className="text-gray-300">{t('services.businessIntelligence.metrics.items.0.label')}</p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">
                  {t('services.businessIntelligence.metrics.items.1.value')}
                </div>
                <p className="text-gray-300">{t('services.businessIntelligence.metrics.items.1.label')}</p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">
                  {t('services.businessIntelligence.metrics.items.2.value')}
                </div>
                <p className="text-gray-300">{t('services.businessIntelligence.metrics.items.2.label')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}; 