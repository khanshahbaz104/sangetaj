import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate & Institutional — Showpieces for Prestige Spaces",
  description:
    "Permanent Makrana marble showpieces for corporate headquarters, boardrooms, palace reception halls, and prestige interiors across the Gulf. Custom engraving and volume orders available.",
  keywords: [
    "corporate marble showpiece UAE", "luxury corporate gift Dubai", "marble showpiece boardroom",
    "luxury office décor Saudi Arabia", "marble sculpture corporate Gulf", "palace interior showpiece",
    "executive office marble UAE", "luxury corporate gift Riyadh", "marble interior corporate Qatar",
    "institutional marble showpiece Kuwait", "corporate luxury gift GCC", "volume marble order Gulf",
    "هدية شركات فاخرة الإمارات", "ديكور مكتبي فاخر", "تمثال رخام للشركات",
  ],
  openGraph: {
    title: "Corporate Marble Showpieces | Sang-e-Taj",
    description:
      "Permanent Makrana marble showpieces for boardrooms, palace reception halls, and prestige corporate interiors across the Gulf.",
    type: "website",
    url: "https://sangetaj.com/corporate",
  },
  alternates: { canonical: "https://sangetaj.com/corporate" },
};

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
