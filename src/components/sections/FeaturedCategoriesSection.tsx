"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const featuredSlugs = [
  "serving-trays",
  "soap-dispensers",
  "coffee-tables",
  "candle-holders",
  "vases",
  "cheese-boards",
  "jewelry-boxes",
  "chess-sets",
];

export function FeaturedCategoriesSection() {
  const featured = featuredSlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is (typeof categories)[number] => Boolean(c));

  return (
    <section className="bg-marble py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Shop by Category</SectionLabel>
            <h2 className="font-display mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}>
              Curated collections,
              <br />
              <span className="italic text-gold">stone by stone.</span>
            </h2>
          </div>
          <Link href="/shop" className="label hover-rule w-fit" style={{ color: "var(--ink)" }}>
            View all categories
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
            >
              <Link
                href={`/shop/${category.slug}`}
                className="group block relative aspect-[4/3] overflow-hidden bg-marble-soft shadow-stone"
                style={{ borderRadius: "4px" }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(26,24,21,0) 50%, rgba(26,24,21,0.7) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p
                    className="font-display italic"
                    style={{
                      fontSize: "1.35rem",
                      lineHeight: 1.1,
                      color: "var(--ink)",
                    }}
                  >
                    {category.name}
                  </p>
                  <span
                    className="label-sm mt-2 inline-flex items-center gap-2"
                    style={{ color: "rgba(240,237,232,0.7)" }}
                  >
                    Explore
                    <span
                      className="block h-px transition-all duration-400 group-hover:w-6 w-3"
                      style={{ background: "var(--gold-light)" }}
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="gold-rule-full" />
        </Reveal>
      </div>
    </section>
  );
}
