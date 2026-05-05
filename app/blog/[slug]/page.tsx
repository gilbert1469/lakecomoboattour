import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { siteSEO } from "@/data/seo";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: post.canonical ? { canonical: post.canonical } : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteSEO.siteUrl}${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author, url: siteSEO.siteUrl },
    publisher: {
      "@type": "Organization",
      name: "Lake Como Boat Tour",
      url: siteSEO.siteUrl,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteSEO.siteUrl}/blog/${post.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-72 lg:h-96 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-10 w-full">
            <div className="flex items-center gap-3 text-white/70 text-sm mb-3">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingTime} min lettura</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <h1 className="font-serif text-2xl lg:text-4xl font-bold text-white leading-snug text-balance">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate mb-8">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-navy">Blog</Link>
            <span>/</span>
            <span className="text-navy font-medium truncate max-w-xs">{post.title}</span>
          </nav>

          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-a:text-gold prose-strong:text-navy">
            <MDXRemote source={post.content} />
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link href="/blog" className="text-gold font-semibold hover:underline text-sm">
                ← Torna al Blog
              </Link>
              <Button href="/prenotazione">Prenota un Tour</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
