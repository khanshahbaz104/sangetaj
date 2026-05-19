"use client";

import Link from "next/link";
import { RevealSection } from "@/components/ui/RevealSection";

const steps = [
  {
    number: "01",
    label: "Select",
    description:
      "Choose from our collection or commission a bespoke piece. No commitment required at this stage.",
  },
  {
    number: "02",
    label: "Carve",
    description:
      "A dedicated Rajasthani artisan begins hand-cutting in authenticated Makrana stone.",
  },
  {
    number: "03",
    label: "Refine",
    description:
      "Surface finishing, optional engraving in Arabic or English, and multi-stage quality inspection.",
  },
  {
    number: "04",
    label: "Place",
    description:
      "White-glove delivery across the GCC. Your piece arrives in a hand-finished presentation case, ready to command its room.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="py-14 md:py-18"
      style={{ backgroundColor: "var(--ivory-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="gold-rule mb-6 block" />
              <span
                className="label text-[9px] tracking-[0.25em] block mb-4"
                style={{ color: "var(--gold)" }}
              >
                The Process
              </span>
              <h2
                className="font-heading text-5xl font-bold"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                From Commission
                <span
                  className="italic"
                  style={{ color: "var(--gold)" }}
                >
                  {" "}to Installation
                </span>
              </h2>
            </div>
            <p
              className="text-sm font-bold max-w-xs"
              style={{ color: "rgba(240,237,232,0.80)" }}
            >
              Standard commissions: 6–8 weeks. Bespoke pieces with engraving:
              8–10 weeks.
            </p>
          </div>
        </RevealSection>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <RevealSection key={step.number} delay={index * 0.1}>
              <div
                className="relative p-6 md:p-10"
                style={{
                  borderColor: "rgba(120,118,116,0.15)",
                  borderBottom: "1px solid rgba(120,118,116,0.15)",
                  borderRight: "1px solid rgba(120,118,116,0.15)",
                }}
              >
                {/* Step number — decorative */}
                <p
                  className="font-heading text-6xl font-bold leading-none mb-6"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "rgba(120,118,116,0.15)",
                  }}
                >
                  {step.number}
                </p>

                {/* Gold rule */}
                <span
                  className="block w-8 h-px mb-5"
                  style={{ backgroundColor: "var(--gold)" }}
                />

                {/* Label */}
                <p
                  className="font-heading text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {step.label}
                </p>

                {/* Description */}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(240,237,232,0.88)" }}
                >
                  {step.description}
                </p>

                {/* Connecting line on desktop */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 right-0 w-0 h-px"
                    style={{ backgroundColor: "transparent" }}
                  />
                )}
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.5} className="mt-14 flex justify-center">
          <Link
            href="/bespoke"
            className="label text-[10px] tracking-widest px-10 py-4 border transition-all duration-500"
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
            Begin a Commission
          </Link>
        </RevealSection>
      </div>
    </section>
  );
}
