---
globs: src/layouts/Layout.astro
---

Always include these SEO meta tags in the Layout component:
1. `<meta name="theme-color" content="#0b72e7" />` and `<meta name="msapplication-TileColor" content="#031124" />`
2. `og:image:width` (1200) and `og:image:height` (630) — the OG image MUST be 1200x630px minimum
3. `og:image:alt` — use a descriptive alt text for the OG image
4. `twitter:image:alt` — same as og:image:alt
5. Favicons: `favicon.ico`, `favicon-32x32.png`, `favicon.svg`
6. `<link rel="apple-touch-icon" sizes="180x180" href={withBase("/apple-touch-icon.png")} />`
7. `<link rel="manifest" href={withBase("/site.webmanifest")} />`
8. Use `import.meta.env.SITE` with `??` fallback for dynamic site URL generation
9. Always provide a `ogImageAlt` prop for page-specific alt text