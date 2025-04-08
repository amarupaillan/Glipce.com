import React from "react";
import { CheckIcon } from "lucide-react";
import { 
  Card, 
  CardContent
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useTranslation } from 'react-i18next';

export const PricingSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  // Helper function to ensure features is always an array
  const getFeatures = (path: string): string[] => {
    try {
      const features = t(path, { returnObjects: true });
      return Array.isArray(features) ? features : [];
    } catch (error) {
      console.error(`Error loading features from ${path}:`, error);
      return [];
    }
  };
  
  // Data for pricing plans
  const pricingPlans = [
    {
      title: t('pricing.plans.0.title'),
      price: t('pricing.plans.0.price'),
      tag: t('pricing.plans.0.tag'),
      buttonText: t('pricing.plans.0.buttonText'),
      features: getFeatures('pricing.plans.0.features')
    },
    {
      title: t('pricing.plans.1.title'),
      price: t('pricing.plans.1.price'),
      tag: t('pricing.plans.1.tag'),
      buttonText: t('pricing.plans.1.buttonText'),
      popular: true,
      features: getFeatures('pricing.plans.1.features')
    },
    {
      title: t('pricing.plans.2.title'),
      price: t('pricing.plans.2.price'),
      tag: t('pricing.plans.2.tag'),
      buttonText: t('pricing.plans.2.buttonText'),
      features: getFeatures('pricing.plans.2.features')
    }
  ];

  return (
    <div id="precios" className="w-full py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <Badge className="mb-3 border border-white/50 bg-transparent hover:border-purple-400 transition-colors px-4 py-1 rounded-full">
            <span className="text-white text-xs">{t('pricing.badge')}</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            {t('pricing.title')}
          </h2>
          <p className="max-w-2xl text-gray-300 text-center">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {pricingPlans.map((plan, index) => {
            const isMiddlePlan = index === 1;
            
            return (
              <div 
                key={index} 
                className={`flex-1 ${isMiddlePlan ? 'lg:-mt-8 lg:mb-0' : ''}`}
                style={{maxWidth: "400px"}}
              >
                <Card 
                  className={`h-full bg-black/30 backdrop-blur-sm border-2 border-white/20 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] ${isMiddlePlan ? 'relative z-10' : ''}`}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-white">
                        {plan.title}
                      </h3>
                      {isMiddlePlan && (
                        <Badge className="bg-gradient-to-r from-purple-900 to-purple-700 text-white border-none px-3 py-1">
                          {t('pricing.recommended')}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.tag && <span className="ml-1 text-lg text-white/70">{plan.tag}</span>}
                    </div>
                    
                    <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-lg py-3 mb-8">
                      {plan.buttonText}
                    </Button>
                    
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 group">
                          <CheckIcon className="w-5 h-5 text-white mt-0.5 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                          <span className="text-sm text-white group-hover:text-purple-300 transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 