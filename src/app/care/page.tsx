import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Care Guide",
  description:
    "How to display, clean, handle and store a Makrana marble piece so it lasts generations. Guidance from the atelier.",
};

const guidance = [
  {
    title: "Display",
    body: "Display indoors, away from direct sunlight and heat sources. Makrana marble resists discolouration, but prolonged UV exposure may affect the surface finish over many years. A stable, low-humidity environment is ideal.",
  },
  {
    title: "Cleaning",
    body: "Dust with a soft, dry microfibre cloth. For deeper cleaning use a slightly damp cloth with plain water only, no detergents, acids or abrasive cleaners. Acidic substances such as lemon, vinegar and household cleaners will etch the surface. Dry immediately after wiping.",
  },
  {
    title: "Handling",
    body: "Makrana marble is dense and durable but can chip if dropped. Always handle a piece with both hands, supporting the base. Avoid placing it where it could slide or be knocked.",
  },
  {
    title: "Polished finish",
    body: "Polished surfaces can be refreshed with a marble-safe microcrystalline wax every 12 to 24 months. Apply with a soft cloth and buff gently in circular motions. This maintains the sheen without altering the stone.",
  },
  {
    title: "Matte finish",
    body: "Matte-finished pieces should not be waxed, as wax creates an uneven sheen. Clean with a dry cloth only.",
  },
  {
    title: "Storage",
    body: "If storing, wrap in acid-free tissue paper or a soft cloth. Do not leave bubble wrap against the stone for extended periods. Store upright or with full base support, never on its side without adequate padding.",
  },
];

export default function CarePage() {
  return (
    <div className="bg-marble">
      <section className="pt-40 pb-12 px-6 lg:px-10 marble-veined">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Preservation</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.04 }}
          >
            Care <span className="italic text-gold">guide.</span>
          </h1>
          <p className="mt-5" style={{ fontSize: "1.02rem", color: "var(--ink-soft)" }}>
            Preserving a Makrana marble piece across generations.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {guidance.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div
                className="h-full p-7 border border-line"
                style={{ borderRadius: "6px", background: "var(--marble-soft)" }}
              >
                <h2 className="font-display italic text-ink" style={{ fontSize: "1.3rem" }}>
                  {g.title}
                </h2>
                <p className="mt-3" style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                  {g.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-12 border-t border-line pt-8">
          <p style={{ fontSize: "1rem", color: "var(--ink-soft)" }}>
            For care questions specific to your piece, write to{" "}
            <a href="mailto:hello@marble.sangetaj.com" className="hover-rule text-gold">
              hello@marble.sangetaj.com
            </a>{" "}
            or{" "}
            <Link href="/contact" className="hover-rule text-gold">
              contact the atelier
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
