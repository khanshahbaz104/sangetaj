"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { marbleProfile } from "@/lib/marbles";
import { MarbleChip } from "@/components/ui/MarbleChip";

type Props = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: Props) {
  const [hover, setHover] = useState(false);
  const primary = product.images[0];
  const secondary = product.images[1] ?? product.images[0];
  const profile = marbleProfile(product.marble);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={`/shop/${product.category}/${product.slug}`}
        className="block"
      >
        <div
          className="relative aspect-[4/3] overflow-hidden bg-marble-soft shadow-stone group-hover:shadow-stone-hover transition-shadow duration-500"
          style={{ borderRadius: "4px" }}
        >
          <Image
            src={primary}
            alt={`${product.name} hand-carved from ${product.marble} marble`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-all duration-700"
            style={{
              opacity: hover ? 0 : 1,
              transform: hover ? "scale(1.06)" : "scale(1)",
            }}
          />
          <Image
            src={secondary}
            alt={`${product.name} in ${product.marble} marble, alternate view`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-all duration-700"
            style={{
              opacity: hover ? 1 : 0,
              transform: hover ? "scale(1.04)" : "scale(1.1)",
            }}
          />

          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badges?.map((b) => (
              <span
                key={b}
                className="label-sm px-2.5 py-1 glass"
                style={{ borderRadius: "999px", color: "var(--ink)" }}
              >
                {b === "new" ? "New" : "Best Seller"}
              </span>
            ))}
          </div>

          {/* Marble swatch — anchors the actual material on the card */}
          <div
            className="absolute bottom-3 left-3 flex items-center gap-2 glass px-3 py-1.5"
            style={{ borderRadius: "999px" }}
          >
            <span
              aria-hidden
              style={{
                width: 12,
                height: 12,
                borderRadius: "999px",
                background: `radial-gradient(circle at 35% 30%, ${profile.swatch} 0%, ${profile.swatch} 55%, ${profile.vein} 100%)`,
                border: "1px solid rgba(168,166,164,0.4)",
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.2)",
              }}
            />
            <span
              className="label-sm"
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.22em",
                color: "var(--ink)",
                whiteSpace: "nowrap",
              }}
            >
              {product.marble}
            </span>
          </div>

          <button
            type="button"
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-3 right-3 w-9 h-9 glass flex items-center justify-center transition-transform duration-300 hover:scale-110"
            style={{ borderRadius: "999px" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <div
            className="absolute bottom-14 left-3 right-3 flex gap-2 transition-all duration-500"
            style={{
              opacity: hover ? 1 : 0,
              transform: hover ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="flex-1 label-sm py-3 glass text-ink hover:bg-ink hover:text-marble transition-colors duration-300"
              style={{ borderRadius: "999px" }}
            >
              Quick View
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="flex-1 label-sm py-3 bg-ink text-marble hover:bg-gold transition-colors duration-300"
              style={{ borderRadius: "999px" }}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-display italic text-ink" style={{ fontSize: "1.18rem", lineHeight: 1.2 }}>
              {product.name}
            </p>
            <div className="mt-2">
              <MarbleChip marble={product.marble} size="sm" />
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="font-display text-ink" style={{ fontSize: "1.05rem" }}>
              {formatPrice(product.price, product.currency)}
            </p>
            <div className="flex items-center gap-1 mt-1 justify-end" style={{ color: "var(--gold)" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.39 7.36H22l-6.18 4.49 2.36 7.27L12 16.62l-6.18 4.5 2.36-7.27L2 9.36h7.61z" />
              </svg>
              <span className="label-sm" style={{ color: "var(--ink-mute)" }}>
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
