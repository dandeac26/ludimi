/**
 * Google Maps reviews — copy text from your Google Business Profile and paste here.
 * To find them: google.com/maps → search "Ludimi Prodcom Cluj-Napoca" → "Recenzii"
 */

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
};

// TODO: Replace these with real reviews from your Google Maps page.
export const reviews: Review[] = [
  {
    author: 'Maria D.',
    rating: 5,
    text: 'Cozonacul este exact ca cel de acasă, nu am mai mâncat ceva atât de bun de mult timp. Recomand cu drag!',
    date: '2024',
  },
  {
    author: 'Andrei P.',
    rating: 5,
    text: 'Produse proaspete și de calitate. Am comandat pentru o înmormântare și totul a fost perfect, mulțumim frumos.',
    date: '2024',
  },
  {
    author: 'Elena M.',
    rating: 5,
    text: 'Colaborăm cu Ludimi de ani de zile pentru grădinița noastră. Chifle și baghete proaspete zilnic, întotdeauna de calitate.',
    date: '2025',
  },
];
