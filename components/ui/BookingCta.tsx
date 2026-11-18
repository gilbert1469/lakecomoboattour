import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const SHOP_MAPS_URL =
  "https://maps.google.com/?q=Lake+Como+Tourist+Center,+Via+Borgo+Vico+62,+Como";

interface BookingCtaProps {
  href: string;
  label: string;
}

/** Bottom-of-page booking call to action shared by detail pages. */
export default function BookingCta({ href, label }: BookingCtaProps) {
  return (
    <Section bg="navy">
      <div className="max-w-2xl mx-auto text-center text-white">
        <Button href={href} size="lg">
          {label}
        </Button>
        <p className="mt-6 text-white/70">
          Prefer to come in person? You&apos;re welcome at our shop — central and an easy walk
          away at{" "}
          <a
            href={SHOP_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-light underline underline-offset-2 hover:text-white transition-colors"
          >
            Via Borgo Vico 62
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
