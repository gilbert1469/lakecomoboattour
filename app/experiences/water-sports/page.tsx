import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageSEO, siteSEO } from "@/data/seo";
import { getWaterSportExperiences } from "@/data/experiences";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ACTIVITY_SLUGS } from "./activities";

const seo = pageSEO.waterSports;

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

export default function WaterSportsPage() {
  const waterSports = getWaterSportExperiences();

  return (
    <>
      {/* Page title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 text-center">
        <p className="text-navy-light text-sm font-semibold uppercase tracking-widest mb-3">
          <Link href="/experiences" className="hover:text-navy transition-colors">
            Experiences
          </Link>{" "}
          / Water Sports
        </p>
        <h1 className="font-serif text-3xl lg:text-5xl font-bold text-navy">
          Water Sports on Lake Como
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate text-lg leading-relaxed">
          Lake Como&apos;s reliable thermal winds and calm water make it one of Northern Italy&apos;s
          best spots for water sports. We connect you with certified local instructors for kite
          surf / kite foil, wing foil, wind surf / wind foil and sailing — for complete beginners
          and experienced riders alike. Pick an activity below to find out more.
        </p>
      </div>

      {/* Activities grid */}
      <Section bg="cream">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {waterSports.map((exp) => (
            <Link
              key={exp.id}
              href={`/experiences/water-sports/${ACTIVITY_SLUGS[exp.category]}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-3xl mb-3">{exp.icon}</div>
                <h2 className="font-serif text-xl font-bold text-navy mb-2">{exp.name}</h2>
                <p className="text-slate text-sm leading-relaxed flex-1">{exp.shortDescription}</p>
                <span className="mt-4 text-sm font-medium text-navy-light group-hover:text-navy transition-colors">
                  Discover more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA block */}
      <Section bg="navy">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Not Sure Which Sport Is for You?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Tell us your experience level and what you&apos;re after — we&apos;ll match you with the
            right instructor and conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              Contact Us
            </Button>
            <Button href="/booking">Book Now</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
