import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useTranslation } from 'react-i18next';

export const CtaSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div id="contacto" className="w-full py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('ctaSection.title')}
          </h2>
          <p className="max-w-2xl text-gray-400 mb-10">
            {t('ctaSection.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Input 
              className="bg-white/20 border-none text-white placeholder:text-gray-400 rounded-lg px-4 py-3"
              placeholder={t('ctaSection.emailPlaceholder')}
            />
            <Button className="bg-white text-black hover:bg-gray-100 rounded-lg px-6 py-3">
              {t('ctaSection.buttonText')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative SVG elements */}
      <div className="hidden md:block absolute top-0 left-0 w-64 h-64 z-0 opacity-70">
        <img
          src="/src/assets/images/cta/27.svg" 
          alt={t('ctaSection.decorative.shape')}
          className="w-full h-full"
        />
      </div>
    
      
      <div className="hidden md:block absolute top-1/2 right-20 transform -translate-y-1/2 w-44 h-44 z-0 opacity-60">
        <img
          src="/src/assets/images/cta/Stonks.svg" 
          alt={t('ctaSection.decorative.stats')}
          className="w-full h-full"
        />
      </div>
      
    </div>
  );
}; 