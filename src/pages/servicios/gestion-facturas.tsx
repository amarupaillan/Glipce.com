import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { useTranslation } from "react-i18next";

export const GestionFacturasPage = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700 mb-8">
              {t('services.invoiceManagement.title')}
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              {t('services.invoiceManagement.description')}
            </p>
            
            <div className="mb-12">
              <img 
                src="/src/assets/images/servicios/invoice-management.jpg" 
                alt={t('services.invoiceManagement.heroImage.alt')}
                className="w-full h-auto rounded-xl mb-8 shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Invoice+Management";
                }}
              />
            </div>
            
            <p className="text-gray-300 text-lg">
              {t('services.invoiceManagement.mainDescription')}
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('services.invoiceManagement.sections.challenges.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('services.invoiceManagement.sections.challenges.paragraph1')}
                </p>
                <p className="text-gray-300">
                  {t('services.invoiceManagement.sections.challenges.paragraph2')}
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('services.invoiceManagement.sections.solution.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('services.invoiceManagement.sections.solution.description')}
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-4 mt-8">{t('services.invoiceManagement.process.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h4 className="font-medium text-white mb-2">{t(`services.invoiceManagement.process.steps.${index}.title`)}</h4>
                      <p className="text-gray-400 text-sm">{t(`services.invoiceManagement.process.steps.${index}.description`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-blue-900/30 p-8 rounded-xl border border-blue-800/50">
                <h3 className="text-xl font-semibold text-white mb-4">{t('services.invoiceManagement.benefits.title')}</h3>
                <ul className="space-y-4">
                  {[0, 1, 2, 3].map((index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <h4 className="font-medium text-white">{t(`services.invoiceManagement.benefits.items.${index}.title`)}</h4>
                        <p className="text-gray-400 text-sm">{t(`services.invoiceManagement.benefits.items.${index}.description`)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">{t('services.invoiceManagement.features.title')}</h3>
                <ul className="space-y-4">
                  {[0, 1, 2, 3].map((index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-medium text-white">{t(`services.invoiceManagement.features.items.${index}.title`)}</h4>
                        <p className="text-gray-400 text-sm">{t(`services.invoiceManagement.features.items.${index}.description`)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">{t('services.invoiceManagement.cta.title')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('services.invoiceManagement.cta.description')}
                </p>
                <a 
                  href="/contacto" 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg inline-block font-medium transition-colors shadow-lg shadow-blue-900/20"
                >
                  {t('services.invoiceManagement.cta.button')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Metrics Section */}
          <div className="bg-black border border-blue-900/30 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">{t('services.invoiceManagement.stats.0.label')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="bg-blue-900/20 p-6 rounded-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mb-2">
                    {t(`services.invoiceManagement.stats.${index}.value`)}
                  </div>
                  <p className="text-gray-300">{t(`services.invoiceManagement.stats.${index}.label`)}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-800/20">
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "{t('services.invoiceManagement.testimonial.quote')}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {t('services.invoiceManagement.testimonial.author').charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">{t('services.invoiceManagement.testimonial.author')}</p>
                  <p className="text-gray-400 text-sm">{t('services.invoiceManagement.testimonial.position')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}; 