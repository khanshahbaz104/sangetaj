"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  const main = images[active];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[88px_1fr] gap-4 md:gap-6">
      <div className="hidden md:flex flex-col gap-3 order-2 md:order-1">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            className="relative aspect-square overflow-hidden transition-all duration-300"
            style={{
              borderRadius: "4px",
              border: i === active ? "1px solid var(--gold)" : "1px solid var(--line)",
              opacity: i === active ? 1 : 0.7,
            }}
          >
            <Image
              src={src}
              alt={`${alt} thumbnail ${i + 1}`}
              fill
              sizes="88px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <motion.div
        key={main}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[4/3] overflow-hidden shadow-stone order-1 md:order-2 bg-marble-soft"
        style={{ borderRadius: "6px" }}
      >
        <Image
          src={main}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
      </motion.div>

      <div className="md:hidden flex gap-2 overflow-x-auto order-3" style={{ scrollbarWidth: "none" }}>
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            className="relative w-20 h-20 shrink-0 overflow-hidden"
            style={{
              borderRadius: "4px",
              border: i === active ? "1px solid var(--gold)" : "1px solid var(--line)",
              opacity: i === active ? 1 : 0.7,
            }}
          >
            <Image src={src} alt={`${alt} thumbnail ${i + 1}`} fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
