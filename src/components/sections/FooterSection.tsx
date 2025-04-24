import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ui/theme-toggle";
import { useTranslation } from "../../hooks/useTranslation";

// Language Toggle Component
const LanguageToggle = () => {
  const { language, setLanguage, t } = useTranslation();
  
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 rounded text-sm ${language === 'es' 
          ? 'bg-purple-500 text-white' 
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        aria-label={t("Cambiar a Español")}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded text-sm ${language === 'en' 
          ? 'bg-purple-500 text-white' 
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        aria-label={t("Switch to English")}
      >
        EN
      </button>
    </div>
  );
};

export const FooterSection = (): JSX.Element => {
  const { t } = useTranslation();
  const calendlyUrl = "https://calendly.com/amarupaillan1966/30min";
  
  // Helper function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Footer navigation data with proper links
  const footerLinks = [
    {
      title: t("Servicios"),
      links: [
        { name: t("Producción de videos"), href: "/servicios#contenido" },
        { name: t("Landing Pages & Web"), href: "/servicios#landing" },
        { name: t("Agentes IA"), href: "/servicios#agentes" }
      ],
    },
    {
      title: t("Empresa"),
      links: [
        { name: t("Nuestros Planes"), href: "/planes" },
        { name: t("Contacto"), href: "/contacto" },
        { name: t("Agendar llamada"), href: calendlyUrl, external: true }
      ],
    }
  ];

  // Social media icons with SVGs
  const socialIcons = [
    { 
      name: "Twitter",
      href: "https://twitter.com/glipce",
      svg: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
    },
    { 
      name: "LinkedIn",
      href: "https://linkedin.com/company/glipce",
      svg: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
      name: "Instagram",
      href: "https://instagram.com/glipce",
      svg: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    }
  ];

  return (
    <footer className="w-full border-t border-border relative bg-background">
      {/* Decorative gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      
      {/* Decorative dots pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <div className="absolute right-12 top-12 w-2 h-2 rounded-full bg-purple-400"></div>
        <div className="absolute right-24 top-8 w-1 h-1 rounded-full bg-blue-400"></div>
        <div className="absolute right-36 top-16 w-3 h-3 rounded-full bg-purple-600"></div>
        <div className="absolute right-48 top-24 w-1 h-1 rounded-full bg-blue-600"></div>
        <div className="absolute right-16 top-24 w-1 h-1 rounded-full bg-indigo-400"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-6">
              <Link to="/" className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-purple-500" onClick={scrollToTop}>
                Glipce.com
              </Link>
              <p className="text-muted-foreground max-w-sm">
                {t("Creamos embudos de venta completos con videos profesionales, landing pages efectivas y agentes IA que automatizan la atención al cliente y las ventas.")}
              </p>
              <div className="flex gap-4 mt-2">
                {socialIcons.map((icon, index) => (
                  <a 
                    key={index}
                    href={icon.href}
                    className="text-muted-foreground hover:text-foreground transition-colors bg-muted p-2 rounded-full hover:bg-muted/70"
                    aria-label={icon.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="opacity-70 hover:opacity-100 transition-opacity">
                      {icon.svg}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((category, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-foreground font-medium mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-3 h-3 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center"
                        onClick={scrollToTop}
                      >
                        <svg className="w-3 h-3 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Toggles and Copyright */}
        <div className="py-6 border-t border-muted">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Glipce. {t("Todos los derechos reservados.")}
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 