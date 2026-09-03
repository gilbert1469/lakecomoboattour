import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageSEO, siteSEO } from "@/data/seo";
import { getExperiencesByCategory } from "@/data/experiences";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const seo = pageSEO.wineTasting;

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

export default function WineTastingPage() {
  const exp = getExperiencesByCategory("wine")[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-white text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/experiences" className="hover:text-white transition-colors">
              Experiences
            </Link>
          </p>
          <div className="text-4xl mb-4">{exp.icon}</div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">{exp.name}</h1>
          <p className="text-white/80 text-lg mb-6">{exp.priceNote}</p>
        </div>
      </section>

      {/* Overview */}
      <Section bg="cream">
        <SectionHeader eyebrow="Your experience" title="Overview" />
        <div className="max-w-2xl mx-auto">
          <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src={exp.image}
              alt={exp.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>
          <p className="text-slate text-lg leading-relaxed">{exp.description}</p>
        </div>
      </Section>

      {/* Highlights */}
      <Section bg="white">
        <SectionHeader eyebrow="Why book with us" title="Highlights" />
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate">{h}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Includes */}
      <Section bg="cream">
        <SectionHeader eyebrow="What's included" title="Includes" />
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {exp.includes.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold text-xl mt-0.5">✦</span>
              <span className="text-slate">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <Section bg="navy">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-white/70 mb-8">
            Visit us at Lake Como Tourist Center, Via Borgo Vico 62 — 3 minutes walk from Como San
            Giovanni station. Or contact us directly for availability and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`/booking?tour=${exp.slug}`} size="lg">
              Book This Experience
            </Button>
            <Button
              href="/experiences"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              All Experiences
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
