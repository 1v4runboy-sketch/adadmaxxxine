'use client';
import Link from 'next/link';
import RotatingLogoButton from './RotatingLogoButton';
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-neutral-950/50 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-3">
        <RotatingLogoButton onClick={() => setOpen(v => !v)} />
        <Link href="/" className="font-semibold tracking-wide hover:opacity-90">
          Polus Eletrotécnica
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <Link href="/produtos" className="text-sm px-3 py-1.5 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700">Catálogo</Link>
          <a href="https://wa.me/551135992935" target="_blank" rel="noopener" className="text-sm px-3 py-1.5 rounded bg-weg text-white hover:brightness-110">WhatsApp</a>
        </div>
      </div>
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
