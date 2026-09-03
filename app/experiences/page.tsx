import type { Metadata } from "next";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import { experiences } from "@/data/experiences";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

const seo = pageSEO.experiences;

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

export default function ExperiencesPage() {
  return (
    <>
      {/* Page title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 text-center">
        <h1 className="font-serif text-3xl lg:text-5xl font-bold text-navy">
          Experiences in Como &amp; Surroundings
        </h1>
      </div>

      {/* Experiences */}
      {experiences.map((exp, idx) => (
        <Section key={exp.id} bg={idx % 2 === 0 ? "white" : "cream"} id={exp.category}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
            {/* Image */}
            <div className={`relative h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg ${idx % 2 !== 0 ? "lg:col-start-2" : ""}`}>
              <Image
                src={exp.image}
                alt={exp.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className={idx % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
              <div className="text-4xl mb-4">{exp.icon}</div>
              <p className="text-navy-light text-sm font-semibold uppercase tracking-widest mb-2">
                {exp.category === "cycling"
                  ? "Cycling Tour"
                  : exp.category === "cooking"
                  ? "Food & Wine"
                  : exp.category === "guided"
                  ? "Local Guide"
                  : "Services"}
              </p>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">{exp.name}</h2>
              <p className="text-slate leading-relaxed mb-6">{exp.description}</p>

              {/* Highlights */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-slate">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Includes */}
              <div className="bg-cream rounded-xl p-4 mb-6">
                <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">Included:</p>
                <ul className="flex flex-wrap gap-2">
                  {exp.includes.map((inc) => (
                    <li key={inc} className="text-xs bg-white text-slate px-3 py-1 rounded-full border border-gray-200">
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center gap-6">
                <div>
                  {exp.price > 0 ? (
                    <>
                      <span className="text-3xl font-bold text-navy">{formatPrice(exp.price)}</span>
                      <span className="text-sm text-slate ml-2">{exp.priceNote}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-navy">{exp.priceNote}</span>
                  )}
                  {exp.duration && (
                    <div className="text-sm text-slate mt-1">⏱ {exp.duration}</div>
                  )}
                </div>
                <Button href="/booking">Book Now</Button>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA block */}
      <Section bg="navy">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Want to Combine a Boat Tour + Experiences?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Contact us to create a custom package. Morning boat tour, afternoon cooking class and luggage storage included — all with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              Contact Us
            </Button>
            <Button href="/booking">
              Book Now
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
