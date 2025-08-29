'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-80 bg-white dark:bg-neutral-900 shadow-elevate transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
          <h2 className="font-semibold">Menu</h2>
          <button onClick={onClose} className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800">Fechar</button>
        </div>
        <nav className="p-4 space-y-3">
          <Link href="/" className="block hover:underline">Início</Link>
          <Link href="/produtos" className="block hover:underline">Produtos</Link>
          <Link href="/marcas" className="block hover:underline">Marcas</Link>
          <Link href="/contato" className="block hover:underline">Contato</Link>
        </nav>
      </aside>
    </>
  );
}
