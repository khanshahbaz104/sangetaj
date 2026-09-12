import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import data from "@/data/heritage.json";
import why from "@/data/whymakrana.json";

export const metadata: Metadata = {
  title: "Craft & Heritage",
  description:
    "The stone beneath the Taj Mahal. Four hundred years of Makrana quarrying, the artisan families who never left, and the objects they shape now.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where does Makrana marble come from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Makrana marble comes exclusively from Makrana, a town in Nagaur district, Rajasthan, India. The quarries have been continuously active for over 400 years. The marble's properties are specific to this single geological location.",
      },
    },
    {
      "@type": "Question",
      name: "Why was Makrana marble chosen to build the Taj Mahal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emperor Shah Jahan's architects specified Makrana White as the only stone equal to the Taj Mahal's ambition. Its crystalline purity, structural density and luminosity were unmatched by any other marble. After four centuries of monsoon, desert wind and direct sun, the marble remains structurally and visually intact.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Makrana marble different from Carrara or Calacatta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Makrana is a dense calcitic marble with a crystalline structure that resists discolouration and yellowing over centuries. Italian marbles are prized for their veining and workability; Makrana is prized for permanence and the way light enters the stone rather than stopping at its surface.",
      },
    },
  ],
};

export default function HeritagePage() {
  return (
    <div className="bg-marble">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 lg:px-10 marble-veined">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>{data.hero.eyebrow}</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", lineHeight: 1.04 }}
          >
            {data.hero.heading}
            <br />
            <span className="italic text-gold">{data.hero.headingItalic}</span>
          </h1>
          <p className="mt-6 max-w-xl" style={{ fontSize: "1.02rem" }}>
            {data.hero.subheading}
          </p>
        </div>
      </section>

      {/* Opening quote */}
      <section className="py-16 md:py-24 px-6 lg:px-10 bg-marble-soft">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p
              className="font-display italic text-center"
              style={{ fontSize: "clamp(1.3rem, 2.6vw, 2rem)", lineHeight: 1.45 }}
            >
              {data.openingQuote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {data.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-t border-line pt-5">
                <p className="font-display text-ink" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", lineHeight: 1 }}>
                  {s.value}
                </p>
                <p className="label-sm mt-3" style={{ color: "var(--ink-mute)" }}>
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-28 px-6 lg:px-10 bg-marble-soft">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>{data.timeline.eyebrow}</SectionLabel>
          <h2
            className="font-display mt-4 mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}
          >
            {data.timeline.heading}
            <br />
            <span className="italic text-gold">{data.timeline.headingItalic}</span>
          </h2>

          <div className="flex flex-col">
            {data.timeline.entries.map((e, i) => (
              <Reveal key={e.year} delay={i * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-10 py-7 border-t border-line">
                  <p
                    className="font-display italic text-gold"
                    style={{ fontSize: "1.5rem", lineHeight: 1.1 }}
                  >
                    {e.year}
                  </p>
                  <p style={{ fontSize: "0.98rem", color: "var(--ink-soft)" }}>{e.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The quarry */}
      <section className="py-16 md:py-28 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{data.quarrySection.eyebrow}</SectionLabel>
          <h2
            className="font-display mt-4 mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}
          >
            {data.quarrySection.heading}{" "}
            <span className="italic text-gold">{data.quarrySection.headingItalic}</span>
          </h2>
          <div className="flex flex-col gap-5">
            {data.quarrySection.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} style={{ fontSize: "1rem", color: "var(--ink-soft)" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Material science */}
      <section className="py-16 md:py-28 px-6 lg:px-10 bg-marble-soft">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>{data.materialFacts.eyebrow}</SectionLabel>
          <h2
            className="font-display mt-4 mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}
          >
            {data.materialFacts.heading}
            <br />
            <span className="italic text-gold">{data.materialFacts.headingItalic}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {data.materialFacts.facts.map((f, i) => (
              <Reveal key={f.heading} delay={i * 0.06}>
                <div
                  className="h-full p-7 border border-line"
                  style={{ borderRadius: "6px", background: "var(--marble)" }}
                >
                  <p className="font-display italic text-ink" style={{ fontSize: "1.3rem" }}>
                    {f.heading}
                  </p>
                  <p className="mt-3" style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Makrana — the three pillars */}
      <section className="py-16 md:py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>{why.eyebrow}</SectionLabel>
          <h2
            className="font-display mt-4 mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}
          >
            {why.heading}
            <br />
            <span className="italic text-gold">{why.headingItalic}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {why.pillars.map((p, i) => (
              <Reveal key={p.numeral} delay={i * 0.07}>
                <div className="border-t border-line pt-6">
                  <p className="font-display italic text-gold" style={{ fontSize: "1.6rem" }}>
                    {p.numeral}
                  </p>
                  <p className="font-display mt-3 text-ink" style={{ fontSize: "1.2rem" }}>
                    {p.heading}
                  </p>
                  <p className="mt-3" style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The artisans */}
      <section className="py-16 md:py-28 px-6 lg:px-10 bg-marble-soft overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div
              className="relative aspect-[4/3] shadow-stone"
              style={{ borderRadius: "6px", overflow: "hidden" }}
            >
              <Image
                src={data.artisanSection.image}
                alt={data.artisanSection.imageCaption}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute bottom-5 left-5 right-5 glass px-5 py-3"
                style={{ borderRadius: "10px" }}
              >
                <p className="label-sm text-gold">From the workshop</p>
                <p className="font-display italic mt-1 text-ink" style={{ fontSize: "1.1rem" }}>
                  {data.artisanSection.imageCaption}
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionLabel>{data.artisanSection.eyebrow}</SectionLabel>
            <h2
              className="font-display mt-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}
            >
              {data.artisanSection.heading}
              <br />
              <span className="italic text-gold">{data.artisanSection.headingItalic}</span>
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {data.artisanSection.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} style={{ fontSize: "1rem", color: "var(--ink-soft)" }}>
                  {p}
                </p>
              ))}
            </div>
            <Link
              href={data.artisanSection.ctaHref}
              className="inline-block label-sm mt-9 text-center transition-all duration-400 hover:bg-ink hover:text-marble"
              style={{
                color: "var(--ink)",
                border: "1px solid var(--ink)",
                padding: "16px 38px",
                borderRadius: "999px",
              }}
            >
              {data.artisanSection.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-32 px-6 lg:px-10 marble-veined">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>{data.legacyCta.eyebrow}</SectionLabel>
          <h2
            className="font-display mt-4"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)", lineHeight: 1.04 }}
          >
            {data.legacyCta.heading}
            <br />
            <span className="italic text-gold">{data.legacyCta.headingItalic}</span>
          </h2>
          <p className="mt-6" style={{ fontSize: "1.02rem", color: "var(--ink-soft)" }}>
            {data.legacyCta.body}
          </p>
          <Link
            href={data.legacyCta.ctaHref}
            className="inline-block label-sm mt-9 transition-all duration-400 hover:bg-ink hover:text-marble"
            style={{
              color: "var(--ink)",
              border: "1px solid var(--ink)",
              padding: "16px 38px",
              borderRadius: "999px",
            }}
          >
            {data.legacyCta.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
