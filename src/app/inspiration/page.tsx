import type { Metadata } from "next";
import { InspirationGallerySection } from "@/components/sections/InspirationGallerySection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Inspiration",
  description:
    "Marble pieces in lived-in homes, hotels and restaurants.",
};

export default function InspirationPage() {
  return (
    <>
      <section className="bg-marble pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>Inspiration</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", lineHeight: 1.04 }}
          >
            Stone in
            <br />
            <span className="italic text-gold">real spaces.</span>
          </h1>
          <p className="mt-6 max-w-xl">
            A scrapbook of homes, projects and shoots where our pieces are part of daily life.
          </p>
        </div>
      </section>
      <InspirationGallerySection />
    </>
  );
}
