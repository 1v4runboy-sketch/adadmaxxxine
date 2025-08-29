'use client';
import { useMemo } from 'react';
import ProductCard from './ProductCard';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ProductGrid({ products }: { products: any[] }) {
  const params = useSearchParams();
  const router = useRouter();

  const filtered = useMemo(() => {
    let list = products.slice();
    const q = (params.get('q') || '').toLowerCase();
    const marca = params.get('marca');
    const cat = params.get('cat');
    const sub = params.get('sub');
    if (q) list = list.filter(p => (p.name + ' ' + (p.description||'')).toLowerCase().includes(q));
    if (marca) list = list.filter(p => p.brand === marca);
    if (cat) list = list.filter(p => p.category === cat);
    if (sub) list = list.filter(p => p.subcategory === sub);
    return list;
  }, [params, products]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map(p => <ProductCard key={p.id} p={p} />)}
      {filtered.length === 0 && (
        <div className="col-span-full text-sm text-neutral-500">Nenhum produto encontrado.</div>
      )}
    </div>
  );
}
