import { MetadataRoute } from "next";
import { siteSEO } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${siteSEO.siteUrl}/sitemap.xml`,
  };
}
