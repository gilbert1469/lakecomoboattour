import { MetadataRoute } from "next";
import { siteSEO } from "@/data/seo";
import { tours } from "@/data/tours";
import { getAllBlogPosts } from "@/lib/contentful";
import { ACTIVITY_CATEGORIES } from "./experiences/water-sports/activities";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteSEO.siteUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/taxi-boat-lake-como`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/boat-rental`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/experiences`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/experiences/water-sports`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/experiences/wine-tasting`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/booking`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/travel-trade`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
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

  const blogPosts = await getAllBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...tourRoutes, ...waterSportRoutes, ...blogRoutes];
}
