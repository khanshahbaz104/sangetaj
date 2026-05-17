"use client";

import { RevealSection } from "@/components/ui/RevealSection";

const trustBlocks = [
  {
    icon: "◈",
    heading: "Certificate of Makrana Origin",
    body: "Every Sang-e-Taj piece arrives with a hand-signed certificate of Makrana origin and artisan attribution. The quarry, the grade, the craftsman — all documented.",
  },
  {
    icon: "◇",
    heading: "Placed in the Finest Interiors",
    body: "Our sculptures occupy entrance halls, private studies, executive offices, and palatial residences across the Gulf. Where they are placed, and by whom, is never disclosed.",
  },
  {
    icon: "◈",
    heading: "Craftsmanship Guarantee",
    body: "Should any sculpture fail to meet the standard described at time of commission, we remake it. No conditions. Our name is on every piece.",
  },
];

const regions = ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"];

export function TrustSection() {
  return (
    <section
      className="py-14 md:py-18 relative overflow-hidden"
      style={{ backgroundColor: "var(--ivory)" }}
    >
      {/* Subtle bottom-left warmth */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(138,136,134,0.05) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-center gap-4 mb-6">
            <span className="gold-rule" />
            <span className="label text-[9px] tracking-[0.25em]" style={{ color: "var(--gold)" }}>
              Trust & Provenance
            </span>
          </div>
          <h2
            className="font-heading font-bold mb-16"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
            }}
          >
            Absolute{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Confidence
            </span>
          </h2>
        </RevealSection>

        {/* Trust blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12 md:mb-20">
          {trustBlocks.map((block, index) => (
            <RevealSection key={block.heading} delay={index * 0.12}>
              <div
                className="p-6 md:p-10"
                style={{
                  borderTop: "1px solid rgba(138,136,134,0.2)",
                  borderBottom: "1px solid rgba(138,136,134,0.1)",
                  borderRight: index < 2 ? "1px solid rgba(138,136,134,0.1)" : "none",
                }}
              >
                <span className="text-xl block mb-6" style={{ color: "var(--gold)" }}>{block.icon}</span>
                <p
                  className="font-heading font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.3rem",
                  }}
                >
                  {block.heading}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.88)" }}>
                  {block.body}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Presence across regions */}
        <RevealSection delay={0.4}>
          <div
            className="relative px-6 py-10 md:px-12 md:py-14 text-center overflow-hidden"
            style={{ backgroundColor: "var(--ivory-dark)" }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10" style={{ borderTop: "1px solid rgba(138,136,134,0.35)", borderLeft: "1px solid rgba(138,136,134,0.35)" }} />
            <div className="absolute bottom-0 right-0 w-10 h-10" style={{ borderBottom: "1px solid rgba(138,136,134,0.35)", borderRight: "1px solid rgba(138,136,134,0.35)" }} />

            <p className="label text-[9px] tracking-[0.25em] mb-10" style={{ color: "var(--gold)" }}>
              Present Across the Gulf
            </p>
            <div className="flex flex-wrap justify-center gap-5 md:gap-14 mb-8 md:mb-10">
              {regions.map((region) => (
                <p
                  key={region}
                  className="font-heading font-bold"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.35rem",
                    color: "rgba(240,237,232,0.65)",
                  }}
                >
                  {region}
                </p>
              ))}
            </div>
            <div className="w-20 h-px mx-auto mb-6" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
            <p className="text-sm max-w-md mx-auto" style={{ color: "rgba(240,237,232,0.70)" }}>
              Every piece placed with absolute discretion. All client
              relationships and commissions remain strictly confidential.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
