import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { getBlogPostBySlug } from "@/lib/contentful";
import { formatDate } from "@/lib/utils";
import { siteSEO } from "@/data/seo";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  const imageUrl = post.coverImage?.fields?.file?.url
    ? `https:${post.coverImage.fields.file.url}`
    : siteSEO.defaultOgImage;

  return {
    title: `${post.title} — Lake Como Tourist Center`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: imageUrl }],
    },
  };
}

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
      <p className="mb-4 text-slate leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_node: any, children: any) => (
      <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: any) => (
      <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: any) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-slate">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: any, children: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-slate">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: any) => <li>{children}</li>,
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        className="text-navy-light hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const imageUrl = post.coverImage?.fields?.file?.url
    ? `https:${post.coverImage.fields.file.url}`
    : null;

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 lg:h-96 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-navy" />
        )}
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-10 w-full">
            <div className="flex items-center gap-3 text-white/70 text-sm mb-3">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {post.category && (
                <>
                  <span>·</span>
                  <span>{post.category}</span>
                </>
              )}
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

          <article className="prose prose-lg max-w-none">
            {post.body ? documentToReactComponents(post.body, richTextOptions) : null}
          </article>

          {post.callToAction && post.callToActionUrl && (
            <div className="mt-10 p-6 bg-cream rounded-2xl text-center">
              <Button href={post.callToActionUrl}>{post.callToAction}</Button>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link href="/blog" className="text-navy-light font-semibold hover:underline text-sm">
                ← Back to Blog
              </Link>
              <Button href="/booking">Book a Tour</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
