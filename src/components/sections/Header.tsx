import React, { useState, useEffect, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import { cn } from "../../lib/utils";
import { useTranslation } from "../../hooks/useTranslation";

// Subcomponente para dropdowns en escritorio
const DesktopDropdown = memo(({ 
  title, 
  isActive, 
  toggleDropdown, 
  links 
}: { 
  title: string; 
  isActive: boolean; 
  toggleDropdown: (e: React.MouseEvent<HTMLElement>) => void; 
  links: { to: string; text: string }[] 
}) => {
  return (
    <div className="relative group">
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-1 px-3 py-2 rounded-md transition-colors font-medium text-foreground hover:text-primary hover:bg-primary/10"
      >
        {title}
        <svg className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`absolute left-0 mt-2 w-60 rounded-xl shadow-lg bg-background/95 backdrop-blur-sm border border-border transition-all duration-200 z-50 ${
          isActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-[-8px]'
        }`}
      >
        <div className="py-2 px-1">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.to} 
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground rounded-lg transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

DesktopDropdown.displayName = 'DesktopDropdown';

// Subcomponente para dropdowns en móvil
const MobileDropdown = memo(({ 
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
        className="flex items-center justify-between w-full py-4 px-4 text-foreground hover:bg-primary/10 rounded-lg transition-all duration-200 transform hover:translate-x-1"
      >
        <span className="font-medium">{title}</span>
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`pl-4 space-y-2 mt-2 overflow-hidden transition-all duration-300 ${
          isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {links.map((link, index) => (
          <Link 
            key={index} 
            to={link.to} 
            className="block py-3 px-4 ml-2 text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-all duration-200 transform hover:translate-x-1"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
});

MobileDropdown.displayName = 'MobileDropdown';

// Language Toggle Button
const LanguageToggle = memo(() => {
  const { language, setLanguage } = useTranslation();
  
  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="text-sm font-medium">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
});

LanguageToggle.displayName = 'LanguageToggle';

// Enlaces estáticos para evitar recreaciones
const mainLinks = [
  { to: "/servicios", key: "Servicios" },
  { to: "/planes", key: "Planes" },
  { to: "/contacto", key: "Contacto" }
];

const serviciosLinks = [
  { to: "/servicios#contenido", key: "Creación de Contenido" },
  { to: "/servicios#landing", key: "Landing Pages" },
  { to: "/servicios#agentes", key: "Agentes de IA" }
];

export const Header = memo((): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useTranslation();
  const calendlyUrl = "https://calendly.com/amarupaillan1966/30min";

  // Optimizar handlers con useCallback
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string, event?: React.MouseEvent<HTMLElement>) => {
    if (event) {
      event.stopPropagation();
    }
    setActiveDropdown(current => current === dropdown ? null : dropdown);
  }, []);

  // Handlers específicos para cada dropdown
  const handleServiciosToggle = useCallback((e: React.MouseEvent<HTMLElement>) => {
    toggleDropdown('servicios', e);
  }, [toggleDropdown]);

  const handleServiciosMobileToggle = useCallback(() => {
    toggleDropdown('servicios-mobile');
  }, [toggleDropdown]);

  // Optimizar efecto del scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Cierra el dropdown al hacer click fuera
  useEffect(() => {
    if (!activeDropdown) return;
    
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  // Traducciones de links
  const translatedMainLinks = mainLinks.map(link => ({
    ...link,
    text: t(link.key)
  }));
  
  const translatedServiciosLinks = serviciosLinks.map(link => ({
    ...link,
    text: t(link.key)
  }));

  return (
    <header 
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg shadow-purple-900/5 py-3" 
          : "bg-background py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-purple-500">
            Glipce<span className="text-primary">.com</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <DesktopDropdown 
              title={t("Servicios")} 
              isActive={activeDropdown === 'servicios'} 
              toggleDropdown={handleServiciosToggle} 
              links={translatedServiciosLinks} 
            />
            
            <Link 
              to="/planes" 
              className="px-3 py-2 rounded-md transition-colors font-medium text-foreground hover:text-primary hover:bg-primary/10"
            >
              {t("Planes")}
            </Link>
            
            <Link 
              to="/contacto" 
              className="px-3 py-2 rounded-md transition-colors font-medium text-foreground hover:text-primary hover:bg-primary/10"
            >
              {t("Contacto")}
            </Link>
            
            <div className="ml-2 flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            
            <Button 
              className="ml-3 shadow-lg shadow-purple-900/20 px-5"
              size="sm"
              onClick={() => window.open(calendlyUrl, '_blank')}
            >
              {t("Agendar llamada")}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
            <button
              type="button"
              className="p-2 rounded-md text-foreground hover:bg-primary/10 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t("Cerrar menú") : t("Abrir menú")}
            >
              <span className="sr-only">{mobileMenuOpen ? t("Cerrar menú") : t("Abrir menú")}</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full overflow-y-auto pt-14 pb-6 px-6 max-w-sm ml-auto">
            {/* Close button at the top right */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors"
              onClick={toggleMobileMenu}
              aria-label={t("Cerrar menú")}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mt-8 space-y-3">
              <MobileDropdown 
                title={t("Servicios")} 
                isActive={activeDropdown === 'servicios-mobile'} 
                toggleDropdown={handleServiciosMobileToggle} 
                links={translatedServiciosLinks} 
              />
              <Link 
                to="/planes" 
                className="flex items-center py-4 px-4 text-foreground hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium transform hover:translate-x-1"
                onClick={toggleMobileMenu}
              >
                {t("Planes")}
              </Link>
              <Link 
                to="/contacto" 
                className="flex items-center py-4 px-4 text-foreground hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium transform hover:translate-x-1"
                onClick={toggleMobileMenu}
              >
                {t("Contacto")}
              </Link>
            </div>
            
            <div className="mt-auto px-4">
              <Button 
                onClick={() => {
                  window.open(calendlyUrl, '_blank');
                  toggleMobileMenu();
                }}
                className="w-full py-3 text-base"
              >
                {t("Agendar llamada")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}); 