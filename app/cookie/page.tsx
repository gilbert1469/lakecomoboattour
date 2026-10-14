import type { Metadata } from "next";
import Link from "next/link";
import { pageSEO, siteSEO } from "@/data/seo";
import Section from "@/components/ui/Section";
import { contact } from "@/data/navigation";

const seo = pageSEO.cookie;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/cookie" },
  robots: { index: true, follow: true },
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.ogImage ?? siteSEO.defaultOgImage }],
  },
};

export default function CookiePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-white/70 text-lg">Last updated: October 2026</p>
        </div>
      </div>

      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-10 text-slate leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mb-4 [&_p]:mb-3">
          <section>
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the site function
              and can provide information to the site owner or third parties.
            </p>
          </section>

          <section>
            <h2>2. How We Use Cookies</h2>
            <p>
              This website uses only the cookies needed to work properly and to deliver the services you request. We do
              not use cookies to build advertising profiles.
            </p>
          </section>

          <section>
            <h2>3. Types of Cookies on This Site</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-navy">Essential cookies:</strong> required for the website and its hosting to
                function (set by our hosting provider, Vercel).
              </li>
              <li>
                <strong className="text-navy">Third-party cookies:</strong> when you use certain features, third-party
                services may set their own cookies under their own policies — notably Stripe (when you make a payment)
                and Google Maps (when a map is displayed on the page).
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Managing Cookies</h2>
            <p>
              You can control or delete cookies through your browser settings at any time. Blocking essential cookies
              may affect how the site works.
            </p>
          </section>

          <section>
            <h2>5. More Information</h2>
            <p>
              For how we handle your personal data, see our{" "}
              <Link href="/privacy" className="text-navy-light underline hover:text-navy">
                Privacy Policy
              </Link>
              . For questions, contact{" "}
              <a href={`mailto:${contact.email}`} className="text-navy-light underline hover:text-navy">
                {contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
