import type { Metadata } from "next";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { contact } from "@/data/navigation";

const seo = pageSEO.about;

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

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Lake Como Tourist Center",
    description: seo.description,
    url: siteSEO.siteUrl,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Borgo Vico 62",
      addressLocality: "Como",
      postalCode: "22100",
      addressCountry: "IT",
    },
    founder: [
      { "@type": "Person", name: "Gilberto Mosconi" },
      { "@type": "Person", name: "Natalie Vogt" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">Our story</p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Story */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-navy-light text-sm font-semibold uppercase tracking-widest mb-3">Our story</p>
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Born on the Lake, Grown for the Lake
            </h2>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                <strong>Lake Como Tourist Center</strong> was born from the meeting of two passions for this lake.
              </p>
              <p>
                <strong>Gilberto Mosconi</strong>, a Como native, grew up on these shores and spent years exploring
                every corner of the lake. After nearly a decade working in the financial sector, he chose to
                return to his hometown to chase a dream: helping travelers discover his city and its
                surroundings the way only a local truly can.
              </p>
              <p>
                Alongside him,{" "}
                <a
                  href="https://bsktravel.com/travel_designer/natalie-vogt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-navy hover:text-navy-light underline"
                >
                  Natalie Vogt
                </a>{" "}
                brings over 40 years of experience in the Lake Como
                travel industry. One of the most respected names in local tourism, Natalie has spent four
                decades building relationships, curating experiences and welcoming visitors from every
                corner of the world to this extraordinary place.
              </p>
              <p>
                Together, they built <strong>Lake Como Tourist Center</strong> for one kind of traveller — the
                one who wants to do more than just pass through.
              </p>
              <p>
                We plan, we guide, we take care with ❤️ of every detail, so that every hour spent here
                becomes something worth remembering.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/vetrina.jpg"
              alt="Lake Como Tourist Center storefront in Como"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Location */}
      <Section bg="navy">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-3">Find us</p>
          <h2 className="font-serif text-3xl font-bold text-white mb-6">
            We&apos;re in the Heart of Como
          </h2>
          <div className="text-white/80 space-y-2 mb-8">
            <p className="text-xl font-semibold text-white">📍 {contact.address}</p>
            <p>3 minutes from Como train station</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">View on Map</Button>
            <Button href={`tel:${contact.phone}`} variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              📞 {contact.phone}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
