import { MetadataRoute } from "next";
import { siteSEO } from "@/data/seo";
import { tours } from "@/data/tours";
import { getAllPosts } from "@/lib/blog";
import { ACTIVITY_CATEGORIES } from "./experiences/water-sports/activities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteSEO.siteUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/taxi-boat-lake-como`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/experiences`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/experiences/water-sports`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/booking`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const waterSportRoutes: MetadataRoute.Sitemap = Object.keys(ACTIVITY_CATEGORIES).map((activity) => ({
    url: `${base}/experiences/water-sports/${activity}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const tourRoutes: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${base}/taxi-boat-lake-como#${t.slug}`,
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

  return [...staticRoutes, ...tourRoutes, ...waterSportRoutes, ...blogRoutes];
}
