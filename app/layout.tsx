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

const TITLE = "WATTONWAY — Mobile EV Charging & Clean Energy Investment India";
const DESCRIPTION =
  "WATTONWAY is India's decentralised mobile EV charging network powered by farmer solar. Invest in EV charging infrastructure, agrivoltaic energy stations, and rural EV charging plants. Seed-stage investment open — ₹1 to ₹3 Cr raise.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: "%s | WATTONWAY",
  },
  description: DESCRIPTION,
  keywords: [
    // EV charging — broad
    "EV charging India",
    "electric vehicle charging station",
    "EV charging station investment",
    "EV charging plant India",
    "mobile EV charging",
    "portable EV charger India",
    "on-demand EV charging",
    // EV investment
    "EV investment India",
    "electric vehicle startup investment",
    "cleantech investment India",
    "EV infrastructure investment",
    "seed stage EV startup",
    "pre-series A EV India",
    "invest in EV charging",
    // EV stations / plants
    "EV charging station rural India",
    "highway EV charging station",
    "EV charging plant",
    "battery swapping station India",
    "mobile charging van India",
    // Agrivoltaics / solar
    "agrivoltaics India",
    "farmer solar energy",
    "excess solar energy monetisation",
    "rural clean energy India",
    "decentralised energy network",
    // Brand
    "WATTONWAY",
    "wattonway EV",
    "wattonway charging",
  ],
  authors: [{ name: "WATTONWAY", url: BASE_URL }],
  creator: "WATTONWAY",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "WATTONWAY",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WATTONWAY — Mobile EV Charging Powered by Farmer Solar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "India's first farmer-powered mobile EV charging network. Invest in EV charging stations & clean energy infrastructure. Seed round open.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
  category: "technology",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "WATTONWAY",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` },
      description: DESCRIPTION,
      email: "contact@wattonway.in",
      foundingLocation: { "@type": "Country", name: "India" },
      sameAs: [BASE_URL],
      knowsAbout: [
        "EV Charging",
        "Mobile EV Charging Stations",
        "Agrivoltaics",
        "Battery Swapping",
        "Clean Energy Investment",
        "Rural EV Infrastructure",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "WATTONWAY",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".lead", ".section-title"] },
    },
    {
      "@type": "Product",
      name: "WATTONWAY Mobile EV Charging Service",
      description:
        "On-demand mobile EV charging delivered by solar-powered vans to highways, rural corridors, and peri-urban zones across India.",
      brand: { "@type": "Brand", name: "WATTONWAY" },
      category: "EV Charging Station",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        areaServed: { "@type": "Country", name: "India" },
        priceCurrency: "INR",
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
