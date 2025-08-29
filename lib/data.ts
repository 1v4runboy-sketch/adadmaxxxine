import type { Product, Review } from './utils';

// Imagens no /public
export const BRANDS = [
  { name: 'WEG', slug: 'weg', logo: '/marcas/weg.webp' },
  { name: 'Jacuzzi', slug: 'jacuzzi', logo: '/marcas/jacuzzi.webp' },
  { name: 'JL Capacitores', slug: 'jl-capacitores', logo: '/marcas/jl-capacitores.webp' },
  { name: 'Cifa', slug: 'cifa', logo: '/marcas/cifa.webp' },
  { name: 'IGUI', slug: 'igui', logo: '/marcas/igui.webp' },
  { name: 'Lanc Comercial', slug: 'lanc-comercial', logo: '/marcas/lanc-comercial.webp' },
  { name: 'Solda Cobix', slug: 'solda-cobix', logo: '/marcas/solda-cobix.webp' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'verniz-weg-1314-5l',
    slug: 'verniz-weg-1314-5l',
    name: 'Verniz WEG 1314 – 5 Litros',
    brand: 'WEG',
    category: 'Vernizes WEG',
    subcategory: '5L',
    description: 'Verniz isolante WEG 1314 indicado para proteção e isolamento em bobinagens e componentes elétricos.',
    images: ['/produtos/verniz-weg-1314-foto1.png','/produtos/verniz-weg-1314-foto2.png'],
    specs: {
      'Litragem': '5 L',
      'Aplicação': 'Isolamento elétrico',
      'Marca': 'WEG'
    }
  },
  {
    id: 'corpo-prefiltro-jacuzzi-a',
    slug: 'corpo-prefiltro-jacuzzi-a',
    name: 'Corpo Pré-filtro Jacuzzi A',
    brand: 'Jacuzzi',
    category: 'Bombas Jacuzzi',
    subcategory: 'Corpos/Pré-filtro',
    description: 'Corpo de pré-filtro para bomba Jacuzzi linha A.',
    images: ['/produtos/jacuzzi-a-1.webp','/produtos/jacuzzi-a-2.webp','/produtos/jacuzzi-a-3.webp'],
    specs: {
      'Compatibilidade': 'Linha Jacuzzi A',
    }
  },
  {
    id: 'capacitor-permanente-250v',
    slug: 'capacitor-permanente-250v',
    name: 'Capacitor Permanente 250V',
    brand: 'JL Capacitores',
    category: 'Capacitores Permanentes',
    subcategory: '250V',
    description: 'Capacitor permanente para motores elétricos.',
    images: ['/produtos/capacitor-250v-foto1.png','/produtos/capacitor-250v-foto2.png'],
    specs: {
      'Tensão': '250 V',
    }
  },
  {
    id: 'filme-poliester',
    slug: 'filme-poliester',
    name: 'Filme Poliéster',
    brand: 'WEG',
    category: 'Resinas Isolantes',
    subcategory: 'Poliéster',
    description: 'Filme de poliéster para isolamento elétrico – diversas medidas.',
    images: ['/produtos/poliester-foto1.webp','/produtos/poliester-foto2.webp'],
    specs: {
      'Material': 'Poliéster (PET)'
    }
  },
  {
    id: 'resina-95b',
    slug: 'resina-95b',
    name: 'Resina Isolante 95B',
    brand: 'WEG',
    category: 'Resinas Isolantes',
    subcategory: '95B',
    description: 'Resina isolante 95B para impregnação de bobinas e componentes.',
    images: ['/produtos/resina-calas-95b-1.webp','/produtos/resina-calas-95b-2.webp'],
  },
];

export const FEATURED_SLUGS = [
  'verniz-weg-1314-5l',
  'corpo-prefiltro-jacuzzi-a',
  'capacitor-permanente-250v',
  'filme-poliester',
  'resina-95b'
];

export const REVIEWS: Review[] = [
  { name: 'Dos Anjos', avatar: '/reviews/dos-anjos.png', text: 'Atendimento maravilhoso e ágil, preços justos e com diversidades de produtos. Sou cliente a muitos anos, e super recomendo' },
  { name: 'Rafael R. dos Santos', avatar: '/reviews/rafael-r-dos-santos.png', text: 'Ótima Empresa\nAtendimento rápido, boa organização dos produtos.\nNota 10 para atendente Fernanda.\nRecomendo a Todos.' },
  { name: 'Sandro Backschat', avatar: '/reviews/sandro-backschat.png', text: 'Ótimo atendimento, empresa cumpre o que promete !\nFernanda me explicou certinho sobre as peças, muito gente boa !\nRecomendo !!!!' },
  { name: 'Meire Polezi', avatar: '/reviews/meire-polezi.png', text: 'Preço muito bom e atendimento nota 10  .\nA atendente Fernanda me atendeu e esclareceu todas as minhas dúvidas. Parabéns' },
  { name: 'Thalia Ariadna', avatar: '/reviews/thalia-ariadna.png', text: 'Atendente Heitor super prestativo! Me explicou muito bem sobre as peças, ótimo comércio!' },
  { name: 'Renata _', avatar: '/reviews/renata.png', text: 'Avaliando principalmente pelo atendimento da Fernanda, sempre muito simpática e atenciosa com os clientes.' },
  { name: 'James Lourenço Gonçalves', avatar: '/reviews/james-lourenco.png', text: 'Ótimo atendimento e bons preços, super indico!!' },
  { name: 'Darah Mendes', avatar: '/reviews/darah-mendes.png', text: 'gostei muito das peças e o atendimento impecavel da Fernanda 👏🏽 …' },
  { name: 'Rodrigoyasmin Almeida', avatar: '/reviews/rodrigo-yasmin.png', text: 'Ótimo atendimento da Fernanda super prestativa 👍 …' },
  { name: 'Jorge dos Santos', avatar: '/reviews/jorge-dos-santos.png', text: 'Excelente, empresa familiar, sabem o que estão fazendo' },
];
