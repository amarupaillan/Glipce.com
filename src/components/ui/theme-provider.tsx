import React, { createContext, useContext, useEffect, useState, useLayoutEffect, useMemo } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type Theme = 'dark' | 'light' | 'system';

type ThemeContextType = {
  theme: Theme; 
  setTheme: (theme: Theme) => void;
  isDark: boolean;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

// Use useLayoutEffect to prevent flickering, fallback to useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'theme',
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);
  const [isDark, setIsDark] = useState(true);

  // Initialization effect - runs once on mount
  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    
    // Add a class to enable smooth transitions
    document.documentElement.classList.add('theme-transition');
    
    // Apply default theme class if no theme is set
    const savedTheme = localStorage.getItem(storageKey) as Theme | null;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Apply dark theme as default instead of checking system preference
        document.documentElement.classList.add('dark');
      localStorage.setItem(storageKey, 'dark');
      setCurrentTheme('dark');
    }
    
    // Detect if the current theme is dark
    setIsDark(document.documentElement.classList.contains('dark'));
    
    // Remove transitions after changes to avoid flashing
    const handleTransitionEnd = () => document.documentElement.classList.remove('theme-transition');
    document.documentElement.addEventListener('transitionend', handleTransitionEnd);
    
    return () => {
      document.documentElement.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  // Apply styles for smooth theme transitions - only once
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .theme-transition,
      .theme-transition *,
      .theme-transition *::before,
      .theme-transition *::after {
        transition: background-color 0.2s ease-out, color 0.2s ease-out, border-color 0.2s ease-out !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle theme changes
  const setTheme = (theme: Theme) => {
    document.documentElement.classList.add('theme-transition');
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem(storageKey, theme);
    setCurrentTheme(theme);
    setIsDark(theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches));
  };

  // Memoize context value to prevent unnecessary rerenders
  const contextValue = useMemo(() => ({
    theme: currentTheme,
    setTheme,
    isDark
  }), [currentTheme, isDark]);

  if (!mounted) {
    // Avoid hydration mismatch by rendering nothing during SSR/initial render
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        storageKey={storageKey}
        enableSystem={true}
        enableColorScheme={true}
        value={{
          dark: "dark",
          light: "light",
          system: "system"
        }}
        {...props}
      >
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  );
}

// Create context with default values
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  isDark: true
});

// Custom hook for accessing theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 