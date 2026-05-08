export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export const siteSEO = {
  siteName: "Lake Como Tourist Center",
  siteUrl: "https://milantocomo.com",
  defaultOgImage: "/images/og-default.jpg",
  locale: "en_US",
  twitterHandle: "@milantolakecomo",
};

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: "Lake Como Tourist Center | Milan to Lake Como",
    description:
      "Lake Como Tourist Center — 3 minutes walk from Como San Giovanni station. Private taxi boat tours, Malpensa full day package, luggage storage. Book with us: if the weather changes, full refund guaranteed.",
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
    title: "Lake Como Experiences – Cycling, Cooking Class & Luggage Storage | Lake Como Tourist Center | Milan to Lake Como",
    description:
      "More than boats: cycling tours on Lake Como, authentic Italian cooking class, and secure luggage storage in the heart of Como. Experiences for every taste.",
    keywords: [
      "lake como cycling tour",
      "cooking class como italy",
      "luggage storage como",
      "lake como experiences",
      "things to do como italy",
      "cycling lake como",
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
      "We are a private tour agency based in Como (Via Adamo del Pero 38). Multilingual team, certified skippers and a passion for Lake Como.",
    keywords: [
      "lake como tour agency",
      "lake como boat tour about",
      "certified skipper lake como",
      "tour operator lake como",
    ],
    ogImage: "/images/og-about.jpg",
  },
  malpensa: {
    title: "Malpensa to Como — Full Day Lake Experience | Lake Como Tourist Center",
    description:
      "Land at Malpensa and experience Lake Como the same day. We pick you up, store your luggage, guided tour + private taxi boat. Full day package.",
    keywords: [
      "malpensa to como",
      "transfer malpensa como",
      "como from malpensa airport",
      "malpensa lake como day trip",
    ],
    ogImage: "/images/og-malpensa.jpg",
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
    title: "Contact Us – Lake Como Tourist Center | Via Adamo del Pero 38, Como",
    description:
      "Get in touch for information, custom quotes and bookings. We are in Como, Via Adamo del Pero 38. We reply within 24 hours.",
    keywords: [
      "contact lake como boat tour",
      "lake como agency address",
      "como italy tour contact",
      "lake como tour operator contact",
    ],
    ogImage: "/images/og-contact.jpg",
  },
};
