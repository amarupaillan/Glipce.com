import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "¿En qué se diferencian de otras agencias de marketing?",
    answer: "Nosotros solo trabajamos con empresas de servicios al hogar. No atendemos restaurantes, clínicas ni tiendas online. Esa especialización significa que sabemos exactamente qué funciona para tu rubro. Además, cada lead es 100% exclusivo — no lo compartimos con nadie más."
  },
  {
    id: 2,
    question: "¿Qué tan rápido voy a empezar a recibir leads?",
    answer: "La mayoría de nuestros clientes recibe sus primeros leads entre 5 y 7 días después del lanzamiento. El sistema se optimiza completamente en 2-3 semanas. Para el segundo mes, vas a tener un flujo predecible de leads todas las semanas."
  },
  {
    id: 3,
    question: "Ya contraté una agencia antes y no funcionó. ¿Por qué sería distinto?",
    answer: "Lo entendemos — por eso ofrecemos cero contratos y una garantía de 90 días con devolución de plata. La mayoría de las agencias trabajan con todo tipo de negocios. Nosotros solo nos dedicamos a servicios al hogar, por eso sabemos exactamente qué funciona. Si no podemos ayudarte, te lo decimos altiro en la primera llamada."
  },
  {
    id: 4,
    question: "¿Necesito tener un sitio web?",
    answer: "No. Nosotros te creamos una landing page de alta conversión como parte del servicio. Está diseñada específicamente para convertir dueños de casa que buscan tus servicios en tu zona. Si ya tienes sitio web, también podemos trabajar con él."
  },
  {
    id: 5,
    question: "¿Cuánto debería invertir en publicidad?",
    answer: "Generalmente recomendamos entre $200.000 y $800.000 CLP al mes en presupuesto de anuncios, dependiendo de tu zona y objetivos. Esta plata se paga directo a Meta/Google — tú eres dueño de las cuentas y ves exactamente en qué se invierte cada peso. La mayoría de los clientes ven un retorno de 5 a 15 veces su inversión."
  },
  {
    id: 6,
    question: "¿Y si ya tengo suficiente pega?",
    answer: "Mejor todavía — con más leads puedes elegir los proyectos grandes y dejar pasar los chicos. Nuestros mejores clientes usan el sistema para llenar su agenda con las pegas que realmente quieren, a los precios que quieren cobrar."
  },
  {
    id: 7,
    question: "¿Hay contrato o compromiso de permanencia?",
    answer: "No, nunca. Es mes a mes. Si quieres pausar o cancelar, nos avisas antes de tu próximo ciclo de facturación y listo. Además tenemos la garantía de 90 días — si no entregamos al menos 15 leads calificados, te devolvemos toda tu plata."
  },
  {
    id: 8,
    question: "¿Con qué rubros trabajan?",
    answer: "Nos especializamos en servicios al hogar: paisajismo, jardines, techumbres, remodelación, climatización, pintura, quinchos, terrazas, cercos, hormigón, gasfitería, electricidad, piscinas y más. Si atiendes a dueños de casa y tu trabajo promedio es sobre $500.000 CLP, probablemente podemos ayudarte."
  }
];

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; onToggle: () => void }> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-5 text-left bg-card hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between"
        onClick={onToggle}
      >
        <span className="font-medium text-foreground pr-4 text-base">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-5 bg-muted/30 border-t border-border">
          <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="preguntas" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Preguntas Frecuentes</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            Dudas comunes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Respuestas directas a lo que nos preguntan todos antes de empezar
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openItems.includes(faq.id)}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="font-serif text-xl font-medium text-foreground mb-4">
              ¿Todavía tienes dudas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agenda una llamada gratis de 15 minutos y te respondemos todo — sin presión, sin pitch si no somos un buen fit
            </p>
            <a
              href="https://calendly.com/contact-glipce/reunion-de-inicio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Agenda tu Llamada Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
