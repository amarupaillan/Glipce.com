import React from "react";
import { 
  Card, 
  CardContent
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { useTranslation } from 'react-i18next';

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
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <p className="text-gray-800 mb-6">
                  "{t(`testimonials.items.${index}.text`)}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
                    <span className="font-medium text-gray-600">
                      {t(`testimonials.items.${index}.name`).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t(`testimonials.items.${index}.name`)}</p>
                    <p className="text-sm text-gray-600">{t(`testimonials.items.${index}.handle`)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Mobile testimonial carousel - simplified version */}
        <div className="md:hidden space-y-6">
          {[0, 1, 2].map((index) => (
            <Card 
              key={index} 
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <p className="text-gray-800 mb-6">
                  "{t(`testimonials.items.${index}.text`)}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
                    <span className="font-medium text-gray-600">
                      {t(`testimonials.items.${index}.name`).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t(`testimonials.items.${index}.name`)}</p>
                    <p className="text-sm text-gray-600">{t(`testimonials.items.${index}.handle`)}</p>
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