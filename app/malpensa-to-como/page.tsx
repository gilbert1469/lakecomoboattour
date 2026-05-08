import type { Metadata } from "next";
import { pageSEO, siteSEO } from "@/data/seo";
import { getExperienceBySlug } from "@/data/experiences";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const seo = pageSEO.malpensa;
const experience = getExperienceBySlug("malpensa-to-como-full-day")!;

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

const steps = [
  {
    n: 1,
    title: "We pick you up at Malpensa Arrivals",
    desc: "You land, we are there. No navigation, no stress, no searching for signs. We meet you at the Arrivals exit.",
  },
  {
    n: 2,
    title: "Drop your bags at our office",
    desc: "Via Adamo del Pero 38, Como — 3 minutes walk from Como San Giovanni station. Your luggage is stored safely for the whole day.",
  },
  {
    n: 3,
    title: "Guided walking tour of Como",
    desc: "Historic centre, Duomo, lakefront. Optional, 1–2 hours. A perfect introduction to Como before you get on the water.",
  },
  {
    n: 4,
    title: "Private taxi boat on Lake Como",
    desc: "The villas, the villages, the real lake experience — just you and your group, with a certified skipper who knows every corner of the lake.",
  },
  {
    n: 5,
    title: "End of day drop-off",
    desc: "Como San Giovanni station (30-minute train to Milano Centrale) or back to Malpensa if needed. We plan it around your flight.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Malpensa to Como Full Day Package",
  description: seo.description,
  provider: {
    "@type": "TravelAgency",
    name: "Lake Como Tourist Center",
    url: siteSEO.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Adamo del Pero 38",
      addressLocality: "Como",
      postalCode: "22100",
      addressCountry: "IT",
    },
  },
  touristType: "International travellers landing at Malpensa",
  itinerary: {
    "@type": "ItemList",
    itemListElement: steps.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      description: s.desc,
    })),
  },
};

export default function MalpensaToComoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Section bg="navy">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-4">
            Malpensa Full Day Package
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Land at Malpensa. Experience Lake Como the Same Day.
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Como is 40 minutes from Malpensa airport. We pick you up at Arrivals, take care of
            your luggage, show you the historic centre and take you on a private taxi boat on
            the lake.
          </p>
        </div>
      </Section>

      {/* How It Works */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="How it works"
            title="Your Day, Step by Step"
            centered={false}
          />
          <ol className="space-y-8">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                  {step.n}
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-navy mb-1">{step.title}</h2>
                  <p className="text-slate leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* What's Included */}
      <Section bg="cream">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Included"
            title="What's in the Package"
            centered={false}
          />
          <ul className="space-y-4">
            {experience.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-gold mt-0.5 text-lg">✓</span>
                <span className="text-slate leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Weather Guarantee */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Our guarantee"
            title="Weather Guarantee"
            centered={false}
          />
          <div className="bg-cream rounded-2xl p-8 space-y-4 text-slate leading-relaxed">
            <p>
              Lake Como weather is generally excellent, but we cannot control it. If conditions on
              the day make the taxi boat experience unsafe or unsatisfying, we refund the boat
              portion in full.
            </p>
            <p>
              Your luggage remains safely with us for the whole day regardless. We will help you
              find the best alternative — whether that is a cooking class, a cycling route or simply
              a great afternoon in Como.
            </p>
            <p className="font-semibold text-navy">
              This is the one package we strongly recommend booking in advance. The logistics —
              pickup coordination, luggage, skipper — require preparation that same-day walk-ins
              cannot accommodate.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="navy">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-4">
            Book in advance
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
            Ready to Book?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            This package requires advance booking for logistics. Contact us directly for
            availability and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Contact Us</Button>
            <Button
              href="/taxi-boat-lake-como"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Learn About Taxi Boat
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
