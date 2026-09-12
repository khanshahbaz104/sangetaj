"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "The Verona coffee table is the first thing visitors comment on. It feels like a sculpture that happens to be useful.",
    name: "Hala A.",
    role: "Private Client, Dubai",
  },
  {
    quote:
      "We commissioned matching dispensers, soap dishes and tissue boxes for nineteen rooms. Everything arrived flawless and on time.",
    name: "Karim B.",
    role: "Hotel Project, Doha",
  },
  {
    quote:
      "I sketched what I had in mind and they sent renders within a week. The final piece is better than the drawing.",
    name: "Maya R.",
    role: "Interior Designer, London",
  },
  {
    quote:
      "Thoughtful, quiet, premium. Exactly the language we wanted in the boardroom gifts.",
    name: "Adel S.",
    role: "Corporate Gifting, Riyadh",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 md:py-32 marble-deep-veined relative">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="flex justify-center">
          <SectionLabel align="center">Stories</SectionLabel>
        </div>

        <div className="mt-10 min-h-[260px] md:min-h-[200px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="font-display italic"
                style={{
                  fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
                  lineHeight: 1.3,
                  color: "var(--ink)",
                  maxWidth: "920px",
                  margin: "0 auto",
                }}
              >
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <div className="mt-8 flex flex-col items-center gap-1">
                <p className="label-sm" style={{ color: "var(--gold-light)" }}>
                  {testimonials[index].name}
                </p>
                <p className="label-sm" style={{ color: "rgba(240,237,232,0.5)" }}>
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-px transition-all duration-500"
              style={{
                width: i === index ? "36px" : "14px",
                backgroundColor:
                  i === index ? "var(--gold-light)" : "rgba(240,237,232,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
