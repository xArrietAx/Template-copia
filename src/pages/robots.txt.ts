import type { APIRoute } from "astro";
import site from "@/config/site.json";

export const GET: APIRoute = () => {
  const sitemapURL = new URL("sitemap-index.xml", site.url);

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};