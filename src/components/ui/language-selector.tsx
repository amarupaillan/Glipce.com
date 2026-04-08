import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Available languages with flags
  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  // Get current language
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Handle language change
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={dropdownRef}
      className={cn("relative", className)}
    >
      {/* Language Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm md:text-base text-white hover:text-purple-400 transition-colors" 
      >
        <span className="text-xl mr-1">{currentLanguage.flag}</span>
        <span className="font-medium">{currentLanguage.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-36 rounded-xl shadow-2xl bg-black border border-purple-500/20 transition-all duration-200 z-50">
          <div className="py-2 px-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={cn(
                  "w-full text-left flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-purple-600/10 hover:text-white rounded-lg transition-colors",
                  i18n.language === language.code && "text-purple-400"
                )}
              >
                <span className="text-xl mr-2">{language.flag}</span>
                {t(`language.${language.code}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 