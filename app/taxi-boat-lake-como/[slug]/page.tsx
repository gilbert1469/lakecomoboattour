import { getTourBySlug, getAllTours, boatOptions } from "@/data/tours";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Section, { SectionHeader } from "@/components/ui/Section";
import { formatPrice } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllTours().map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: `${tour.name} — Lake Como Tourist Center`,
    description: tour.shortDescription,
    keywords: ["taxi boat lake como", "lake como boat tour", "private boat lake como", tour.slug],
  };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
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
              <div className="text-2xl font-bold text-gold">
                {tour.priceFrom !== null ? `from ${formatPrice(tour.priceFrom)}` : "On request"}
              </div>
              <div className="text-white/60 text-sm">
                {tour.priceFrom !== null ? "starting from · per boat" : "quotation"}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold">{tour.duration}</div>
              <div className="text-white/60 text-sm">duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section bg="cream">
        <SectionHeader eyebrow="Your experience" title="Overview" />
        <div className="max-w-2xl mx-auto">
          <p className="text-slate text-lg leading-relaxed">{tour.description}</p>
        </div>
      </Section>

      {/* Includes */}
      <Section bg="white">
        <SectionHeader eyebrow="What's included" title="Includes" />
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tour.includes.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold text-xl mt-0.5">✦</span>
              <span className="text-slate">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Boats & Pricing */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="Choose your boat"
          title="Boats & Pricing"
          subtitle={
            tour.pricing
              ? "Prices are per boat, fuel & VAT included. Pick the boat that suits your group."
              : "This tour is quoted individually for every boat, based on your requirements."
          }
        />
        <div className="max-w-3xl mx-auto">
          {tour.pricing ? (
            <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-6 py-4 text-sm font-semibold text-navy">Boat</th>
                    <th className="px-6 py-4 text-sm font-semibold text-navy">Max pax</th>
                    <th className="px-6 py-4 text-sm font-semibold text-navy text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 text-slate">Speedboat</td>
                    <td className="px-6 py-4 text-slate">6</td>
                    <td className="px-6 py-4 text-navy font-bold text-right">{formatPrice(tour.pricing.speedboat)}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 text-slate">Luxury Boat</td>
                    <td className="px-6 py-4 text-slate">6</td>
                    <td className="px-6 py-4 text-navy font-bold text-right">{formatPrice(tour.pricing.luxuryBoat)}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 text-slate">Exclusive Venetian Boat</td>
                    <td className="px-6 py-4 text-slate">10</td>
                    <td className="px-6 py-4 text-navy font-bold text-right">{formatPrice(tour.pricing.venetianBoat)}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate">Private Ferry</td>
                    <td className="px-6 py-4 text-slate">25 or 50</td>
                    <td className="px-6 py-4 text-navy font-bold text-right">Quotation on request</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-md p-6">
              <ul className="space-y-3">
                {boatOptions.map((boat) => (
                  <li key={boat.name} className="flex items-center justify-between border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <span className="text-slate">
                      {boat.name} <span className="text-slate/70">— max {boat.maxPax} pax</span>
                    </span>
                    <span className="text-navy font-bold">Quotation on request</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* Good to Know */}
      <Section bg="white">
        <SectionHeader eyebrow="Before you book" title="Good to Know" />
        <ul className="max-w-2xl mx-auto space-y-3">
          {[
            "Price is per boat — not per person",
            "Fuel and VAT included",
            tour.paxNote,
            `${tour.boatsLabel ?? "Boats available"}: ${tour.boats.join(" · ")}`,
            "Departures from Como city only",
            "Weather guarantee: if conditions prevent the tour, full refund provided",
          ]
            .filter((note): note is string => Boolean(note))
            .map((note) => (
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
            Visit us at Lake Como Tourist Center, Via Borgo Vico 62 — 3 minutes walk from Como San Giovanni station. Or contact us directly for availability and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`/booking?tour=${tour.slug}`} size="lg">Book This Tour</Button>
            <Button href="/taxi-boat-lake-como" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
              All Tours
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
