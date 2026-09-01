import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#fef9f2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  authors: [{ name: SITE_METADATA.author }],
  keywords: [
    "Ahmed Gad",
    "Luxury Real Estate",
    "Investor Relations",
    "Real Estate Development",
    "Strategic Partnerships",
    "Market Expansion",
    "Saudi Arabia",
    "KSA Real Estate",
    "GCC Investments",
    "Senior Sales Director",
  ],
  metadataBase: new URL(SITE_METADATA.url),
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.url,
    siteName: "Ahmed Gad Portfolio",
    images: [
      {
        url: "/images/ahmed.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Gad - Senior Sales & Business Development Director",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: ["/images/ahmed.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="bg-background text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed font-sans">
        {children}
      </body>
    </html>
  );
}
