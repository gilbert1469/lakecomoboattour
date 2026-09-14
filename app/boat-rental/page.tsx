import type { Metadata } from "next";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import { contact } from "@/data/navigation";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const seo = pageSEO.boatRental;

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

const priceTable = [
  { duration: "1 hour", price: "€150" },
  { duration: "2 hours", price: "€290" },
  { duration: "3 hours", price: "€420" },
  { duration: "4 hours", price: "€500" },
  { duration: "5 hours", price: "€600" },
  { duration: "6 hours", price: "€650" },
  { duration: "7 hours", price: "€700" },
  { duration: "8 hours", price: "€800" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Boat Rental on Lake Como",
  description: seo.description,
  provider: {
    "@type": "LocalBusiness",
    name: "Lake Como Tourist Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Borgo Vico 62",
      addressLocality: "Como",
      postalCode: "22100",
      addressCountry: "IT",
    },
    telephone: contact.phone,
  },
  areaServed: "Como",
};

export default function BoatRentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-72 lg:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/boat-rental.png"
            alt="Boat rental on Lake Como"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">
            No licence needed — explore the lake at your own pace.
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white">
            Boat Rental on Lake Como
          </h1>
        </div>
      </section>

      {/* Description */}
      <Section bg="white">
        <div className="max-w-2xl mx-auto space-y-6 text-slate text-lg leading-relaxed">
          <p>
            Rent one of our boats and discover Lake Como on your own terms. No boating licence
            required — we&apos;ll give you a full briefing before you set off. Perfect for a few
            hours of freedom on the water, at your own pace and with your own itinerary.
          </p>
        </div>
      </Section>

      {/* Boat & Pricing */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="Available boat"
          title="40 CV Motorboat"
          subtitle="Max 6 people"
        />
        <div className="max-w-3xl mx-auto">
          <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-4 text-sm font-semibold text-navy">Duration</th>
                  <th className="px-6 py-4 text-sm font-semibold text-navy text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, i) => (
                  <tr
                    key={row.duration}
                    className={i < priceTable.length - 1 ? "border-b border-gray-100" : undefined}
                  >
                    <td className="px-6 py-4 text-slate">{row.duration}</td>
                    <td className="px-6 py-4 text-navy font-bold text-right">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-slate leading-relaxed">
            Prices are per boat, not per person. Fuel is not included — it is charged separately
            at €25 per hour, payable in cash directly on the boat at the start of the rental.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="navy">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Set Off?</h2>
          <p className="text-white/70 mb-8">
            Departure from {contact.address} — 3 minutes from Como San Giovanni station.
          </p>
          <Button href="/booking" size="lg">
            Book Now
          </Button>
        </div>
      </Section>
    </>
  );
}
