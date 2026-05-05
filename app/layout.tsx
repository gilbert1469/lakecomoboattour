import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteSEO } from "@/data/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSEO.siteUrl),
  title: {
    default: "Lake Como Boat Tour – Tour in Barca Privata sul Lago di Como",
    template: "%s | Lake Como Boat Tour",
  },
  description:
    "Tour in barca privata sul Lago di Como con skipper certificato. Family-friendly, adatto agli anziani, multilingue. Prenota il tuo giro da Como, Bellagio, Varenna.",
  keywords: ["tour barca lago di como", "giro in barca como", "boat tour lake como", "escursione lago como"],
  openGraph: {
    type: "website",
    locale: siteSEO.locale,
    url: siteSEO.siteUrl,
    siteName: siteSEO.siteName,
    images: [{ url: siteSEO.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteSEO.twitterHandle,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
