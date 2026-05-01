# Pastry Website — Strategy & Implementation Plan

A complete plan for building, deploying, and ranking a small informational website for a pastry business in Cluj-Napoca.

---

## TL;DR — Recommended Stack & Cost

| Concern | Recommendation | Cost/year |
|---|---|---|
| Framework | **Astro** + Tailwind CSS + `lucide-astro` icons | Free |
| Hosting | **Cloudflare Pages** (static, global CDN, unlimited bandwidth on free tier) | Free |
| Domain (.ro) | **Hosterion** or **RoTLD direct** | ~50–60 RON / ~12 EUR |
| DNS | **Cloudflare** (free, fast, easy SSL) | Free |
| Email forwarding | **Cloudflare Email Routing** (`contact@your-domain.ro` → personal inbox) | Free |
| Analytics | **Cloudflare Web Analytics** (privacy-friendly, no cookie banner needed) | Free |
| Maps embed | Google Maps embed (free) | Free |
| **Total yearly cost** | | **~12 EUR** |

You'll spend roughly **€12/year all-in**, mostly on the .ro domain.

---

## 1. Why Astro (and not plain React, or Next.js)?

You asked whether React + Tailwind is needed, or whether plain CSS would do. The honest answer for *this* use case is: **neither — use Astro.**

**Astro is purpose-built for content/marketing sites:**
- Ships **zero JavaScript by default** — pages are static HTML. That's perfect for an informational site nobody is going to "interact" with.
- The result: **near-perfect Lighthouse scores out of the box**, which directly helps SEO (Google ranks fast pages higher, especially on mobile).
- `.astro` files use a JSX-like syntax — your React knowledge transfers in 10 minutes.
- You **can drop in real React components** as "islands" if you ever need interactivity (e.g. an image lightbox).
- First-class Tailwind integration.
- Built-in `<Image />` component for automatic image optimization (WebP/AVIF, responsive sizes, lazy loading) — huge for product photos.
- Built-in `@astrojs/sitemap` and structured-data support — both critical for SEO.

**Why not plain HTML/CSS?**
You'd lose: components (nav/footer reuse), templating (loop over a products array), automatic image optimization, sitemap generation, and SEO tooling. You'd gain almost nothing — Astro's output is essentially the same hand-written HTML you'd produce, just with better DX.

**Why not Next.js?**
Next.js is overkill for a 4-page brochure site. It ships a React runtime to the client even for static content. More complexity, slower initial load, no real win.

**Why not Create React App / Vite + React?**
Single-page React apps are **bad for SEO** — the initial HTML is empty, and Google has to wait for JS to render. For a site whose entire goal is being found on Google, this is the wrong shape.

---

## 2. Project Structure

```
LudimiWeb/
├── public/                   # static assets served as-is
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── products/         # product photos (WebP/JPG)
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProductCard.astro
│   │   ├── ContactCTA.astro
│   │   └── SEO.astro         # <head> meta tags + JSON-LD
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── data/
│   │   └── products.ts       # single source of truth for products
│   ├── pages/
│   │   ├── index.astro       # Home
│   │   ├── produse.astro     # Products
│   │   ├── despre.astro      # About
│   │   └── contact.astro     # Contact
│   └── styles/
│       └── global.css        # Tailwind directives + custom vars
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── PLAN.md (this file)
```

Routes are **in Romanian** on purpose (`/produse`, `/despre`, `/contact`) — better for Romanian SEO and friendlier URLs for the audience.

---

## 3. Pages & Content

### Home (`/`)
- Hero: business name, one-line tagline, primary CTA (Sună acum / Call now), hero image.
- "Featured products" — 3–6 photo cards.
- About snippet (2–3 sentences, link to `/despre`).
- Opening hours + address + map.
- Phone CTA reinforced at bottom.

### Products (`/produse`)
- Grid of all products grouped by category (Torturi, Prăjituri, Plăcinte, Cozonaci, etc.).
- Each card: photo, name, optional short description.
- **No prices** unless your dad wants them — prices on a static site go stale.
- "For orders: call [phone]" repeated at the top and bottom.

### About (`/despre`)
- Story (when founded, what makes it special, photo of the bakery / your dad).
- Values / quality / ingredients.
- Trust signals (years in business, etc.).

### Contact (`/contact`)
- Phone (click-to-call, big and bold).
- Address with embedded Google Map.
- Opening hours table.
- Optional WhatsApp link if relevant.
- *No form* — you said phone-only.

---

## 4. SEO Strategy (Local + Technical)

For a small Cluj-Napoca business, **local SEO matters more than technical SEO**, but you want both. Below in priority order.

### 4.1 Google Business Profile — DO THIS FIRST

This is **the single highest-impact thing** you can do, and it's free. When someone searches *"patiserie Cluj"* or *"cofetărie Mănăștur"*, the map pack shows up before the regular results — and that's a Google Business Profile, not your website.

Steps:
1. Go to https://business.google.com — sign in with a Google account.
2. Create a profile for the bakery: name, exact address, phone, hours, category (`Bakery` / `Patiserie`).
3. Verify by postcard (Google mails a code to the address — takes ~1–2 weeks).
4. Add 10+ high-quality photos (exterior, interior, products, team).
5. Write a Romanian description with natural keywords (patiserie artizanală, cozonac, torturi pentru evenimente, etc.).
6. Add the website URL once it's live.
7. Ask happy customers for reviews — reviews are *the* ranking signal in the map pack.

### 4.2 On-page SEO (built into the site)

- **`<title>` and meta description** unique per page, in Romanian, with location keywords ("Patiseria X — Cluj-Napoca").
- **One `<h1>` per page**, descriptive.
- **Semantic HTML** (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`).
- **Alt text on every product image** in Romanian (`Tort de ciocolată cu zmeură`).
- **Open Graph + Twitter Card tags** for nice link previews.
- **JSON-LD structured data** — `Bakery` schema with NAP (Name, Address, Phone), opening hours, geo coordinates. This helps Google understand the business and is **especially powerful for local SEO**.
- **`sitemap.xml`** generated by `@astrojs/sitemap` and submitted to Google Search Console.
- **`robots.txt`** allowing all crawlers, pointing to sitemap.

### 4.3 Performance (Core Web Vitals)

Astro handles most of this automatically, but be careful with:
- **Images**: use Astro's `<Image />` component — automatically generates WebP, lazy-loads, sets dimensions to avoid layout shift.
- **Fonts**: load only what you use, use `font-display: swap`.
- **No bloated JS**: don't pull in big libraries. Lucide icons are tree-shaken; use the `astro` flavor.

Target: **>95 on Lighthouse Performance, SEO, and Best Practices**, on mobile.

### 4.4 NAP consistency (Name, Address, Phone)

Same exact spelling and formatting of the business name, address, and phone everywhere — website footer, Google Business, Facebook, listings sites. Even small differences ("Str." vs "Strada") can split signals.

### 4.5 Local citations (after launch)

Free directory listings that boost local rankings:
- **Google Business Profile** (#1 priority)
- Facebook Page
- Waze listing
- Yelp Romania
- TripAdvisor (if café has seating)
- pagini-aurii.ro
- listafirme.ro

### 4.6 Submit to search engines

Once live:
- Google Search Console — verify site, submit sitemap.
- Bing Webmaster Tools — same.

---

## 5. Domain Registration — `.ro`

`.ro` is managed by **RoTLD** (Romanian Top Level Domain registry, run by ICI București). Since 2018 it's renewed annually (~12 EUR/year).

### Recommended registrars

| Registrar | Price/year | Notes |
|---|---|---|
| **Hosterion.ro** | ~50 RON (~10 EUR) | Romanian, popular, clean UX |
| **RoTLD direct** (rotld.ro) | ~60 RON | Buying from the source — no middleman |
| GoDaddy | More expensive | Avoid unless you have a reason |

**Cloudflare Registrar does NOT support `.ro`** — you have to register elsewhere and point DNS to Cloudflare separately (which is fine).

### Domain name advice
- Short, easy to spell, ideally containing the business name. Avoid hyphens.
- Check trademark conflicts before buying.
- Examples of good patterns: `patiseria-X.ro`, `cofetariaX.ro`.

### Steps
1. On Hosterion (or RoTLD), search for your desired domain.
2. Register for 1 year (you can extend later).
3. After purchase, you'll get nameserver settings. **Don't use the registrar's nameservers** — use Cloudflare's instead (next section), because Cloudflare is faster and gives you free SSL + analytics + email routing.

---

## 6. DNS via Cloudflare

Cloudflare gives you free DNS, free SSL, free CDN, free email routing, and free analytics — all valuable.

Steps:
1. Sign up at https://cloudflare.com (free plan).
2. Click **Add a site** → enter your domain → pick the **Free** plan.
3. Cloudflare scans existing DNS records (likely empty for a fresh domain) and gives you **two nameservers** like `xyz.ns.cloudflare.com`.
4. Go back to the registrar (Hosterion / RoTLD) and **change the nameservers** to those Cloudflare ones.
5. Wait for propagation (a few minutes to a few hours).
6. In Cloudflare DNS, confirm the records are set up automatically by Cloudflare Pages (next section).

---

## 7. Hosting on Cloudflare Pages

Cloudflare Pages hosts static sites for free with:
- Unlimited bandwidth
- Global CDN (≈ instant in Romania — they have Bucharest PoP)
- Free SSL/HTTPS
- Automatic deploys from Git
- Custom domains

### Steps

1. Push the repo to **GitHub** (private is fine).
2. In Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Pick the repo. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Hit deploy. First deploy takes ~1 minute. You get a `your-project.pages.dev` URL.
5. **Custom domain** tab → add your `.ro` domain. Cloudflare auto-creates the DNS records (since DNS is on Cloudflare).
6. Done. Every `git push` to main re-deploys automatically.

---

## 8. Email — `contact@your-domain.ro` for free

Cloudflare Email Routing forwards mail to your existing inbox.

1. Cloudflare dashboard → your domain → **Email** → **Email Routing** → enable.
2. Cloudflare adds the necessary MX/SPF DNS records automatically.
3. Add a route: `contact@your-domain.ro` → forward to your dad's Gmail.
4. **Sending** mail from that address requires a separate solution (Gmail's "Send mail as" + an SMTP relay). For an informational site, just receiving is usually enough.

---

## 9. Analytics — privacy-friendly

**Cloudflare Web Analytics** is free, requires no cookie banner under GDPR (no PII collected), and gives you basic visitor counts and top pages.

Avoid Google Analytics unless you specifically need it — it requires a cookie banner under EU/Romanian law and slows the page down.

Enable: Cloudflare dashboard → **Analytics & Logs** → **Web Analytics** → add site → paste the snippet into your Astro `<head>`.

---

## 10. Implementation Steps

1. ✅ Write this plan.
2. Confirm tech stack with the user.
3. Scaffold Astro project (package.json, configs, base layout).
4. Build the four pages with placeholder content.
5. Integrate real content (business name, products, photos, address, phone) — **needs input from user/dad**.
6. Add SEO components (JSON-LD, sitemap, OG tags).
7. Test locally (`npm run dev`).
8. Run Lighthouse — must be >95 across the board.
9. Push to GitHub.
10. Register `.ro` domain.
11. Set up Cloudflare DNS.
12. Connect repo to Cloudflare Pages, deploy.
13. Attach custom domain.
14. Set up Google Business Profile (parallel — start now, takes ~2 weeks for postcard).
15. Submit sitemap to Google Search Console.
16. Set up Cloudflare Email Routing for `contact@`.
17. Hand off: short doc explaining how to update product list.

---

## 11. Content Checklist — info needed from your dad

Before I can fill in the site properly, I need:

- [ ] **Business name** (exact spelling)
- [ ] **One-line tagline** in Romanian (e.g. "Patiserie artizanală în inima Clujului")
- [ ] **About blurb** — 3–5 sentences (history, what makes it special)
- [ ] **Full address** (street + city + county + postal code)
- [ ] **Phone number(s)**
- [ ] **Opening hours** (per day of week)
- [ ] **Categories of products** (Torturi, Prăjituri, Plăcinte, Cozonaci, Pâine, etc.)
- [ ] **Product list** per category — name + optional 1-line description
- [ ] **Photos** — ideally 1 per product, plus 1–2 lifestyle/shop photos. Ideally smartphone-quality or better, well-lit.
- [ ] **Brand colors** if any, or pick during design
- [ ] **Logo** (optional — can also do typography-only)
- [ ] **Social links** (Facebook? Instagram?)
- [ ] **WhatsApp number** if separate from phone

---

## 12. Maintenance & Handoff

The site is static — there's nothing to "maintain" server-side. Updates are:
- **Add a product**: edit `src/data/products.ts`, drop a photo in `public/images/products/`, push to GitHub. Auto-deploys in ~1 minute.
- **Change hours / address**: edit `src/data/business.ts`.
- **Renew domain**: once a year, auto-renew if you set it up at the registrar.

If your dad ever wants to update content himself without code, you can later add a free headless CMS like **Decap CMS** (formerly Netlify CMS) — it gives him a simple admin UI that commits to GitHub. Not needed now.
