import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from "../ui/language-selector";

// Subcomponente para dropdowns en escritorio
const DesktopDropdown = ({ 
  title, 
  isActive, 
  toggleDropdown, 
  links 
}: { 
  title: string; 
  isActive: boolean; 
  toggleDropdown: () => void; 
  links: { to: string; text: string }[] 
}) => {
  return (
    <div className="relative group">
      <button 
        onClick={toggleDropdown}
        className="flex items-center text-white hover:text-purple-400 transition-colors font-medium"
      >
        {title}
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`absolute left-0 mt-2 w-60 rounded-xl shadow-2xl bg-black border border-purple-500/20 transition-all duration-200 z-50 ${
          isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="py-2 px-1">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.to} 
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-600/10 hover:text-white rounded-lg transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Subcomponente para dropdowns en móvil
const MobileDropdown = ({ 
  title, 
  isActive, 
  toggleDropdown, 
  links 
}: { 
  title: string; 
  isActive: boolean; 
  toggleDropdown: () => void; 
  links: { to: string; text: string }[] 
}) => {
  return (
    <div>
      <button 
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-3 px-4 text-white hover:bg-purple-600/10 rounded-lg transition-colors"
      >
        <span className="font-medium">{title}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isActive && (
        <div className="pl-4 space-y-1 mt-1">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.to} 
              className="block py-2 px-4 text-gray-300 hover:bg-purple-600/10 hover:text-white rounded-lg transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Header = (): JSX.Element => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Datos para los menús
  const serviceLinks = [
    { to: "/servicios/automatizacion-procesos", text: t('servicesList.processAutomation') },
    { to: "/servicios/inteligencia-negocio", text: t('servicesList.businessIntelligence') },
    { to: "/servicios/soporte-cliente-ia", text: t('servicesList.aiCustomerSupport') },
    { to: "/servicios/gestion-facturas", text: t('servicesList.invoiceManagement') },
    { to: "/servicios/social-media-viral-management", text: t('servicesList.socialMediaViral') }
  ];

  const companyLinks = [
    { to: "/empresa/sobre-nosotros", text: t('company.aboutUs') },
    { to: "/empresa/casos-exito", text: t('company.success') }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header 
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-lg rounded-xl mx-4 mt-1 shadow-xl shadow-purple-900/10 translate-y-[-8px]" 
          : "bg-black/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
            Glipce.com
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <DesktopDropdown 
              title={t('header.services')}
              isActive={activeDropdown === 'servicios'}
              toggleDropdown={() => toggleDropdown('servicios')}
              links={serviceLinks}
            />

            <DesktopDropdown 
              title={t('header.company')}
              isActive={activeDropdown === 'empresa'}
              toggleDropdown={() => toggleDropdown('empresa')}
              links={companyLinks}
            />

            <Link to="/blog" className="text-white hover:text-purple-400 transition-colors font-medium">
              {t('header.blog')}
            </Link>
            
            <Link to="/contacto" className="text-white hover:text-purple-400 transition-colors font-medium">
              {t('header.contact')}
            </Link>
            
            <LanguageSelector className="ml-2" />
            
            <Button 
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white transition-colors rounded-lg shadow-lg shadow-purple-900/20 px-5"
              onClick={() => window.open('/contacto', '_self')}
            >
              {t('header.scheduleDemo')}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button 
            className="md:hidden bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white transition-colors rounded-lg shadow-lg shadow-purple-900/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`${mobileMenuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 pointer-events-none'} md:hidden transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="py-2 space-y-1">
            <MobileDropdown 
              title={t('header.services')}
              isActive={activeDropdown === 'mobileServicios'}
              toggleDropdown={() => toggleDropdown('mobileServicios')}
              links={serviceLinks}
            />

            <MobileDropdown 
              title={t('header.company')}
              isActive={activeDropdown === 'mobileEmpresa'}
              toggleDropdown={() => toggleDropdown('mobileEmpresa')}
              links={companyLinks}
            />

            <Link to="/blog" className="block py-3 px-4 text-white hover:bg-purple-600/10 rounded-lg transition-colors">
              {t('header.blog')}
            </Link>
            
            <Link to="/contacto" className="block py-3 px-4 text-white hover:bg-purple-600/10 rounded-lg transition-colors">
              {t('header.contact')}
            </Link>

            <div className="px-4 py-3">
              <LanguageSelector />
            </div>
            
            <div className="px-4 py-3">
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white transition-colors rounded-lg shadow-lg shadow-purple-900/20 py-3"
                onClick={() => window.open('/contacto', '_self')}
              >
                {t('header.scheduleDemo')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}; 