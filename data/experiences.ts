export interface Experience {
  id: string;
  slug: string;
  name: string;
  category: "cycling" | "cooking" | "guided" | "kite" | "sailing" | "wingfoil" | "windsurf" | "wine";
  shortDescription: string;
  description: string;
  duration?: string;
  price: number;
  priceNote: string;
  highlights: string[];
  includes: string[];
  image: string;
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: "guided-tours",
    slug: "guided-tours-lake-como",
    name: "Guided Tours",
    category: "guided",
    shortDescription: "Our certified guides bring Lake Como to life — its history, its villas, its hidden stories.",
    description:
      "Our certified guides bring Lake Como to life — its history, its villas, its hidden stories. We offer guided tours in Como, Tremezzo, Menaggio, Bellagio, Varenna and all the villages around the lake, as well as museum and villa visits.",
    price: 0,
    priceNote: "Quotation on request",
    highlights: [
      "Como, Tremezzo, Menaggio, Bellagio, Varenna & more",
      "Museum and villa visits",
      "Groups of up to 25 people",
      "8 languages available",
    ],
    includes: ["Certified local guide", "Groups up to 25 people", "IT · EN · FR · DE · ES · PT · ZH · AR"],
    image: "/images/guided-tours.png",
    icon: "🗺️",
  },
  {
    id: "cooking-class",
    slug: "cooking-class-lake-como",
    name: "Cooking Class – Lake Como Cuisine",
    category: "cooking",
    shortDescription: "Learn to cook traditional dishes from the Lake Como region with a local chef in a professional kitchen.",
    description:
      "An authentic experience in the kitchen of the Larian tradition. A local chef will guide you through preparing classic dishes: perch risotto, missultin, polenta uncia and traditional desserts. At the end you'll cook and taste together everything you've prepared, paired with local wines.",
    duration: "3 hours",
    price: 85,
    priceNote: "per person (min. 2 people)",
    highlights: [
      "Professional local chef",
      "Traditional Larian dishes",
      "Local wine tasting",
      "Recipe booklet as a gift",
    ],
    includes: ["Ingredients", "Apron", "Meal of what you cook", "Digital recipe booklet"],
    image: "/images/experience-cooking.jpg",
    icon: "👨‍🍳",
  },
  {
    id: "wine-tasting",
    slug: "wine-tasting-lake-como",
    name: "Wine Tasting in Como",
    category: "wine",
    shortDescription:
      "A different way to discover the flavours of the lake — guided wine tasting sessions in Como and in some of the most scenic spots around the lake.",
    description:
      "A different way to discover the flavours of the lake. We offer guided wine tasting sessions in the heart of Como and in some of the most scenic spots around the lake — with views that make every sip better. Our expert sommeliers will guide you through a curated selection of local and Italian labels: whites, rosés and reds, chosen to suit every palate. Whether you're looking for a relaxed afternoon experience or a special moment to share, we'll find the right option for you.",
    price: 0,
    priceNote: "Quotation on request",
    highlights: [
      "Certified sommeliers",
      "Finest local labels",
      "Paired with typical regional products",
      "Available on board on request",
    ],
    includes: ["Guided tasting", "Certified sommelier", "Local product pairing"],
    image: "/images/wine.jpeg",
    icon: "🍷",
  },
  {
    id: "cycling-lago",
    slug: "cycling-tour-lake-como",
    name: "Lake Como Cycling Tour",
    category: "cycling",
    shortDescription: "Pedal along the lakeshore on routes for all levels, through nature and picturesque villages.",
    description:
      "Discover Lake Como on two wheels! Our cycling tours follow scenic routes along the lake shores, through medieval villages, historic villas and breathtaking views. We have bikes for adults, children and e-bikes for those who prefer a boost on the hills. Accompanied by an expert local guide.",
    duration: "3–4 hours",
    price: 45,
    priceNote: "per person",
    highlights: [
      "Routes for all fitness levels",
      "E-bikes available",
      "Expert local guide",
      "Scenic stops",
    ],
    includes: ["Bicycle (city bike or e-bike)", "Helmet", "Certified guide", "Water & snack"],
    image: "/images/experience-cycling.jpg",
    icon: "🚲",
  },
  {
    id: "kite-surfing",
    slug: "kite-surfing-lake-como",
    name: "Kite Surf / Kite Foil Lake Como",
    category: "kite",
    shortDescription: "Learn or improve your kite surfing or kite foiling on Lake Como with certified instructors. Lessons for all levels.",
    description:
      "Lake Como is one of the best spots in northern Italy for kite surfing and kite foiling, thanks to its reliable thermal winds. We connect you with certified local instructors for beginner lessons or advanced sessions, on kiteboard or hydrofoil. Equipment included.",
    duration: "2–3 hours",
    price: 0,
    priceNote: "contact us for pricing",
    highlights: [
      "Certified instructors",
      "All levels welcome",
      "Equipment included",
      "Best wind conditions on the lake",
    ],
    includes: ["Kite surf & kite foil equipment", "Wetsuit", "Certified instructor", "Safety briefing"],
    image: "/images/kite_surf.jpg",
    icon: "🪁",
  },
  {
    id: "sailing-lake-como",
    slug: "sailing-lake-como",
    name: "Sailing on Lake Como",
    category: "sailing",
    shortDescription: "Discover Lake Como under sail — a slower, more authentic way to experience the water.",
    description:
      "Experience the lake the traditional way, under sail. Whether you are a complete beginner or an experienced sailor, we connect you with certified skippers and well-maintained sailboats for half-day or full-day experiences on Lake Como.",
    duration: "3–6 hours",
    price: 0,
    priceNote: "contact us for pricing",
    highlights: [
      "Half-day or full-day options",
      "Beginner friendly",
      "Certified skipper",
      "Authentic lake experience",
    ],
    includes: ["Sailboat", "Certified skipper", "Safety equipment", "Water on board"],
    image: "/images/sailing.jpeg",
    icon: "⛵",
  },
  {
    id: "wing-foil",
    slug: "wing-foil-lake-como",
    name: "Wing Foil Lake Como",
    category: "wingfoil",
    shortDescription: "Try one of the most exciting new water sports on Lake Como — wing foiling with expert instructors.",
    description:
      "Wing foiling is one of the fastest growing water sports in the world and Lake Como offers perfect conditions. We connect you with expert local instructors for introductory sessions or progression clinics. No experience needed to start.",
    duration: "2–3 hours",
    price: 0,
    priceNote: "contact us for pricing",
    highlights: [
      "Fastest growing water sport",
      "Expert instructors",
      "Perfect lake conditions",
      "Beginner to advanced",
    ],
    includes: ["Wing foil equipment", "Wetsuit", "Instructor", "Safety briefing"],
    image: "/images/wing_foil.webp",
    icon: "🏄",
  },
  {
    id: "wind-surfing",
    slug: "wind-surfing-lake-como",
    name: "Wind Surf / Wind Foil Lake Como",
    category: "windsurf",
    shortDescription: "Classic wind surfing or wind foiling on Lake Como with reliable thermal winds and expert instructors.",
    description:
      "Lake Como has been a wind surfing and wind foiling destination for decades. Reliable thermal winds, clear water and stunning mountain scenery make it one of the best spots in northern Italy. We connect you with certified schools and instructors for lessons or free sessions, on board or hydrofoil.",
    duration: "2–4 hours",
    price: 0,
    priceNote: "contact us for pricing",
    highlights: [
      "Reliable thermal winds",
      "Certified schools",
      "All levels",
      "Equipment rental available",
    ],
    includes: ["Windsurf & wind foil equipment", "Wetsuit", "Certified instructor", "Equipment rental"],
    image: "/images/wind_surf.jpeg",
    icon: "🌊",
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getExperiencesByCategory(category: Experience["category"]): Experience[] {
  return experiences.filter((e) => e.category === category);
}

export function getWaterSportExperiences(): Experience[] {
  return experiences.filter((e) => ["kite", "sailing", "wingfoil", "windsurf"].includes(e.category));
}
