import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
  const site = import.meta.env.SITE ?? "https://adrianburgoscolas.github.io";
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base.replace(/\/+$/, "") : base;

  const body = `User-agent: *
Allow: /

# Disallow search engine indexing of legal pages (thin content)
Disallow: ${normalizedBase}/privacidad
Disallow: ${normalizedBase}/terminos

# Sitemaps
Sitemap: ${site}${normalizedBase}/sitemap-index.xml
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
