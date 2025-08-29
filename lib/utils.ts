export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function waLink(productName: string) {
  const msg = `Olá, tenho interesse em ${productName}. Pode informar disponibilidade e prazo, por favor?`;
  const url = new URL('https://wa.me/551135992935');
  url.searchParams.set('text', msg);
  return url.toString();
}

export type Brand = 'WEG'|'Jacuzzi'|'JL Capacitores'|'Cifa'|'Solda Cobix'|'Lanc Comercial'|'IGUI'|'Polus';
export type Category =
  | 'Bombas Jacuzzi'
  | 'Capacitores Eletrolíticos'
  | 'Capacitores Permanentes'
  | 'Tintas WEG'
  | 'Vernizes WEG'
  | 'Diluentes WEG'
  | 'Resinas Isolantes';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: Brand;
  category: Category;
  subcategory?: string;
  description: string;
  images: string[];
  specs?: Record<string, string>;
}

export interface Review {
  name: string;
  avatar: string;
  text: string;
}
