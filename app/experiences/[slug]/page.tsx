import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences, getExperienceBySlug, type Experience } from "@/data/experiences";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

// Only these categories use this generic detail page; wine and water sports have their own routes.
const DETAIL_CATEGORIES: Experience["category"][] = ["cooking", "guided", "cycling"];

function getDetailExperience(slug: string): Experience | undefined {
  const exp = getExperienceBySlug(slug);
  return exp && DETAIL_CATEGORIES.includes(exp.category) ? exp : undefined;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return experiences
    .filter((exp) => DETAIL_CATEGORIES.includes(exp.category))
    .map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exp = getDetailExperience(slug);
  if (!exp) return {};

  const title = `${exp.name} | Lake Como Tourist Center`;
  return {
    title,
    description: exp.shortDescription,
    alternates: { canonical: `/experiences/${exp.slug}` },
    openGraph: {
      title,
      description: exp.shortDescription,
      images: [{ url: exp.image }],
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = getDetailExperience(slug);
  if (!exp) notFound();

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
          <p className="text-white/80 text-lg mb-6">{exp.description}</p>
          {exp.duration && (
            <div>
              <div className="text-2xl font-bold text-gold">{exp.duration}</div>
              <div className="text-white/60 text-sm">duration</div>
            </div>
          )}
        </div>
      </section>

      {/* Image */}
      <Section bg="cream">
        <div className="max-w-3xl mx-auto">
          <div className="relative h-72 lg:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={exp.image}
              alt={exp.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 768px"
            />
          </div>
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

      {/* CTA */}
      <Section bg="navy">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-white/70 mb-8">
            Visit us at Lake Como Tourist Center, Via Borgo Vico 62 — 3 minutes from Como S.
            Giovanni train station - Connection with Milano Centrale, Milano Malpensa, Milano
            Porta Garibaldi, Lugano and Zurich. Or contact us directly for availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking" size="lg">
              Book Now
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
