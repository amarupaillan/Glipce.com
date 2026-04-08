import React from "react";

export const FooterSection = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 py-16 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-serif text-xl font-semibold text-white mb-4">
              Glipce<span className="text-white/50">.com</span>
            </div>
            <p className="text-white/40 mb-6 text-sm leading-relaxed">
              Marketing exclusivo para empresas de servicios al hogar en Chile. Más leads, más pegas, más ingresos.
            </p>
            <div className="text-sm text-white/30">
              Sin contratos &middot; Leads exclusivos &middot; Garantía 90 días
            </div>
          </div>

          {/* Servicios */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm text-white mb-4 uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-3">
              {[
                { name: "Anuncios en Meta", href: "#como-funciona" },
                { name: "Landing Pages", href: "#como-funciona" },
                { name: "Google Ads", href: "#como-funciona" },
                { name: "Video Profesional", href: "#como-funciona" },
                { name: "Gestión de Leads", href: "#como-funciona" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/40 hover:text-green-400 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrias */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm text-white mb-4 uppercase tracking-wider">Industrias</h3>
            <ul className="space-y-3">
              {[
                "Paisajismo", "Techumbres", "Remodelación",
                "Climatización", "Pintura", "Quinchos y Terrazas",
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/40 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm text-white mb-4 uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@glipce.com" className="text-white/40 hover:text-green-400 transition-colors text-sm">
                  contact@glipce.com
                </a>
              </li>
              <li>
                <span className="text-white/40 text-sm">Santiago, Chile</span>
              </li>
              <li className="mt-6">
                <a
                  href="https://calendly.com/contact-glipce/reunion-de-inicio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300"
                >
                  Agenda tu Llamada Gratis
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 my-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/30 text-sm mb-6 md:mb-0">
            &copy; {currentYear} Glipce — Marketing para Empresas de Servicios al Hogar. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:contact@glipce.com" className="text-white/30 hover:text-green-400 transition-colors text-sm">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
