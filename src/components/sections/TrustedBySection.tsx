import React from "react";
import { useTranslation } from 'react-i18next';

export const TrustedBySection = (): JSX.Element => {
  const { t } = useTranslation();
  
  // Company logos - referenciando a imágenes locales
  const companyLogos = [
    { 
      alt: t('trustedBy.companies.acme'), 
      src: "/src/assets/images/logos/acme.svg", 
      width: "146.42px", 
      height: "32px" 
    },
    { 
      alt: t('trustedBy.companies.quantum'), 
      src: "/src/assets/images/logos/quantum.svg", 
      width: "125.09px", 
      height: "32px" 
    },
    { 
      alt: t('trustedBy.companies.echo'), 
      src: "/src/assets/images/logos/echo.svg", 
      width: "160px", 
      height: "28.12px" 
    },
    { 
      alt: t('trustedBy.companies.celestia'), 
      src: "/src/assets/images/logos/celestia.svg", 
      width: "115.39px", 
      height: "28.12px" 
    },
    { 
      alt: t('trustedBy.companies.pulse'), 
      src: "/src/assets/images/logos/pulse.svg", 
      width: "100.85px", 
      height: "22.3px" 
    },
    { 
      alt: t('trustedBy.companies.apex'), 
      src: "/src/assets/images/logos/apex.svg", 
      width: "85.33px", 
      height: "27.15px" 
    }
  ];

  return (
    <div id="clientes" className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-12">
            {t('trustedBy.title')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center w-full">
            {companyLogos.map((logo, index) => (
              /* Temporalmente mostramos placeholders de logos mientras se añaden los archivos reales */
              <div
                key={index}
                className="bg-gray-800 rounded-lg w-32 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-white text-sm font-medium">{logo.alt}</span>
                {/* La imagen real se usaría así:
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={logo.width} 
                  height={logo.height} 
                  className="opacity-70 hover:opacity-100 transition-all duration-300"
                />
                */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 