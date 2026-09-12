"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductCard } from "@/components/ui/ProductCard";
import { newArrivals, products } from "@/data/products";

export function NewArrivalsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Pad list so the carousel always has at least 6 cards
  const arrivals = newArrivals();
  const items =
    arrivals.length >= 6
      ? arrivals
      : [...arrivals, ...products.filter((p) => !arrivals.includes(p))].slice(0, 6);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const width = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir === "right" ? width : -width, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-marble">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <SectionLabel>New Arrivals</SectionLabel>
            <h2 className="font-display mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}>
              Fresh from
              <br />
              <span className="italic text-gold">the atelier.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-vein hover:bg-ink hover:text-marble hover:border-ink transition-colors duration-300 flex items-center justify-center"
              style={{ borderRadius: "999px" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-vein hover:bg-ink hover:text-marble hover:border-ink transition-colors duration-300 flex items-center justify-center"
              style={{ borderRadius: "999px" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((p, i) => (
            <div
              key={p.slug}
              data-card
              className="snap-start shrink-0"
              style={{ width: "min(340px, 78vw)" }}
            >
              <ProductCard product={p} index={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
