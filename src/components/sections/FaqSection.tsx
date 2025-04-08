import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import { useTranslation } from 'react-i18next';

export const FaqSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  // FAQ data with translations
  const faqItems = [0, 1, 2, 3].map(index => ({
    question: t(`faq.items.${index}.question`),
    answer: t(`faq.items.${index}.answer`)
  }));

  return (
    <div id="faq" className="w-full py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {t('faq.title')}
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-b border-gray-700 py-6"
            >
              <AccordionTrigger className="flex justify-between w-full text-left text-white hover:text-purple-300 transition-colors text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 mt-3 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}; 