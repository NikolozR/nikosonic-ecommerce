'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { setTheme as setThemeAction } from '../../actions';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ 
  children, 
  initialTheme 
}: { 
  children: React.ReactNode;
  initialTheme?: string;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // If we have an initial theme from server, use it
    if (initialTheme === 'dark' || initialTheme === 'light') {
      return initialTheme;
    }
    
    // Otherwise, we'll determine it on the client side
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    
    return 'light'; // fallback
  });

  useEffect(() => {
    // Apply theme to document immediately
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Only set cookie if theme has changed from initial
    if (!initialTheme || initialTheme !== theme) {
      setThemeAction(theme);
    }
  }, [theme, initialTheme]);

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if no explicit theme was set from server
      if (!initialTheme) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [initialTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
