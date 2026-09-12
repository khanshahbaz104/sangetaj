import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedCategoriesSection } from "@/components/sections/FeaturedCategoriesSection";
import { MarblePaletteSection } from "@/components/sections/MarblePaletteSection";
import { BestSellersSection } from "@/components/sections/BestSellersSection";
import { NewArrivalsSection } from "@/components/sections/NewArrivalsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { LuxuryCollectionsSection } from "@/components/sections/LuxuryCollectionsSection";
import { InspirationGallerySection } from "@/components/sections/InspirationGallerySection";
import { CustomMarbleSection } from "@/components/sections/CustomMarbleSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InstagramSection } from "@/components/sections/InstagramSection";

export const metadata: Metadata = {
  title:
    "Sange Taj Marble | Handcrafted Marble Home Decor, Furniture and Lifestyle",
  description:
    "Discover timeless marble decor, furniture, kitchen accessories and lifestyle pieces crafted by hand from the world's finest natural stones.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategoriesSection />
      <MarblePaletteSection />
      <BestSellersSection />
      <NewArrivalsSection />
      <WhyChooseSection />
      <LuxuryCollectionsSection />
      <CustomMarbleSection />
      <InspirationGallerySection />
      <TestimonialsSection />
      <InstagramSection />
    </>
  );
}
