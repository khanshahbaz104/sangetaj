"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { marbleProfiles } from "@/lib/marbles";

const heroMarbles: (keyof typeof marbleProfiles)[] = [
  "Carrara White",
  "Calacatta Gold",
  "Statuario",
  "Makrana White",
  "Nero Marquina",
  "Verde Guatemala",
  "Travertine Beige",
  "Onyx Honey",
];

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/categories/furniture/dining-tables.webp"
          alt="Marble dining table set under warm light in a luxury dining room"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          className="object-cover"
          style={{
            objectPosition: "65% center",
            filter: "brightness(0.78) contrast(1.08)",
          }}
        />
      </div>

      {/* Left vignette — keeps headline readable while the image breathes on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(8,8,7,0.97) 0%, rgba(8,8,7,0.82) 30%, rgba(8,8,7,0.4) 55%, rgba(8,8,7,0.08) 80%, transparent 100%)",
        }}
      />

      {/* Bottom-to-top wash so stats bar reads cleanly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,8,7,0.96) 0%, rgba(8,8,7,0.5) 18%, transparent 42%)",
        }}
      />

      {/* Top fade — behind nav */}
      <div
        className="absolute inset-x-0 top-0 h-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,7,0.65) 0%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-10 origin-left pointer-events-none"
        style={{
          top: "42%",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(168, 166, 164, 0.22) 30%, rgba(168, 166, 164, 0.06) 70%, transparent 100%)",
        }}
      />

      <div
        className="relative z-20 flex flex-col w-full"
        style={{ minHeight: "100svh" }}
      >
        <div className="shrink-0" style={{ height: "72px" }} />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex items-center gap-3 shrink-0"
          style={{ padding: "2rem clamp(2rem, 6vw, 5rem) 0" }}
        >
          <span
            className="block h-px"
            style={{
              width: "30px",
              background: "linear-gradient(90deg, var(--gold), transparent)",
            }}
          />
          <span className="label-sm text-gold">
            The Marble Lifestyle Collection
          </span>
        </motion.div>

        <div
          className="flex-1 flex flex-col justify-center max-w-4xl"
          style={{ padding: "0 clamp(2rem, 6vw, 5rem)" }}
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display"
              style={{
                fontSize: "clamp(2.6rem, 8.5vw, 8rem)",
                fontWeight: 600,
                lineHeight: 0.96,
                letterSpacing: "-0.02em",
                color: "rgba(244,244,243,0.94)",
              }}
            >
              Handcrafted Marble Luxury
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic"
              style={{
                fontSize: "clamp(2.6rem, 8.5vw, 8rem)",
                fontWeight: 600,
                lineHeight: 0.96,
                letterSpacing: "-0.015em",
                background:
                  "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 50%, #6C6A68 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for modern living.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              maxWidth: "440px",
              marginBottom: "2.5rem",
              color: "rgba(244,244,243,0.72)",
            }}
          >
            Timeless marble decor, furniture, kitchen accessories and lifestyle pieces, carved by hand from the world&apos;s finest natural stones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mb-8"
          >
            <p
              className="label-sm mb-3"
              style={{ color: "rgba(168,166,164,0.7)", letterSpacing: "0.3em" }}
            >
              Eight natural marbles
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              {heroMarbles.map((name) => {
                const m = marbleProfiles[name];
                return (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2"
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: "999px",
                        background: `radial-gradient(circle at 35% 30%, ${m.swatch} 0%, ${m.swatch} 55%, ${m.vein} 100%)`,
                        border: "1px solid rgba(168,166,164,0.45)",
                        boxShadow: "inset 0 0 6px rgba(0,0,0,0.2)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-cinzel), serif",
                        fontSize: "0.56rem",
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        color: "rgba(244,244,243,0.78)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {name}
                    </span>
                  </span>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/shop"
              className="label-sm text-center transition-all duration-400"
              style={{
                color: "var(--gold)",
                border: "1px solid var(--gold)",
                padding: "16px 38px",
                borderRadius: "999px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(168,166,164,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }}
            >
              Shop Collection
            </Link>

            <Link
              href="/collections"
              className="label-sm text-center group flex items-center justify-center gap-3 transition-colors duration-300"
              style={{
                color: "rgba(244,244,243,0.72)",
                padding: "16px 30px",
              }}
            >
              Explore Categories
              <span
                className="block h-px transition-all duration-400 group-hover:w-7 w-4"
                style={{ background: "rgba(244,244,243,0.4)" }}
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="hidden md:flex items-center justify-between shrink-0"
          style={{
            borderTop: "1px solid rgba(168,166,164,0.12)",
            padding: "1.5rem clamp(2rem, 6vw, 5rem) 2rem",
          }}
        >
          <div className="flex items-center">
            {[
              { value: "120+", label: "Artisans" },
              { value: "8", label: "Marble Types" },
              { value: "40+", label: "Countries Shipped" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-stretch">
                {i > 0 && (
                  <div
                    className="mx-8 self-stretch"
                    style={{
                      width: "1px",
                      background:
                        "linear-gradient(to bottom, transparent, rgba(246,242,236,0.4), transparent)",
                    }}
                  />
                )}
                <div>
                  <p
                    className="font-display"
                    style={{
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "var(--gold)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="label-sm mt-1.5"
                    style={{ color: "rgba(244,244,243,0.52)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "1px",
                height: "32px",
                background:
                  "linear-gradient(to bottom, rgba(168,166,164,0.55), transparent)",
              }}
            />
            <span
              className="label-sm"
              style={{ color: "rgba(168,166,164,0.58)" }}
            >
              Scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
