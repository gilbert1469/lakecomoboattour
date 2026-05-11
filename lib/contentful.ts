import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  body: any;
  coverImage?: any;
  category: string;
  keywords: string;
  publishedAt: string;
  author?: any;
  callToAction?: string;
  callToActionUrl?: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const entries = await contentfulClient.getEntries({
    content_type: 'lakeComoBlogPost',
    order: ['-fields.publishedAt'],
  });
  return entries.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    body: item.fields.body,
    coverImage: item.fields.coverImage,
    category: item.fields.category,
    keywords: item.fields.keywords,
    publishedAt: item.fields.publishedAt,
    author: item.fields.author,
    callToAction: item.fields.callToAction,
    callToActionUrl: item.fields.callToActionUrl,
  }));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const entries = await contentfulClient.getEntries({
    content_type: 'lakeComoBlogPost',
    'fields.slug': slug,
    limit: 1,
  });
  if (!entries.items.length) return null;
  const item = entries.items[0] as any;
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    body: item.fields.body,
    coverImage: item.fields.coverImage,
    category: item.fields.category,
    keywords: item.fields.keywords,
    publishedAt: item.fields.publishedAt,
    author: item.fields.author,
    callToAction: item.fields.callToAction,
    callToActionUrl: item.fields.callToActionUrl,
  };
}
