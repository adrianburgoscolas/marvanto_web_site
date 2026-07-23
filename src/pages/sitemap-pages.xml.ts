import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
  const site = import.meta.env.SITE ?? "https://adrianburgoscolas.github.io";
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base.replace(/\/+$/, "") : base;
  const today = new Date().toISOString().split("T")[0];

  const pages = [
    { loc: `${site}${normalizedBase}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${site}${normalizedBase}/contacto`, priority: "0.9", changefreq: "monthly" },
    { loc: `${site}${normalizedBase}/privacidad`, priority: "0.3", changefreq: "yearly" },
    { loc: `${site}${normalizedBase}/terminos`, priority: "0.3", changefreq: "yearly" },
  ];

  const urls = pages.map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  ).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
