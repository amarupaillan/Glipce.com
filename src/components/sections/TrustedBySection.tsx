import React from "react";
import { useTheme as useNextTheme } from 'next-themes';

export const TrustedBySection = (): JSX.Element => {
  const { theme } = useNextTheme();
  const isDark = theme === 'dark';
  
  // Placeholder company logos
  const companyLogos = [
    { 
      alt: "Cliente 1", 
      placeholder: "Cliente 1"
    },
    { 
      alt: "Cliente 2", 
      placeholder: "Cliente 2"
    },
    { 
      alt: "Cliente 3", 
      placeholder: "Cliente 3"
    },
    { 
      alt: "Cliente 4", 
      placeholder: "Cliente 4"
    },
    { 
      alt: "Cliente 5", 
      placeholder: "Cliente 5"
    },
    { 
      alt: "Cliente 6", 
      placeholder: "Cliente 6"
    }
  ];

  return (
    <div id="clientes" className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Confían en nosotros
          </h2>
          <p className="max-w-2xl text-muted-foreground text-center mb-12">
            Empresas que han transformado su presencia digital con nuestras soluciones
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center w-full">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className={`${isDark ? "bg-gray-800" : "bg-gray-100"} rounded-lg w-32 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300`}
              >
                <span className="text-foreground text-sm font-medium">{logo.placeholder}</span>
                {/* La imagen real se usaría así:
                <img 
                  src={`/src/assets/images/logos/client-${index+1}.svg`} 
                  alt={logo.alt} 
                  className="max-w-full max-h-12 opacity-70 hover:opacity-100 transition-all duration-300"
                />
                */}
              </div>
            ))}
          </div>
          
          {/* Testimonials section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Juan Díaz</h4>
                  <p className="text-sm text-muted-foreground">CEO, Empresa SL</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "La implementación de los agentes IA ha transformado nuestra atención al cliente, permitiéndonos dar soporte 24/7 con excelentes resultados."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-background/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 flex items-center justify-center">
                  <span className="text-sm font-medium">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">María Rodríguez</h4>
                  <p className="text-sm text-muted-foreground">Marketing Manager, Grupo ABC</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Los videos producidos para nuestras redes sociales han aumentado nuestro engagement un 300% en solo dos meses. Impresionante trabajo."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-background/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 flex items-center justify-center">
                  <span className="text-sm font-medium">PG</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Pablo González</h4>
                  <p className="text-sm text-muted-foreground">Fundador, Startup XYZ</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Nuestra nueva web ha convertido visitas en clientes desde el primer día. El diseño es impecable y la optimización para móviles perfecta."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 