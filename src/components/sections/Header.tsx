import React, { useState, useCallback, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: '#como-funciona', label: 'Cómo Funciona' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#garantia', label: 'Garantía' },
  { href: '#preguntas', label: 'Preguntas' },
];

export const Header = memo((): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const calendlyUrl = "https://calendly.com/contact-glipce/reunion-de-inicio";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-black/20 backdrop-blur-md py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span className={cn(
              "font-serif text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white"
            )}>
              Glipce<span className="opacity-60">.com</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:opacity-100 whitespace-nowrap",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center flex-shrink-0">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 xl:px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
            >
              Agenda tu Llamada
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors flex-shrink-0",
              scrolled ? "text-foreground" : "text-white"
            )}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[56px] bg-background/98 backdrop-blur-xl border-b border-border transition-all duration-300 shadow-xl",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border mt-3">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium"
            >
              Agenda tu Llamada Gratis
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
