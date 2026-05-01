# Ludimi — site patiserie

Astro + Tailwind static site for a pastry business in Cluj-Napoca.

## Run locally

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs static files to ./dist
npm run preview      # preview the production build
```

## Where to edit content

- `src/data/business.ts` — name, phone, address, hours, social links
- `src/data/products.ts` — product catalog (categories + items)
- `public/images/products/` — drop product photos here, then reference by filename in `products.ts`
- `astro.config.mjs` — set `SITE_URL` to your real domain before deploying

## Deploy (Cloudflare Pages)

1. Push to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build` · Output directory: `dist` · Framework preset: Astro.
4. After first deploy, attach your custom `.ro` domain in the Custom Domains tab.

See `PLAN.md` for the full strategy (domain registration, SEO, hosting walkthrough).
