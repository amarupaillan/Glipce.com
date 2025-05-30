import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

export const LanguageToggle = (): JSX.Element => {
  const { language, setLanguage } = useTranslation();
  
  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="text-sm font-medium">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
}; 