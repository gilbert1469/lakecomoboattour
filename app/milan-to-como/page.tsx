import type { Metadata } from "next";
import { pageSEO, siteSEO } from "@/data/seo";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const seo = pageSEO.milanToComo;

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
    q: "Is Como part of Milan?",
    a: "No, Como is an independent city located 50km north of Milan. However, the train journey from Milano Centrale to Como San Giovanni takes only 30 minutes.",
  },
  {
    q: "How long is the train from Milan to Como?",
    a: "The train from Milano Centrale to Como San Giovanni takes approximately 30 minutes and costs around €5. Trains run frequently throughout the day.",
  },
  {
    q: "Which station should I use — Como San Giovanni or Como Nord Lago?",
    a: "Como San Giovanni is the main station and the closest to the lake and our office. Trains from Milano Centrale arrive here. Como Nord Lago is a different station served by trains from Milano Cadorna — less convenient for lake experiences.",
  },
  {
    q: "What should I do when I arrive at Como San Giovanni?",
    a: "Lake Como Tourist Center is 3 minutes walk from Como San Giovanni station at Via Borgo Vico 42. Come find us first — we will help you plan the perfect day based on current weather and lake conditions.",
  },
];

const jsonLd = {
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

export default function MilanToComoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Section bg="navy">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-4">
            Milan to Como
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Milan to Como — Everything You Need to Know
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            30 minutes by train, €5 ticket, a completely different world. Here is everything you need
            to plan your day on Lake Como.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            centered={false}
          />
          <div className="space-y-10">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">{q}</h2>
                <p className="text-slate leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Getting There */}
      <Section bg="cream">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Practical info"
            title="Getting There"
            centered={false}
          />
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🚆</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-1">Recommended route</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    <strong className="text-navy">Milano Centrale → Como San Giovanni</strong> — 30 minutes, approximately €5, operated by Trenord. This is the correct station for the lake and for our office.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-gold-light">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚠️</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-1">Watch out</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    <strong className="text-navy">Milano Cadorna → Como Nord Lago</strong> is a completely different line and arrives at a different station. It is less convenient for lake access and not where our office is.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🕐</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-1">Frequency</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Trains run every 30–60 minutes throughout the day. Check the Trenord app or website for live timetables.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎫</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-1">Tickets</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Buy on the Trenord app, at station ticket machines or online. Always validate your ticket before boarding — inspectors are frequent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA navy */}
      <Section bg="navy">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-4">
            Just arrived?
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
            Just Arrived at Como San Giovanni?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            Lake Como Tourist Center is 3 minutes walk from the station exit. Come find us before
            planning your day — we know the lake, we check conditions daily and we will help you
            make the most of your time in Como.
          </p>
          <p className="text-gold-light font-semibold mb-8">
            📍 Via Borgo Vico 42, Como
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Find Us</Button>
            <Button href="/taxi-boat-lake-como" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              Book a Taxi Boat
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
