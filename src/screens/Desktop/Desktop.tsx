import React, { Suspense, lazy } from "react";
import { Header } from "../../components/sections/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { PricingSection } from '../../components/sections/PricingSection';
import { TestimonialsSection } from '../../components/sections/TestimonialsSection';
import { FAQSection } from '../../components/sections/FAQSection';
import { GuaranteeSection } from '../../components/sections/GuaranteeSection';
import { ProcessSection } from '../../components/sections/ProcessSection';
import { CtaSection } from "../../components/sections/CtaSection";
import { FooterSection } from "../../components/sections/FooterSection";
import { AlertCircle, Users, Globe } from "lucide-react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export const Desktop = (): JSX.Element => {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden bg-background text-foreground">
      <Header />
      <HeroSection />

      {/* Problem Section — con fondo visual */}
      <section className="relative py-24 md:py-32 bg-forest-950 overflow-hidden">
        {/* Dithering background sutil */}
        <Suspense fallback={null}>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-15 mix-blend-screen">
            <Dithering
              colorBack="#00000000"
              colorFront="#3d8b3d"
              shape="warp"
              type="4x4"
              speed={0.1}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-sm font-medium text-green-400/80 uppercase tracking-widest mb-4">El Problema</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
              ¿Por qué tu empresa no crece como debería?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              La mayoría de las empresas de servicios para el hogar en Chile dependen de métodos que no escalan. Existe una forma mejor de llenar tu agenda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">Dependes del boca a boca</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Las recomendaciones son buenas, pero no son predecibles. Un mes lento y se te va todo al chancho. Necesitas un sistema que traiga clientes todas las semanas.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">Leads compartidos</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Las plataformas genéricas le venden el mismo contacto a 3 o 5 empresas. Terminas compitiendo por precio antes de siquiera contestar el teléfono.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">Invisible en internet</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                El 85% de los dueños de casa buscan en Google antes de contratar. Si no tienes presencia digital, tu competencia se lleva esos clientes.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 text-center border border-green-400/20">
              <h3 className="font-serif text-2xl font-medium text-white mb-3">Hay una forma mejor.</h3>
              <p className="text-white/60 text-base max-w-3xl mx-auto leading-relaxed">
                Un sistema de marketing diseñado exclusivamente para empresas de servicios al hogar, que te entrega <strong className="text-green-400">leads pre-calificados y exclusivos</strong> directamente — de forma consistente, todas las semanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <ProcessSection />

      {/* Industrias que Atendemos */}
      <section className="relative py-24 md:py-32 bg-forest-950 overflow-hidden">
        <Suspense fallback={null}>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-screen">
            <Dithering
              colorBack="#00000000"
              colorFront="#5fa55f"
              shape="warp"
              type="4x4"
              speed={0.08}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-green-400/80 uppercase tracking-widest mb-4">Industrias que Atendemos</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-tight mb-6">
              Exclusivo para empresas de servicios al hogar
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              No trabajamos con restaurantes, clínicas ni e-commerce. Solo nos enfocamos en servicios para el hogar — por eso tenemos mejores resultados.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Paisajismo y Jardines", "Techumbres", "Remodelación", "Climatización",
              "Pintura", "Quinchos y Terrazas", "Cercos y Portones", "Hormigón y Radier",
              "Energía Solar", "Gasfitería", "Electricidad", "Piscinas",
            ].map((trade) => (
              <div key={trade} className="bg-white/5 backdrop-blur-sm rounded-xl px-5 py-4 text-center border border-white/10 hover:border-green-400/30 hover:bg-white/10 transition-all duration-300">
                <p className="font-medium text-white/80 text-sm">{trade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué Incluye */}
      <PricingSection />

      {/* Testimonios */}
      <TestimonialsSection />

      {/* Garantía */}
      <GuaranteeSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Final */}
      <CtaSection />
      <FooterSection />
    </main>
  );
};
