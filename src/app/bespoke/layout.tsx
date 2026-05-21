import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Commission — Commission a Marble Showpiece",
  description:
    "Commission a bespoke Makrana marble showpiece. Hand-carved to your vision in Rajasthan and delivered across the Gulf. For palatial residences, executive offices, and prestige spaces.",
  keywords: [
    "bespoke marble sculpture UAE", "custom marble showpiece Dubai", "commission marble sculpture Gulf",
    "bespoke luxury interior UAE", "custom marble artwork Riyadh", "bespoke sculpture Qatar",
    "custom marble Kuwait", "personalised marble showpiece GCC", "engraved marble sculpture Gulf",
    "marble commission Saudi Arabia", "تمثال رخام مخصص", "منحوتة رخام بالطلب",
    "handcarved marble sculpture India", "bespoke marble art India", "marble showpiece commission",
    "custom marble sculpture commission Gulf", "marble art commission", "Makrana marble bespoke art",
    "luxury marble sculpture commission", "bespoke marble art commission", "bespoke stone sculpture",
    "custom marble art commission", "handcarved marble",
  ],
  openGraph: {
    title: "Bespoke Marble Commission | Sang-e-Taj",
    description:
      "Commission a Makrana marble showpiece carved to your vision. For palatial interiors across the Gulf.",
    type: "website",
    url: "https://sangetaj.com/bespoke",
  },
  alternates: { canonical: "https://sangetaj.com/bespoke" },
};

export default function BespokeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
