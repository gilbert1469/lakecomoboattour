import type { Metadata } from "next";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import { contact } from "@/data/navigation";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const seo = pageSEO.luggageStorage;

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luggage Storage in Como",
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

export default function LuggageStoragePage() {
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
            src="/images/experience-luggage.jpg"
            alt="Luggage storage in Como"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">
            Como city centre
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white">
            Luggage Storage in Como
          </h1>
        </div>
      </section>

      {/* Content */}
      <Section bg="white">
        <div className="max-w-2xl mx-auto space-y-6 text-slate text-lg leading-relaxed">
          <p>
            Drop your bags and explore the lake without limits. Our luggage storage is
            located at {contact.address} — 3 minutes from Como San Giovanni train station.
          </p>
          <p>
            Unlike standard luggage storage services, your bags are kept in a dedicated
            space inside our agency, with a member of staff on site at all times. We have
            plenty of room for standard luggage as well as oversized and bulky items —
            suitcases, backpacks, sports equipment, strollers and more. If needed, we can
            also help carry your luggage physically — just ask.
          </p>
          <p className="font-semibold text-navy">
            Open all days, {contact.hours.weekdays}.
          </p>
          <p>
            Need to drop off before opening or collect after closing? The service is
            available outside standard hours on request — just get in touch in advance.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="cream">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Get Directions</Button>
            <Button href={`tel:${contact.phone}`} variant="outline">
              📞 {contact.phone}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
