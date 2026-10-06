import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getTourBySlug } from "@/data/tours";
import { BOAT_TYPE_OPTIONS, getBookingPrice, isBoatRental, isPayableTour } from "@/lib/pricing";

interface CheckoutPayload {
  service?: string;
  boatType?: string;
  rentalDuration?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  people?: string;
  notes?: string;
}

// Stripe metadata values are limited to 500 characters.
const meta = (value: string | undefined) => (value ?? "").slice(0, 500);

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "Payments are not configured" }, { status: 500 });
  }

  let body: CheckoutPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const service = body.service;
  const boatType = isPayableTour(service) ? body.boatType : undefined;
  const rentalDuration = isBoatRental(service) ? String(body.rentalDuration ?? "") : undefined;

  // Always recompute the amount server-side; never trust the client.
  const price = getBookingPrice({ service, boatType, rentalDuration });
  if (price === null || !body.email) {
    return NextResponse.json({ error: "This service cannot be paid online" }, { status: 400 });
  }

  const serviceName = isBoatRental(service)
    ? "Boat Rental – 40 CV"
    : (getTourBySlug(service as string)?.name ?? (service as string));
  const variant = isBoatRental(service)
    ? `${rentalDuration} ${rentalDuration === "1" ? "hour" : "hours"}`
    : (BOAT_TYPE_OPTIONS.find((o) => o.value === boatType)?.label ?? "");

  const headers = request.headers;
  const host = headers.get("x-forwarded-host") ?? headers.get("host");
  const proto = headers.get("x-forwarded-proto") ?? "https";
  const origin = headers.get("origin") ?? `${proto}://${host}`;

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: body.email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: price * 100,
            product_data: {
              name: `${serviceName} – ${variant}`,
              description: [body.date, body.time].filter(Boolean).join(" at ") || undefined,
            },
          },
        },
      ],
      metadata: {
        service: meta(service),
        serviceName: meta(serviceName),
        boatType: meta(boatType),
        rentalDuration: meta(rentalDuration),
        firstName: meta(body.firstName),
        lastName: meta(body.lastName),
        email: meta(body.email),
        phone: meta(body.phone),
        date: meta(body.date),
        time: meta(body.time),
        people: meta(body.people),
        notes: meta(body.notes),
        amountEur: String(price),
      },
      success_url: `${origin}/booking/success`,
      cancel_url: `${origin}/booking`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session creation failed:", err);
    return NextResponse.json({ error: "Could not create checkout session" }, { status: 500 });
  }
}
