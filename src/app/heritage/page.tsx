"use client";

import { RevealSection } from "@/components/ui/RevealSection";
import { RevealText } from "@/components/ui/RevealText";
import { GoldRule } from "@/components/ui/GoldRule";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/heritage.json";

export default function HeritagePage() {
  const { hero, openingQuote, stats, timeline, quarrySection, materialFacts, artisanSection, legacyCta } = data;

  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>

      {/* ── Hero ── */}
      <div
        className="relative min-h-[80vh] flex items-end pb-24 pt-40 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--ivory-dark)" }}
      >
        {/* Atmospheric SVG lines */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M0 400 Q 360 340 720 420 T 1440 360" stroke="#A8A6A4" strokeWidth="1" fill="none" />
            <path d="M0 460 Q 400 380 800 470 T 1440 420" stroke="#A8A6A4" strokeWidth="0.5" fill="none" />
            <path d="M480 0 Q 510 400 490 800" stroke="#F4F4F3" strokeWidth="0.5" fill="none" />
            <circle cx="490" cy="400" r="5" fill="#A8A6A4" opacity="0.4" />
            <circle cx="490" cy="400" r="22" stroke="#A8A6A4" strokeWidth="0.5" fill="none" opacity="0.2" />
            <circle cx="490" cy="400" r="48" stroke="#A8A6A4" strokeWidth="0.25" fill="none" opacity="0.1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <RevealSection>
            <span className="label text-[9px] tracking-[0.28em] block mb-8" style={{ color: "var(--gold)" }}>
              {hero.eyebrow}
            </span>
          </RevealSection>
          <RevealText
            as="h1"
            delay={0.1}
            className="font-heading font-bold"
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.6rem, 11vw, 9rem)", lineHeight: 0.95, color: "var(--kohl)" } as React.CSSProperties}
          >
            {hero.heading}
          </RevealText>
          <RevealText
            as="h1"
            delay={0.2}
            className="font-heading font-bold italic"
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.6rem, 11vw, 9rem)", lineHeight: 0.95, color: "var(--gold)" } as React.CSSProperties}
          >
            {hero.headingItalic}
          </RevealText>
          <RevealSection delay={0.35}>
            <p className="mt-10 text-sm max-w-lg leading-loose" style={{ color: "rgba(244,244,243,0.65)" }}>
              {hero.subheading}
            </p>
          </RevealSection>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <section style={{ backgroundColor: "var(--ivory-dark)", borderTop: "1px solid rgba(120,118,116,0.15)", borderBottom: "1px solid rgba(120,118,116,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 0.07}>
                <div
                  className="py-6 px-4 md:py-10 md:px-8 text-center"
                  style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(120,118,116,0.12)" : "none" }}
                >
                  <p
                    className="font-heading font-bold mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--gold)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="label text-[8px] tracking-[0.2em] leading-relaxed" style={{ color: "rgba(244,244,243,0.48)" }}>
                    {stat.label}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opening Quote ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealSection>
            <GoldRule className="mx-auto mb-10" />
            <p
              className="font-heading font-bold italic leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.5rem, 3.2vw, 2.4rem)",
                color: "var(--kohl)",
              }}
            >
              &ldquo;{openingQuote}&rdquo;
            </p>
            <GoldRule className="mx-auto mt-10" />
          </RevealSection>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--ivory-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="flex items-center gap-4 mb-4">
              <span className="gold-rule" />
              <span className="label text-[9px] tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                {timeline.eyebrow}
              </span>
            </div>
            <h2
              className="font-heading text-5xl md:text-6xl font-bold mb-20"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {timeline.heading}{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>{timeline.headingItalic}</span>
            </h2>
          </RevealSection>

          <div className="relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-[1.4rem] md:left-[1.5rem] top-0 bottom-0 w-px"
              style={{ backgroundColor: "rgba(138,136,134,0.18)" }}
            />

            <div className="space-y-0">
              {timeline.entries.map((item, i) => (
                <RevealSection key={item.year} delay={i * 0.1}>
                  <div className="relative flex gap-6 md:gap-16 pb-14">
                    {/* Timeline dot */}
                    <div className="relative shrink-0 flex flex-col items-center" style={{ width: "3rem", paddingTop: "0.3rem" }}>
                      <div
                        className="w-3 h-3 rounded-full z-10 shrink-0"
                        style={{ backgroundColor: i === timeline.entries.length - 1 ? "var(--gold)" : "rgba(138,136,134,0.5)", border: "2px solid var(--ivory-dark)", marginLeft: "0.15rem" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-0">
                      <p
                        className="font-heading font-bold mb-3"
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "clamp(2rem, 4vw, 3rem)",
                          color: i === timeline.entries.length - 1 ? "var(--gold)" : "rgba(138,136,134,0.55)",
                          lineHeight: 1,
                        }}
                      >
                        {item.year}
                      </p>
                      <p
                        className="text-base leading-loose max-w-2xl"
                        style={{ color: "rgba(240,237,232,0.80)" }}
                      >
                        {item.event}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Quarry ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <RevealSection>
              <div className="flex items-center gap-4 mb-4">
                <span className="gold-rule" />
                <span className="label text-[9px] tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                  {quarrySection.eyebrow}
                </span>
              </div>
              <h2
                className="font-heading font-bold"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 0.95 }}
              >
                {quarrySection.heading}
                <br />
                <span className="italic" style={{ color: "var(--gold)" }}>{quarrySection.headingItalic}</span>
              </h2>
            </RevealSection>

            <RevealSection delay={0.15}>
              <div className="space-y-6 pt-3">
                {quarrySection.paragraphs.map((para, i) => (
                  <p key={i} className="text-base leading-loose" style={{ color: "rgba(240,237,232,0.80)" }}>
                    {para}
                  </p>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── Material Facts ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--ivory-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="flex items-center gap-4 mb-4">
              <span className="gold-rule" />
              <span className="label text-[9px] tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                {materialFacts.eyebrow}
              </span>
            </div>
            <h2
              className="font-heading text-5xl md:text-6xl font-bold mb-16"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {materialFacts.heading}{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>{materialFacts.headingItalic}</span>
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {materialFacts.facts.map((fact, i) => (
              <RevealSection key={fact.heading} delay={i * 0.1}>
                <div
                  className="p-6 md:p-12"
                  style={{
                    borderTop: "1px solid rgba(120,118,116,0.14)",
                    borderBottom: "1px solid rgba(120,118,116,0.14)",
                    borderRight: i % 2 === 0 ? "1px solid rgba(120,118,116,0.14)" : "none",
                  }}
                >
                  <span
                    className="font-heading font-bold block mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "3rem", color: "rgba(138,136,134,0.12)", lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block w-8 h-px mb-5" style={{ backgroundColor: "var(--gold)" }} />
                  <p
                    className="font-heading text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {fact.heading}
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.80)" }}>
                    {fact.body}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Artisan Section ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">

            {/* Image */}
            <RevealSection>
              <div
                className="relative overflow-hidden lg:sticky lg:top-28"
                style={{ aspectRatio: "3/4", backgroundColor: "rgba(20,18,16,0.6)" }}
              >
                <Image
                  src={artisanSection.image}
                  alt={artisanSection.imageCaption}
                  fill
                  className="object-contain object-center transition-transform duration-700 hover:scale-[1.03]"
                  style={{ padding: "1.5rem" }}
                />
                <div className="absolute bottom-5 left-5 z-10">
                  <p className="label text-[8px] tracking-[0.22em]" style={{ color: "rgba(138,136,134,0.70)" }}>
                    {artisanSection.imageCaption}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12" style={{ borderBottom: "1px solid rgba(120,118,116,0.4)", borderLeft: "1px solid rgba(120,118,116,0.4)" }} />
                <div className="absolute top-0 right-0 w-12 h-12" style={{ borderTop: "1px solid rgba(120,118,116,0.4)", borderRight: "1px solid rgba(120,118,116,0.4)" }} />
              </div>
            </RevealSection>

            {/* Text */}
            <RevealSection delay={0.15}>
              <div className="flex items-center gap-4 mb-4">
                <span className="gold-rule" />
                <span className="label text-[9px] tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                  {artisanSection.eyebrow}
                </span>
              </div>
              <h2
                className="font-heading font-bold mb-10"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1 }}
              >
                {artisanSection.heading}{" "}
                <span className="italic" style={{ color: "var(--gold)" }}>{artisanSection.headingItalic}</span>
              </h2>
              <div className="space-y-6 mb-12">
                {artisanSection.paragraphs.map((para, i) => (
                  <p key={i} className="text-base leading-loose" style={{ color: "rgba(244,244,243,0.78)" }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Provenance callout */}
              <div
                className="p-8 mb-10"
                style={{ backgroundColor: "rgba(138,136,134,0.06)", borderLeft: "2px solid var(--gold)" }}
              >
                <p
                  className="font-heading text-xl font-bold italic mb-2"
                  style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--gold)" }}
                >
                  Every piece carries a name.
                </p>
                <p className="text-sm leading-loose" style={{ color: "rgba(244,244,243,0.65)" }}>
                  Each Sang-e-Taj sculpture is accompanied by a hand-signed Certificate of Makrana Origin
                  documenting the lead artisan&apos;s name, generation, and work period. A record that will
                  outlast the room the piece stands in.
                </p>
              </div>

              <Link
                href={artisanSection.ctaHref}
                className="label text-[10px] tracking-widest px-10 py-4 inline-block transition-all duration-500"
                style={{ backgroundColor: "var(--gold)", color: "var(--kohl)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                {artisanSection.ctaLabel}
              </Link>
            </RevealSection>

          </div>
        </div>
      </section>

      {/* ── Legacy CTA ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--ivory-dark)" }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <RevealSection>
            <span className="label text-[9px] tracking-[0.28em] block mb-8" style={{ color: "var(--gold)" }}>
              {legacyCta.eyebrow}
            </span>
            <h2
              className="font-heading font-bold mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 1 }}
            >
              {legacyCta.heading}
              <br />
              <span className="italic" style={{ color: "var(--gold)" }}>{legacyCta.headingItalic}</span>
            </h2>
            <p
              className="text-base leading-loose max-w-2xl mx-auto mb-12"
              style={{ color: "rgba(244,244,243,0.65)" }}
            >
              {legacyCta.body}
            </p>
            <GoldRule className="mx-auto mb-12" />
            <Link
              href={legacyCta.ctaHref}
              className="label text-[10px] tracking-widest px-12 py-5 inline-block border transition-all duration-500"
              style={{ borderColor: "var(--gold)", color: "var(--kohl)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "var(--gold)";
                el.style.color = "var(--ivory)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.color = "var(--kohl)";
              }}
            >
              {legacyCta.ctaLabel}
            </Link>
          </RevealSection>
        </div>
      </section>

    </div>
  );
}
