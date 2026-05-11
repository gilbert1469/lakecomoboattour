import { getTourBySlug, getAllTours } from "@/data/tours";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Section, { SectionHeader } from "@/components/ui/Section";

export async function generateStaticParams() {
  return getAllTours().map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tour = getTourBySlug(params.slug);
  if (!tour) return {};
  return {
    title: `${tour.name} — Lake Como Tourist Center`,
    description: tour.shortDescription,
    keywords: ["taxi boat lake como", "lake como boat tour", "private boat lake como", tour.slug],
  };
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-white text-center">
          {tour.tag && (
            <span className="inline-block bg-gold text-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {tour.tag}
            </span>
          )}
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">{tour.name}</h1>
          <p className="text-white/80 text-lg mb-6">{tour.shortDescription}</p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gold">€{tour.price}</div>
              <div className="text-white/60 text-sm">starting from · per boat</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold">{tour.duration}</div>
              <div className="text-white/60 text-sm">duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <Section bg="cream">
        <SectionHeader eyebrow="Your route" title="Itinerary" />
        <div className="max-w-2xl mx-auto">
          <p className="text-slate text-lg leading-relaxed">{tour.itinerary}</p>
        </div>
      </Section>

      {/* Highlights */}
      <Section bg="white">
        <SectionHeader eyebrow="What you will see" title="Highlights" />
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tour.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <span className="text-gold text-xl mt-0.5">✦</span>
              <span className="text-slate">{h}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Good to Know */}
      <Section bg="cream">
        <SectionHeader eyebrow="Before you book" title="Good to Know" />
        <ul className="max-w-2xl mx-auto space-y-3">
          {[
            "Price is per boat — not per person",
            "Fuel and VAT included",
            "Multiple boat sizes available — contact us for large groups",
            "Prices are fixed, no seasonal variations",
            "Departures from Como city only",
            "Weather guarantee: if conditions prevent the tour, full refund provided",
          ].map((note) => (
            <li key={note} className="flex items-start gap-3">
              <span className="text-gold text-xl mt-0.5">✓</span>
              <span className="text-slate">{note}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <Section bg="navy">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-white/70 mb-8">
            Visit us at Lake Como Tourist Center, Via Borgo Vico 42 — 3 minutes walk from Como San Giovanni station. Or contact us directly for availability and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">Contact Us</Button>
            <Button href="/taxi-boat-lake-como" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
              All Tours
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
