import React, { useState, useEffect, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import { cn } from "../../lib/utils";
import { useTranslation } from "../../hooks/useTranslation";

// Enlaces para la navegación de clínica dental
const dentalClinicNavLinks = [
  { to: "#soluciones", key: "dentalClinic.header.links.problems" }, // Soluciones
  { to: "#sistema", key: "dentalClinic.header.links.system" },      // Sistema Glipce
  { to: "#casos", key: "dentalClinic.header.links.cases" },         // Case Studies
];

export const Header = memo((): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const calendlyUrl = "https://calendly.com/amarupaillan1966/30min"; // Keep for the main CTA button

  // Optimizar handlers con useCallback
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // Translations for links
  const translatedNavLinks = dentalClinicNavLinks.map(link => ({
    ...link,
    text: t(link.key),
  }));

  return (
    <header 
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
        "bg-background/90 backdrop-blur-xl border border-blue-500/10 rounded-full shadow-lg shadow-blue-900/15",
        "px-6 md:px-8 py-3 w-[95%] md:w-auto max-w-screen-xl"
      )}
    >
      <div className="max-w-full mx-auto">
        <div className="flex justify-between items-center space-x-4 md:space-x-8">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary flex-shrink-0">
            Glipce<span className="text-primary">.com</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-grow justify-center">
            {translatedNavLinks.map((link, index) => (
              // Assuming internal links for these sections now
                <Link 
                  key={index} 
                  to={link.to} 
                  className="whitespace-nowrap text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
                >
                  {link.text}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              
            ))}
            
            <div className="flex items-center space-x-3 ml-6 flex-shrink-0">
              <ThemeToggle />
            </div>
          </nav>

          {/* CTA Button - Moved outside of Nav for simplicity */}
          <Button 
            className="hidden md:flex items-center bg-gradient-to-r from-blue-600 to-primary shadow-md shadow-blue-900/20 px-5 py-2 text-sm flex-shrink-0 hover:opacity-90 transition-all whitespace-nowrap"
            size="sm"
            onClick={() => window.open(calendlyUrl, '_blank')}
          >
            <span className="whitespace-nowrap">{t("dentalClinic.header.cta")}</span>
          </Button>

          {/* Mobile Menu Button - Adjust positioning */}
          <div className="md:hidden flex items-center space-x-3 flex-shrink-0">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-foreground hover:bg-primary/10 focus:outline-none"
              aria-label={mobileMenuOpen ? t("Cerrar menú") : t("Abrir menú")}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-background/95 backdrop-blur-xl border-b border-blue-500/10 fixed top-16 left-0 w-full transition-transform duration-300 ease-in-out z-40",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="px-4 pt-6 pb-8 space-y-3 sm:px-6">
          {translatedNavLinks.map((link, index) => (
             // Assuming internal links for these sections now
                <Link 
                  key={index} 
                  to={link.to} 
                  className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-blue-500/10 hover:text-primary transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              
          ))}
          <Button 
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-primary shadow-lg shadow-blue-900/20 hover:opacity-90 transition-all py-3"
            onClick={() => window.open(calendlyUrl, '_blank')}
          >
            <span className="whitespace-nowrap">{t("dentalClinic.header.cta")}</span>
          </Button>
        </nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header'; 