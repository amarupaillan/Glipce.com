import React, { Suspense, lazy } from 'react';
import { MessageSquare, Wrench, TrendingUp, BarChart3 } from 'lucide-react';

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

const steps = [
  {
    number: "01",
    title: "Llamada de Estrategia Gratis",
    description: "Nos juntamos a conversar sobre tu negocio, tu mercado y tus metas. Analizamos tu competencia y te mostramos las oportunidades más grandes en tu zona. Sin compromiso.",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Armamos Todo por Ti",
    description: "Nuestro equipo crea tu landing page, escribe los textos de los anuncios, configura las campañas y deja listo el seguimiento de leads — todo en 7 días. Tú solo nos mandas tus mejores fotos de proyectos.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Empiezan a Llegar los Clientes",
    description: "Tus campañas salen al aire y los dueños de casa pre-calificados empiezan a llamarte. Cada lead es exclusivo tuyo — nunca lo compartimos con tu competencia.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Escalamos lo que Funciona",
    description: "Analizamos el rendimiento cada semana, optimizamos tus campañas y escalamos el presupuesto en los canales que mejor funcionan. Reuniones mensuales para revisar y planificar.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="como-funciona" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Nuestro Proceso</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
            De la primera llamada<br />a tu agenda llena.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Un sistema probado en 4 pasos que hace sonar tu teléfono con dueños de casa listos para contratar — a tiempo, dentro del presupuesto y con total transparencia.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 ${
                  index !== steps.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-mono text-muted-foreground">{step.number}</span>
                    <div className="h-px flex-1 bg-border max-w-[60px]" />
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/10">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
