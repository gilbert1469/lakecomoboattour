import type { Metadata } from "next";
import { pageSEO, siteSEO } from "@/data/seo";
import Section, { SectionHeader } from "@/components/ui/Section";

const seo = pageSEO.faq;

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

const faqs = [
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
    a: "Safety comes first — if conditions are unsuitable, we always offer the option to reschedule or a full refund. If your reservation is for the Exclusive Venetian Boat or the Private Ferry, please note that these boats can still operate in light rain, provided the lake allows safe navigation.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "Absolutely! All tours have a base itinerary, but the skipper is flexible. For maximum freedom, we recommend the Full-Day Private Tour: you decide where to go.",
  },
  {
    q: "Where do we board?",
    a: "Boarding is at Como harbour or, on request, at other lake jetties (Bellagio, Varenna, Tremezzo). We will confirm the exact meeting point upon booking.",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Section bg="white">
        <SectionHeader eyebrow="FAQ" title="Everything You Need to Know" />
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-cream rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy mb-2">{q}</h3>
              <p className="text-slate text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
