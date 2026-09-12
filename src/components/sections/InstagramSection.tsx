"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const posts = [
  { src: "/images/categories/home-decor/serving-trays.webp", alt: "Marble serving tray styled with brass and ceramics" },
  { src: "/images/categories/home-decor/vases.webp", alt: "Marble vases grouped on a console" },
  { src: "/images/categories/kitchen-dining/cheese-boards.webp", alt: "Marble cheese board on a kitchen counter" },
  { src: "/images/categories/decorative/candle-collections.webp", alt: "Marble candle holders on a styled surface" },
  { src: "/images/categories/home-decor/decorative-bowls.webp", alt: "Minimalist marble bowl on a textured cloth" },
  { src: "/images/categories/luxury-accessories/chess-sets.webp", alt: "Marble chess set laid out mid-game" },
];

export function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-marble">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <SectionLabel>Instagram</SectionLabel>
            <h2
              className="font-display mt-4"
              style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", lineHeight: 1.1 }}
            >
              Follow <span className="italic text-gold">@sang_e_taj</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/sang_e_taj/"
            target="_blank"
            rel="noopener noreferrer"
            className="label hover-rule w-fit"
            style={{ color: "var(--ink)" }}
          >
            View profile
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {posts.map((p, i) => (
            <motion.a
              key={p.src}
              href="https://www.instagram.com/sang_e_taj/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden group"
              style={{ borderRadius: "4px" }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 30vw, 15vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(26,24,21,0.45)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
