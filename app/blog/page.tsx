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
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Risorse e guide
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Guide, consigli e storie sul Lago di Como. Tutto quello che devi sapere prima di venirci a trovare.
          </p>
        </div>
      </div>

      <Section bg="cream">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate text-lg">Nessun articolo pubblicato ancora.</p>
            <p className="text-sm text-slate mt-2">
              Aggiungi file <code>.md</code> nella cartella <code>/content/blog/</code>.
            </p>
          </div>
        ) : (
          <>
            <SectionHeader
              eyebrow="Dal nostro blog"
              title="Guide e Storie dal Lago di Como"
              subtitle={`${posts.length} articoli per scoprire il lago prima di arrivare.`}
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
