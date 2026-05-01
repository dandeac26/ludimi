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
    'Cozonacii noștri sunt produsul nostru de top — făcuți manual, după rețete de familie, doar cu ingrediente naturale.',
  sandwich:
    'Nu facem pâine. Producem doar chifle și baghete pentru sandwich-uri, ideale pentru fast-food-uri și unități de alimentație.',
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

const PLACEHOLDER = '/images/products/placeholder.svg';

export const products: Product[] = [
  // ---------- Cozonaci ----------
  {
    slug: 'cozonac-nuca',
    name: 'Cozonac cu nucă',
    category: 'cozonaci',
    description:
      'Produsul nostru emblematic. Cozonac handmade, cu umplutură generoasă de nucă și ingrediente naturale.',
    image: '/images/products/cozonac.jpg',
    featured: true,
  },
  {
    slug: 'cozonac-mac',
    name: 'Cozonac cu mac',
    category: 'cozonaci',
    description: 'Aceeași rețetă tradițională, cu umplutură fină de mac.',
    image: PLACEHOLDER,
  },
  {
    slug: 'cozonac-rahat',
    name: 'Cozonac cu rahat',
    category: 'cozonaci',
    description: 'Cozonac cu rahat, exact ca în copilărie.',
    image: PLACEHOLDER,
  },
  {
    slug: 'cozonac-cacao',
    name: 'Cozonac cu cacao',
    category: 'cozonaci',
    description: 'Cozonac cu cremă de cacao, pentru iubitorii de ciocolată.',
    image: PLACEHOLDER,
  },

  // ---------- Patiserie ----------
  {
    slug: 'cuib-cu-nuca',
    name: 'Cuib cu nucă',
    category: 'patiserie',
    description: 'Foitaj fraged, miez generos de nucă.',
    image: '/images/products/cuib_cu_nuca.jpg',
    featured: true,
  },
  {
    slug: 'malai-in-lapte',
    name: 'Mălai în lapte',
    category: 'patiserie',
    description: 'Rețetă tradițională ardelenească, copt în lapte.',
    image: '/images/products/malai_in_lapte.jpg',
    featured: true,
  },
  {
    slug: 'strudele',
    name: 'Strudele',
    category: 'patiserie',
    description: 'Foaie subțire, rulată cu diverse umpluturi.',
    image: PLACEHOLDER,
  },
  {
    slug: 'croissante',
    name: 'Croissante',
    category: 'patiserie',
    description: 'Croissante cu diverse umpluturi.',
    image: PLACEHOLDER,
  },
  {
    slug: 'chec',
    name: 'Chec',
    category: 'patiserie',
    description: 'Chec de casă, simplu sau cu adaosuri.',
    image: PLACEHOLDER,
  },
  {
    slug: 'branzoaica',
    name: 'Brânzoaică',
    category: 'patiserie',
    description: 'Aluat fraged cu umplutură de brânză dulce.',
    image: PLACEHOLDER,
  },

  // ---------- Sandwich ----------
  {
    slug: 'chifle',
    name: 'Chifle',
    category: 'sandwich',
    description: 'Chifle pentru sandwich-uri, inclusiv cu susan.',
    image: PLACEHOLDER,
  },
  {
    slug: 'baghete',
    name: 'Baghete',
    category: 'sandwich',
    description: 'Baghete pentru sandwich-uri, inclusiv cu susan.',
    image: PLACEHOLDER,
  },

  // ---------- Înmormântare ----------
  {
    slug: 'colaci-japoneze',
    name: 'Colaci împletiți (japoneze)',
    category: 'inmormantare',
    description: 'Colaci tradiționali, împletiți manual, pentru pomeniri.',
    image: PLACEHOLDER,
  },
  {
    slug: 'parastas',
    name: 'Parastas',
    category: 'inmormantare',
    description: 'Pregătit conform tradiției, pentru ceremonii.',
    image: PLACEHOLDER,
  },
  {
    slug: 'colac-prapor',
    name: 'Colac de prapor',
    category: 'inmormantare',
    image: PLACEHOLDER,
  },
  {
    slug: 'pom',
    name: 'Pom',
    category: 'inmormantare',
    description: 'Pom tradițional pentru ceremonii religioase.',
    image: PLACEHOLDER,
  },
  {
    slug: 'prescuri',
    name: 'Prescuri',
    category: 'inmormantare',
    description: 'Prescuri pentru biserică și pomeniri.',
    image: PLACEHOLDER,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function productsByCategory(): Record<Category, Product[]> {
  const groups = {} as Record<Category, Product[]>;
  for (const c of Object.keys(categoryLabels) as Category[]) groups[c] = [];
  for (const p of products) groups[p.category].push(p);
  return groups;
}
