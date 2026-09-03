import { Experience } from "@/data/experiences";

export const ACTIVITY_SLUGS: Record<Experience["category"], string> = {
  kite: "kite-surf",
  wingfoil: "wing-foil",
  windsurf: "wind",
  sailing: "sailing",
  cycling: "",
  cooking: "",
  guided: "",
};

export const ACTIVITY_CATEGORIES: Record<string, Experience["category"]> = {
  "kite-surf": "kite",
  "wing-foil": "wingfoil",
  wind: "windsurf",
  sailing: "sailing",
};

export const ACTIVITY_SHORT_LABELS: Record<Experience["category"], string> = {
  kite: "Kite Surf",
  wingfoil: "Wing Foil",
  windsurf: "Wind Surf",
  sailing: "Sailing",
  cycling: "",
  cooking: "",
  guided: "",
};
