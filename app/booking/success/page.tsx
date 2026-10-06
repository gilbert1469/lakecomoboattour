import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { contact } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  robots: { index: false, follow: false },
  alternates: { canonical: "/booking/success" },
};

export default function BookingSuccessPage() {
  return (
    <Section bg="cream" className="min-h-[60vh] flex items-center">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="font-serif text-3xl font-bold text-navy mb-4">
          Payment received – your booking is confirmed!
        </h1>
        <p className="text-slate leading-relaxed mb-8">
          Thank you! Your payment was successful and your booking is confirmed.
          We&apos;ll email you shortly with all the details. For urgent enquiries, call us directly on{" "}
          <a href={`tel:${contact.phone}`} className="text-navy-light font-semibold">
            {contact.phone}
          </a>
          .
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </Section>
  );
}
