export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export const siteSEO = {
  siteName: "Lake Como Tourist Center",
  siteUrl: "https://milantolakecomo.com",
  defaultOgImage: "/images/og-default.jpg",
  locale: "en_US",
  twitterHandle: "@milantolakecomo",
};

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: "Lake Como Tourist Center | Milan to Lake Como",
    description:
      "Lake Como Tourist Center — 3 minutes walk from Como San Giovanni station. Private taxi boat tours, luggage storage. Book with us: if the weather changes, full refund guaranteed.",
    keywords: [
      "lake como boat tour",
      "private boat tour lake como",
      "lake como boat trip",
      "lake como tour italy",
      "bellagio boat tour",
      "como lake private boat",
      "taxi boat lake como",
      "lake como tourist center",
      "milan to como",
      "lake como from milan",
    ],
    ogImage: "/images/og-home.jpg",
  },
  taxiBoat: {
    title: "Taxi Boat Lake Como — Private Boat Experience | Lake Como Tourist Center",
    description:
      "Private taxi boat tours on Lake Como. Historic villas, Bellagio, Varenna. Book with us: full refund if weather changes. 3 minutes walk from Como San Giovanni station.",
    keywords: [
      "taxi boat lake como",
      "private boat tour lake como",
      "lake como boat experience",
      "boat tour como",
      "lake como boat rental",
    ],
    ogImage: "/images/og-tours.jpg",
  },
  experiences: {
    title: "Lake Como Experiences – Guided Tours, Cooking Class & Cycling | Lake Como Tourist Center | Milan to Lake Como",
    description:
      "More than boats: guided tours around the lake, authentic Italian cooking class, cycling tours and water sports in the heart of Como. Experiences for every taste.",
    keywords: [
      "lake como guided tour",
      "cooking class como italy",
      "lake como cycling tour",
      "lake como experiences",
      "things to do como italy",
      "cycling lake como",
    ],
    ogImage: "/images/og-experiences.jpg",
  },
  waterSports: {
    title: "Water Sports on Lake Como – Kite Surf, Wing Foil, Windsurf & Sailing | Lake Como Tourist Center",
    description:
      "All water sports on Lake Como in one place: kite surfing, wing foiling, windsurfing and sailing with certified local instructors and reliable thermal winds.",
    keywords: [
      "lake como water sports",
      "kite surfing lake como",
      "wing foil lake como",
      "windsurf lake como",
      "sailing lake como",
    ],
    ogImage: "/images/og-experiences.jpg",
  },
  booking: {
    title: "Book a Tour | Lake Como Tourist Center | Milan to Lake Como",
    description:
      "Book your private boat tour on Lake Como online. Check availability and choose your itinerary. Instant confirmation, free cancellation up to 48h before.",
    keywords: [
      "book lake como boat tour",
      "lake como boat reservation",
      "como italy boat booking",
      "private tour lake como book",
    ],
    ogImage: "/images/og-booking.jpg",
  },
  blog: {
    title: "Blog – Discover Lake Como | Lake Como Tourist Center | Milan to Lake Como",
    description:
      "Guides, tips and stories about Lake Como: what to see, where to eat, the most beautiful villages, historic villas and everything you need to know before you visit.",
    keywords: [
      "what to see lake como",
      "lake como travel guide",
      "lake como blog",
      "lake como villages",
      "lake como villas",
    ],
    ogImage: "/images/og-blog.jpg",
  },
  about: {
    title: "About Us – Our Agency in Como | Lake Como Tourist Center | Milan to Lake Como",
    description:
      "We are a private tour agency based in Como (Via Borgo Vico 62). Multilingual team, certified skippers and a passion for Lake Como.",
    keywords: [
      "lake como tour agency",
      "lake como boat tour about",
      "certified skipper lake como",
      "tour operator lake como",
    ],
    ogImage: "/images/og-about.jpg",
  },
  milanToComo: {
    title: "Milan to Como — Train, Times & Everything You Need to Know",
    description:
      "How to get from Milan to Como by train in 30 minutes. Is Como part of Milan? Which station to use? Everything you need to plan your Lake Como day trip from Milan.",
    keywords: [
      "milan to como",
      "milan como train",
      "milan to lake como",
      "como san giovanni station",
      "train milan como",
      "is como part of milan",
      "how to get to lake como from milan",
    ],
    ogImage: "/images/og-milan-to-como.jpg",
  },
  contact: {
    title: "Contact Us – Lake Como Tourist Center | Via Borgo Vico 62, Como",
    description:
      "Get in touch for information, custom quotes and bookings. We are in Como, Via Borgo Vico 62. We reply within 24 hours.",
    keywords: [
      "contact lake como boat tour",
      "lake como agency address",
      "como italy tour contact",
      "lake como tour operator contact",
    ],
    ogImage: "/images/og-contact.jpg",
  },
  faq: {
    title: "FAQ – Frequently Asked Questions | Lake Como Tourist Center",
    description:
      "Answers to the most common questions about our Lake Como boat tours: prices, children, bad weather policy, custom itineraries and boarding points.",
    keywords: [
      "lake como boat tour faq",
      "lake como tour questions",
      "boat tour como information",
      "lake como tourist center faq",
    ],
    ogImage: "/images/og-faq.jpg",
  },
  luggageStorage: {
    title: "Luggage Storage in Como | Lake Como Tourist Center",
    description:
      "Drop your bags and enjoy the lake. Luggage storage at Via Borgo Vico 62, Como — 3 minutes from Como San Giovanni station. Open all days, 9:00–20:30.",
    keywords: [
      "luggage storage como",
      "bag storage como train station",
      "left luggage como",
      "luggage storage lake como",
    ],
    ogImage: "/images/og-luggage-storage.jpg",
  },
};
