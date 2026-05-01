import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// IMPORTANT: change this to your real domain before going live.
// It's used by @astrojs/sitemap and any absolute URLs in OG tags.
const SITE_URL = 'https://example.ro';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap(),
    icon({
      include: {
        lucide: ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
