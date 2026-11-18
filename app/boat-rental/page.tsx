import type { Metadata } from "next";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import { contact } from "@/data/navigation";
import Section from "@/components/ui/Section";
import BookingCta from "@/components/ui/BookingCta";

const seo = pageSEO.boatRental;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/boat-rental" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.ogImage ?? siteSEO.defaultOgImage }],
  },
};

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
            Cast off and explore Lake Como at your own pace. Our{" "}
            <strong className="font-semibold text-navy">40 CV motorboat</strong> is available for
            private rental — <strong className="font-semibold text-navy">no licence required</strong>,
            no skipper on board, just you and the lake.
          </p>
          <p>
            Before you set off, we&apos;ll walk you through everything you need: how to handle the
            boat, the best routes and the spots worth stopping at. After that, the lake is all
            yours.
          </p>
          <p>
            <strong className="font-semibold text-navy">Up to 6 people</strong> on board. Choose
            your duration and go wherever the water takes you.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <BookingCta href="/booking" label="Book Now" />
    </>
  );
}
