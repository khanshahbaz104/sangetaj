import Link from "next/link";

export const metadata = {
  title: "Marble Care Guide — Preserving Your Makrana Showpiece",
  description:
    "How to care for and preserve your Sang-e-Taj Makrana marble showpiece. Expert guidance from the artisan atelier.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://sangetaj.com/care" },
};

export default function CarePage() {
  return (
    <div style={{ backgroundColor: "var(--ivory)", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <p className="label text-[9px] tracking-widest mb-4" style={{ color: "var(--gold)" }}>
          Preservation
        </p>
        <h1
          className="font-heading font-bold mb-3"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Care Guide
        </h1>
        <p className="label text-[9px] tracking-widest mb-16" style={{ color: "rgba(244,244,243,0.4)" }}>
          Preserving your Makrana marble sculpture across generations
        </p>

        <div className="space-y-12" style={{ color: "rgba(244,244,243,0.78)" }}>
          {[
            {
              title: "Display",
              body: "Display your sculpture indoors, away from direct sunlight and heat sources. Makrana marble is resistant to discolouration but prolonged UV exposure may affect surface finish over many years. A stable, low-humidity environment is ideal."
            },
            {
              title: "Cleaning",
              body: "Dust with a soft, dry microfibre cloth. For deeper cleaning, use a slightly damp cloth with plain water only — no detergents, acids, or abrasive cleaners. Acidic substances (lemon, vinegar, household cleaners) can etch the surface. Dry immediately after wiping."
            },
            {
              title: "Handling",
              body: "Makrana marble is dense and durable but can chip if dropped. Always handle the sculpture with both hands, supporting the base. Avoid placing it on surfaces where it could slide or be knocked."
            },
            {
              title: "Polished Finish",
              body: "Polished surfaces can be refreshed with a marble-safe microcrystalline wax every 12–24 months. Apply with a soft cloth, buff gently in circular motions. This maintains the surface sheen without altering the stone."
            },
            {
              title: "Matte Finish",
              body: "Matte-finished sculptures should not be waxed — wax will create uneven sheen. Clean with a dry cloth only."
            },
            {
              title: "Storage",
              body: "If storing, wrap in acid-free tissue paper or a soft cloth. Do not wrap in bubble wrap against the stone surface for extended periods. Store upright or with full base support — never on its side without adequate padding."
            },
          ].map(({ title, body }) => (
            <section key={title}>
              <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                {title}
              </h2>
              <p className="text-base leading-loose">{body}</p>
            </section>
          ))}

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Questions
            </h2>
            <p className="text-base leading-loose">
              For specific care questions about your piece, contact us at{" "}
              <a href="mailto:atelier@sangetaj.com" style={{ color: "var(--gold)" }}>atelier@sangetaj.com</a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(138,136,134,0.15)" }}>
          <Link href="/" className="label text-[9px] tracking-widest" style={{ color: "var(--gold)" }}>
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
