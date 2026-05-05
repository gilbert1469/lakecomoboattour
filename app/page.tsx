import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageSEO, siteSEO } from "@/data/seo";
import { getFeaturedTours } from "@/data/tours";
import { experiences } from "@/data/experiences";
import TourCard from "@/components/tours/TourCard";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const seo = pageSEO.home;

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

const usps = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Friendly",
    description: "Tour pensati per tutta la famiglia: barca spaziosa, ritmo comodo, skipper esperto con i bambini.",
  },
  {
    icon: "🧓",
    title: "Adatto agli Anziani",
    description: "Accesso facile, sedute comode e nessuna fretta. Il Lago di Como per tutti, senza barriere.",
  },
  {
    icon: "🌍",
    title: "Team Multilingue",
    description: "Parliamo italiano, inglese, francese e tedesco. I vostri tour spiegati nella vostra lingua.",
  },
  {
    icon: "🔒",
    title: "Barca Privata",
    description: "Nessun altro passeggero: la barca è tutta per voi. Libertà totale su percorso e soste.",
  },
  {
    icon: "⚓",
    title: "Skipper Certificato",
    description: "Professionisti con anni di esperienza sul Lago di Como. Sicurezza e professionalità garantite.",
  },
  {
    icon: "⭐",
    title: "Recensioni 5 Stelle",
    description: "Centinaia di ospiti soddisfatti su TripAdvisor e Google. La vostra esperienza è la nostra priorità.",
  },
];

export default function HomePage() {
  const featuredTours = getFeaturedTours();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteSEO.siteUrl,
    name: "Lake Como Boat Tour",
    description: seo.description,
    url: siteSEO.siteUrl,
    telephone: "+39 031 000 0000",
    email: "info@lakecomoboattour.net",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Adamo del Pero 38",
      addressLocality: "Como",
      postalCode: "22100",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.808,
      longitude: 9.083,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "€€",
    image: `${siteSEO.siteUrl}${seo.ogImage}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lago-como.jpg"
            alt="Lago di Como visto dalla barca"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-4">
            Lago di Como · Barca Privata
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Scopri il Lago di Como
            <br />
            <span className="text-gold">dalla Prospettiva Giusta</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tour in barca privata con skipper certificato. Ville storiche, borghi pittoreschi,
            tramonti mozzafiato. Adatti a famiglie, anziani e gruppi internazionali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/prenotazione" size="lg">
              Prenota il tuo Tour
            </Button>
            <Button
              href="/gite-in-barca"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Scopri i Tour
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-sm mx-auto sm:max-w-md">
            {[
              ["500+", "Ospiti felici"],
              ["6", "Tour disponibili"],
              ["100%", "Barca privata"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl sm:text-3xl font-bold text-gold">{num}</div>
                <div className="text-xs text-white/70 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Featured Tours */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="I nostri tour"
          title="Scegli la tua Avventura sul Lago"
          subtitle="Ogni tour è in barca privata, con skipper certificato. Scegli la durata e l'itinerario che preferisci."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/gite-in-barca" variant="secondary">
            Vedi tutti i tour →
          </Button>
        </div>
      </Section>

      {/* USPs */}
      <Section bg="white">
        <SectionHeader
          eyebrow="Perché sceglierci"
          title="Un'Esperienza su Misura per Te"
          subtitle="Non siamo un servizio di traghetti. Ogni tour è pensato per farti vivere il lago in modo autentico e personale."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp) => (
            <div key={usp.title} className="flex gap-4">
              <div className="text-3xl shrink-0">{usp.icon}</div>
              <div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">{usp.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experiences strip */}
      <Section bg="navy">
        <SectionHeader
          eyebrow="Non solo barca"
          title="Altre Esperienze da Non Perdere"
          subtitle="Completa la tua visita con i nostri tour in bici, cooking class e il comodo deposito bagagli."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/esperienze#${exp.category}`}
              className="group bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-6 text-white"
            >
              <div className="text-4xl mb-4">{exp.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-2">{exp.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{exp.shortDescription}</p>
              <div className="mt-4 text-gold text-sm font-semibold group-hover:underline">Scopri →</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Testimonial CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="font-serif text-2xl lg:text-3xl text-navy font-bold leading-snug mb-6 text-balance">
            &ldquo;Un&apos;esperienza meravigliosa! Lo skipper ci ha mostrato angoli del lago che non
            avremmo mai trovato da soli. Consigliato a tutti!&rdquo;
          </blockquote>
          <p className="text-slate text-sm mb-8">— Maria G., Milano · TripAdvisor</p>
          <Button href="/prenotazione" size="lg">
            Prenota la tua Esperienza
          </Button>
        </div>
      </section>
    </>
  );
}
