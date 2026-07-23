// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config

// Environment-based configuration:
// - GitHub Pages:   ASTRO_BASE_PATH=/marvanto_web_site  ASTRO_SITE=https://adrianburgoscolas.github.io
// - Hostinger:      ASTRO_BASE_PATH=/                   ASTRO_SITE=https://tudominio.com  (o sin setear)
// - Local dev:      ASTRO_BASE_PATH=/  (se setea automáticamente en el script "dev")

const base = process.env.ASTRO_BASE_PATH;
const site = process.env.ASTRO_SITE;

export default defineConfig({
  site,
  base,
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});
