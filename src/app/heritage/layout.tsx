import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Craft & Heritage — Makrana Marble, the Stone of the Taj Mahal",
  description:
    "Makrana marble built the Taj Mahal. The same quarries, the same artisan families, the same crystalline white — now shaping permanent interior showpieces for the finest spaces across the Gulf.",
  keywords: [
    "makrana marble", "makhrana marble", "what is makrana marble", "makhrana marble history",
    "Makrana marble heritage", "Taj Mahal marble", "Makrana marble history", "Rajasthan marble craft",
    "Makrana white marble UAE", "makhrana white marble", "marble heritage Gulf", "luxury marble craftsmanship",
    "Makrana marble Saudi Arabia", "makhrana marble Dubai", "marble artisan Rajasthan", "Makrana marble Qatar",
    "تراث رخام مكرانة", "تاج محل رخام", "حرفيون رخام راجستان",
  ],
  openGraph: {
    title: "Makrana Marble Heritage | Sang-e-Taj",
    description:
      "The same stone that built the Taj Mahal. Four centuries of Rajasthani craftsmanship, now for the Gulf.",
    type: "website",
    url: "https://sangetaj.com/heritage",
  },
  alternates: { canonical: "https://sangetaj.com/heritage" },
};

export default function HeritageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
