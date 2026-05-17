import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { WhyMakranaSection } from "@/components/sections/WhyMakranaSection";
import { CorporateGiftingCallout } from "@/components/sections/CorporateGiftingCallout";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";

export const metadata: Metadata = {
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
