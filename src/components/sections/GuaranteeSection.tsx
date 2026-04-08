import React from 'react';
import { ShieldCheck, DollarSign, Clock, CheckCircle } from 'lucide-react';

const guarantees = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Garantía de 90 Días",
    description: "Si no te entregamos al menos 15 leads calificados en tus primeros 90 días, te devolvemos el 100% de tu plata. Sin preguntas.",
    highlight: "Sin Riesgo"
  },
  {
    id: 2,
    icon: DollarSign,
    title: "Sin Contratos Largos",
    description: "Mes a mes. Cancela cuando quieras sin multas ni penalizaciones. Nos ganamos tu confianza cada mes.",
    highlight: "Cancela Cuando Quieras"
  },
  {
    id: 3,
    icon: Clock,
    title: "Listo en 7 Días",
    description: "Tus campañas, landing page y sistema de leads estarán 100% operativos dentro de una semana desde que empezamos.",
    highlight: "Rápido"
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Todo es Tuyo",
    description: "Tu cuenta de anuncios, tu landing page, tus datos. Si te vas, te llevas todo. No retenemos nada como rehén.",
    highlight: "Tus Activos"
  }
];

const benefits = [
  { id: 1, text: "Leads exclusivos — nunca se comparten con tu competencia" },
  { id: 2, text: "Dueños de casa pre-calificados y listos para contratar" },
  { id: 3, text: "Video y fotos profesionales de tus proyectos" },
  { id: 4, text: "Reportes transparentes — ves cada peso invertido" },
  { id: 5, text: "Ejecutivo de cuenta dedicado (no un chatbot)" },
  { id: 6, text: "Solo trabajamos con UNA empresa por rubro por zona" }
];

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Nuestra Garantía</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
            Cero riesgo para ti
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Respaldamos nuestros resultados con garantías que te ponen a ti en control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((guarantee) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={guarantee.id}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 text-center hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {guarantee.highlight}
                  </span>
                </div>
                <h3 className="font-serif font-medium text-foreground mb-3">{guarantee.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{guarantee.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
                ¿Por qué somos diferentes?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground/80 leading-relaxed">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-forest-900 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-serif text-2xl font-medium text-white mb-4">
                La Garantía Glipce
              </h4>
              <p className="text-white/60 mb-6 leading-relaxed">
                15+ leads calificados en 90 días o te devolvemos el 100% de tu fee de gestión. Así de simple.
              </p>
              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="font-serif text-3xl font-semibold text-white mb-1">15+</div>
                <div className="text-white/50 text-sm">Leads Calificados Garantizados</div>
                <div className="text-white/50 text-sm">en 90 días o tu plata de vuelta</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 border border-border">
            <h3 className="font-serif text-xl font-medium text-foreground mb-4">
              ¿Listo para crecer sin riesgo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agenda tu llamada de estrategia gratis — si no somos un buen fit, te lo decimos altiro
            </p>
            <a
              href="https://calendly.com/contact-glipce/reunion-de-inicio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Agenda tu Llamada Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
