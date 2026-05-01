/**
 * Single source of truth for business info.
 * Everything on the site (header, footer, contact page, JSON-LD schema, OG tags)
 * reads from here.
 */

export const business = {
  // ----- Identity -----
  name: 'Ludimi',
  legalName: 'Ludimi Prodcom SRL',
  tagline: 'Patiserie artizanală în Cluj-Napoca',
  slogan: 'Din respect pentru calitate',
  shortDescription:
    'Cozonaci, strudele, croissante și produse de patiserie făcute zilnic, cu ingrediente atent alese, în inima Clujului.',

  // ----- Contact -----
  // International format for tel: links; display format is human-readable.
  phone: '+40745585562',
  phoneDisplay: '0745 585 562',
  phoneSecondary: '+40745950839',
  phoneSecondaryDisplay: '0745 950 839',
  email: 'deacdany@yahoo.com',

  // ----- Location -----
  address: {
    street: 'Str. Livezii nr. 11',
    city: 'Cluj-Napoca',
    region: 'Cluj',
    postalCode: '400139',
    country: 'RO',
  },
  // Approximate — refine by right-clicking the exact spot on Google Maps → "What's here?"
  geo: {
    latitude: 46.7712,
    longitude: 23.6236,
  },
  // Keyless embed via output=embed. Replace later with a Place embed
  // (Google Maps → Share → Embed) for a richer card with the business name.
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Str.+Livezii+11,+Cluj-Napoca&t=&z=16&ie=UTF8&iwloc=&output=embed',
  // Street view embed — shows the storefront.
  // To get the exact URL: open Google Maps → navigate to the store → drag the yellow Pegman
  // onto Str. Livezii → click Share → Embed a map → copy the src= value and paste it here.
  streetViewEmbedUrl:
    'https://maps.google.com/maps?q=Str.+Livezii+11,+Cluj-Napoca&layer=c&output=embed',
  // Direct link people can click to open the location / leave a review.
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Ludimi+Prodcom+Cluj-Napoca',

  // ----- Hours -----
  // 24h format. Use null to mark closed.
  hours: [
    { day: 'Luni',     open: '08:00', close: '18:00' },
    { day: 'Marți',    open: '08:00', close: '18:00' },
    { day: 'Miercuri', open: '08:00', close: '18:00' },
    { day: 'Joi',      open: '08:00', close: '18:00' },
    { day: 'Vineri',   open: '08:00', close: '18:00' },
    { day: 'Sâmbătă',  open: '08:00', close: '14:00' },
    { day: 'Duminică', open: null,    close: null    },
  ],

  // ----- Social -----
  social: {
    facebook: 'https://www.facebook.com/p/Ludimi-Prodcom-Srl-100063883012171/',
    instagram: '',
    whatsapp: '',
  },
} as const;

export type Business = typeof business;
