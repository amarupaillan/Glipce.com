import React from "react";
import { Button } from "../../components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "../../lib/utils";
import { Check } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

const PlanCard = ({
  title,
  price,
  features,
  isPopular,
  cta,
  ctaLink,
}: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
  ctaLink: string;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "relative rounded-xl p-6 border transition-all duration-300 flex flex-col justify-between",
        isPopular
          ? isDark
            ? "border-primary-foreground/20 bg-primary-foreground/5 shadow-md"
            : "border-primary/20 bg-primary/5 shadow-md"
          : "border-border"
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 right-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
            {t("Popular")}
          </span>
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{t(title)}</h3>
        <div className="mb-4">
          <span className="text-2xl font-bold text-foreground">{t(price)}</span>
          <span className="text-sm text-muted-foreground ml-1">+ IVA</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check size={16} className="text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{t(feature)}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button 
        variant={isPopular ? "default" : "outline"} 
        className="w-full mt-4"
        onClick={() => window.open(ctaLink, '_self')}
      >
        {t(cta)}
      </Button>
    </div>
  );
};

export const PlanCardSection = (): JSX.Element => {
  const { t } = useTranslation();
  const calendlyUrl = "https://calendly.com/amarupaillan1966/30min";

  return (
    <div id="planes" className="w-full py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="w-16 h-1 rounded-full bg-primary mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("Planes diseñados para resultados")}
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            {t("Escala tus resultados con nuestros planes optimizados para maximizar tu inversión. Combina los servicios para obtener descuentos especiales.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlanCard
            title={t("PRO")}
            price={t("$147 USD / mes")}
            features={[
              t("Página web profesional"),
              t("1 agente de IA personalizado"),
              t("1 revisión mensual"),
              t("Hosting incluido"),
              t("Optimización SEO básica")
            ]}
            cta={t("Empezar con PRO")}
            ctaLink={calendlyUrl}
          />
          
          <PlanCard
            title={t("PRO+")}
            price={t("$177 USD / mes")}
            features={[
              t("4 videos mensuales para redes"),
              t("1 agente de IA personalizado"),
              t("Creación de contenido SEO"),
              t("Actualización semanal"),
              t("Estrategia de contenido")
            ]}
            isPopular={true}
            cta={t("Escalar con PRO+")}
            ctaLink={calendlyUrl}
          />
          
          <PlanCard
            title={t("PLATINO")}
            price={t("$497 USD / mes")}
            features={[
              t("Página web profesional"),
              t("6 videos mensuales para redes"),
              t("1 agente de IA personalizado"),
              t("Creación de contenido premium"),
              t("Estrategia y análisis mensual")
            ]}
            cta={t("Trabajar con Glipce")}
            ctaLink={calendlyUrl}
          />
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            {t("¿Dudas sobre qué plan elegir?")}
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open(calendlyUrl, '_blank')}
          >
            {t("Agendar llamada gratuita")}
          </Button>
        </div>
      </div>
    </div>
  );
}; 