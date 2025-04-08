import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { useTranslation } from "react-i18next";

export default function AutomatizacionProcesosPage(): JSX.Element {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700 mb-8">
              {t('services.processAutomation.title')}
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              {t('services.processAutomation.description')}
            </p>
            
            <div className="mb-12">
              <img 
                src="/src/assets/images/servicios/automatizacion-procesos.jpg" 
                alt={t('services.processAutomation.heroImage.alt')}
                className="w-full h-auto rounded-xl mb-8 shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Automatizacion+de+Procesos";
                }}
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('services.processAutomation.sections.transformation.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('services.processAutomation.sections.transformation.paragraph1')}
                </p>
                <p className="text-gray-300">
                  {t('services.processAutomation.sections.transformation.paragraph2')}
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('services.processAutomation.sections.approach.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('services.processAutomation.sections.approach.description')}
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index}>{t(`services.processAutomation.sections.approach.steps.${index}`)}</li>
                  ))}
                </ul>
                <p className="text-gray-300">
                  {t('services.processAutomation.sections.approach.conclusion')}
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-purple-900/30 p-8 rounded-xl border border-purple-800/50">
                <h3 className="text-xl font-semibold text-white mb-4">{t('services.processAutomation.benefits.title')}</h3>
                <ul className="space-y-4">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <h4 className="font-medium text-white">{t(`services.processAutomation.benefits.items.${index}.title`)}</h4>
                        <p className="text-gray-400 text-sm">{t(`services.processAutomation.benefits.items.${index}.description`)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">{t('services.processAutomation.cta.title')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('services.processAutomation.cta.description')}
                </p>
                <a 
                  href="/contacto" 
                  className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg inline-block font-medium transition-colors shadow-lg shadow-purple-900/20"
                >
                  {t('services.processAutomation.cta.button')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Case Study */}
          <div className="bg-gradient-to-r from-gray-900 to-purple-900/20 p-8 rounded-xl border border-gray-800 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">{t('services.processAutomation.caseStudy.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium text-white mb-2">{t('services.processAutomation.caseStudy.challenge.title')}</h4>
                <p className="text-gray-300 text-sm">
                  {t('services.processAutomation.caseStudy.challenge.description')}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">{t('services.processAutomation.caseStudy.solution.title')}</h4>
                <p className="text-gray-300 text-sm">
                  {t('services.processAutomation.caseStudy.solution.description')}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">{t('services.processAutomation.caseStudy.results.title')}</h4>
                <p className="text-gray-300 text-sm">
                  {t('services.processAutomation.caseStudy.results.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
} 