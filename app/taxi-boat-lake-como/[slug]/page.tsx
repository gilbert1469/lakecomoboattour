import { getTourBySlug, getAllTours } from "@/data/tours";
import { notFound } from "next/navigation";
import BookingCta from "@/components/ui/BookingCta";
import ContactForm from "@/components/contact/ContactForm";
import Section, { SectionHeader } from "@/components/ui/Section";

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
    alternates: { canonical: `/taxi-boat-lake-como/${tour.slug}` },
  };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  // Special requests (Custom, Wedding, Photoshoot): description plus an enquiry form only.
  if (tour.subGroup === "special-requests") {
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
            <p className="text-white/80 text-lg">{tour.shortDescription}</p>
          </div>
        </section>

        {/* Overview + enquiry form */}
        <Section bg="cream">
          <div className="max-w-2xl mx-auto space-y-10">
            <p className="text-slate text-lg leading-relaxed">{tour.description}</p>
            <ContactForm tourName={tour.name} title={`Enquire about the ${tour.name}`} />
          </div>
        </Section>
      </>
    );
  }

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

      {/* Good to Know */}
      <Section bg="white">
        <SectionHeader eyebrow="Before you book" title="Good to Know" />
        <ul className="max-w-2xl mx-auto space-y-3">
          {[
            "Price is per boat — not per person",
            "Fuel and VAT included",
            tour.paxNote,
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
      <BookingCta href={`/booking?tour=${tour.slug}`} label="Book This Tour" />
    </>
  );
}
