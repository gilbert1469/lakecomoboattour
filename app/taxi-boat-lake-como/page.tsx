import type { Metadata } from "next";
import { pageSEO, siteSEO } from "@/data/seo";
import {
  tours,
  getSmallGroupTours,
  getBigGroupTours,
  getSpecialRequestTours,
  getWaterSportTours,
} from "@/data/tours";
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
  const smallGroupTours = getSmallGroupTours();
  const bigGroupTours = getBigGroupTours();
  const specialRequestTours = getSpecialRequestTours();
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

      {/* Section 1: Small Groups */}
      <Section bg="cream" id="small-groups" className="scroll-mt-20 lg:scroll-mt-28">
        <SectionHeader
          eyebrow="Small Groups"
          title="Small Groups Private Tours"
          subtitle="From a 1-hour first taste to a full personalised day. Every tour is private — the boat is exclusively yours. Each boat accommodates max 10 pax."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallGroupTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </Section>

      {/* Section 2: Big Groups */}
      <Section bg="white" id="big-groups" className="scroll-mt-20 lg:scroll-mt-28">
        <SectionHeader
          eyebrow="Big Groups"
          title="Big Groups Private Tours"
          subtitle="Travelling with a larger party? Our private ferry accommodates groups of up to 50 people. Every standard itinerary is available, quoted individually for your group."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bigGroupTours.map((tour) => (
            <div key={tour.id}>
              {tour.subheading && (
                <h3 className="font-serif text-lg font-bold text-navy text-center mb-4">
                  {tour.subheading}
                </h3>
              )}
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </Section>

      {/* Section 3: Special Requests */}
      <Section bg="cream" id="special-requests" className="scroll-mt-20 lg:scroll-mt-28">
        <SectionHeader
          eyebrow="Tailored Experiences"
          title="Special Requests"
          subtitle="Weddings, photoshoots and fully custom itineraries — tell us what you have in mind and we'll put together a tailored proposal."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialRequestTours.map((tour) => (
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
