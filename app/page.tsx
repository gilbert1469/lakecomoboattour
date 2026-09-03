import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageSEO, siteSEO } from "@/data/seo";
import { getFeaturedTours } from "@/data/tours";
import TourCard from "@/components/tours/TourCard";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const seo = pageSEO.home;

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

const usps = [
  {
    icon: "🔒",
    title: "Fully Private Boat",
    description: "No other passengers: the boat is entirely yours. Total freedom over route and stops.",
  },
  {
    icon: "🧳",
    title: "Complimentary Luggage Storage",
    description: "Drop your bags at our secure office before or after your tour. Our luggage storage is staffed and monitored at all times.",
  },
  {
    icon: "🏠",
    title: "From the Station to the Lake",
    description: "Step off the train and straight onto your tour in Como or on the lake. Drop your bags at our office — 3 minutes from Como San Giovanni station — and you're ready to go.",
  },
  {
    icon: "💁",
    title: "Physical Help Desk",
    description: "We are available in person at our office to answer any question and help you make the most of your time in Como and on the lake.",
  },
];

export default function HomePage() {
  const featuredTours = getFeaturedTours();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteSEO.siteUrl,
    name: "Lake Como Tourist Center",
    description: seo.description,
    url: siteSEO.siteUrl,
    telephone: "+39 334 381 7235",
    email: "info@lakecomotouristcenter.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Borgo Vico 62",
      addressLocality: "Como",
      postalCode: "22100",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.808,
      longitude: 9.083,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "20:30",
      },
    ],
    priceRange: "€€",
    image: `${siteSEO.siteUrl}${seo.ogImage}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Lake Como seen from the boat"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-gold-light font-semibold uppercase tracking-widest text-sm mb-4">
            Lake Como · Tourist Center
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Discover Lake Como
            <br />
            <span className="text-gold">from the Best Perspective</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Historic villas, charming villages,
            breathtaking sunsets. Tailored for families, elderly guests and international travellers.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm mb-6">
            <span>📍</span>
            <span>3 minutes walk from Como San Giovanni station · Open daily</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/taxi-boat-lake-como" size="lg">
              Book Your Tour
            </Button>
            <Button
              href="/taxi-boat-lake-como"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Explore Tours
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Featured Tours */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="Our tours"
          title="Choose Your Lake Como Adventure"
          subtitle="Every tour is fully private with a certified skipper. Pick the duration and itinerary that suits you best."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/taxi-boat-lake-como" variant="secondary">
            View all tours →
          </Button>
        </div>
      </Section>

      {/* USPs */}
      <Section bg="white">
        <SectionHeader
          eyebrow="Why choose us"
          title="A Tailor-Made Experience, Just for You"
          subtitle="We're not a ferry service. Every tour is crafted to let you experience the lake in an authentic, personal way."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp) => (
            <div key={usp.title} className="flex gap-4">
              <div className="text-3xl shrink-0">{usp.icon}</div>
              <div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">{usp.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why book with us */}
      <Section bg="navy">
        <SectionHeader
          eyebrow="Why book with us"
          title="We Are Your Reference Point in Como"
          subtitle="3 minutes walk from Como San Giovanni station. Book with confidence: if the weather changes, we give you a full refund and help you reorganise your day."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: "🌦️",
              title: "Weather Guarantee",
              description: "If conditions change and your tour cannot run, you get a full refund. We also keep your luggage and help you find the best alternative for the day.",
              href: "/contact",
            },
            {
              icon: "🧳",
              title: "Luggage Storage",
              description: "Drop your bags at our office and explore Como hands-free. Safe, secure and open daily. Via Borgo Vico 62 — 3 minutes walk from Como San Giovanni station.",
              href: "/luggage-storage",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-6 text-white"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              <div className="mt-4 text-gold text-sm font-semibold group-hover:underline">Learn more →</div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
