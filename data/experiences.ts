export interface Experience {
  id: string;
  slug: string;
  name: string;
  category: "cycling" | "cooking" | "luggage";
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
    image: "https://picsum.photos/seed/lakecomo-cycling/800/600",
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
    image: "https://picsum.photos/seed/lakecomo-cooking/800/600",
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
    image: "https://picsum.photos/seed/lakecomo-luggage/800/600",
    icon: "🧳",
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getExperiencesByCategory(category: Experience["category"]): Experience[] {
  return experiences.filter((e) => e.category === category);
}
