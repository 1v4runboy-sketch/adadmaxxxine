'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  // smooth cross-fade theme switch
  useEffect(() => {
    const html = document.documentElement;
    const handler = () => {
      html.classList.add('theme-transition');
      window.setTimeout(() => html.classList.remove('theme-transition'), 400);
    };
    window.addEventListener('themechange', handler as any);
    return () => window.removeEventListener('themechange', handler as any);
  }, []);
  return (
    <NextThemesProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </NextThemesProvider>
  );
}
