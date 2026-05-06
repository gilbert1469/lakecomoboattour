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
    default: "Milan to Lake Como – Private Boat Tours on Lake Como, Italy",
    template: "%s | Milan to Lake Como",
  },
  description:
    "Private boat tours on Lake Como with a certified skipper. Family-friendly, elderly-friendly, multilingual crew. Book your cruise from Como, Bellagio or Varenna.",
  keywords: ["lake como boat tour", "private boat tour lake como", "lake como cruise", "lake como italy"],
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
