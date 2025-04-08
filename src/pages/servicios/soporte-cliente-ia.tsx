import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { useTranslation } from "react-i18next";

export const SoporteClienteIAPage = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('services.aiCustomerSupport.title.part1')} <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700">{t('services.aiCustomerSupport.title.part2')}</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-2/3">
                <p className="text-gray-300 text-lg mb-6">
                  {t('services.aiCustomerSupport.description')}
                </p>
                
                <div className="grid grid-cols-2 gap-4 max-w-xl">
                  <div className="bg-gradient-to-br from-purple-900/40 to-purple-900/10 p-4 rounded-lg border border-purple-500/30">
                    <div className="text-3xl text-purple-400 font-bold">{t('services.aiCustomerSupport.stats.0.value')}</div>
                    <div className="text-gray-300">{t('services.aiCustomerSupport.stats.0.label')}</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/40 to-purple-900/10 p-4 rounded-lg border border-purple-500/30">
                    <div className="text-3xl text-purple-400 font-bold">{t('services.aiCustomerSupport.stats.1.value')}</div>
                    <div className="text-gray-300">{t('services.aiCustomerSupport.stats.1.label')}</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/40 to-purple-900/10 p-4 rounded-lg border border-purple-500/30">
                    <div className="text-3xl text-purple-400 font-bold">{t('services.aiCustomerSupport.stats.3.value')}</div>
                    <div className="text-gray-300">{t('services.aiCustomerSupport.stats.3.label')}</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/40 to-purple-900/10 p-4 rounded-lg border border-purple-500/30">
                    <div className="text-3xl text-purple-400 font-bold">{t('services.aiCustomerSupport.stats.2.value')}</div>
                    <div className="text-gray-300">{t('services.aiCustomerSupport.stats.2.label')}</div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 relative">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
                <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-purple-500/20 h-full">
                  <h3 className="text-xl font-semibold text-white mb-4">{t('services.aiCustomerSupport.solution.title')}</h3>
                  
                  <ul className="space-y-1 text-gray-400">
                    {[0, 1, 3].map((index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>{t(`services.aiCustomerSupport.solution.features.${index}.description`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* How it works section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">How it works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-400">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">Understanding</h3>
                <p className="text-gray-400 text-center">
                  The virtual assistant analyzes the customer's query, identifies the intent, and extracts key information.
                </p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-400">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">Resolution</h3>
                <p className="text-gray-400 text-center">
                  Generates a precise response based on your company's knowledge base and the context of the conversation.
                </p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-400">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">Learning</h3>
                <p className="text-gray-400 text-center">
                  The system continuously improves, learning from each interaction to provide more accurate responses in the future.
                </p>
              </div>
            </div>
          </div>
          
          {/* Traditional challenges section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('services.aiCustomerSupport.challenges.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-2">{t(`services.aiCustomerSupport.challenges.items.${index}.title`)}</h3>
                  <p className="text-gray-400">
                    {t(`services.aiCustomerSupport.challenges.items.${index}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-black rounded-2xl p-8 border border-purple-500/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t('services.aiCustomerSupport.cta.title')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              {t('services.aiCustomerSupport.cta.description')}
            </p>
            <a 
              href="/contacto" 
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg inline-block font-medium transition-colors"
            >
              {t('services.aiCustomerSupport.cta.button')}
            </a>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}; 