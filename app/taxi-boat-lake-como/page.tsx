import type { Metadata } from "next";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import { tours } from "@/data/tours";
import TourCard from "@/components/tours/TourCard";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const seo = pageSEO.taxiBoat;

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

export default function ToursPage() {
  const tourJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Lake Como Tourist Center – Tours",
    description: seo.description,
    url: `${siteSEO.siteUrl}/taxi-boat-lake-como`,
    itemListElement: tours.map((tour, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        name: tour.name,
        description: tour.shortDescription,
        touristType: ["Family", "Leisure"],
        offers: {
          "@type": "Offer",
          price: tour.price,
          priceCurrency: "EUR",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />

      {/* Page hero */}
      <section className="relative h-72 lg:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/lakecomo-tours/1920/600"
            alt="Boat tour on Lake Como"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">
            Lake Como · Private Boat
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white">
            Boat Tours
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            6 itineraries. All private. All with a certified skipper.
          </p>
        </div>
      </section>

      {/* All Tours */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="Our itineraries"
          title="Find the Perfect Tour for You"
          subtitle="From a 2-hour classic cruise to a full personalised day. Every tour is private — the boat is exclusively yours."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-navy-light text-sm font-semibold uppercase tracking-widest mb-3">How it works</p>
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              As Easy as Stepping on Board
            </h2>
            <ol className="space-y-5">
              {[
                ["1", "Choose your tour", "Browse our itineraries and check availability online."],
                ["2", "Book", "Fill in the form or call us. Confirmation within a few hours."],
                ["3", "Step on board", "Meet us at Como harbour. Your skipper will welcome you and the adventure begins!"],
              ].map(([num, title, desc]) => (
                <li key={num} className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-light text-navy font-bold text-sm rounded-full flex items-center justify-center shrink-0">
                    {num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{title}</h3>
                    <p className="text-slate text-sm mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Button href="/booking">Book Now</Button>
            </div>
          </div>
          <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="https://picsum.photos/seed/lakecomo-skipper/800/600"
              alt="Skipper on Lake Como"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <SectionHeader eyebrow="FAQ" title="Everything You Need to Know" />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Are prices per person or per boat?",
              a: "Prices are always for the entire boat, not per person. Whether you are 1 or 6 people, the price stays the same. This makes our tours especially good value for families and groups.",
            },
            {
              q: "Is it suitable for children?",
              a: "Absolutely! We have specific Family Tours with a spacious boat (up to 8 seats), children's life jackets, safe swimming stops and a skipper who knows how to make the experience fun for the little ones too.",
            },
            {
              q: "What happens in bad weather?",
              a: "Safety comes first. If weather conditions are unsuitable, we always offer the option to reschedule or a full refund.",
            },
            {
              q: "Can I customise the itinerary?",
              a: "Absolutely! All tours have a base itinerary, but the skipper is flexible. For maximum freedom, we recommend the Full-Day Private Tour: you decide where to go.",
            },
            {
              q: "Where do we board?",
              a: "Boarding is at Como harbour or, on request, at other lake jetties (Bellagio, Varenna, Tremezzo). We will confirm the exact meeting point upon booking.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy mb-2">{q}</h3>
              <p className="text-slate text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
