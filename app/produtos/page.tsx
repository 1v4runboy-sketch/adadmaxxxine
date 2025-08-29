import { PRODUCTS } from '@/lib/data';
import ProductFilters from '@/components/ProductFilters';
import ProductGrid from '@/components/ProductGrid';

export const dynamic = 'force-static';

export default function ProductsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Catálogo</h1>
      <ProductFilters products={PRODUCTS} />
      <ProductGrid products={PRODUCTS} />
    </div>
  );
}
