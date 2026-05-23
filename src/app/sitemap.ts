import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/data/journal-articles";

const SITE_URL = "https://sangetaj.com";

const productSlugs = [
  "sang-e-sultan",
  "sang-e-amir",
  "sang-e-nakhoda",
  "sang-e-zafar",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/collections`,         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE_URL}/bespoke`,             lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/corporate`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/heritage`,            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/contact`,             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/journal`,             lastModified: now, changeFrequency: "weekly",  priority: 0.65 },
    { url: `${SITE_URL}/provenance`,          lastModified: now, changeFrequency: "yearly",  priority: 0.45 },
    { url: `${SITE_URL}/terms`,               lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${SITE_URL}/shipping`,            lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${SITE_URL}/care`,                lastModified: now, changeFrequency: "yearly",  priority: 0.35 },
    { url: `${SITE_URL}/privacy`,             lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${SITE_URL}/collections/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.88,
  }));

  const journalRoutes: MetadataRoute.Sitemap = getPublishedArticles().map((article) => ({
    url: `${SITE_URL}/journal/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "yearly",
    priority: 0.62,
  }));

  return [...staticRoutes, ...productRoutes, ...journalRoutes];
}
