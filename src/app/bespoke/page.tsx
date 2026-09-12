import type { Metadata } from "next";
import { CustomMarbleSection } from "@/components/sections/CustomMarbleSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Bespoke Marble",
  description:
    "Commission custom marble pieces, made to your brief by our atelier.",
};

export default function BespokePage() {
  return (
    <>
      <section className="bg-marble pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>Bespoke</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", lineHeight: 1.04 }}
          >
            Made for you.
            <br />
            <span className="italic text-gold">Stone by stone.</span>
          </h1>
          <p className="mt-6 max-w-xl">
            Our atelier works directly with private clients, interior designers, hotels and brands. From a single coffee table to a fifty-room hotel order, every commission goes through the same hands.
          </p>
        </div>
      </section>
      <CustomMarbleSection />
    </>
  );
}
