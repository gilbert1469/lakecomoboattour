import { Experience } from "@/data/experiences";

export const ACTIVITY_SLUGS: Record<Experience["category"], string> = {
  kite: "kite-surf-kite-foil",
  wingfoil: "wing-foil",
  windsurf: "wind-surf-wind-foil",
  sailing: "sailing",
  cycling: "",
  cooking: "",
  guided: "",
  wine: "",
};

export const ACTIVITY_CATEGORIES: Record<string, Experience["category"]> = {
  "kite-surf-kite-foil": "kite",
  "wing-foil": "wingfoil",
  "wind-surf-wind-foil": "windsurf",
  sailing: "sailing",
};

export const ACTIVITY_SHORT_LABELS: Record<Experience["category"], string> = {
  kite: "Kite Surf / Kite Foil",
  wingfoil: "Wing Foil",
  windsurf: "Wind Surf / Wind Foil",
  sailing: "Sailing",
  cycling: "",
  cooking: "",
  guided: "",
  wine: "",
};
