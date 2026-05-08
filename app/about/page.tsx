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
    role: "Founder & Head Skipper",
    bio: "Born in Como, he has been sailing the lake since he was 10. Professional sailing licence, certified tourist guide. Speaks Italian, English and French.",
    image: "https://picsum.photos/seed/team-marco/400/400",
    flag: "🇮🇹 🇬🇧 🇫🇷",
  },
  {
    name: "Laura Bianchi",
    role: "Customer Experience & Booking",
    bio: "Responsible for bookings and guest care. She makes sure every experience is perfect from the very first contact.",
    image: "https://picsum.photos/seed/team-laura/400/400",
    flag: "🇮🇹 🇬🇧",
  },
  {
    name: "Stefan Müller",
    role: "Skipper & Guide",
    bio: "Certified skipper with 15 years of experience on Lake Como. Specialised in tours for families and international groups. Speaks German, English and Italian.",
    image: "https://picsum.photos/seed/team-stefan/400/400",
    flag: "🇩🇪 🇬🇧 🇮🇹",
  },
];

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
      streetAddress: "Via Borgo Vico 42",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-navy-light text-sm font-semibold uppercase tracking-widest mb-3">Our story</p>
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Born on the Lake, Grown for the Lake
            </h2>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                Lake Como Tourist Center was born from the passion of Marco Ferretti, a Como native, for his lake.
                After years working as a private skipper, in 2018 he decided to share that passion with visitors
                from all over the world, founding the agency as a one-stop hub for authentic Lake Como experiences.
              </p>
              <p>
                The secret? The private boat. No fixed timetable, no other passengers, no rush.
                Just you, the lake and a skipper who knows it like the back of his hand, ready to share
                every hidden story behind those villas and villages.
              </p>
              <p>
                Today our team includes 3 certified skippers and a dedicated guest experience staff.
                We speak Italian, English, French and German. We have welcomed families from around the
                world, honeymooning couples, grandparents with grandchildren and groups of friends.
                Everyone has left with something special.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/booking">Book Your Experience</Button>
            </div>
          </div>
          <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-lake.jpg"
              alt="Aerial view of Lake Como"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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

      {/* Team */}
      <Section bg="white">
        <SectionHeader
          eyebrow="The team"
          title="The People Who Make Your Tour Special"
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
              <p className="text-navy-light text-sm font-semibold mt-1 mb-2">{member.role}</p>
              <p className="text-slate text-sm leading-relaxed mb-2">{member.bio}</p>
              <p className="text-lg">{member.flag}</p>
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
            <p>5 minutes from Como Cathedral and the marina</p>
            <p>Nearby car parks available</p>
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
