import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { useTranslation } from 'react-i18next';

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div id="inicio" className="w-full relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/40 to-black z-0"></div>
      
      {/* Curved shape */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-black rounded-t-[50%] border-t border-purple-500/20 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40">
        <div className="flex flex-col items-center text-center">
          <Badge 
            className="mb-6 border border-purple-500/40 bg-black/50 hover:bg-black/80 transition-colors cursor-pointer px-4 py-2 rounded-full shadow-lg shadow-purple-500/20"
            onClick={() => window.open('#soluciones', '_self')}
          >
            <span className="text-white text-xs">{t('heroSection.badge')}</span>
            <div className="ml-2 flex items-center">
              <span className="text-white text-xs">{t('heroSection.viewServices')}</span>
              <svg className="ml-1 w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Badge>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-400">
              {t('heroSection.title.part1')}<br />
              {t('heroSection.title.part2')}
            </span>
          </h1>
          
          <p className="max-w-2xl text-white opacity-80 mx-auto mb-12 text-lg md:text-xl">
            {t('heroSection.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-white text-black hover:bg-gray-100 rounded-lg px-8 py-6 text-lg font-semibold shadow-xl shadow-purple-900/20"
              onClick={() => window.open('/contacto', '_self')}
            >
              {t('heroSection.cta.primary')}
            </Button>
            <Button 
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-lg px-8 py-6 text-lg font-semibold"
              onClick={() => window.open('#soluciones', '_self')}
            >
              {t('heroSection.cta.secondary')}
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 text-sm">{t('heroSection.features.fast')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 text-sm">{t('heroSection.features.support')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 text-sm">{t('heroSection.features.roi')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVG elements */}
      <div className="hidden md:block absolute top-1/4 left-0 transform -translate-x-1/3 w-72 h-72 z-0 opacity-60">
        <img
          src="/src/assets/images/cta/cube-helix 1.svg" 
          alt={t('heroSection.decorative.cubeHelix')}
          className="w-full h-full"
        />
      </div>
      
      <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/3 w-64 h-64 z-0 opacity-60">
        <img
          src="/src/assets/images/cta/helix2 1.svg" 
          alt={t('heroSection.decorative.helix')}
          className="w-full h-full"
        />
      </div>
      
      <div className="hidden md:block absolute bottom-16 left-16 w-44 h-44 z-0 opacity-60">
        <img
          src="/src/assets/images/cta/emojistar 1 (1).svg" 
          alt={t('heroSection.decorative.star')}
          className="w-full h-full"
        />
      </div>
      
      <div className="hidden md:block absolute top-40 right-20 w-32 h-32 z-0 opacity-70">
        <img
          src="/src/assets/images/cta/Ideabulb.svg" 
          alt={t('heroSection.decorative.bulb')}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}; 