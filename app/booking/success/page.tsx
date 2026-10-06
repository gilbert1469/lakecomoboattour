import type { Metadata } from "next";
import Stripe from "stripe";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { contact } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Booking Confirmation",
  robots: { index: false, follow: false },
  alternates: { canonical: "/booking/success" },
};

interface PaidBooking {
  serviceName?: string;
  amountEur?: number;
}

async function getPaidBooking(sessionId: string | undefined): Promise<PaidBooking | null> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!sessionId || !secretKey) return null;

  try {
    const session = await new Stripe(secretKey).checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") return null;
    return {
      serviceName: session.metadata?.serviceName || undefined,
      amountEur: session.amount_total !== null ? session.amount_total / 100 : undefined,
    };
  } catch (err) {
    console.error("Stripe session lookup failed:", err);
    return null;
  }
}

export default async function BookingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string | string[] }>;
}) {
  const { session_id } = await searchParams;
  const booking = await getPaidBooking(typeof session_id === "string" ? session_id : undefined);

  const phoneLink = (
    <a href={`tel:${contact.phone}`} className="text-navy-light font-semibold">
      {contact.phone}
    </a>
  );

  return (
    <Section bg="cream" className="min-h-[60vh] flex items-center">
      <div className="max-w-lg mx-auto text-center">
        {booking ? (
          <>
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="font-serif text-3xl font-bold text-navy mb-4">
              Payment received – your booking is confirmed!
            </h1>
            {(booking.serviceName || booking.amountEur !== undefined) && (
              <p className="text-navy font-semibold mb-4">
                {booking.serviceName}
                {booking.serviceName && booking.amountEur !== undefined && " – "}
                {booking.amountEur !== undefined && `€${booking.amountEur}`}
              </p>
            )}
            <p className="text-slate leading-relaxed mb-8">
              Thank you! Your payment was successful and your booking is confirmed.
              We&apos;ll email you shortly with all the details. For urgent enquiries, call us directly on{" "}
              {phoneLink}.
            </p>
          </>
        ) : (
          <>
            <h1 className="font-serif text-3xl font-bold text-navy mb-4">
              We couldn&apos;t confirm your payment
            </h1>
            <p className="text-slate leading-relaxed mb-8">
              If you were charged, please contact us on {phoneLink} and we&apos;ll sort it out right away.
            </p>
          </>
        )}
        <Button href="/">Back to Home</Button>
      </div>
    </Section>
  );
}
