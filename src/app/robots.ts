import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://marble.sangetaj.com/sitemap.xml",
    host: "https://marble.sangetaj.com",
  };
}
