import { BRANDS } from '@/lib/data';
import Image from 'next/image';

export default function BrandsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Marcas</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {BRANDS.map(b => (
          <div key={b.slug} className="rounded border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-3 flex items-center justify-center">
            <Image src={b.logo} alt={b.name} width={160} height={64} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
