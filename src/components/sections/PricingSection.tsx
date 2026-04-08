import React, { Suspense, lazy } from "react";
import { Layout, Megaphone, Search, Camera, Database, UserCheck, ArrowUpRight } from "lucide-react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
}

const features: Feature[] = [
  {
    title: "Landing Page de Alta Conversión",
    description: "Una página diseñada a medida para convertir visitantes en leads, optimizada para tu rubro y tu zona. Mobile-first, rápida y enfocada en resultados.",
    icon: Layout,
    tags: ["Diseño a Medida", "Mobile-First", "Carga Rápida"],
  },
  {
    title: "Anuncios en Facebook e Instagram",
    description: "Campañas segmentadas que llegan a dueños de casa que están buscando tus servicios en tu zona. Nos encargamos del diseño, la segmentación y la optimización semanal.",
    icon: Megaphone,
    tags: ["Geo-Segmentado", "Test A/B", "Optimización Semanal"],
  },
  {
    title: "Google Ads",
    description: "Captura las búsquedas de alta intención de personas que necesitan contratar ahora. Anuncios de búsqueda, locales y remarketing para estar siempre presente.",
    icon: Search,
    tags: ["Búsqueda", "Anuncios Locales", "Remarketing"],
  },
  {
    title: "Foto y Video Profesional",
    description: "Mostramos tus mejores trabajos con contenido profesional que genera confianza antes de que el cliente te conozca. Galerías de antes y después que venden solas.",
    icon: Camera,
    tags: ["Fotos de Proyectos", "Video Tours", "Antes y Después"],
  },
  {
    title: "Sistema de Gestión de Leads",
    description: "Seguimiento de cada lead, follow-up automático y nunca más se te escapa un cliente potencial. CRM configurado con secuencias automatizadas.",
    icon: Database,
    tags: ["CRM Listo", "Follow-Up Auto", "Reportes"],
  },
  {
    title: "Ejecutivo de Cuenta Dedicado",
    description: "Una persona real que conoce tu negocio, contesta tus llamadas y se reúne contigo semanalmente para revisar rendimiento y planificar los próximos pasos.",
    icon: UserCheck,
    tags: ["Llamadas Semanales", "Reportes", "Estrategia"],
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Qué Incluye</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
              Todo lo que necesitas<br />para crecer. Nada más.
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-md leading-relaxed">
            Cada cliente recibe un sistema de marketing completo — no solo anuncios. Nos encargamos de la estrategia, el diseño, la tecnología y la optimización continua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://calendly.com/contact-glipce/reunion-de-inicio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all duration-300"
          >
            Agenda tu Llamada de Estrategia
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
