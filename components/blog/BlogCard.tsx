import Link from "next/link";
import Image from "next/image";
import { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 text-xs text-slate mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime} min lettura</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-navy leading-snug mb-3 group-hover:text-gold transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-slate text-sm leading-relaxed flex-1">{post.description}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-gold hover:text-gold-dark transition-colors inline-flex items-center gap-1"
        >
          Leggi l&apos;articolo →
        </Link>
      </div>
    </article>
  );
}
