"use client";

import { RevealSection } from "@/components/ui/RevealSection";
import { RevealText } from "@/components/ui/RevealText";
import data from "@/data/whymakrana.json";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";

export function WhyMakranaSection() {
  const { lang } = useLanguage();
  const T = translations[lang].whyMakrana;

  return (
    <section
      className="py-14 md:py-20 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 75% 25%, rgba(138,136,134,0.07) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(138,136,134,0.04) 0%, transparent 45%), linear-gradient(160deg, #121212 0%, #141414 50%, #0C0C0B 100%)",
      }}
    >
      {/* Animated background map suggestion */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
        <svg viewBox="0 0 1440 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path d="M300 150 Q 500 120 700 170 Q 850 200 950 165 Q 1050 140 1150 175" stroke="#8A8886" strokeWidth="1" fill="none" />
          <path d="M250 280 Q 480 250 720 290 Q 900 320 1100 285 Q 1250 265 1440 295" stroke="#F4F4F3" strokeWidth="0.6" fill="none" />
          <circle cx="700" cy="195" r="5" fill="#8A8886" opacity="0.6" />
          <circle cx="700" cy="195" r="16" stroke="#8A8886" strokeWidth="0.8" fill="none" opacity="0.4" />
          <circle cx="700" cy="195" r="32" stroke="#8A8886" strokeWidth="0.4" fill="none" opacity="0.2" />
          <text x="722" y="190" fontSize="9" fill="#8A8886" opacity="0.5" fontFamily="serif" letterSpacing="2">Makrana Quarry</text>
          <line x1="700" y1="150" x2="700" y2="60" stroke="#8A8886" strokeWidth="0.5" strokeDasharray="3,4" opacity="0.3" />
        </svg>
      </div>

      {/* Top gold gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(138,136,134,0.3) 30%, rgba(138,136,134,0.15) 70%, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-7">
            <span
              className="block w-10 h-px"
              style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
            />
            <span className="label text-[9px] tracking-[0.25em]" style={{ color: "rgba(138,136,134,0.88)" }}>
              {T.eyebrow}
            </span>
          </div>
        </RevealSection>

        <RevealText
          as="h2"
          delay={0.1}
          className="font-heading font-bold mb-20"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: "var(--kohl)",
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
          } as React.CSSProperties}
        >
          {T.heading}
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 60%, var(--gold-muted, #5E5C5A) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
            }}
          >
            {T.headingItalic}
          </span>
        </RevealText>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {T.pillars.map((pillar, index) => (
            <RevealSection key={pillar.numeral} delay={0.15 + index * 0.12}>
              <div
                className="p-10 md:p-12 relative"
                style={{ borderLeft: index > 0 ? "1px solid rgba(138,136,134,0.1)" : "none" }}
              >
                {/* Numeral watermark */}
                <p
                  className="font-heading font-bold leading-none mb-8"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "5rem",
                    background: "linear-gradient(135deg, rgba(138,136,134,0.2), rgba(138,136,134,0.05))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {pillar.numeral}
                </p>

                {/* Gold rule */}
                <span
                  className="block w-10 h-px mb-6"
                  style={{ background: "linear-gradient(90deg, var(--gold), var(--gold-light))" }}
                />

                <p
                  className="font-heading font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "var(--kohl)",
                    fontSize: "1.35rem",
                  }}
                >
                  {pillar.heading}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(244,244,243,0.88)" }}>
                  {pillar.body}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Quote */}
        <RevealSection delay={0.5} className="mt-24 pt-16" style={{ borderTop: "1px solid rgba(138,136,134,0.1)" }}>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-2xl block mb-6" style={{ color: "rgba(138,136,134,0.4)" }}>◈</span>
            <blockquote
              className="font-heading font-bold italic"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                color: "rgba(244,244,243,0.75)",
                lineHeight: 1.6,
              }}
            >
              &ldquo;{T.quote}&rdquo;
            </blockquote>
          </div>
        </RevealSection>
      </div>

      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(138,136,134,0.2) 30%, rgba(138,136,134,0.1) 70%, transparent)" }}
      />
    </section>
  );
}
