/**
 * Product catalog.
 * Add a photo to /public/images/products/ and reference it by filename.
 * Categories drive the grouping on /produse.
 */

export type Category =
  | 'cozonaci'
  | 'patiserie'
  | 'sandwich'
  | 'inmormantare';

export const categoryLabels: Record<Category, string> = {
  cozonaci:     'Cozonaci',
  patiserie:    'Produse de patiserie',
  sandwich:     'Pentru sandwich-uri',
  inmormantare: 'Pentru înmormântare',
};

export const categoryDescriptions: Partial<Record<Category, string>> = {
  cozonaci:
    'Cozonacii noștri sunt produsul de top — făcuți manual, după rețete de familie, doar cu ingrediente naturale.',
  sandwich:
    'Nu facem pâine. Producem chifle și baghete pentru sandwich-uri, ideale pentru fast-food-uri și unități de alimentație.',
  inmormantare:
    'Pregătim toate produsele tradiționale necesare pentru pomeniri și înmormântări. Comenzile se preiau telefonic.',
};

export type Product = {
  slug: string;
  name: string;
  category: Category;
  description?: string;
  image: string;
  featured?: boolean;
};

const PH = '/images/products/placeholder.svg';

export const products: Product[] = [
  // ---------- Cozonaci ----------
  {
    slug: 'cozonac-nuca',
    name: 'Cozonac cu nucă',
    category: 'cozonaci',
    description: 'Produsul nostru emblematic. Handmade, cu umplutură generoasă de nucă și ingrediente naturale.',
    image: '/images/products/CozonacNuca.png',
    featured: true,
  },
  {
    slug: 'cozonac-mac',
    name: 'Cozonac cu mac',
    category: 'cozonaci',
    description: 'Aceeași rețetă tradițională, cu umplutură fină de mac.',
    image: '/images/products/CozonacMac.png',
  },
  {
    slug: 'cozonac-rahat',
    name: 'Cozonac cu rahat',
    category: 'cozonaci',
    description: 'Cozonac cu rahat, exact ca în copilărie.',
    image: '/images/products/CozonacRahat.png',
  },
  {
    slug: 'cozonac-cacao',
    name: 'Cozonac cu cacao',
    category: 'cozonaci',
    description: 'Cozonac cu cremă de cacao, pentru iubitorii de ciocolată.',
    image: '/images/products/CozonacCacao.png',
  },

  // ---------- Patiserie ----------
  {
    slug: 'strudel-visine',
    name: 'Strudel cu vișine',
    category: 'patiserie',
    description: 'Foaie subțire cu umplutură de vișine.',
    image: '/images/products/StrudelBasic.png',
    featured: true,
  },
  {
    slug: 'strudel-mere',
    name: 'Strudel cu mere',
    category: 'patiserie',
    description: 'Foaie subțire cu mere și scorțișoară.',
    image: '/images/products/StrudelBasic.png',
  },
  {
    slug: 'strudel-caise',
    name: 'Strudel cu caise',
    category: 'patiserie',
    description: 'Foaie subțire cu umplutură de caise.',
    image: '/images/products/StrudelBasic.png',
  },
  {
    slug: 'strudel-ciocolata',
    name: 'Strudel cu ciocolată',
    category: 'patiserie',
    description: 'Foaie subțire cu umplutură de ciocolată.',
    image: '/images/products/StrudelBasic.png',
  },
  {
    slug: 'croissant-cioc-van',
    name: 'Croissant ciocolată & vanilie',
    category: 'patiserie',
    description: 'Croissant cu cremă de vanilie și toping de ciocolată.',
    image: '/images/products/CroissantCiocVan.png',
    featured: true,
  },
  {
    slug: 'croissant-ciocolata',
    name: 'Croissant cu ciocolată',
    category: 'patiserie',
    description: 'Croissant cu umplutură de ciocolată.',
    image: '/images/products/CroissantCioc.png',
  },
  {
    slug: 'croissant-cas',
    name: 'Croissant cu caș',
    category: 'patiserie',
    description: 'Croissant cu umplutură de caș proaspăt.',
    image: '/images/products/CroissantCas.png',
  },
  {
    slug: 'cuib-cu-nuca',
    name: 'Cuib cu nucă',
    category: 'patiserie',
    description: 'Foitaj fraged cu miez generos de nucă.',
    image: '/images/products/CuibNuca.png',
  },
  {
    slug: 'baigli',
    name: 'Baigli',
    category: 'patiserie',
    description: 'Rulou tradițional ardelenesc cu nucă sau mac.',
    image: '/images/products/BaigliBasic.png',
  },
  {
    slug: 'baton-mac',
    name: 'Baton cu mac',
    category: 'patiserie',
    description: 'Baton pufos cu semințe de mac.',
    image: '/images/products/BatonMac.png',
  },
  {
    slug: 'branzoaica',
    name: 'Brânzoaică',
    category: 'patiserie',
    description: 'Aluat fraged cu umplutură de brânză dulce.',
    image: PH,
  },
  {
    slug: 'chec',
    name: 'Chec',
    category: 'patiserie',
    description: 'Chec de casă, simplu sau cu adaosuri.',
    image: PH,
  },
  {
    slug: 'malai-in-lapte',
    name: 'Mălai în lapte',
    category: 'patiserie',
    description: 'Rețetă tradițională ardelenească, copt în lapte.',
    image: '/images/products/malai_in_lapte.jpg',
  },

  // ---------- Sandwich ----------
  {
    slug: 'chifle',
    name: 'Chifle',
    category: 'sandwich',
    description: 'Chifle pentru sandwich-uri, inclusiv cu susan.',
    image: '/images/products/Chifle.png',
  },
  {
    slug: 'baghete',
    name: 'Baghete',
    category: 'sandwich',
    description: 'Baghete pentru sandwich-uri, inclusiv cu susan.',
    image: '/images/products/Bagheta.png',
  },

  // ---------- Înmormântare ----------
  {
    slug: 'colaci-japoneze',
    name: 'Colaci împletiți (japoneze)',
    category: 'inmormantare',
    description: 'Colaci tradiționali, împletiți manual, pentru pomeniri.',
    image: PH,
  },
  {
    slug: 'parastas',
    name: 'Parastas',
    category: 'inmormantare',
    description: 'Pregătit conform tradiției, pentru ceremonii.',
    image: PH,
  },
  {
    slug: 'colac-prapor',
    name: 'Colac de prapor',
    category: 'inmormantare',
    image: PH,
  },
  {
    slug: 'pom',
    name: 'Pom',
    category: 'inmormantare',
    description: 'Pom tradițional pentru ceremonii religioase.',
    image: PH,
  },
  {
    slug: 'prescuri',
    name: 'Prescuri',
    category: 'inmormantare',
    description: 'Prescuri pentru biserică și pomeniri.',
    image: PH,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function productsByCategory(): Record<Category, Product[]> {
  const groups = {} as Record<Category, Product[]>;
  for (const c of Object.keys(categoryLabels) as Category[]) groups[c] = [];
  for (const p of products) groups[p.category].push(p);
  return groups;
}
