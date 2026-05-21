"use client";

import Link from "next/link";
import { RevealSection } from "@/components/ui/RevealSection";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";

export function CorporateGiftingCallout() {
  const { lang } = useLanguage();
  const T = translations[lang].corporateCallout;

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "var(--ivory)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div
            className="relative px-6 py-10 md:px-16 md:py-20 overflow-hidden"
            style={{ backgroundColor: "var(--ivory-dark)" }}
          >
            {/* Corner accents */}
            <div
              className="absolute top-0 left-0 w-14 h-14"
              style={{
                borderTop: "1px solid var(--gold)",
                borderLeft: "1px solid var(--gold)",
                opacity: 0.5,
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-14 h-14"
              style={{
                borderBottom: "1px solid var(--gold)",
                borderRight: "1px solid var(--gold)",
                opacity: 0.5,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div>
                <span
                  className="label text-[9px] tracking-[0.25em] block mb-6"
                  style={{ color: "var(--gold)" }}
                >
                  {T.eyebrow}
                </span>
                <h2
                  className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {T.heading}
                  <br />
                  <span className="italic" style={{ color: "var(--gold)" }}>
                    {T.headingItalic}
                  </span>
                </h2>
              </div>

              <div>
                <p
                  className="text-base leading-loose mb-8"
                  style={{ color: "rgba(240,237,232,0.82)" }}
                >
                  {T.body}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/corporate"
                    className="label text-[10px] tracking-widest px-8 py-4 text-center transition-all duration-500"
                    style={{
                      backgroundColor: "var(--ivory-dark)",
                      color: "var(--kohl)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "var(--kohl)";
                    }}
                  >
                    {T.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
