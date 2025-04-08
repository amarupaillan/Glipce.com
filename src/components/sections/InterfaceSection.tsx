import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export const InterfaceSection = (): JSX.Element => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="w-full py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700 mb-6 text-center">
            {t('interfaceSection.title')}
          </h2>
          <p className="max-w-2xl text-gray-300 text-center text-lg">
            {t('interfaceSection.subtitle')}
          </p>
        </div>
        
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          
          {/* Main image with shadow and border effects */}
          <div 
            className="relative z-10 rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-purple-900/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src="/src/assets/images/interface/MOCKUP 6.jpg"
              alt={t('interfaceSection.interface.alt')} 
              className={`w-full h-auto object-cover transition-transform duration-500 ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/1200x700/1a1a2e/ffffff?text=Business+Transformation";
              }}
            />
            
            {/* Overlay gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`}></div>
            
            {/* Hover content */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 text-center">
                {t('interfaceSection.hoverContent.title')}
              </h3>
              <p className="text-gray-200 text-md md:text-lg mb-6 text-center max-w-2xl">
                {t('interfaceSection.hoverContent.description')}
              </p>
              <div className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full font-medium">
                {t('interfaceSection.hoverContent.tagline')}
              </div>
            </div>
            
            {/* Feature highlights - shown when not hovered */}
            <div className={`absolute bottom-0 left-0 right-0 p-8 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50">
                  <h3 className="text-white font-medium text-sm mb-1">{t('interfaceSection.features.0.title')}</h3>
                  <p className="text-gray-300 text-xs">{t('interfaceSection.features.0.description')}</p>
                </div>
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50">
                  <h3 className="text-white font-medium text-sm mb-1">{t('interfaceSection.features.1.title')}</h3>
                  <p className="text-gray-300 text-xs">{t('interfaceSection.features.1.description')}</p>
                </div>
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50">
                  <h3 className="text-white font-medium text-sm mb-1">{t('interfaceSection.features.2.title')}</h3>
                  <p className="text-gray-300 text-xs">{t('interfaceSection.features.2.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional features with icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-900/30 transition-colors">
            <div className="bg-purple-900/20 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-2">{t('interfaceSection.additionalFeatures.0.title')}</h3>
            <p className="text-gray-400">{t('interfaceSection.additionalFeatures.0.description')}</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-900/30 transition-colors">
            <div className="bg-purple-900/20 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-2">{t('interfaceSection.additionalFeatures.1.title')}</h3>
            <p className="text-gray-400">{t('interfaceSection.additionalFeatures.1.description')}</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-900/30 transition-colors">
            <div className="bg-purple-900/20 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-2">{t('interfaceSection.additionalFeatures.2.title')}</h3>
            <p className="text-gray-400">{t('interfaceSection.additionalFeatures.2.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 