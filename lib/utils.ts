import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  }).format(price);
}

/** "1 hour" -> "1h", "1.5 hours" -> "1.5h", "4 hours recommended" -> "4h". Returns null when the tour has no fixed duration. */
export function getShortDuration(duration: string): string | null {
  const match = duration.match(/^(\d+(?:\.\d+)?)\s*hours?/i);
  return match ? `${match[1]}h` : null;
}
