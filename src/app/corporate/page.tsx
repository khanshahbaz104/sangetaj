import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Corporate & Institutional",
  description:
    "Permanent Makrana marble showpieces for boardrooms, reception halls, showrooms and protocol offices. Single commissions and volume orders.",
};

const audiences = [
  {
    label: "Prestige Showrooms & Marques",
    desc: "A permanent marble showpiece of your flagship model anchors any showroom or reception. Custom-engraved with an institutional mark. Single pieces and volume orders both accepted.",
  },
  {
    label: "Royal & Government Spaces",
    desc: "Sculptures crafted for the receiving rooms of palaces, ministries and protocol offices. Each piece made with heraldic precision, delivery coordinated discreetly.",
  },
  {
    label: "Corporate & Executive Interiors",
    desc: "Replace transient decor with objects of permanence. A marble showpiece in a boardroom or executive suite signals taste that no furnishing can replicate.",
  },
];

const proof = [
  { numeral: "1+", label: "Single commissions and volume orders accepted" },
  { numeral: "100%", label: "Client confidentiality maintained" },
  { numeral: "GCC", label: "Wide delivery coverage" },
  { numeral: "24h", label: "Response time for all enquiries" },
];

const process = [
  {
    number: "01",
    label: "Consultation",
    desc: "A private briefing call or in-person meeting. We understand the occasion, the recipient and the institutional context.",
  },
  {
    number: "02",
    label: "Design brief",
    desc: "Custom dimensions, branding integration, quantity, packaging and delivery requirements, all documented.",
  },
  {
    number: "03",
    label: "Approval",
    desc: "Design brief, dimensions, personalisation details and timeline confirmed in writing before production begins. No surprises.",
  },
  {
    number: "04",
    label: "Delivery",
    desc: "White-glove, custom-packaged and coordinated to your deadline. Available across all GCC territories.",
  },
];

export default function CorporatePage() {
  return (
    <div className="bg-marble">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/categories/luxe/cover.webp"
            alt="Marble showpiece displayed in an executive interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: "brightness(0.42)" }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,8,7,0.95) 0%, rgba(8,8,7,0.75) 45%, rgba(8,8,7,0.35) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <SectionLabel>Corporate &amp; Institutional</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)", lineHeight: 1.04 }}
          >
            Objects that define
            <br />
            <span className="italic text-gold">the spaces of power.</span>
          </h1>
          <p className="mt-6 max-w-xl" style={{ fontSize: "1.02rem", color: "var(--ink-soft)" }}>
            We place permanent Makrana marble showpieces in the boardrooms, reception halls and
            prestige residences of royal households, corporate institutions and private collectors
            across the GCC.
          </p>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 md:py-28 px-6 lg:px-10 bg-marble-soft">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Who this is for</SectionLabel>
          <h2
            className="font-display mt-4 mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}
          >
            Three audiences.
            <br />
            <span className="italic text-gold">One standard.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {audiences.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.07}>
                <div className="border-t border-line pt-6 h-full">
                  <p className="font-display text-ink" style={{ fontSize: "1.2rem", lineHeight: 1.2 }}>
                    {a.label}
                  </p>
                  <p className="mt-3" style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="py-16 md:py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {proof.map((p, i) => (
            <Reveal key={p.numeral} delay={i * 0.06}>
              <div className="border-t border-line pt-5">
                <p
                  className="font-display text-ink"
                  style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", lineHeight: 1 }}
                >
                  {p.numeral}
                </p>
                <p className="label-sm mt-3" style={{ color: "var(--ink-mute)" }}>
                  {p.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-28 px-6 lg:px-10 bg-marble-soft">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>How it works</SectionLabel>
          <h2
            className="font-display mt-4 mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}
          >
            From brief
            <br />
            <span className="italic text-gold">to installation.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">
            {process.map((p, i) => (
              <Reveal key={p.number} delay={i * 0.06}>
                <div className="border-t border-line pt-6 h-full">
                  <p className="font-display italic text-gold" style={{ fontSize: "1.5rem" }}>
                    {p.number}
                  </p>
                  <p className="font-display mt-3 text-ink" style={{ fontSize: "1.15rem" }}>
                    {p.label}
                  </p>
                  <p className="mt-3" style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 lg:px-10 marble-veined">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Start a conversation</SectionLabel>
          <h2
            className="font-display mt-4"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)", lineHeight: 1.04 }}
          >
            Tell us about
            <br />
            <span className="italic text-gold">the commission.</span>
          </h2>
          <p className="mt-6" style={{ fontSize: "1.02rem", color: "var(--ink-soft)" }}>
            Send us the occasion, the recipient and the timeline. We reply to every institutional
            enquiry within 24 hours.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="label-sm text-center transition-all duration-400 hover:bg-ink hover:text-marble"
              style={{
                color: "var(--ink)",
                border: "1px solid var(--ink)",
                padding: "16px 38px",
                borderRadius: "999px",
              }}
            >
              Make an Enquiry
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
      </section>
    </div>
  );
}
