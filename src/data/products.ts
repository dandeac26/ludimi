/**
 * Product catalog.
 * Add a photo to /public/images/products/ and reference it by filename.
 * Categories drive the grouping on /produse.
 */

export type Category =
  | 'torturi'
  | 'prajituri'
  | 'placinte'
  | 'cozonaci'
  | 'paine';

export const categoryLabels: Record<Category, string> = {
  torturi:   'Torturi',
  prajituri: 'Prăjituri',
  placinte:  'Plăcinte',
  cozonaci:  'Cozonaci',
  paine:     'Pâine',
};

export type Product = {
  slug: string;
  name: string;
  category: Category;
  description?: string;
  image: string;       // path under /public, e.g. /images/products/tort-ciocolata.jpg
  featured?: boolean;  // shown on the home page
};

export const products: Product[] = [
  {
    slug: 'tort-ciocolata',
    name: 'Tort de ciocolată cu zmeură',
    category: 'torturi',
    description: 'Blat fraged cu mousse de ciocolată belgiană și jeleu de zmeură.',
    image: '/images/products/placeholder.svg',
    featured: true,
  },
  {
    slug: 'cozonac-traditional',
    name: 'Cozonac tradițional cu nucă',
    category: 'cozonaci',
    description: 'Rețetă de familie, copt zilnic, cu umplutură generoasă de nucă.',
    image: '/images/products/placeholder.svg',
    featured: true,
  },
  {
    slug: 'placinta-mere',
    name: 'Plăcintă cu mere',
    category: 'placinte',
    description: 'Foitaj subțire, mere coapte, scorțișoară.',
    image: '/images/products/placeholder.svg',
    featured: true,
  },
  {
    slug: 'eclair-vanilie',
    name: 'Éclair cu vanilie',
    category: 'prajituri',
    image: '/images/products/placeholder.svg',
  },
  {
    slug: 'paine-de-casa',
    name: 'Pâine de casă',
    category: 'paine',
    description: 'Coaptă pe vatră, în fiecare dimineață.',
    image: '/images/products/placeholder.svg',
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function productsByCategory(): Record<Category, Product[]> {
  const groups = {} as Record<Category, Product[]>;
  for (const c of Object.keys(categoryLabels) as Category[]) groups[c] = [];
  for (const p of products) groups[p.category].push(p);
  return groups;
}
