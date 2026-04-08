import React, { Suspense, lazy } from 'react';

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

interface Testimonial {
  id: number;
  name: string;
  company: string;
  location: string;
  text: string;
  rating: number;
  result: string;
  avatar: string;
  trade: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rodrigo Muñoz",
    company: "Jardines Muñoz SpA",
    location: "Santiago, RM",
    trade: "Paisajismo",
    text: "Antes dependíamos puro del boca a boca y habian meses que no sonaba el telefono. Con Glipce empezamos a recibir llamadas de gente que ya sabia lo que quería, presupuestos grandes, no puras podas chicas. Ahora tenemos la agenda llena pa los proximos 2 meses.",
    rating: 5,
    result: "+38 leads/mes",
    avatar: "RM"
  },
  {
    id: 2,
    name: "Felipe Contreras",
    company: "Techumbres Contreras",
    location: "Concepción, Biobío",
    trade: "Techumbres",
    text: "Probé con otra agencia antes y fue plata botada, ni un lead bueno en 3 meses. Los cabros de Glipce armaron todo en una semana y a los 10 dias ya tenia la primera pega cerrada. La diferencia es que ellos cashan de verdad el rubro.",
    rating: 5,
    result: "3x más cierres",
    avatar: "FC"
  },
  {
    id: 3,
    name: "Sebastián Vergara",
    company: "Remodelaciones SV",
    location: "Viña del Mar, Valparaíso",
    trade: "Remodelación",
    text: "Nos armaron una pagina con nuestras fotos de proyectos y los antes/despues quedaron increibles. Pasamos de facturar 8 palos al mes a más de 25 en 90 dias. Lo mejor es que los clientes llegan ya convencidos, no hay que andar rogando.",
    rating: 5,
    result: "$8M a $25M/mes",
    avatar: "SV"
  },
  {
    id: 4,
    name: "Cristian Soto",
    company: "Soto Climatización",
    location: "Temuco, Araucanía",
    trade: "Climatización",
    text: "Al principio no estaba ni ahi con el marketing digital, pensaba que era pura plata perdida. Pero empezaron a llegar pedidos de instalacion de aire acondicionado y calefaccion que ni sabia que existian en la zona. El retorno fue positivo el primer mes.",
    rating: 5,
    result: "ROI en 30 días",
    avatar: "CS"
  },
  {
    id: 5,
    name: "Andrés Figueroa",
    company: "Quinchos y Terrazas AF",
    location: "La Serena, Coquimbo",
    trade: "Quinchos",
    text: "Lo que me convenció fue que no hay contrato largo. Dije ya, pruebo un mes y si no funciona chao. Van 5 meses y tuve que contratar 2 maestros más porque no damos abasto. Mejor decisión que he tomado para la empresa.",
    rating: 5,
    result: "+2 maestros contratados",
    avatar: "AF"
  },
  {
    id: 6,
    name: "José Miguel Bravo",
    company: "Piscinas del Valle",
    location: "Rancagua, O'Higgins",
    trade: "Piscinas",
    text: "Siempre teniamos pega en verano pero el resto del año era complicado. Con Glipce empezamos a vender mantenciones y reparaciones todo el año. Los leads llegan filtrados, la gente ya sabe cuanto vale el servicio antes de llamar.",
    rating: 5,
    result: "+22 leads en mes 1",
    avatar: "JB"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= rating ? 'text-amber-400' : 'text-muted'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section id="resultados" className="relative py-24 md:py-32 bg-forest-950 overflow-hidden">
      {/* Dithering background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-screen">
          <Dithering
            colorBack="#00000000"
            colorFront="#2d5a27"
            shape="warp"
            type="4x4"
            speed={0.08}
            className="size-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-green-400/80 uppercase tracking-widest mb-4">Resultados Reales</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Empresarios de servicios al hogar en Chile que dejaron de depender del boca a boca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-medium text-xs">{testimonial.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white text-sm">{testimonial.name}</h4>
                  <p className="text-green-400/80 text-xs font-medium">{testimonial.company}</p>
                  <p className="text-white/40 text-xs">{testimonial.location}</p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>

              <div className="mb-3">
                <span className="inline-block px-2.5 py-1 bg-white/10 text-white/60 text-xs rounded-full font-medium">
                  {testimonial.trade}
                </span>
              </div>

              <blockquote className="text-white/70 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>

              <div className="bg-green-400/10 rounded-lg p-3 border border-green-400/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-semibold text-sm">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">50+</div>
              <div className="text-white/40 text-sm">Clientes Activos</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">1.200+</div>
              <div className="text-white/40 text-sm">Leads Generados/Mes</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">9x</div>
              <div className="text-white/40 text-sm">ROI Promedio</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">96%</div>
              <div className="text-white/40 text-sm">Retención de Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
