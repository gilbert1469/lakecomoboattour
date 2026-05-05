import type { Metadata } from "next";
import Image from "next/image";
import { pageSEO, siteSEO } from "@/data/seo";
import { tours } from "@/data/tours";
import TourCard from "@/components/tours/TourCard";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const seo = pageSEO.tours;

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

export default function ToursPage() {
  const tourJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tour in Barca Lago di Como",
    description: seo.description,
    url: `${siteSEO.siteUrl}/gite-in-barca`,
    itemListElement: tours.map((tour, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        name: tour.name,
        description: tour.shortDescription,
        touristType: ["Family", "Leisure"],
        offers: {
          "@type": "Offer",
          price: tour.price,
          priceCurrency: "EUR",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />

      {/* Page hero */}
      <section className="relative h-72 lg:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tours/hero-tours.jpg"
            alt="Tour in barca sul Lago di Como"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Lago di Como · Barca Privata
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white">
            Tour in Barca
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            6 itinerari. Tutti privati. Tutti con skipper certificato.
          </p>
        </div>
      </section>

      {/* All Tours */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="I nostri itinerari"
          title="Trova il Tour Perfetto per Te"
          subtitle="Da 2 ore di giro classico fino all'intera giornata personalizzata. Ogni tour è privato: la barca è solo per voi."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </Section>

      {/* Info strip */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Come funziona</p>
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Semplice come Salire in Barca
            </h2>
            <ol className="space-y-5">
              {[
                ["1", "Scegli il tour", "Seleziona l'itinerario che preferisci e verifica la disponibilità online."],
                ["2", "Prenota", "Compila il modulo o chiamaci. Risposta di conferma entro poche ore."],
                ["3", "Sali a bordo", "Ci trovi al porto di Como. Lo skipper vi accoglie e parte l'avventura!"],
              ].map(([num, title, desc]) => (
                <li key={num} className="flex gap-4">
                  <div className="w-8 h-8 bg-gold text-white font-bold text-sm rounded-full flex items-center justify-center shrink-0">
                    {num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{title}</h3>
                    <p className="text-slate text-sm mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Button href="/prenotazione">Prenota ora</Button>
            </div>
          </div>
          <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/images/skipper-barca.jpg"
              alt="Skipper sul Lago di Como"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="Domande frequenti"
          title="Tutto quello che vuoi sapere"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "I prezzi sono per persona o per barca?",
              a: "I prezzi sono sempre per l'intera barca (non per persona). Potete essere 1 o 6 persone: il prezzo rimane lo stesso. Questo rende i nostri tour particolarmente convenienti per famiglie e gruppi.",
            },
            {
              q: "È adatto ai bambini?",
              a: "Assolutamente sì! Abbiamo tour specifici Family con barca spaziosa (fino a 8 posti), salvagenti per bambini, soste balneari sicure e uno skipper abituato a rendere l'esperienza divertente anche per i più piccoli.",
            },
            {
              q: "Cosa succede in caso di brutto tempo?",
              a: "La sicurezza è la nostra priorità. In caso di condizioni meteo avverse, offriamo sempre la possibilità di spostare il tour o il rimborso completo.",
            },
            {
              q: "Posso personalizzare l'itinerario?",
              a: "Certamente! Tutti i tour hanno un itinerario di base, ma lo skipper è flessibile. Per la massima libertà vi consigliamo il Tour Privato Giornata Intera: potete decidere voi dove andare.",
            },
            {
              q: "Dove si imbarca?",
              a: "L'imbarco avviene dal porto di Como o, su richiesta, da altri pontili del lago (Bellagio, Varenna, Tremezzo). Comunicheremo il punto esatto alla conferma della prenotazione.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy mb-2">{q}</h3>
              <p className="text-slate text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
