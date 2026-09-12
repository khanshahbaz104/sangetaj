"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { collectionGroups } from "@/data/categories";

const featuredSlugs = [
  "home-decor",
  "bathroom",
  "kitchen-dining",
  "furniture",
  "decorative",
  "lighting",
  "hospitality",
  "architectural",
];

export function LuxuryCollectionsSection() {
  const featured = featuredSlugs
    .map((s) => collectionGroups.find((g) => g.slug === s))
    .filter((g): g is (typeof collectionGroups)[number] => Boolean(g));

  return (
    <section className="py-20 md:py-32 bg-marble">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 flex flex-col items-center">
          <SectionLabel align="center">The Collections</SectionLabel>
          <h2 className="font-display mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}>
            Fourteen families,
            <br />
            <span className="italic text-gold">one material.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[260px] md:auto-rows-[320px] gap-4 md:gap-6">
          {featured.map((c, i) => {
            const layouts = [
              "md:col-span-6", "md:col-span-3", "md:col-span-3",
              "md:col-span-4", "md:col-span-4", "md:col-span-4",
              "md:col-span-6", "md:col-span-6",
            ];
            const span = layouts[i] ?? "md:col-span-3";
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
                className={`${span} relative overflow-hidden group shadow-stone`}
                style={{ borderRadius: "6px" }}
              >
                <Link
                  href={`/collections/${c.slug}`}
                  className="block relative w-full h-full"
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(8,8,7,0) 35%, rgba(8,8,7,0.8) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <p
                      className="font-display italic"
                      style={{
                        fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)",
                        color: "var(--ink)",
                      }}
                    >
                      {c.name}
                    </p>
                    <p className="mt-2 max-w-md" style={{ color: "rgba(240,237,232,0.78)", fontSize: "0.95rem" }}>
                      {c.blurb}
                    </p>
                    <span
                      className="label-sm mt-4 inline-flex items-center gap-2"
                      style={{ color: "var(--gold-light)" }}
                    >
                      Discover
                      <span
                        className="block h-px transition-all duration-400 group-hover:w-6 w-3"
                        style={{ background: "var(--gold-light)" }}
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/collections"
            className="label-sm inline-block transition-colors duration-300 hover:bg-gold hover:text-marble"
            style={{
              color: "var(--gold)",
              border: "1px solid var(--gold)",
              padding: "14px 32px",
              borderRadius: "999px",
            }}
          >
            See all fourteen collections
          </Link>
        </div>
      </div>
    </section>
  );
}
