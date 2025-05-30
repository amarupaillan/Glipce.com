import React from "react";
import { Button } from "../../components/ui/button";
import { useTranslation } from "../../hooks/useTranslation";

export const CtaSection = (): JSX.Element => {
  const { t } = useTranslation();
  const calendlyUrl = "https://calendly.com/amarupaillan1966/30min"; // Ensure this is the correct link for the CTA button

  return (
    <div className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-background via-background to-purple-50 dark:to-purple-950/20">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,#000)]"></div>
      
      {/* Decorative images */}
      <div className="absolute -top-20 left-5 md:left-40 w-20 h-20 md:w-44 md:h-44 z-0 opacity-60 animate-float">
        <img
          src="/assets/images/cta/Goals.svg" 
          alt="Decorative goals icon"
          className="w-full h-full"
        />
      </div>
      
      <div className="absolute top-1/3 right-5 w-16 h-16 md:right-10 md:w-32 md:h-32 z-0 opacity-70 animate-float-slow">
        <img
          src="/assets/images/cta/Stonks.svg" 
          alt="Decorative growth chart"
          className="w-full h-full"
        />
      </div>
      
      <div className="absolute bottom-10 left-10 md:left-1/4 w-16 h-16 md:w-24 md:h-24 z-0 opacity-60 animate-float-med">
        <img
          src="/assets/images/cta/Ideabulb.svg" 
          alt="Decorative light bulb"
          className="w-full h-full"
        />
      </div>
      
      <div className="absolute bottom-20 right-5 md:right-40 w-20 h-20 md:w-40 md:h-40 z-0 opacity-60 animate-float">
        <img
          src="/assets/images/cta/emojistar 1 (1).svg" 
          alt="Decorative star"
          className="w-full h-full"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900 dark:from-purple-400 dark:to-purple-600">
            {t("dentalClinic.finalCta.title")}
          </h2>
          
          <p className="max-w-2xl text-muted-foreground mb-10">
            {t("dentalClinic.finalCta.subtitle")}
          </p>
          
          <div className="grid grid-cols-1 gap-4 w-full max-w-md">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-6 py-5 md:py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 shadow-purple-500/20"
              onClick={() => window.open(calendlyUrl, '_blank')}
            >
              {t("dentalClinic.finalCta.button")}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl opacity-70"></div>
    </div>
  );
}; 