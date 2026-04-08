import React, { Suspense, lazy, useState } from "react";
import { ArrowRight } from "lucide-react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export const CtaSection = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const calendlyUrl = "https://calendly.com/contact-glipce/reunion-de-inicio";

  return (
    <section
      className="py-12 w-full flex justify-center items-center px-4 md:px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full max-w-7xl relative">
        <div className="relative overflow-hidden rounded-[48px] border border-border bg-forest-950 min-h-[500px] md:min-h-[550px] flex flex-col items-center justify-center duration-500">
          <Suspense fallback={null}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#2d5a27"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Aceptando Nuevos Clientes
            </div>

            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
              Deja de esperar<br />
              <span className="italic text-white/70">que suene el teléfono.</span>
            </h2>

            <p className="text-white/50 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Recibe un plan de marketing personalizado para tu empresa — gratis.
              Si no somos un buen fit, te lo decimos en la llamada.
            </p>

            <p className="text-green-400/80 font-medium mb-10">
              Sin contratos. Sin riesgo. Solo resultados.
            </p>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-white text-forest-900 px-12 text-base font-medium transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
            >
              <span>Agenda tu Llamada Gratis</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <p className="text-white/30 text-sm mt-6">
              Llamada de estrategia de 15 minutos, sin compromiso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
