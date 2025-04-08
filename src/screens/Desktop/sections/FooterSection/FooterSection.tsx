import React from "react";

export const FooterSection = (): JSX.Element => {
  // Footer navigation data
  const footerLinks = [
    {
      title: "Servicios",
      links: ["Automatización", "Análisis predictivo", "Optimización de procesos", "Inteligencia de negocio", "Consultoría estratégica"],
    },
    {
      title: "Empresa",
      links: ["Sobre nosotros", "Blog", "Casos de éxito", "Equipo", "Prensa", "Contacto"],
    },
    {
      title: "Recursos",
      links: ["Webinars", "Whitepapers", "Calculadora ROI", "Documentación"],
    },
    {
      title: "Legal",
      links: ["Privacidad", "Términos", "Seguridad"],
    },
  ];

  // Social media icons
  const socialIcons = [
    { src: "/socials-5.svg", alt: "Twitter" },
    { src: "/socials-2.svg", alt: "Facebook" },
    { src: "/socials.svg", alt: "Instagram" },
    { src: "/socials-4.svg", alt: "LinkedIn" },
    { src: "/socials-1.svg", alt: "YouTube" },
    { src: "/socials-3.svg", alt: "GitHub" },
  ];

  return (
    <footer className="w-full bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <div className="font-bold text-2xl bg-gradient-to-r from-white to-purple-600 text-transparent bg-clip-text">
                Glipce.com
              </div>
              <p className="text-gray-400 max-w-sm">
                Transformamos empresas mediante la automatización inteligente, 
                optimizando costos y mejorando la eficiencia operativa.
              </p>
              <div className="flex gap-4 mt-2">
                {socialIcons.map((icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={icon.alt}
                  >
                    <img
                      className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((category, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-white font-medium mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Glipce. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
