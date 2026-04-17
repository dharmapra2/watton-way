import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/navbar.css";
import "../styles/scene.css";
import "../styles/sections.css";
import "../styles/footer.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://wattonway.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "WATTONWAY — Mobile EV Charging Powered by Farmers",
    template: "%s | WATTONWAY",
  },
  description:
    "WATTONWAY is India's decentralised clean energy network — procuring excess solar from farmers and delivering it through mobile EV charging vans. Seed-stage investment opportunity.",
  keywords: [
    "mobile EV charging India",
    "agrivoltaics startup",
    "clean energy investment",
    "rural EV infrastructure",
    "swappable battery van",
    "decentralised energy network",
    "India EV charging startup",
    "seed stage cleantech",
  ],
  authors: [{ name: "WATTONWAY", url: BASE_URL }],
  creator: "WATTONWAY",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "WATTONWAY",
    title: "WATTONWAY — Mobile EV Charging Powered by Farmers",
    description:
      "India's first farmer-powered mobile EV charging network. Seed / Pre-Series A round open. ₹133 Cr raise.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WATTONWAY — Decentralised Clean Energy Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WATTONWAY — Mobile EV Charging Powered by Farmers",
    description:
      "India's first farmer-powered mobile EV charging network. Seed round open.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
