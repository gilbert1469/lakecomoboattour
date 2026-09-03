import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getExperiencesByCategory } from "@/data/experiences";
import { siteSEO } from "@/data/seo";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { ACTIVITY_CATEGORIES } from "../activities";

export async function generateStaticParams() {
  return Object.keys(ACTIVITY_CATEGORIES).map((activity) => ({ activity }));
}

function getActivity(activity: string) {
  const category = ACTIVITY_CATEGORIES[activity];
  if (!category) return undefined;
  return getExperiencesByCategory(category)[0];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ activity: string }>;
}): Promise<Metadata> {
  const { activity } = await params;
  const exp = getActivity(activity);
  if (!exp) return {};

  return {
    title: `${exp.name} | Lake Como Tourist Center`,
    description: exp.shortDescription,
    keywords: ["lake como water sports", exp.category, exp.slug],
    openGraph: {
      title: `${exp.name} | Lake Como Tourist Center`,
      description: exp.shortDescription,
      images: [{ url: siteSEO.defaultOgImage }],
    },
  };
}

export default async function WaterSportActivityPage({
  params,
}: {
  params: Promise<{ activity: string }>;
}) {
  const { activity } = await params;
  const exp = getActivity(activity);
  if (!exp) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-white text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/experiences/water-sports" className="hover:text-white transition-colors">
              Water Sports
            </Link>
          </p>
          <div className="text-4xl mb-4">{exp.icon}</div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">{exp.name}</h1>
          <p className="text-white/80 text-lg mb-6">{exp.shortDescription}</p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gold">
                {exp.price > 0 ? formatPrice(exp.price) : exp.priceNote}
              </div>
              <div className="text-white/60 text-sm">
                {exp.price > 0 ? exp.priceNote : "pricing"}
              </div>
            </div>
            {exp.duration && (
              <div>
                <div className="text-2xl font-bold text-gold">{exp.duration}</div>
                <div className="text-white/60 text-sm">duration</div>
              </div>
            )}
          </div>
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
              Book This Activity
            </Button>
            <Button
              href="/experiences/water-sports"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              All Water Sports
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
