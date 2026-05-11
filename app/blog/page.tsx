import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import { getAllBlogPosts, BlogPost } from "@/lib/contentful";
import Section, { SectionHeader } from "@/components/ui/Section";
import { formatDate } from "@/lib/utils";

export const revalidate = 0;

const seo = pageSEO.blog;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.ogImage ?? siteSEO.defaultOgImage }],
  },
};

function ContentfulBlogCard({ post }: { post: BlogPost }) {
  const imageUrl = post.coverImage?.fields?.file?.url
    ? `https:${post.coverImage.fields.file.url}`
    : null;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden bg-cream">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-navy/10">
            <span className="text-navy/30 text-4xl">🌊</span>
          </div>
        )}
        {post.category && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-navy text-white text-xs font-bold rounded-full uppercase tracking-wide">
            {post.category}
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 text-xs text-slate mb-3">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
        <h3 className="font-serif text-xl font-bold text-navy leading-snug mb-3 group-hover:text-gold-dark transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-slate text-sm leading-relaxed flex-1">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-gold hover:text-gold-dark transition-colors inline-flex items-center gap-1"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <div className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">
            Guides & stories
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Guides, tips and stories about Lake Como. Everything you need to know before you visit.
          </p>
        </div>
      </div>

      <Section bg="cream">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate text-lg font-semibold">Coming soon</p>
            <p className="text-sm text-slate mt-2">
              New articles about Lake Como are on the way.
            </p>
          </div>
        ) : (
          <>
            <SectionHeader
              eyebrow="From our blog"
              title="Guides & Stories from Lake Como"
              subtitle={`${posts.length} articles to help you discover the lake before you arrive.`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <ContentfulBlogCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </Section>
    </>
  );
}
