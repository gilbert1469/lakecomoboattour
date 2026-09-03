import type { Metadata } from "next";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import Section, { SectionHeader } from "@/components/ui/Section";
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
      <section className="relative h-72 lg:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-agency.jpg"
            alt="Our team in Como"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">Our story</p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <p className="text-navy-light text-sm font-semibold uppercase tracking-widest mb-3">Our story</p>
          <h2 className="font-serif text-3xl font-bold text-navy mb-6">
            Born on the Lake, Grown for the Lake
          </h2>
          <div className="space-y-4 text-slate leading-relaxed">
            <p>
              Lake Como Tourist Center was born from the meeting of two passions for this lake.
            </p>
            <p>
              Gilberto Mosconi, a Como native, grew up on these shores and spent years exploring every
              corner of the lake — its hidden bays, its iconic villas, its rhythms through the seasons.
              That deep local knowledge became the foundation of everything we do.
            </p>
            <p>
              Alongside him, Natalie Vogt brings over 40 years of experience in the Lake Como travel
              industry. One of the most respected names in local tourism, Natalie has spent four decades
              building relationships, curating experiences and welcoming visitors from every corner of
              the world to this extraordinary place.
            </p>
            <p>
              Together, they built Lake Como Tourist Center for one kind of traveller — the one who wants
              to do more than just pass through. We plan, we guide, we take care of every detail, so that
              every hour spent here becomes something worth remembering.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section bg="cream">
        <SectionHeader eyebrow="Our values" title="What Makes Us Different" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🛡️", title: "Safety First", desc: "All skippers are licensed, boats certified and fully insured." },
            { icon: "❤️", title: "Guest Care", desc: "Every booking is treated as if you were our most valued guest." },
            { icon: "🌱", title: "Respect for the Lake", desc: "We navigate responsibly, protecting the lake's ecosystem and local communities." },
            { icon: "⭐", title: "Uncompromising Quality", desc: "From the boat to every communication, every detail matters." },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-serif text-lg font-bold text-navy mb-2">{v.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
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
