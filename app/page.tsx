import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, FEATURED_SLUGS, BRANDS } from '@/lib/data';
import ReviewsCarousel from '@/components/ReviewsCarousel';

export default function HomePage() {
  const featured = PRODUCTS.filter(p => FEATURED_SLUGS.includes(p.slug));
  return (
    <div className="space-y-12 animate-spacefade">
      {/* Hero */}
      <section className="rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 -z-10">
          <Image src="/Loop-ezgif.com-video-to-webp-converter.webp" alt="" fill className="object-cover opacity-40 dark:opacity-70" />
        </div>
        <div className="p-8 sm:p-12 bg-white/70 dark:bg-neutral-950/40 backdrop-blur rounded-2xl border border-black/10 dark:border-white/10">
          <h1 className="text-2xl sm:text-3xl font-semibold">Peças para motores elétricos e bombas d’água</h1>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">Catálogo técnico da Polus Eletrotécnica — consulte pelo WhatsApp.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/produtos" className="px-4 py-2 rounded bg-weg text-white hover:brightness-110">Ver catálogo</Link>
            <a href="https://wa.me/551135992935" className="px-4 py-2 rounded border border-weg text-weg hover:bg-weg/5">Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Vitrine */}
      <section>
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-lg font-semibold">Vitrine</h2>
          <Link href="/produtos" className="text-sm text-weg hover:underline">ver todos</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(p => (
            <Link key={p.id} href={`/produto/${p.slug}`} className="group rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden">
              <div className="relative aspect-[4/3] bg-neutral-50 dark:bg-neutral-800">
                <Image src={p.images[0]} alt={p.name} fill className="object-contain transition-transform group-hover:scale-[1.03]" />
              </div>
              <div className="p-3">
                <div className="text-[10px] uppercase tracking-wide inline-flex border rounded px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800">{p.brand}</div>
                <h3 className="font-medium mt-1">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Marcas */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Marcas</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {BRANDS.map(b => (
            <div key={b.slug} className="rounded border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-3 flex items-center justify-center">
              <Image src={b.logo} alt={b.name} width={140} height={64} className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Avaliações de clientes</h2>
        <ReviewsCarousel />
      </section>
    </div>
  );
}
