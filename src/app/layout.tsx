import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Cinzel } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const SITE_URL = "https://marble.sangetaj.com";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Sange Taj Marble",
    default: "Sange Taj Marble | Handcrafted Marble Home Decor, Furniture and Lifestyle",
  },
  description:
    "Discover timeless marble decor, furniture, kitchen accessories and lifestyle pieces crafted from the world's finest natural stones by skilled artisans.",
  keywords: [
    "luxury marble home decor",
    "marble home accessories",
    "marble bathroom accessories",
    "marble furniture",
    "marble coffee tables",
    "marble trays",
    "marble showpieces",
    "marble dining accessories",
    "handmade marble products",
    "premium marble decor",
    "natural marble home decor",
    "marble lifestyle",
    "marble vases",
    "marble candle holders",
    "marble soap dispensers",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Sange Taj Marble | Handcrafted Marble Luxury for Modern Living",
    description:
      "Curated marble decor, furniture, bathroom and kitchen pieces. Handcrafted from premium natural marble.",
    type: "website",
    url: SITE_URL,
    siteName: "Sange Taj Marble",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sange Taj Marble | Handcrafted Marble Lifestyle",
    description:
      "Handcrafted marble decor and furniture for modern living.",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sange Taj Marble",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    parentOrganization: {
      "@type": "Organization",
      name: "Sange Taj",
      url: "https://sangetaj.com",
    },
    description:
      "The lifestyle and home decor division of Sange Taj. Handcrafted marble products for modern luxury living.",
    sameAs: [
      "https://www.instagram.com/sang_e_taj/",
      "https://www.facebook.com/sangetaj",
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${cinzel.variable}`}
      style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-marble text-ink">
        <SmoothScrollProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
