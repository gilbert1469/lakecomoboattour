import { MetadataRoute } from "next";
import { siteSEO } from "@/data/seo";
import { tours } from "@/data/tours";
import { experiences } from "@/data/experiences";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteSEO.siteUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/gite-in-barca`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/esperienze`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/prenotazione`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/chi-siamo`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contatti`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const tourRoutes: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${base}/gite-in-barca#${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPosts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...tourRoutes, ...blogRoutes];
}
