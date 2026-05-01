/**
 * Single source of truth for business info.
 * Update this file with your dad's real details — everything on the site
 * (header, footer, contact page, JSON-LD schema, OG tags) reads from here.
 */

export const business = {
  // ----- Identity -----
  name: 'Ludimi',                            // TODO: confirm exact name
  legalName: 'Ludimi SRL',                   // optional, for footer fine print
  tagline: 'Patiserie artizanală în Cluj-Napoca',
  shortDescription:
    'Prăjituri, torturi și produse de patiserie făcute zilnic, cu ingrediente atent alese, în inima Clujului.',

  // ----- Contact -----
  phone: '+40 000 000 000',                  // TODO
  phoneDisplay: '0000 000 000',              // formatted for display
  email: 'contact@example.ro',               // optional — set up via Cloudflare Email Routing

  // ----- Location -----
  address: {
    street: 'Strada Exemplu nr. 1',
    city: 'Cluj-Napoca',
    region: 'Cluj',
    postalCode: '400000',
    country: 'RO',
  },
  // Get these by right-clicking your shop on Google Maps → "What's here?"
  geo: {
    latitude: 46.7712,
    longitude: 23.6236,
  },
  // Embed URL: on Google Maps → Share → Embed a map → copy the src= value
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10936.0!2d23.6236!3d46.7712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2sCluj-Napoca!5e0!3m2!1sro!2sro',

  // ----- Hours -----
  // Use 24h format. Use null to mark closed.
  hours: [
    { day: 'Luni',     open: '07:00', close: '20:00' },
    { day: 'Marți',    open: '07:00', close: '20:00' },
    { day: 'Miercuri', open: '07:00', close: '20:00' },
    { day: 'Joi',      open: '07:00', close: '20:00' },
    { day: 'Vineri',   open: '07:00', close: '20:00' },
    { day: 'Sâmbătă',  open: '08:00', close: '18:00' },
    { day: 'Duminică', open: null,    close: null    },
  ],

  // ----- Social -----
  social: {
    facebook: '',                            // e.g. https://facebook.com/yourpage
    instagram: '',                           // e.g. https://instagram.com/yourpage
    whatsapp: '',                            // e.g. https://wa.me/40700000000
  },
} as const;

export type Business = typeof business;
