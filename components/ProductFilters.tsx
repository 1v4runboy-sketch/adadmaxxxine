'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ProductFilters({ products }: { products: any[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const brands = Array.from(new Set(products.map(p => p.brand))).sort();
  const cats = Array.from(new Set(products.map(p => p.category))).sort();
  const subs = Array.from(new Set(products.map(p => p.subcategory).filter(Boolean))).sort();

  const setParam = (key: string, value: string) => {
    const sp = new URLSearchParams(params.toString());
    if (value) sp.set(key, value); else sp.delete(key);
    router.push(`${pathname}?${sp.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <input
        type="search"
        defaultValue={params.get('q') || ''}
        onChange={(e) => setParam('q', e.currentTarget.value)}
        placeholder="Buscar..."
        className="h-9 px-3 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900"
      />
      <select className="h-9 px-2 rounded bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10" onChange={(e) => setParam('marca', e.currentTarget.value)} value={params.get('marca')||''}>
        <option value="">Marca</option>
        {brands.map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <select className="h-9 px-2 rounded bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10" onChange={(e) => setParam('cat', e.currentTarget.value)} value={params.get('cat')||''}>
        <option value="">Categoria</option>
        {cats.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select className="h-9 px-2 rounded bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10" onChange={(e) => setParam('sub', e.currentTarget.value)} value={params.get('sub')||''}>
        <option value="">Subcategoria</option>
        {subs.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
    </div>
  );
}
