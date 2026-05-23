import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Cinzel, Cairo } from "next/font/google";
import "./globals.css";
import { ClientCursor } from "@/components/ui/ClientCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LanguageProvider } from "@/lib/language-context";

const SITE_URL = "https://sangetaj.com";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Sang-e-Taj",
    default: "Sang-e-Taj | Makrana Marble Showpieces — Luxury Interior Objects for the Gulf",
  },
  description:
    "Hand-carved from Makrana White in Rajasthan. Permanent showpieces for palatial interiors, private residences, and prestige spaces across the Gulf. Each piece commands a room.",
  keywords: [
    "makrana marble showpiece", "makhrana marble", "makhrana marble showpiece", "makhrana marble UAE",
    "luxury marble showpiece UAE", "Makrana marble Dubai", "makhrana marble Dubai", "marble showpiece Abu Dhabi",
    "luxury interior object UAE", "bespoke marble sculpture Dubai", "marble sculpture Sharjah",
    "luxury showpiece Riyadh", "marble interior Saudi Arabia", "luxury gift Riyadh",
    "bespoke sculpture Jeddah", "luxury interior Saudi Arabia", "marble showpiece Dammam",
    "marble showpiece Doha", "luxury interior Qatar", "luxury gift Qatar",
    "luxury marble Kuwait", "marble showpiece Kuwait City", "luxury interior Kuwait",
    "luxury interior Bahrain", "marble showpiece Manama", "luxury gift Bahrain",
    "marble sculpture Muscat", "luxury interior Oman", "luxury gift Muscat",
    "luxury interior GCC", "marble showpiece Gulf", "bespoke marble Gulf",
    "Makrana marble", "royal gift GCC", "luxury home décor Gulf",
    "رخام مكرانة", "منحوتة رخام", "ديكور فاخر الإمارات", "قطعة فاخرة الخليج", "هدية ملكية",
    "handcarved marble showpiece Gulf", "handcarved marble art Gulf", "Makrana marble interior showpiece",
    "Makrana white marble sculpture", "marble sculpture Dubai", "luxury marble decor Gulf",
    "marble interior statement piece", "bespoke marble art", "Makrana marble bespoke art",
    "luxury marble gift UAE",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Sang-e-Taj | Objects That Command the Room",
    description:
      "Makrana marble showpieces. Hand-carved in Rajasthan. Made to define the finest interiors across the Gulf.",
    type: "website",
    url: SITE_URL,
    siteName: "Sang-e-Taj",
    locale: "en_AE",
    alternateLocale: ["ar_AE", "ar_SA", "ar_QA", "ar_KW", "ar_BH", "ar_OM"],
    images: [
      {
        url: `${SITE_URL}/images/makrana-marble-dhow-showpiece-sang-e-zafar.jpg`,
        width: 1200,
        height: 630,
        alt: "Sang-e-Taj — Hand-carved Makrana marble showpieces for luxury interiors across the Gulf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sang-e-Taj | Makrana Marble Showpieces for the Gulf",
    description:
      "Hand-carved Makrana marble showpieces for palatial interiors across the Gulf.",
    images: [`${SITE_URL}/images/makrana-marble-dhow-showpiece-sang-e-zafar.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-AE": SITE_URL,
      "ar-AE": SITE_URL,
    },
  },
  other: {
    "geo.region": "AE",
    "geo.placename": "United Arab Emirates",
    "DC.language": "en",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sang-e-Taj",
    alternateName: "سنگِ تاج",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      "Luxury Makrana marble showpieces hand-carved in Rajasthan. Permanent interior objects for palatial residences, executive offices, and prestige spaces across the Gulf.",
    foundingLocation: {
      "@type": "Place",
      name: "Makrana, Rajasthan, India",
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Bahrain" },
      { "@type": "Country", name: "Oman" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-70145-58962",
      contactType: "sales",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: [
      "https://www.instagram.com/sang_e_taj/",
      "https://www.facebook.com/sangetaj",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sang-e-Taj",
    url: SITE_URL,
    description: "Makrana marble showpieces for the finest interiors across the Gulf.",
    inLanguage: ["en", "ar"],
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/collections?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${cinzel.variable} ${cairo.variable}`}
      style={{ fontFamily: "var(--font-jost), sans-serif" }}
    >
      <head>
        {/* Preload hero image — tells browser to fetch before JS executes,
            directly fixing the 7.2s LCP caused by client-component hero */}
        <link
          rel="preload"
          as="image"
          href="/images/makrana-marble-dhow-showpiece-sang-e-zafar.jpg"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wv36in7f2f");`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "var(--ivory)", color: "var(--kohl)" }}
      >
        <LanguageProvider>
          <SmoothScrollProvider>
            <ClientCursor />
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
