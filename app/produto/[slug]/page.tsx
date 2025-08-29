import { PRODUCTS } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { waLink } from '@/lib/utils';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find(p => p.slug === params.slug);
  if (!product) return notFound();
  const related = PRODUCTS.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 6);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Carousel simples com scroll snap */}
        <div className="overflow-x-auto rounded border border-black/5 dark:border-white/10 snap-x snap-mandatory">
          <div className="flex gap-3 min-w-full">
            {product.images.map((src, i) => (
              <div key={i} className="relative shrink-0 w-full aspect-[4/3] bg-neutral-50 dark:bg-neutral-800 snap-start">
                <Image src={src} alt={`${product.name} ${i+1}`} fill className="object-contain"/>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex text-[10px] uppercase tracking-wide border rounded px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800">{product.brand}</span>
            {product.subcategory && <span className="text-xs text-neutral-500">· {product.subcategory}</span>}
          </div>
          <h1 className="text-2xl font-semibold mt-1">{product.name}</h1>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">{product.description}</p>

          {product.specs && (
            <table className="mt-4 w-full text-sm border-separate border-spacing-y-1">
              <tbody>
                {Object.entries(product.specs).map(([k,v]) => (
                  <tr key={k}>
                    <td className="px-2 py-1 text-neutral-500">{k}</td>
                    <td className="px-2 py-1 font-medium">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="mt-4 flex gap-3">
            <a href={waLink(product.name)} target="_blank" className="px-4 py-2 rounded bg-weg text-white hover:brightness-110">Consultar no WhatsApp</a>
            <Link href="/produtos" className="px-4 py-2 rounded border border-black/10 dark:border-white/10">Voltar</Link>
          </div>
        </div>
      </div>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Produtos relacionados</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(r => (
              <Link key={r.slug} href={`/produto/${r.slug}`} className="group rounded border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden">
                <div className="relative aspect-[4/3] bg-neutral-50 dark:bg-neutral-800">
                  <Image src={r.images[0]} alt={r.name} fill className="object-contain group-hover:scale-[1.03] transition-transform" />
                </div>
                <div className="p-3">
                  <div className="text-[10px] uppercase tracking-wide inline-flex border rounded px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800">{r.brand}</div>
                  <h3 className="font-medium mt-1">{r.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
