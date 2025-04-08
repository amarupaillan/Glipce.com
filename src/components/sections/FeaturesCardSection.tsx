import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export const FeaturesCardSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  // Updated feature cards with current services and respective route links
  const featureCards = [
    {
      title: t('servicesList.processAutomation'),
      description: t('featuresCard.items.0.description'),
      link: "/servicios/automatizacion-procesos",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M17 13.5V5.5C17 4.4 16.1 3.5 15 3.5H12.72C12.4 2.84 11.75 2.36 11 2.09V1.5C11 0.95 10.55 0.5 10 0.5C9.45 0.5 9 0.95 9 1.5V2.09C8.25 2.36 7.6 2.84 7.28 3.5H5C3.9 3.5 3 4.4 3 5.5V7.5H5V5.5H15V13.5H10V15.5H15C16.1 15.5 17 14.6 17 13.5ZM8.5 5.5C8.5 4.67 9.17 4 10 4C10.83 4 11.5 4.67 11.5 5.5C11.5 6.33 10.83 7 10 7C9.17 7 8.5 6.33 8.5 5.5Z" fill="currentColor"/>
          <path d="M2 9.5H8C8.55 9.5 9 9.95 9 10.5V16.5C9 17.05 8.55 17.5 8 17.5H2C1.45 17.5 1 17.05 1 16.5V10.5C1 9.95 1.45 9.5 2 9.5ZM5 16C5.83 16 6.5 15.33 6.5 14.5C6.5 13.67 5.83 13 5 13C4.17 13 3.5 13.67 3.5 14.5C3.5 15.33 4.17 16 5 16ZM6.5 11.5H3.5V12.5H6.5V11.5Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: t('servicesList.businessIntelligence'),
      description: t('featuresCard.items.1.description'),
      link: "/servicios/inteligencia-negocio",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M17.5 0H2.5C1.12 0 0 1.12 0 2.5V14.5C0 15.88 1.12 17 2.5 17H7.5V15H2.5C2.22 15 2 14.78 2 14.5V2.5C2 2.22 2.22 2 2.5 2H17.5C17.78 2 18 2.22 18 2.5V14.5C18 14.78 17.78 15 17.5 15H12.5V17H17.5C18.88 17 20 15.88 20 14.5V2.5C20 1.12 18.88 0 17.5 0Z" fill="currentColor"/>
          <path d="M10.5 4H4.5V6H10.5V4Z" fill="currentColor"/>
          <path d="M10.5 7H4.5V9H10.5V7Z" fill="currentColor"/>
          <path d="M8.5 10H4.5V12H8.5V10Z" fill="currentColor"/>
          <path d="M15.5 4H12.5V12H15.5V4Z" fill="currentColor"/>
          <path d="M10 16.54L11.59 18.13L10 19.72L11.41 21.13L14.54 18L11.41 14.87L10 16.28L11.59 17.87L10 16.54Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: t('servicesList.aiCustomerSupport'),
      description: t('featuresCard.items.2.description'),
      link: "/servicios/soporte-cliente-ia",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20V2C20 0.9 19.1 0 18 0ZM5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM9 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H9C9.55 10 10 10.45 10 11C10 11.55 9.55 12 9 12ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: t('servicesList.invoiceManagement'),
      description: t('featuresCard.items.3.description'),
      link: "/servicios/gestion-facturas",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.52 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: t('servicesList.socialMediaViral'),
      description: "Amplify your brand's reach with viral strategies for social media",
      link: "/servicios/social-media-viral-management",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M17.5 7.5C15.56 7.5 14 6.33 14 5C14 6.33 12.44 7.5 10.5 7.5C12.44 7.5 14 8.67 14 10C14 8.67 15.56 7.5 17.5 7.5Z" fill="currentColor"/>
          <path d="M9.5 2.5C7.98 2.5 6.5 1.83 6.5 0.5C6.5 1.83 5.02 2.5 3.5 2.5C5.02 2.5 6.5 3.17 6.5 4.5C6.5 3.17 7.98 2.5 9.5 2.5Z" fill="currentColor"/>
          <path d="M9.5 15C7.98 15 6.5 14.33 6.5 13C6.5 14.33 5.02 15 3.5 15C5.02 15 6.5 15.67 6.5 17C6.5 15.67 7.98 15 9.5 15Z" fill="currentColor"/>
          <path d="M10.6 2.5C10.6 3.89 9.49 5 8.1 5C6.71 5 5.6 3.89 5.6 2.5C5.6 1.11 6.71 0 8.1 0C9.49 0 10.6 1.11 10.6 2.5ZM16 10C16 11.39 14.89 12.5 13.5 12.5C12.11 12.5 11 11.39 11 10C11 8.61 12.11 7.5 13.5 7.5C14.89 7.5 16 8.61 16 10ZM10.6 17.5C10.6 18.89 9.49 20 8.1 20C6.71 20 5.6 18.89 5.6 17.5C5.6 16.11 6.71 15 8.1 15C9.49 15 10.6 16.11 10.6 17.5Z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <div id="soluciones" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            {t('featuresCard.title')}
          </h2>
          <p className="max-w-2xl text-white text-center">
            {t('featuresCard.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <CardSpotlight 
              key={index} 
              className="h-full p-8 rounded-xl transition-all duration-300"
              color="#151515"
            >
              <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 relative z-20">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 relative z-20">
                {feature.title}
              </h3>
              <p className="text-gray-300 relative z-20">
                {feature.description}
              </p>
              
              <div className="mt-8 relative z-20">
                <Link to={feature.link} className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 text-sm font-medium">
                  {t('featuresCard.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </div>
  );
}; 