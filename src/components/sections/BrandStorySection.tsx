"use client";

import Link from "next/link";
import Image from "next/image";
import { RevealText } from "@/components/ui/RevealText";
import { RevealSection } from "@/components/ui/RevealSection";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";

export function BrandStorySection() {
  const { lang } = useLanguage();
  const T = translations[lang].brandStory;

  return (
    <section
      className="pt-14 md:pt-20 pb-14 md:pb-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--ivory)" }}
    >
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(138,136,134,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center">

          {/* Image — object-contain so full sculpture is always visible */}
          <RevealSection delay={0}>
            <div
              className="relative cursor-view overflow-hidden"
              style={{ aspectRatio: "16/11", backgroundColor: "var(--ivory-mid)" }}
            >
              <Image
                src="/images/makrana-marble-car-sculpture-handcarved-sang-e-taj.jpg"
                alt="Makrana marble automotive sculpture — artisan craftsmanship"
                fill
                className="object-contain object-center transition-transform duration-700 hover:scale-105"
                style={{ filter: "brightness(0.97) contrast(1.04)", padding: "0.75rem" }}
              />
              {/* Corner frame accents */}
              <div
                className="absolute bottom-0 left-0 w-14 h-14"
                style={{
                  borderBottom: "1px solid rgba(138,136,134,0.45)",
                  borderLeft: "1px solid rgba(138,136,134,0.45)",
                }}
              />
              <div
                className="absolute top-0 right-0 w-14 h-14"
                style={{
                  borderTop: "1px solid rgba(138,136,134,0.45)",
                  borderRight: "1px solid rgba(138,136,134,0.45)",
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-5 left-6 z-10">
                <p
                  className="label text-[8px] tracking-[0.25em]"
                  style={{ color: "rgba(138,136,134,0.75)" }}
                >
                  {T.caption}
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <RevealSection delay={0.1}>
              <div className="flex items-center gap-4 mb-8">
                <span className="gold-rule" />
                <span
                  className="label text-[9px] tracking-[0.25em]"
                  style={{ color: "var(--gold)" }}
                >
                  {T.eyebrow}
                </span>
              </div>
            </RevealSection>

            <div className="mt-2 mb-8">
              <RevealText
                as="h2"
                delay={0.2}
                className="font-heading font-bold leading-none"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(2.4rem, 3.5vw, 4rem)",
                } as React.CSSProperties}
              >
                {T.heading1}
              </RevealText>
              <RevealText
                as="h2"
                delay={0.3}
                className="font-heading font-bold leading-none italic"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(2.4rem, 3.5vw, 4rem)",
                  background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                } as React.CSSProperties}
              >
                {T.heading2}
              </RevealText>
            </div>

            <RevealSection delay={0.4}>
              <p
                className="text-base leading-loose mb-5"
                style={{ color: "rgba(240,237,232,0.78)" }}
              >
                {T.body1}
              </p>
              <p
                className="text-base leading-loose mb-12"
                style={{ color: "rgba(240,237,232,0.78)" }}
              >
                {T.body2}
              </p>
              <Link
                href="/heritage"
                className="label text-[10px] tracking-widest inline-flex items-center gap-4 group"
                style={{ color: "var(--kohl)" }}
              >
                {T.cta}
                <span
                  className="block h-px transition-all duration-500 group-hover:w-16 w-10"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gold), var(--gold-light))",
                  }}
                />
              </Link>
            </RevealSection>
          </div>

        </div>
      </div>
    </section>
  );
}
