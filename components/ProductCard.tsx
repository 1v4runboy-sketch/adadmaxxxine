'use client';
import Image from 'next/image';
import Link from 'next/link';
import { waLink } from '@/lib/utils';

export default function ProductCard({ p }: { p: any }) {
  return (
    <div className="group rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden transition-shadow hover:shadow-elevate">
      <Link href={`/produto/${p.slug}`} className="block relative aspect-[4/3] bg-neutral-50 dark:bg-neutral-800">
        <Image
          src={p.images[0]}
          alt={p.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="p-3 space-y-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex text-[10px] uppercase tracking-wide border rounded px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800">{p.brand}</span>
          {p.subcategory && <span className="text-xs text-neutral-500">· {p.subcategory}</span>}
        </div>
        <Link href={`/produto/${p.slug}`} className="font-medium leading-snug line-clamp-2 hover:underline">
          {p.name}
        </Link>
        <div className="flex gap-2">
          <a
            href={waLink(p.name)}
            target="_blank"
            className="text-sm px-3 py-1.5 rounded bg-weg text-white hover:brightness-110"
          >
            Consultar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
