import React from 'react';
import { Header } from '../components/sections/Header';
import { FooterSection } from '../components/sections/FooterSection';
import { Button } from '../components/ui/button';
import { CheckIcon, XIcon } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// Componente para las tarjetas de planes
const PlanCard = ({ 
  title, 
  subtitle,
  price, 
  features, 
  idealFor,
  cta,
  ctaLink,
  popular
}: {
  title: string;
  subtitle: string;
  price: string;
  features: {text: string, included: boolean}[];
  idealFor: string;
  cta: string;
  ctaLink: string;
  popular?: boolean;
}) => {
  const { t } = useTranslation();
  
  return (
    <div className={`relative rounded-2xl overflow-hidden flex flex-col h-full ${
      popular ? 'border-2 border-purple-500 shadow-xl shadow-purple-500/20' : 'border border-border'
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
          Popular
        </div>
      )}
      
      <div className="p-6 md:p-8 flex-grow">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-1 text-muted-foreground font-medium">{t(subtitle)}</p>
        
        <div className="mt-4 mb-6">
          <p className="text-lg font-medium text-muted-foreground">{t("Desde")}</p>
          <p className="text-3xl font-bold">{price}</p>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium mb-3">{t("Características principales:")}</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                {feature.included ? (
                  <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <XIcon className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                )}
                <span className={`${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                  {t(feature.text)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium mb-2">{t("Ideal para:")}</h4>
          <p className="text-muted-foreground">{t(idealFor)}</p>
        </div>
      </div>
      
      <div className="p-6 md:p-8 bg-muted/50">
        <Button 
          className={`w-full py-6 ${
            popular ? 'bg-purple-500 hover:bg-purple-600' : 'btn-secondary'
          }`}
          onClick={() => window.open(ctaLink, '_self')}
        >
          {t(cta)}
        </Button>
      </div>
    </div>
  );
};

// Componente de tabla comparativa
const ComparisonTable = ({ plans }: { plans: Array<any> }) => {
  const { t } = useTranslation();
  
  // Características a comparar (todas las características únicas de todos los planes)
  const allFeatures = Array.from(new Set(
    plans.flatMap(plan => plan.features.map((f: {text: string}) => f.text))
  ));

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left bg-background">{t("Característica")}</th>
              {plans.map((plan, index) => (
                <th key={index} className="px-6 py-4 text-center bg-background">
                  {plan.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allFeatures.map((feature, index) => (
              <tr key={index} className="border-b border-border">
                <td className="px-6 py-4 font-medium">
                  {t(feature)}
                </td>
                {plans.map((plan, planIndex) => {
                  const featureInfo = plan.features.find((f: {text: string}) => f.text === feature);
                  const isIncluded = featureInfo ? featureInfo.included : false;
                  
                  return (
                    <td key={planIndex} className="px-6 py-4 text-center">
                      {isIncluded ? (
                        <span className="inline-block" aria-label={t("Incluido")}>
                          <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                        </span>
                      ) : (
                        <span className="inline-block" aria-label={t("No incluido")}>
                          <XIcon className="h-5 w-5 text-red-500 mx-auto" />
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr>
              <td className="px-6 py-4 font-medium">
                {t("Precio")}
              </td>
              {plans.map((plan, index) => (
                <td key={index} className="px-6 py-4 text-center font-medium">
                  {plan.price}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Tabla comparativa móvil
const MobileComparisonTable = ({ plans }: { plans: Array<any> }) => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-8">
      {plans.map((plan, planIndex) => (
        <div key={planIndex} className="rounded-xl border border-border overflow-hidden">
          <div className="bg-background px-6 py-4 border-b border-border">
            <h3 className="font-bold">{plan.title}</h3>
          </div>
          <div className="divide-y divide-border">
            {plan.features.map((feature: {text: string, included: boolean}, featureIndex: number) => (
              <div key={featureIndex} className="px-6 py-4 flex justify-between items-center">
                <span className="text-muted-foreground">{t(feature.text)}</span>
                {feature.included ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <XIcon className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
            <div className="px-6 py-4 flex justify-between items-center">
              <span className="text-muted-foreground">{t("Precio")}</span>
              <span className="font-medium">{plan.price}</span>
            </div>
            <div className="p-6">
              <Button 
                className={`w-full ${plan.popular ? 'bg-purple-500 hover:bg-purple-600' : ''}`}
                onClick={() => window.open(plan.ctaLink, '_self')}
              >
                {t(plan.cta)}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const PlanesPage = () => {
  const { t } = useTranslation();
  
  // Datos de planes actualizados y simplificados
  const pricingPlans = [
    {
      title: "PRO",
      subtitle: "Presencia web profesional con IA",
      price: "$120 USD / mes + IVA",
      features: [
        { text: "Página web optimizada / personalizada", included: true },
        { text: "Agente de IA 24/7", included: true },
        { text: "SEO básico", included: true },
        { text: "Vídeos mensuales", included: false },
        { text: "Contenido SEO", included: false },
        { text: "Estrategia de contenido", included: false }
      ],
      idealFor: "Negocios que necesitan una presencia web profesional con atención automatizada.",
      cta: "Empezar con PRO",
      ctaLink: "/contacto"
    },
    {
      title: "PRO+",
      subtitle: "Contenido estratégico con IA",
      price: "$170 USD / mes + IVA",
      features: [
        { text: "Página web optimizada / personalizada", included: false },
        { text: "Agente de IA 24/7", included: true },
        { text: "SEO básico", included: false },
        { text: "Vídeos mensuales", included: true },
        { text: "Contenido SEO", included: true },
        { text: "Estrategia de contenido", included: true }
      ],
      idealFor: "Negocios con web que necesitan contenido constante para sus plataformas digitales.",
      cta: "Escalar con PRO+",
      ctaLink: "/contacto",
      popular: true
    },
    {
      title: "PLATINO",
      subtitle: "Solución digital completa",
      price: "$250 USD / mes + IVA",
      features: [
        { text: "Página web optimizada / personalizada", included: true },
        { text: "Agente de IA 24/7", included: true },
        { text: "SEO básico", included: true },
        { text: "Vídeos mensuales", included: true },
        { text: "Contenido SEO", included: true },
        { text: "Estrategia de contenido", included: true }
      ],
      idealFor: "Empresas que quieren delegar completamente su presencia digital y enfocarse en su negocio.",
      cta: "Trabajar con Glipce",
      ctaLink: "/contacto"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-purple-500">
              {t("Planes simples, resultados extraordinarios")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("Soluciones claras para impulsar tu negocio con tecnología, contenido y estrategia. Sin complicaciones.")}
            </p>
          </div>
        </section>
        
        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} id={plan.title.toLowerCase().replace('+', 'plus')}>
                  <PlanCard 
                    title={plan.title}
                    subtitle={plan.subtitle}
                    price={plan.price}
                    features={plan.features}
                    idealFor={plan.idealFor}
                    cta={plan.cta}
                    ctaLink={plan.ctaLink}
                    popular={plan.popular}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                {t("Comparación de planes")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("Encuentra el plan ideal para tu negocio con esta comparativa completa de características.")}
              </p>
            </div>
            
            {/* Tabla para desktop */}
            <div className="hidden md:block">
              <ComparisonTable plans={pricingPlans} />
            </div>
            
            {/* Tablas para móvil */}
            <div className="md:hidden">
              <MobileComparisonTable plans={pricingPlans} />
            </div>
          </div>
        </section>
        
        {/* Value Proposition */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">{t("¿Por qué elegir Glipce?")}</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                {t("Nos diferenciamos por combinar tecnología avanzada con un enfoque personalizado.")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("Simple y efectivo")}</h3>
                <p className="text-muted-foreground">
                  {t("Sin complicaciones. Soluciones claras y resultados medibles para tu negocio.")}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="8" height="8" x="2" y="2" rx="2"/>
                    <rect width="8" height="8" x="14" y="2" rx="2"/>
                    <rect width="8" height="8" x="2" y="14" rx="2"/>
                    <rect width="8" height="8" x="14" y="14" rx="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("Todo integrado")}</h3>
                <p className="text-muted-foreground">
                  {t("Web, contenido y automatización trabajando juntos, no por separado.")}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("Atención humana")}</h3>
                <p className="text-muted-foreground">
                  {t("Tecnología potente con soporte humano. Nunca estarás solo.")}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">
              {t("¿Dudas sobre qué plan elegir?")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("Agenda una llamada gratuita de 15 minutos. Te ayudamos a encontrar la solución ideal para tu negocio.")}
            </p>
            <Button 
              size="lg"
              className="mt-8 shadow-lg shadow-purple-500/20"
              onClick={() => window.open('/contacto', '_self')}
            >
              {t("Agendar llamada gratuita")}
            </Button>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default PlanesPage; 