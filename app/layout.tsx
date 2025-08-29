import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import FloatingWhats from '@/components/FloatingWhats';

export const metadata = {
  title: 'Polus Eletrotécnica — Catálogo Técnico',
  description: 'Catálogo técnico da Polus Eletrotécnica: peças para motores elétricos e bombas d’água.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
        <ThemeProvider>
          <Header />
          <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
          <FloatingWhats />
          <footer className="border-t border-black/5 dark:border-white/10 py-10 mt-10">
            <div className="max-w-6xl mx-auto px-4 text-sm text-neutral-600 dark:text-neutral-300">
              <p className="font-medium">Polus Eletrotécnica</p>
              <p>R. José Maria Castelo Prado, 13 - Ayrosa, Osasco - SP, 06290-130</p>
              <p>Atendimento: Seg–Sex 08:00–12:00 / 13:00–17:00 · Sáb/Dom fechado</p>
              <p>Email: <a className="underline" href="mailto:poluseletrotecnica@hotmail.com">poluseletrotecnica@hotmail.com</a> · Instagram: <a className="underline" href="https://www.instagram.com/_poluseletrotecnica/" target="_blank">@_poluseletrotecnica</a></p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
