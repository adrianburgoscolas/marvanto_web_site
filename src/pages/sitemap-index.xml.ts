import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
  const site = import.meta.env.SITE ?? "https://adrianburgoscolas.github.io";
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base.replace(/\/+$/, "") : base;
  const today = new Date().toISOString().split("T")[0];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site}${normalizedBase}/sitemap-pages.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
