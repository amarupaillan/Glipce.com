import React, { Suspense, lazy, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export const HeroSection = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80&auto=format&fit=crop"
          alt="Vista aérea de barrio residencial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Dithering overlay */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-25 mix-blend-screen">
          <Dithering
            colorBack="#00000000"
            colorFront="#2d5a27"
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.5 : 0.15}
            className="size-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-2 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="text-white/80 text-sm font-medium tracking-wide">Marketing exclusivo para empresas de servicios al hogar en Chile</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-medium text-white leading-[1.05] tracking-tight mb-8">
          Clientes calificados<br />
          <span className="italic text-white/80">todos los meses.</span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Creamos sistemas de marketing completos que generan 30+ leads exclusivos y pre-calificados al mes para empresas de paisajismo, techumbres, remodelación y servicios para el hogar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/contact-glipce/reunion-de-inicio"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-forest-900 px-8 py-4 rounded-full text-base font-medium hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Agenda tu Llamada Gratis
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#resultados"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white px-6 py-4 text-base font-medium transition-colors"
          >
            Ver Resultados de Clientes
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-semibold text-white">50+</div>
            <div className="text-white/40 text-sm mt-1">Clientes Activos</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-3xl md:text-4xl font-serif font-semibold text-white">1.200+</div>
            <div className="text-white/40 text-sm mt-1">Leads al Mes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-semibold text-white">9x</div>
            <div className="text-white/40 text-sm mt-1">ROI Promedio</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/30" />
      </div>
    </section>
  );
};
