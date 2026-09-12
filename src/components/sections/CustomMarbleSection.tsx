"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CustomMarbleSection() {
  return (
    <section className="py-20 md:py-32 bg-marble overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] shadow-stone"
          style={{ borderRadius: "6px", overflow: "hidden" }}
        >
          <Image
            src="/images/categories/architectural/inlay-panels.webp"
            alt="Hand-cut marble inlay panel showing stone-on-stone pietra dura work"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute bottom-5 left-5 right-5 glass px-5 py-4"
            style={{ borderRadius: "10px" }}
          >
            <p className="label-sm text-gold">From the workshop</p>
            <p className="font-display italic mt-1 text-ink" style={{ fontSize: "1.15rem" }}>
              A hand-cut inlay panel for a villa in Riyadh.
            </p>
          </div>
        </motion.div>

        <div>
          <SectionLabel>Custom Marble Products</SectionLabel>
          <h2 className="font-display mt-4" style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)", lineHeight: 1.04 }}>
            Have something
            <br />
            <span className="italic text-gold">made for you.</span>
          </h2>
          <p className="mt-6 max-w-lg" style={{ fontSize: "1.02rem" }}>
            Bring us a sketch, a measurement, a reference image. We&apos;ll guide you through marble selection, scale, finish and edge work, and our artisans will shape it by hand in our workshop. Most commissions ship in six to sixteen weeks.
          </p>

          <ul className="mt-8 flex flex-col gap-3 max-w-lg">
            {[
              "One-to-one consultation with a stone specialist",
              "Marble samples shipped to your door",
              "Renderings or photographs before production",
              "Insured worldwide delivery and white-glove install",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3"
                style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}
              >
                <span
                  className="mt-2 block shrink-0"
                  style={{
                    width: "16px",
                    height: "1px",
                    background: "var(--gold)",
                  }}
                />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/bespoke"
              className="label-sm text-center transition-all duration-400 hover:bg-ink hover:text-marble"
              style={{
                color: "var(--ink)",
                border: "1px solid var(--ink)",
                padding: "16px 38px",
                borderRadius: "999px",
              }}
            >
              Request Custom Design
            </Link>
            <a
              href="https://wa.me/917014558962"
              target="_blank"
              rel="noopener noreferrer"
              className="label-sm text-center group flex items-center justify-center gap-3 transition-colors duration-300"
              style={{ color: "var(--ink-soft)", padding: "16px 24px" }}
            >
              Chat on WhatsApp
              <span
                className="block h-px transition-all duration-400 group-hover:w-7 w-4"
                style={{ background: "var(--gold)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
