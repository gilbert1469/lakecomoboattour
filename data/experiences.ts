export interface Experience {
  id: string;
  slug: string;
  name: string;
  category: "cycling" | "cooking" | "luggage" | "transfer" | "kite" | "sailing" | "wingfoil" | "windsurf";
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
    id: "luggage-storage",
    slug: "luggage-storage-como",
    name: "Luggage Storage Como",
    category: "luggage",
    shortDescription: "Drop your bags with us and explore Como hands-free. Safe, flexible and affordable.",
    description:
      "Waiting for check-in or missed your connection? Leave your luggage safely at our agency in the centre of Como (Via Adamo del Pero 38) and enjoy the city or the lake without any worries. The service is available every day with flexible hours. Pick-up and delivery also available on request.",
    price: 6,
    priceNote: "per bag per day",
    highlights: [
      "Central location in Como",
      "Open every day",
      "24/7 CCTV surveillance",
      "Home delivery available",
    ],
    includes: ["Secure storage", "Deposit receipt", "Luggage insurance"],
    image: "/images/experience-luggage.jpg",
    icon: "🧳",
  },
  {
    id: "malpensa-full-day",
    slug: "malpensa-to-como-full-day",
    name: "Malpensa Full Day Package",
    category: "transfer",
    shortDescription: "We pick you up at Malpensa Arrivals and take you through a full day on Lake Como — guided tour, private taxi boat, luggage storage all included.",
    description:
      "Land at Malpensa and make the most of your day. We pick you up directly at the Arrivals exit, bring you to Como where you drop your bags at our office (Via Adamo del Pero 38, 3 minutes walk from Como San Giovanni station), take you on a guided walking tour of Como historic centre and a private taxi boat on the lake. At the end of the day we drop you at Como San Giovanni station (30 min train to Milano Centrale) or back to Malpensa if needed.",
    duration: "6-8 hours",
    price: 0,
    priceNote: "contact us for group pricing",
    highlights: [
      "Pickup at Malpensa Arrivals",
      "Luggage storage included",
      "Guided tour of Como historic centre",
      "Private taxi boat on the lake",
      "Drop-off at Como San Giovanni or Malpensa",
    ],
    includes: ["Private transfer from Malpensa", "Luggage storage", "Walking tour guide", "Private taxi boat", "Flexible return"],
    image: "/images/experience-malpensa.jpg",
    icon: "✈️",
  },
  {
    id: "kite-surfing",
    slug: "kite-surfing-lake-como",
    name: "Kite Surfing Lake Como",
    category: "kite",
    shortDescription: "Learn or improve your kite surfing on Lake Como with certified instructors. Lessons for all levels.",
    description:
      "Lake Como is one of the best spots in northern Italy for kite surfing, thanks to its reliable thermal winds. We connect you with certified local instructors for beginner lessons or advanced sessions. Equipment included.",
    duration: "2–3 hours",
    price: 0,
    priceNote: "contact us for pricing",
    highlights: [
      "Certified instructors",
      "All levels welcome",
      "Equipment included",
      "Best wind conditions on the lake",
    ],
    includes: ["Kite equipment", "Wetsuit", "Certified instructor", "Safety briefing"],
    image: "/images/experience-kite.jpg",
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
    image: "/images/experience-sailing.jpg",
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
    image: "/images/experience-wingfoil.jpg",
    icon: "🏄",
  },
  {
    id: "wind-surfing",
    slug: "wind-surfing-lake-como",
    name: "Wind Surfing Lake Como",
    category: "windsurf",
    shortDescription: "Classic wind surfing on Lake Como with reliable thermal winds and expert instructors.",
    description:
      "Lake Como has been a wind surfing destination for decades. Reliable thermal winds, clear water and stunning mountain scenery make it one of the best spots in northern Italy. We connect you with certified schools and instructors for lessons or free sessions.",
    duration: "2–4 hours",
    price: 0,
    priceNote: "contact us for pricing",
    highlights: [
      "Reliable thermal winds",
      "Certified schools",
      "All levels",
      "Equipment rental available",
    ],
    includes: ["Windsurf board & sail", "Wetsuit", "Certified instructor", "Equipment rental"],
    image: "/images/experience-windsurf.jpg",
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

export function getTransferExperiences(): Experience[] {
  return experiences.filter((e) => e.category === "transfer");
}
