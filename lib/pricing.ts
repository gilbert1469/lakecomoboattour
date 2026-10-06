import { getTourBySlug, type BoatPriceRow } from "@/data/tours";

export type BoatType = keyof BoatPriceRow;

export const BOAT_RENTAL_SLUG = "boat-rental";

/** Slugs of the fixed-schedule tours that can be paid online (price per boat, by boat type). */
export const PAYABLE_TOUR_SLUGS = [
  "lake-como-highlights",
  "como-and-surroundings",
  "heart-of-the-lake",
  "half-day-tour",
  "six-hours-of-wonder",
  "full-day-tour",
] as const;

export const BOAT_TYPE_OPTIONS: { value: BoatType; label: string }[] = [
  { value: "speedboat", label: "Motorboat" },
  { value: "luxuryBoat", label: "Luxury Boat" },
  { value: "venetianBoat", label: "Venetian" },
];

/** Boat rental price (EUR, per boat) by duration in hours. */
export const BOAT_RENTAL_PRICES: Record<number, number> = {
  1: 190,
  2: 300,
  3: 435,
  4: 520,
  5: 620,
  6: 675,
  7: 725,
  8: 830,
};

export function isPayableTour(service: string | undefined): boolean {
  return (PAYABLE_TOUR_SLUGS as readonly string[]).includes(service ?? "");
}

export function isBoatRental(service: string | undefined): boolean {
  return service === BOAT_RENTAL_SLUG;
}

function isBoatType(value: string | undefined): value is BoatType {
  return BOAT_TYPE_OPTIONS.some((o) => o.value === value);
}

/** Returns the booking price in EUR, or null if the service isn't payable online or inputs are missing. */
export function getBookingPrice({
  service,
  boatType,
  rentalDuration,
}: {
  service?: string;
  boatType?: string;
  rentalDuration?: string | number;
}): number | null {
  if (isPayableTour(service)) {
    if (!isBoatType(boatType)) return null;
    return getTourBySlug(service as string)?.pricing?.[boatType] ?? null;
  }

  if (isBoatRental(service)) {
    const hours = Number(rentalDuration);
    if (!Number.isInteger(hours)) return null;
    return BOAT_RENTAL_PRICES[hours] ?? null;
  }

  return null;
}
