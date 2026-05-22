import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { WhyMakranaSection } from "@/components/sections/WhyMakranaSection";
import { CorporateGiftingCallout } from "@/components/sections/CorporateGiftingCallout";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";

export const metadata: Metadata = {
  title: "Sang-e-Taj | Makrana Marble Showpieces — Luxury Interior Objects for the Gulf",
  description:
    "Hand-carved from Makrana White — the stone that built the Taj Mahal. Permanent showpieces for palatial interiors, private residences, and prestige spaces across the Gulf. Each piece commands a room.",
  keywords: [
    "makrana marble showpiece", "makhrana marble", "makhrana marble showpiece",
    "makrana marble UAE", "makhrana marble Dubai", "makrana marble Gulf",
    "luxury marble showpiece UAE", "marble showpiece Dubai", "marble showpiece Gulf",
    "makrana white marble showpiece", "makhrana white marble", "marble interior object UAE",
    "luxury interior showpiece Dubai", "marble sculpture Gulf", "bespoke marble showpiece UAE",
    "رخام مكرانة", "رخام مكرانة دبي", "منحوتة رخام فاخرة الخليج",
    "makrana marble Taj Mahal", "Rajasthan marble showpiece", "luxury marble gift Gulf",
  ],
  openGraph: {
    title: "Sang-e-Taj | Makrana Marble Showpieces for the Gulf",
    description:
      "Hand-carved from Makrana White — the stone of the Taj Mahal. For palatial interiors across the Gulf.",
    type: "website",
    url: "https://sangetaj.com",
    images: [{ url: "https://sangetaj.com/images/ship/dhow/D-01.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://sangetaj.com" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStorySection />
      <FeaturedProductsSection />
      <WhyMakranaSection />
      <CorporateGiftingCallout />
      <ProcessSection />
      <TrustSection />
    </>
  );
}
