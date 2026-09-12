import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const SITE_URL = "https://marble.sangetaj.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/shop",
    "/collections",
    "/bespoke",
    "/inspiration",
    "/journal",
    "/contact",
  ];

  const lastModified = new Date();

  const staticEntries = staticPaths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const categoryEntries = categories.map((c) => ({
    url: `${SITE_URL}/shop/${c.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const productEntries = products.map((p) => ({
    url: `${SITE_URL}/shop/${p.category}/${p.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
