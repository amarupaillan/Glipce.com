import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";
import { useTheme as useNextTheme } from 'next-themes';
import { useTranslation } from "../../hooks/useTranslation";

export const FeaturesCardSection = (): JSX.Element => {
  const { theme } = useNextTheme();
  const isDark = theme === 'dark';
  const { t } = useTranslation();
  
  return (
    <div id="soluciones" className="w-full py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 text-center">
            {t("featuresCard.title")}
          </h2>
          <p className="max-w-3xl text-muted-foreground text-center text-base md:text-lg">
            {t("featuresCard.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <CardSpotlight 
            className="h-full p-6 md:p-8 rounded-xl transition-all duration-300"
            color={isDark ? "#1e1e1e" : "#151515"}
          >
            <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg w-12 h-12 flex items-center justify-center mb-4 md:mb-6 hover:scale-110 transition-transform duration-300 relative z-20`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={isDark ? "text-white" : "text-black"}>
                <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20L10 17L16 20V4C16 2.9 15.1 2 14 2ZM14 17L10 14.82L6 17V4H14V17Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-foreground text-lg md:text-xl font-semibold mb-2 md:mb-3 relative z-20">
              {t("featuresCard.items.0.title")}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base relative z-20">
              {t("featuresCard.items.0.description")}
            </p>
          </CardSpotlight>

          <CardSpotlight 
            className="h-full p-6 md:p-8 rounded-xl transition-all duration-300"
            color={isDark ? "#1e1e1e" : "#151515"}
          >
            <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg w-12 h-12 flex items-center justify-center mb-4 md:mb-6 hover:scale-110 transition-transform duration-300 relative z-20`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={isDark ? "text-white" : "text-black"}>
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM16.9 6H14C13.7 4.2 13.2 2.6 12.5 1.2C14.6 1.8 16.3 3.6 16.9 6ZM10 2C11 3.4 11.8 5.1 12.1 7H7.9C8.2 5.1 9 3.4 10 2ZM2.3 12C2.1 11.4 2 10.7 2 10C2 9.3 2.1 8.6 2.3 8H5.6C5.5 8.7 5.5 9.3 5.5 10C5.5 10.7 5.5 11.3 5.6 12H2.3ZM3.1 14H6C6.3 15.8 6.8 17.4 7.5 18.8C5.4 18.2 3.7 16.4 3.1 14ZM6 6H3.1C3.7 3.6 5.4 1.8 7.5 1.2C6.8 2.6 6.3 4.2 6 6ZM10 18C9 16.6 8.2 14.9 7.9 13H12.1C11.8 14.9 11 16.6 10 18ZM12.5 12H7.5C7.4 11.3 7.3 10.7 7.3 10C7.3 9.3 7.4 8.7 7.5 8H12.5C12.6 8.7 12.7 9.3 12.7 10C12.7 10.7 12.6 11.3 12.5 12ZM12.5 18.8C13.2 17.4 13.7 15.8 14 14H16.9C16.3 16.4 14.6 18.2 12.5 18.8ZM14.4 12C14.5 11.3 14.5 10.7 14.5 10C14.5 9.3 14.5 8.7 14.4 8H17.7C17.9 8.6 18 9.3 18 10C18 10.7 17.9 11.4 17.7 12H14.4Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-foreground text-lg md:text-xl font-semibold mb-2 md:mb-3 relative z-20">
              {t("featuresCard.items.1.title")}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base relative z-20">
              {t("featuresCard.items.1.description")}
            </p>
          </CardSpotlight>

          <CardSpotlight 
            className="h-full p-6 md:p-8 rounded-xl transition-all duration-300"
            color={isDark ? "#1e1e1e" : "#151515"}
          >
            <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg w-12 h-12 flex items-center justify-center mb-4 md:mb-6 hover:scale-110 transition-transform duration-300 relative z-20`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={isDark ? "text-white" : "text-black"}>
                <path d="M17 13.5V5.5C17 4.4 16.1 3.5 15 3.5H12.72C12.4 2.84 11.75 2.36 11 2.09V1.5C11 0.95 10.55 0.5 10 0.5C9.45 0.5 9 0.95 9 1.5V2.09C8.25 2.36 7.6 2.84 7.28 3.5H5C3.9 3.5 3 4.4 3 5.5V7.5H5V5.5H15V13.5H10V15.5H15C16.1 15.5 17 14.6 17 13.5ZM8.5 5.5C8.5 4.67 9.17 4 10 4C10.83 4 11.5 4.67 11.5 5.5C11.5 6.33 10.83 7 10 7C9.17 7 8.5 6.33 8.5 5.5Z" fill="currentColor"/>
                <path d="M2 9.5H8C8.55 9.5 9 9.95 9 10.5V16.5C9 17.05 8.55 17.5 8 17.5H2C1.45 17.5 1 17.05 1 16.5V10.5C1 9.95 1.45 9.5 2 9.5ZM5 16C5.83 16 6.5 15.33 6.5 14.5C6.5 13.67 5.83 13 5 13C4.17 13 3.5 13.67 3.5 14.5C3.5 15.33 4.17 16 5 16ZM6.5 11.5H3.5V12.5H6.5V11.5Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-foreground text-lg md:text-xl font-semibold mb-2 md:mb-3 relative z-20">
              {t("featuresCard.items.2.title")}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base relative z-20">
              {t("featuresCard.items.2.description")}
            </p>
          </CardSpotlight>
        </div>
      </div>
    </div>
  );
}; 