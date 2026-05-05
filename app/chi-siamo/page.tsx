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

const teamMembers = [
  {
    name: "Marco Ferretti",
    role: "Fondatore & Head Skipper",
    bio: "Nato a Como, naviga sul lago da quando aveva 10 anni. Patente nautica professionale, guida turistica abilitata. Parla italiano, inglese e francese.",
    image: "/images/team/marco.jpg",
    flag: "🇮🇹 🇬🇧 🇫🇷",
  },
  {
    name: "Laura Bianchi",
    role: "Customer Experience & Booking",
    bio: "Responsabile delle prenotazioni e della cura degli ospiti. Si assicura che ogni esperienza sia perfetta dal primo contatto.",
    image: "/images/team/laura.jpg",
    flag: "🇮🇹 🇬🇧",
  },
  {
    name: "Stefan Müller",
    role: "Skipper & Guida",
    bio: "Skipper certificato con 15 anni di esperienza. Specializzato in tour per famiglie e gruppi internazionali. Parla tedesco, inglese e italiano.",
    image: "/images/team/stefan.jpg",
    flag: "🇩🇪 🇬🇧 🇮🇹",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Lake Como Boat Tour",
    description: seo.description,
    url: siteSEO.siteUrl,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Adamo del Pero 38",
      addressLocality: "Como",
      postalCode: "22100",
      addressCountry: "IT",
    },
    founder: { "@type": "Person", name: "Marco Ferretti" },
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
            src="/images/about-hero.jpg"
            alt="Il nostro team a Como"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">La nostra storia</p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white">Chi Siamo</h1>
        </div>
      </section>

      {/* Story */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">La nostra storia</p>
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Nati sul Lago, Cresciuti per il Lago
            </h2>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                Lake Como Boat Tour nasce dalla passione di Marco Ferretti, comasco doc, per il suo lago.
                Dopo anni come skipper privato, nel 2018 ha deciso di condividere questa passione con i
                visitatori di tutto il mondo, fondando l&apos;agenzia con l&apos;obiettivo di offrire
                un&apos;alternativa autentica ai traghetti di linea.
              </p>
              <p>
                Il segreto? La barca privata. Nessun orario fisso, nessun altro passeggero, nessuna fretta.
                Solo voi, il lago e uno skipper che lo conosce come casa sua, pronto a raccontarvi ogni
                storia nascosta dietro quelle ville e quei borghi.
              </p>
              <p>
                Oggi il nostro team conta 3 skipper certificati e uno staff dedicato all&apos;esperienza
                degli ospiti. Parliamo italiano, inglese, francese e tedesco. Abbiamo accolto famiglie da
                ogni parte del mondo, coppie in luna di miele, nonni con nipoti e gruppi di amici.
                Ognuno ha portato via con sé qualcosa di speciale.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/prenotazione">Prenota la tua Esperienza</Button>
            </div>
          </div>
          <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-lago.jpg"
              alt="Lago di Como dall'alto"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="I nostri valori"
          title="Cosa ci rende diversi"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🛡️", title: "Sicurezza prima di tutto", desc: "Tutti gli skipper sono patentati, le barche certificate e assicurate." },
            { icon: "❤️", title: "Cura degli ospiti", desc: "Ogni prenotazione è trattata come se fosse la nostra migliore ospite." },
            { icon: "🌱", title: "Rispetto del territorio", desc: "Navighiamo nel rispetto dell'ecosistema del lago e delle comunità locali." },
            { icon: "⭐", title: "Qualità senza compromessi", desc: "Dalla barca alla comunicazione, ogni dettaglio conta." },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-serif text-lg font-bold text-navy mb-2">{v.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section bg="white">
        <SectionHeader
          eyebrow="Il nostro team"
          title="Le Persone che Rendono Speciale il tuo Tour"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy">{member.name}</h3>
              <p className="text-gold text-sm font-semibold mt-1 mb-2">{member.role}</p>
              <p className="text-slate text-sm leading-relaxed mb-2">{member.bio}</p>
              <p className="text-lg">{member.flag}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section bg="navy">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Dove siamo</p>
          <h2 className="font-serif text-3xl font-bold text-white mb-6">
            Siamo nel Cuore di Como
          </h2>
          <div className="text-white/80 space-y-2 mb-8">
            <p className="text-xl font-semibold text-white">📍 {contact.address}</p>
            <p>A 5 minuti dal Duomo di Como e dal porto turistico</p>
            <p>Parcheggio convenzionato nelle vicinanze</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contatti">Vedi sulla Mappa</Button>
            <Button href={`tel:${contact.phone}`} variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              📞 {contact.phone}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
