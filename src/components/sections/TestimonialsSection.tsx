import React from "react";
import { 
  Card, 
  CardContent
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { useTranslation } from 'react-i18next';

// Colores alternados para las tarjetas
const cardColors = [
  "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/30",
  "bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-800/30",
  "bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-800/30",
];

// Avatares para los testimonios
const avatars = [
  "/assets/images/testimonials/avatar-1.jpg",
  "/assets/images/testimonials/avatar-2.jpg",
  "/assets/images/testimonials/avatar-3.jpg",
  "/assets/images/testimonials/avatar-4.jpg",
  "/assets/images/testimonials/avatar-5.jpg",
  "/assets/images/testimonials/avatar-6.jpg",
];

export const TestimonialsSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div id="testimonios" className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <Badge className="mb-3 border border-white/50 bg-transparent hover:border-purple-400 transition-colors px-4 py-1 rounded-full">
            <span className="text-white text-xs">{t('testimonials.title')}</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            {t('testimonials.subtitle')}
          </h2>
        </div>
        
        {/* Desktop testimonials grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <Card 
              key={index} 
              className={`${cardColors[index % 3]} rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border`}
            >
              <CardContent className="p-6 relative">
                {/* Frase destacada */}
                <p className="text-gray-800 dark:text-gray-200 mb-8">
                  <span className="absolute -top-2 -left-1 text-4xl text-purple-300 dark:text-purple-500 opacity-50">"</span>
                  <span className="font-medium text-lg">
                    {t(`testimonials.items.${index}.highlight`) || t(`testimonials.items.${index}.text`).split('.')[0]}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {t(`testimonials.items.${index}.highlight`) 
                      ? t(`testimonials.items.${index}.text`) 
                      : t(`testimonials.items.${index}.text`).split('.').slice(1).join('.')}
                  </span>
                  <span className="absolute -bottom-5 -right-1 text-4xl text-purple-300 dark:text-purple-500 opacity-50">"</span>
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md mr-3">
                      <img 
                        src={avatars[index] || `/assets/images/testimonials/default-avatar.jpg`}
                        alt={t(`testimonials.items.${index}.name`)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{t(`testimonials.items.${index}.name`)}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t(`testimonials.items.${index}.handle`)}</p>
                    </div>
                  </div>
                  
                  {/* Sello de verificación */}
                  <div className="flex items-center bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-full shadow-sm">
                    <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200">Cliente Verificado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Mobile testimonial carousel - con mejoras */}
        <div className="md:hidden space-y-6">
          {[0, 1, 2].map((index) => (
            <Card 
              key={index} 
              className={`${cardColors[index % 3]} rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border`}
            >
              <CardContent className="p-6 relative">
                {/* Frase destacada */}
                <p className="text-gray-800 dark:text-gray-200 mb-8">
                  <span className="absolute -top-2 -left-1 text-4xl text-purple-300 dark:text-purple-500 opacity-50">"</span>
                  <span className="font-medium text-lg">
                    {t(`testimonials.items.${index}.highlight`) || t(`testimonials.items.${index}.text`).split('.')[0]}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {t(`testimonials.items.${index}.highlight`) 
                      ? t(`testimonials.items.${index}.text`) 
                      : t(`testimonials.items.${index}.text`).split('.').slice(1).join('.')}
                  </span>
                  <span className="absolute -bottom-5 -right-1 text-4xl text-purple-300 dark:text-purple-500 opacity-50">"</span>
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md mr-3">
                      <img 
                        src={avatars[index] || `/assets/images/testimonials/default-avatar.jpg`}
                        alt={t(`testimonials.items.${index}.name`)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{t(`testimonials.items.${index}.name`)}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t(`testimonials.items.${index}.handle`)}</p>
                    </div>
                  </div>
                  
                  {/* Sello de verificación */}
                  <div className="flex items-center bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-full shadow-sm">
                    <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200">Cliente Verificado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}; 