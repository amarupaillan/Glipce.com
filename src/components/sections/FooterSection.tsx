import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const FooterSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  // Helper function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Footer navigation data with proper links
  const footerLinks = [
    {
      title: t('footer.categories.0.title'),
      links: [
        { name: t('footer.categories.0.links.0.name'), href: "/servicios/automatizacion-procesos" },
        { name: t('footer.categories.0.links.1.name'), href: "/servicios/inteligencia-negocio" },
        { name: t('footer.categories.0.links.2.name'), href: "/servicios/soporte-cliente-ia" },
        { name: t('footer.categories.0.links.3.name'), href: "/servicios/gestion-facturas" },
        { name: t('footer.categories.0.links.4.name'), href: "/servicios/social-media-viral-management" },
      ],
    },
    {
      title: t('footer.categories.1.title'),
      links: [
        { name: t('footer.categories.1.links.0.name'), href: "/empresa/sobre-nosotros" },
        { name: t('footer.categories.1.links.1.name'), href: "/empresa/casos-exito" },
        { name: t('footer.categories.1.links.2.name'), href: "/contacto" },
      ],
    },
    {
      title: t('footer.categories.2.title'),
      links: [
        { name: t('footer.categories.2.links.0.name'), href: "/blog" },
      ],
    },
  ];

  // Generamos un arreglo de íconos sociales con SVGs
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
  ];

  return (
    <footer className="w-full bg-black border-t border-gray-800 relative">
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
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1 relative">
            <div className="flex flex-col gap-6">
              <Link to="/" className="font-bold text-2xl bg-gradient-to-r from-white to-purple-600 text-transparent bg-clip-text inline-block" onClick={scrollToTop}>
                Glipce.com
              </Link>
              <p className="text-gray-400 max-w-sm">
                {t('footer.companyDescription')}
              </p>
              <div className="flex gap-4 mt-2">
                {socialIcons.map((icon, index) => (
                  <a 
                    key={index}
                    href={icon.href}
                    className="text-gray-400 hover:text-white transition-colors bg-gray-900 p-2 rounded-full hover:bg-gray-800"
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
              <h3 className="text-white font-medium mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                      onClick={scrollToTop}
                    >
                      <svg className="w-3 h-3 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
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
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 