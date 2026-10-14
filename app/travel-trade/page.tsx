import type { Metadata } from "next";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import PartnerEnquiryForm from "@/components/partners/PartnerEnquiryForm";

const seo = pageSEO.partners;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/travel-trade" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.ogImage ?? siteSEO.defaultOgImage }],
  },
};

const valueProps = [
  { icon: "💼", title: "Net rates & commissions", description: "Flexible commercial terms for the trade, on request." },
  { icon: "📍", title: "Local ground expertise", description: "Based in Como, with every service operated in-house." },
  { icon: "🗺️", title: "Tailor-made itineraries", description: "Private tours, groups, incentives and weddings." },
  { icon: "🤝", title: "One point of contact", description: "Fast replies and end-to-end handling of every booking." },
];

const offer = [
  "Private boat tours & transfers",
  "Self-drive boat rental",
  "Guided tours",
  "Cooking classes & home restaurant",
  "Wine tasting",
  "Cycling and water sports",
];

const steps = [
  { title: "Tell us your clients’ needs", description: "Share dates, group size, interests and budget — as much or as little as you have." },
  { title: "We build the proposal with net rates", description: "You receive a tailored programme with clear net pricing, ready to package for your clients." },
  { title: "We operate on the ground", description: "We take care of everything locally, while you keep the relationship with your clients." },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-navy py-20 lg:py-28">
        <Image
          src="/images/venetian-taxi-hero.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-navy/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">Travel Trade</p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Your DMC &amp; ground partner on Lake Como
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mb-8">
            We design and operate tailor-made experiences on Lake Como for travel agencies, DMCs and tour operators
            worldwide — with net rates, reliable operations and a single local point of contact.
          </p>
          <Button href="#partner-enquiry">Become a partner</Button>
        </div>
      </div>

      {/* Why partner with us */}
      <Section bg="white">
        <SectionHeader eyebrow="For the trade" title="Why partner with us" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {valueProps.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="text-3xl shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What we offer partners */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="Services"
          title="What we offer partners"
          subtitle="Everything your clients need on Lake Como, from a single local supplier."
        />
        <div className="max-w-3xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offer.map((item) => (
              <li key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm text-navy font-medium">
                <span className="text-gold-dark">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-center text-slate mt-8 leading-relaxed">
            Plus <strong className="text-navy">bespoke itineraries</strong> for groups, incentives, weddings and
            photoshoots.
          </p>
        </div>
      </Section>

      {/* How it works */}
      <Section bg="navy">
        <SectionHeader eyebrow="Simple process" title="How it works" light />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="bg-white/10 rounded-2xl p-6 text-white">
              <div className="w-10 h-10 rounded-full bg-gold-light text-navy font-bold flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Partner enquiry form */}
      <Section bg="cream" id="partner-enquiry">
        <SectionHeader
          eyebrow="Get in touch"
          title="Partner enquiry"
          subtitle="Tell us about your business and we’ll send you our trade information and net rates."
        />
        <div className="max-w-3xl mx-auto">
          <PartnerEnquiryForm />
        </div>
      </Section>
    </>
  );
}
