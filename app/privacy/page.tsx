import type { Metadata } from "next";
import { pageSEO, siteSEO } from "@/data/seo";
import Section from "@/components/ui/Section";
import { contact } from "@/data/navigation";

const seo = pageSEO.privacy;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.ogImage ?? siteSEO.defaultOgImage }],
  },
};

const emailLink = (
  <a href={`mailto:${contact.email}`} className="text-navy-light underline hover:text-navy">
    {contact.email}
  </a>
);

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-lg">Last updated: October 2026</p>
        </div>
      </div>

      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-10 text-slate leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mb-4 [&_p]:mb-3">
          <section>
            <h2>1. Data Controller</h2>
            <p>
              Lake Como Tourist Center is operated by <strong className="text-navy">LCTC.srl</strong>, Via Borgo Vico
              62, Como, Italy — VAT 04216820136.
            </p>
            <p>For any privacy request, contact {emailLink}.</p>
          </section>

          <section>
            <h2>2. What Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-navy">Data you provide through our forms:</strong> name, email, phone number,
                country, company/agency name, booking details (service, date, time, number of people) and any message
                or notes.
              </li>
              <li>
                <strong className="text-navy">Payment data:</strong> when you book and pay online, card details are
                collected and processed directly by our payment provider (Stripe) — we never see or store your full
                card number.
              </li>
              <li>
                <strong className="text-navy">Technical data:</strong> basic usage and device data collected
                automatically by our hosting and analytics providers.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Data and Legal Basis</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To handle your booking or enquiry and provide the requested services (performance of a contract).</li>
              <li>To reply to your messages and partner enquiries (legitimate interest).</li>
              <li>To process payments (performance of a contract).</li>
              <li>To comply with legal and accounting obligations (legal obligation).</li>
            </ul>
            <p className="mt-3">We do not sell your data.</p>
          </section>

          <section>
            <h2>4. Third Parties / Processors We Rely On</h2>
            <p>We share data only with providers that help us run the service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-navy">Stripe</strong> — payment processing</li>
              <li><strong className="text-navy">EmailJS</strong> — delivery of form submissions to our inbox</li>
              <li><strong className="text-navy">Vercel</strong> — website hosting</li>
              <li><strong className="text-navy">Contentful</strong> — blog content</li>
              <li><strong className="text-navy">Google Maps</strong> — map display</li>
            </ul>
            <p className="mt-3">Each processes data under its own privacy terms.</p>
          </section>

          <section>
            <h2>5. International Transfers</h2>
            <p>
              Some providers may process data outside the EU/EEA; where that happens, it is covered by appropriate
              safeguards such as the EU Standard Contractual Clauses.
            </p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>
              We keep your data only as long as needed for the purposes above and to meet legal/accounting
              obligations, after which it is deleted or anonymised.
            </p>
          </section>

          <section>
            <h2>7. Your Rights (GDPR)</h2>
            <p>
              You have the right to access, rectify, erase, restrict or object to the processing of your data, and to
              data portability. To exercise any right, email {emailLink}.
            </p>
            <p>
              You may also lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei
              dati personali).
            </p>
          </section>

          <section>
            <h2>8. Cookies</h2>
            <p>
              This site uses essential cookies to function and may use third-party cookies from the providers listed
              above.
            </p>
          </section>

          <section>
            <h2>9. Contact</h2>
            <p>For any question about this policy or your data, contact {emailLink}.</p>
          </section>
        </div>
      </Section>
    </>
  );
}
