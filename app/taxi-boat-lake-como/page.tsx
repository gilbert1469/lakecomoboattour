import type { Metadata } from "next";
import { pageSEO, siteSEO } from "@/data/seo";
import { tours, getBoatTours, getWaterSportTours } from "@/data/tours";
import TourCard from "@/components/tours/TourCard";
import Section, { SectionHeader } from "@/components/ui/Section";

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
  const boatTours = getBoatTours();
  const waterSportTours = getWaterSportTours();

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
        ...(tour.priceFrom !== null
          ? {
              offers: {
                "@type": "Offer",
                price: tour.priceFrom,
                priceCurrency: "EUR",
              },
            }
          : {}),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />

      {/* Boat Tours */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="Our itineraries"
          title="Find the Perfect Tour for You"
          subtitle="From a 1-hour first taste to a full personalised day. Every tour is private — the boat is exclusively yours."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boatTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </Section>

      {/* Water Sports & Boat Tour */}
      <Section bg="white">
        <SectionHeader
          eyebrow="Boat + Water Sports"
          title="Water Sports & Boat Tour"
          subtitle="A scenic cruise combined with a kite or wing foil lesson in the lake's wind zone."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waterSportTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </Section>
    </>
  );
}
