import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { useTheme as useNextTheme } from 'next-themes';
import { useTranslation } from "../../hooks/useTranslation";

export const HeroSection = (): JSX.Element => {
  const { theme } = useNextTheme();
  const { t } = useTranslation();
  
  return (
    <div id="inicio" className="w-full relative overflow-hidden">
      {/* Background gradient - usando variables de tema */}
      <div className="absolute inset-0 bg-hero-gradient z-0"></div>
      
      {/* Curved shape */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-background rounded-t-[50%] border-t border-purple-500/20 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40">
        <div className="flex flex-col items-center text-center">
          <Badge 
            className="mb-6 custom-badge hover:bg-opacity-80 transition-colors cursor-pointer px-4 py-2 rounded-full shadow-lg shadow-purple-500/20"
            onClick={() => window.open('#soluciones', '_self')}
          >
            <span className="text-xs">{t("Soluciones digitales para tu negocio")}</span>
            <div className="ml-2 flex items-center">
              <span className="text-xs">{t("heroSection.viewServices")}</span>
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Badge>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none">
            {/* Usando clase text-foreground para garantizar contraste adecuado en ambos modos */}
            <span className="text-foreground bg-clip-text">
              {t("homepage.hero.title")}
            </span>
          </h1>
          
          <p className="max-w-2xl text-foreground opacity-80 mx-auto mb-12 text-lg md:text-xl">
            {t("homepage.hero.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="btn-primary rounded-lg px-8 py-6 text-lg font-semibold shadow-xl shadow-purple-900/20"
              onClick={() => window.open('https://calendly.com/amarupaillan1966/30min', '_blank')}
            >
              {t("homepage.hero.cta")}
            </Button>
            <Button 
              className="btn-secondary rounded-lg px-8 py-6 text-lg font-semibold"
              onClick={() => window.open('#planes', '_self')}
            >
              {t("heroSection.cta.secondary")}
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground text-sm">{t("heroSection.features.fast")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground text-sm">{t("heroSection.features.support")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground text-sm">{t("heroSection.features.roi")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVG elements */}
      <div className="hidden md:block absolute top-1/4 left-0 transform -translate-x-1/3 w-72 h-72 z-0 opacity-60">
        <img
          src="/assets/images/cta/cube-helix 1.svg" 
          alt={t("heroSection.decorative.cubeHelix")}
          className="w-full h-full"
        />
      </div>
      
      <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/3 w-64 h-64 z-0 opacity-60">
        <img
          src="/assets/images/cta/helix2 1.svg" 
          alt={t("heroSection.decorative.helix")}
          className="w-full h-full"
        />
      </div>
      
      <div className="hidden md:block absolute bottom-16 left-16 w-44 h-44 z-0 opacity-60">
        <img
          src="/assets/images/cta/emojistar 1 (1).svg" 
          alt={t("heroSection.decorative.star")}
          className="w-full h-full"
        />
      </div>
      
      <div className="hidden md:block absolute top-40 right-20 w-32 h-32 z-0 opacity-70">
        <img
          src="/assets/images/cta/Ideabulb.svg" 
          alt={t("heroSection.decorative.bulb")}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}; 