"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const images = [
  {
    src: "/images/categories/living/cover.webp",
    alt: "Living room styled with marble accent pieces and warm neutrals",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/categories/furniture/coffee-tables.webp",
    alt: "Marble coffee table in a lived-in sitting room",
    aspect: "aspect-square",
  },
  {
    src: "/images/categories/bathroom/cover.webp",
    alt: "Marble bathroom accessories arranged on a vanity",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/categories/kitchen-dining/cover.webp",
    alt: "Marble boards and serveware laid out on a kitchen island",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/categories/hospitality/cover.webp",
    alt: "Hotel reception counter finished in marble",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/categories/garden-outdoor/planters.webp",
    alt: "Marble planters holding greenery on an outdoor terrace",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/categories/home-decor/vases.webp",
    alt: "Marble vases grouped on a console table",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/categories/lighting/table-lamps.webp",
    alt: "Marble table lamp casting warm light across a side table",
    aspect: "aspect-square",
  },
];

export function InspirationGallerySection() {
  return (
    <section className="py-20 md:py-32 bg-marble-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Inspiration</SectionLabel>
            <h2 className="font-display mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}>
              Stone in
              <br />
              <span className="italic text-gold">lived-in spaces.</span>
            </h2>
          </div>
          <p className="max-w-md" style={{ fontSize: "0.98rem" }}>
            Homes, hotels, restaurants and villas where our pieces are part of daily life. Tag <span className="text-gold">@sang_e_taj</span> to share your own.
          </p>
        </div>

        <div className="columns-2 md:columns-4 gap-4 md:gap-5 [column-fill:_balance]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (i % 4) * 0.06 }}
              className={`relative ${img.aspect} mb-4 md:mb-5 overflow-hidden break-inside-avoid shadow-stone`}
              style={{ borderRadius: "4px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
