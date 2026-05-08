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
    icon: "👨‍👩‍👧‍👦",
    title: "Family Friendly",
    description: "Tours designed for the whole family: spacious boat, relaxed pace, skipper experienced with children.",
  },
  {
    icon: "🧓",
    title: "Elderly Friendly",
    description: "Easy boarding, comfortable seating and no rush. Lake Como for everyone, with no barriers.",
  },
  {
    icon: "🌍",
    title: "Multilingual Crew",
    description: "We speak Italian, English, French and German. Your tour explained in your own language.",
  },
  {
    icon: "🔒",
    title: "Fully Private Boat",
    description: "No other passengers: the boat is entirely yours. Total freedom over route and stops.",
  },
  {
    icon: "⚓",
    title: "Certified Skipper",
    description: "Licensed professionals with years of experience on Lake Como. Safety and expertise guaranteed.",
  },
  {
    icon: "⭐",
    title: "5-Star Reviews",
    description: "Hundreds of happy guests on TripAdvisor and Google. Your experience is our top priority.",
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
    email: "info@milantolakecomo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Borgo Vico 42",
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
        closes: "21:00",
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
            <Button href="/booking" size="lg">
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

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-sm mx-auto sm:max-w-md">
            {[
              ["500+", "Happy guests"],
              ["6", "Tours available"],
              ["100%", "Private boat"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl sm:text-3xl font-bold text-gold-light">{num}</div>
                <div className="text-xs text-white/70 mt-1">{label}</div>
              </div>
            ))}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🌦️",
              title: "Weather Guarantee",
              description: "If conditions change and your tour cannot run, you get a full refund. We also keep your luggage and help you find the best alternative for the day.",
              href: "/contact",
            },
            {
              icon: "✈️",
              title: "Malpensa Full Day Package",
              description: "Landing at Malpensa? We pick you up, store your bags, show you Como and take you on the lake. One day, one package, zero stress.",
              href: "/malpensa-to-como",
            },
            {
              icon: "🧳",
              title: "Luggage Storage",
              description: "Drop your bags at our office and explore Como hands-free. Safe, secure and open daily. Via Borgo Vico 42 — 3 minutes walk from Como San Giovanni station.",
              href: "/experiences#luggage",
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

      {/* Testimonial CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="font-serif text-2xl lg:text-3xl text-navy font-bold leading-snug mb-6 text-balance">
            &ldquo;A wonderful experience! Our skipper showed us hidden corners of the lake we never would have found on our own. Highly recommended!&rdquo;
          </blockquote>
          <p className="text-slate text-sm mb-8">— Maria G., Milan · TripAdvisor</p>
          <Button href="/booking" size="lg">
            Book Your Experience
          </Button>
        </div>
      </section>
    </>
  );
}
