import type { Metadata } from "next";
import { pageSEO, siteSEO } from "@/data/seo";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import Section, { SectionHeader } from "@/components/ui/Section";

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

export default function BlogPage() {
  const posts = getAllPosts();

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
            <p className="text-slate text-lg">No posts published yet.</p>
            <p className="text-sm text-slate mt-2">
              Add <code>.md</code> files to the <code>/content/blog/</code> folder.
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
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </Section>
    </>
  );
}
