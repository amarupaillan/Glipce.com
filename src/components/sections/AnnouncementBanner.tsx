import React from "react";
import { useTranslation } from 'react-i18next';

export const AnnouncementBanner = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center">
        <p className="text-black text-sm font-medium">
          {t('announcementBanner.text')}
        </p>
        <a href="#contacto" className="ml-3 flex items-center text-sm font-medium text-black hover:text-gray-800">
          {t('announcementBanner.cta')}
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}; 