// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const base = process.env.ASTRO_BASE_PATH ?? '/marvanto_web_site';

export default defineConfig({
  site: 'https://adrianburgoscolas.github.io',
  base,
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});
