"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";

export function HeroSection() {
  const { lang, isAr } = useLanguage();
  const T = translations[lang].hero;

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/ship/dhow/D-01.png"
          alt="Sang-e-Zafar — full-rigged dhow sculpture hand-carved in Makrana White Marble, Rajasthan"
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: "65% center",
            filter: "brightness(0.92) contrast(1.1)",
          }}
        />
      </div>

      {/* ── Overlay layers ── */}

      {/* Left vignette — text lives here */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(8,8,7,0.97) 0%, rgba(8,8,7,0.82) 30%, rgba(8,8,7,0.4) 55%, rgba(8,8,7,0.08) 80%, transparent 100%)",
        }}
      />

      {/* Bottom gradient — stats bar readability */}
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

      {/* Subtle gold ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(138,136,134,0.07) 0%, transparent 50%)",
        }}
      />

      {/* Animated horizontal rule — decorative */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-10 origin-left pointer-events-none"
        style={{
          top: "36%",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(138,136,134,0.18) 25%, rgba(138,136,134,0.06) 60%, transparent 100%)",
        }}
      />

      {/* ── Floating content ── */}
      <div className="relative z-20 flex flex-col w-full" style={{ minHeight: "100svh" }}>

        {/* Nav height spacer */}
        <div className="shrink-0" style={{ height: "62px" }} />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.82 }}
          className="flex items-center gap-3 shrink-0"
          style={{ padding: "2rem clamp(2rem, 6vw, 5rem) 0" }}
        >
          <span
            className="shrink-0 block h-px"
            style={{
              width: "26px",
              background: "linear-gradient(90deg, var(--gold), transparent)",
            }}
          />
          <span
            className="label text-[8.5px] tracking-[0.32em]"
            style={{ color: "rgba(138,136,134,0.8)" }}
          >
            {T.eyebrow}
          </span>
        </motion.div>

        {/* Centre — headline + description + CTAs */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{ padding: "0 clamp(2rem, 6vw, 5rem)" }}
        >
          {/* Headline line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: isAr ? "var(--font-cairo), sans-serif" : "var(--font-cormorant), serif",
                color: "rgba(244,244,243,0.92)",
                fontSize: isAr ? "clamp(2.4rem, 7vw, 8rem)" : "clamp(2.8rem, 9.5vw, 11rem)",
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: isAr ? "-0.01em" : "-0.02em",
                fontStyle: "normal",
              }}
            >
              {T.line1}
            </motion.h1>
          </div>

          {/* Headline line 2 — gold italic */}
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.14, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: isAr ? "var(--font-cairo), sans-serif" : "var(--font-cormorant), serif",
                fontSize: isAr ? "clamp(2.4rem, 7vw, 8rem)" : "clamp(2.8rem, 9.5vw, 11rem)",
                fontWeight: 700,
                lineHeight: 0.92,
                fontStyle: isAr ? "normal" : "italic",
                letterSpacing: "-0.01em",
                background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 50%, #6C6A68 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {T.line2}
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.52 }}
            style={{
              color: "rgba(244,244,243,0.72)",
              fontSize: "1rem",
              lineHeight: "1.95",
              maxWidth: "310px",
              marginBottom: "2.5rem",
            }}
          >
            {T.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.74 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/collections"
              className="label text-[10px] tracking-widest text-center transition-all duration-500"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
                border: "1px solid var(--gold)",
                padding: "14px 36px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(138,136,134,0.13)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }}
            >
              {T.cta1}
            </Link>

            <Link
              href="/bespoke"
              className="label text-[10px] tracking-widest text-center group flex items-center justify-center gap-3 transition-colors duration-300"
              style={{ color: "rgba(244,244,243,0.72)", padding: "14px 36px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(244,244,243,0.7)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(244,244,243,0.72)"; }}
            >
              {T.cta2}
              <span
                className="block h-px transition-all duration-400 group-hover:w-7 w-4"
                style={{ background: "rgba(244,244,243,0.28)" }}
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom — stats + scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.05 }}
          className="hidden md:flex items-center justify-between shrink-0"
          style={{
            borderTop: "1px solid rgba(138,136,134,0.1)",
            padding: "1.5rem clamp(2rem, 6vw, 5rem) 2rem",
          }}
        >
          {/* Stats */}
          <div className="flex items-center">
            {[
              T.stat1, T.stat2, T.stat3,
            ].map((stat, i) => (
              <div key={stat.value} className="flex items-stretch">
                {i > 0 && (
                  <div
                    className="mx-8 self-stretch"
                    style={{
                      width: "1px",
                      background:
                        "linear-gradient(to bottom, transparent, rgba(138,136,134,0.2), transparent)",
                    }}
                  />
                )}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "var(--gold)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="label text-[7.5px] tracking-widest mt-1.5"
                    style={{ color: "rgba(244,244,243,0.52)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "1px",
                height: "32px",
                background:
                  "linear-gradient(to bottom, rgba(138,136,134,0.55), transparent)",
              }}
            />
            <span
              className="label text-[7px] tracking-[0.38em]"
              style={{ color: "rgba(138,136,134,0.58)" }}
            >
              {T.scroll}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Caption — bottom right, floating */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.8 }}
        className="absolute bottom-10 right-10 z-20 label text-[8px] tracking-[0.28em] hidden lg:block"
        style={{ color: "rgba(138,136,134,0.68)" }}
      >
        {T.caption}
      </motion.p>
    </section>
  );
}
