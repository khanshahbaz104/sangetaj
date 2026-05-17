"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealSection } from "@/components/ui/RevealSection";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";
import { getFeaturedProducts, type Product } from "@/lib/products";

function ProductCard({
  product,
  index,
  displayName,
  displaySubtitle,
  viewLabel,
}: {
  product: Product;
  index: number;
  displayName: string;
  displaySubtitle: string;
  viewLabel: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Image */}
      <Link href={`/collections/${product.slug}`} className="block">
        <div
          className="cursor-view relative overflow-hidden mb-6"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src={product.image}
            alt={`${product.name} — ${product.subtitle} — hand-carved Makrana marble showpiece`}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ filter: "brightness(0.95) contrast(1.05)" }}
          />

          {/* Subtle bottom fade only for tag legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8,8,7,0.18) 0%, transparent 30%)",
            }}
          />

          {/* Tag */}
          <div className="absolute top-5 left-5 z-10">
            <span
              className="label text-[8px] tracking-widest px-3 py-1.5"
              style={{
                backgroundColor: "rgba(8,8,7,0.7)",
                color: "var(--gold)",
                backdropFilter: "blur(8px)",
              }}
            >
              {product.tag}
            </span>
          </div>

          {/* Hover CTA */}
          <div className="absolute inset-0 z-10 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span
              className="label text-[9px] tracking-widest px-5 py-2.5 border backdrop-blur-sm"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
                backgroundColor: "rgba(8,8,7,0.4)",
              }}
            >
              {viewLabel}
            </span>
          </div>

          {/* Corner accents */}
          <div
            className="absolute bottom-0 left-0 w-10 h-10 z-10"
            style={{
              borderBottom: "1px solid rgba(138,136,134,0.45)",
              borderLeft: "1px solid rgba(138,136,134,0.45)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-10 h-10 z-10"
            style={{
              borderTop: "1px solid rgba(138,136,134,0.45)",
              borderRight: "1px solid rgba(138,136,134,0.45)",
            }}
          />
        </div>

        {/* Info */}
        <p
          className="font-heading font-bold mb-1"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.85rem" }}
        >
          {displayName}
        </p>
        <p
          className="label text-[9px] tracking-widest mb-3"
          style={{ color: "var(--gold)" }}
        >
          {displaySubtitle}
        </p>
        <p
          className="text-base leading-relaxed"
          style={{ color: "rgba(240,237,232,0.78)", maxWidth: "340px" }}
        >
          {product.narrative.slice(0, 110).trimEnd()}…
        </p>
      </Link>
    </motion.div>
  );
}

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts();
  const { lang } = useLanguage();
  const T  = translations[lang].featured;
  const TP = translations[lang].products;

  return (
    <section
      className="py-14 md:py-20"
      style={{ backgroundColor: "var(--ivory-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="gold-rule" />
                <span className="label text-[9px] tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                  {T.eyebrow}
                </span>
              </div>
              <h2 className="font-heading font-bold" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.4rem, 5.5vw, 6rem)" }}>
                {T.heading}
                <span className="italic" style={{ background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {" "}{T.headingItalic}
                </span>
              </h2>
            </div>
            <Link href="/collections" className="label text-[10px] tracking-widest inline-flex items-center gap-3 group self-start md:self-auto" style={{ color: "var(--kohl)" }}>
              {T.exploreAll}
              <span
                className="block h-px transition-all duration-500 group-hover:w-14 w-8"
                style={{
                  background:
                    "linear-gradient(90deg, var(--gold), var(--gold-light))",
                }}
              />
            </Link>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {featured.map((product, index) => {
            const t = TP[product.slug as keyof typeof TP];
            return (
              <ProductCard
                key={product.slug}
                product={product}
                index={index}
                displayName={t?.name ?? product.name}
                displaySubtitle={t?.subtitle ?? product.subtitle}
                viewLabel={T.viewPiece}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
