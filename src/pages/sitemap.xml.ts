import type { APIRoute } from "astro";
import { sanityClient } from "../lib/sanity";

type ProjectSlug = {
  slug?: {
    current?: string;
  };
};

const BASE_PATHS = [
  "/",
  "/myproyects",
  "/proyecto/illustrations",
  "/proyecto/photograph",
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response("Missing Astro site config", { status: 500 });
  }

  const projects = await sanityClient.fetch<ProjectSlug[]>(`
    *[_type == "proyecto" && defined(slug.current)][]{
      slug
    }
  `);

  const dynamicPaths = projects
    .map((project) => project.slug?.current)
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => `/proyecto/${slug}`);

  const uniquePaths = [...new Set([...BASE_PATHS, ...dynamicPaths])];
  const now = new Date().toISOString();

  const urls = uniquePaths
    .map((path) => {
      const loc = new URL(path, site).toString();
      return `<url><loc>${escapeXml(loc)}</loc><lastmod>${now}</lastmod></url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
