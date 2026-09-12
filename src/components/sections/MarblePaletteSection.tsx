import { marbleProfiles } from "@/lib/marbles";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function MarblePaletteSection() {
  const order: (keyof typeof marbleProfiles)[] = [
    "Carrara White",
    "Calacatta Gold",
    "Statuario",
    "Makrana White",
    "Nero Marquina",
    "Verde Guatemala",
    "Travertine Beige",
    "Onyx Honey",
  ];

  return (
    <section className="py-20 md:py-28 bg-marble-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <SectionLabel>The Material</SectionLabel>
            <h2
              className="font-display mt-4"
              style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", lineHeight: 1.06 }}
            >
              Eight natural marbles.
              <br />
              <span className="italic text-gold">One material story.</span>
            </h2>
            <p className="mt-6" style={{ fontSize: "1.0rem" }}>
              Every piece in the collection is shaped from a single block of natural stone, hand-selected for vein, density and finish. Browse the marbles we keep in the workshop.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {order.map((name, i) => {
              const m = marbleProfiles[name];
              return (
                <Reveal key={name} delay={i * 0.04}>
                  <div
                    className="flex items-start gap-4 p-5 bg-marble border border-line transition-colors duration-300 hover:border-gold"
                    style={{ borderRadius: "8px" }}
                  >
                    <span
                      aria-hidden
                      className="shrink-0"
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "8px",
                        background: `radial-gradient(circle at 30% 25%, ${m.swatch} 0%, ${m.swatch} 55%, ${m.vein} 100%)`,
                        border: "1px solid var(--vein)",
                        boxShadow: "inset 0 0 12px rgba(0,0,0,0.25)",
                      }}
                    />
                    <div className="min-w-0">
                      <p
                        className="font-display italic text-ink"
                        style={{ fontSize: "1.1rem", lineHeight: 1.15 }}
                      >
                        {m.name}
                      </p>
                      <p
                        className="label-sm mt-1"
                        style={{ color: "var(--ink-mute)" }}
                      >
                        {m.origin}
                      </p>
                      <p
                        className="mt-2"
                        style={{ fontSize: "0.88rem", color: "var(--ink-soft)" }}
                      >
                        {m.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
