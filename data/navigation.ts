export interface NavChild {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Boat Tours", href: "/taxi-boat-lake-como" },
  {
    label: "Experiences",
    href: "/experiences",
    children: [
      { label: "All Experiences", href: "/experiences" },
      {
        label: "Water Sports",
        href: "/experiences/water-sports",
        children: [
          { label: "Kite Surf", href: "/experiences/water-sports/kite-surf" },
          { label: "Wing Foil", href: "/experiences/water-sports/wing-foil" },
          { label: "Wind", href: "/experiences/water-sports/wind" },
          { label: "Sailing", href: "/experiences/water-sports/sailing" },
        ],
      },
    ],
  },
  { label: "Luggage Storage", href: "/luggage-storage" },
  { label: "Book Now", href: "/booking" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  address: "Via Borgo Vico 62, Como",
  phone: "+39 334 381 7235",
  email: "info@lakecomotouristcenter.com",
  whatsapp: "+39 334 381 7235",
  googleMapsUrl:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent("Via Borgo Vico 62, Como, Italy") +
    "&z=16&output=embed",
  hours: "9:00 – 20:30",
};
