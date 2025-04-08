import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { useTranslation } from "react-i18next";

export default function SobreNosotrosPage(): JSX.Element {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700 mb-8">
              {t('company.aboutUsPage.title')}
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              {t('company.aboutUsPage.description')}
            </p>
            
            <div className="mb-12">
              <img 
                src="/src/assets/images/empresa/equipo.jpg" 
                alt={t('company.aboutUsPage.heroImage.alt')}
                className="w-full h-auto rounded-xl shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Our+Team";
                }}
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('company.aboutUsPage.history.title')}</h2>
                <p className="text-gray-300">
                  {t('company.aboutUsPage.history.paragraph1')}
                </p>
                <p className="text-gray-300 mt-4">
                  {t('company.aboutUsPage.history.paragraph2')}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/50 p-8 rounded-xl border border-purple-900/30">
                <h2 className="text-2xl font-bold text-white mb-4">{t('company.aboutUsPage.mission.title')}</h2>
                <p className="text-gray-300">
                  {t('company.aboutUsPage.mission.paragraph1')}
                </p>
                <p className="text-gray-300 mt-4">
                  {t('company.aboutUsPage.mission.paragraph2')}
                </p>
              </div>
              
              <blockquote className="bg-gray-900/50 border-l-4 border-purple-500 pl-6 py-6 italic text-gray-300 rounded-r-xl">
                {t('company.aboutUsPage.quote')}
              </blockquote>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">{t('company.aboutUsPage.values.title')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="bg-black/50 border border-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-2">{t(`company.aboutUsPage.values.items.${index}.title`)}</h3>
                      <p className="text-gray-400">
                        {t(`company.aboutUsPage.values.items.${index}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">{t('company.aboutUsPage.whyChooseUs.title')}</h2>
                <ul className="space-y-3 text-gray-300">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t(`company.aboutUsPage.whyChooseUs.items.${index}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">{t('company.aboutUsPage.cta.title')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              {t('company.aboutUsPage.cta.description')}
            </p>
            <a 
              href="/contacto" 
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg inline-block font-medium transition-colors shadow-lg shadow-purple-900/20"
            >
              {t('company.aboutUsPage.cta.button')}
            </a>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
} 