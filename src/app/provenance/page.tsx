import Link from "next/link";

export const metadata = {
  title: "Provenance Policy | Sang-e-Taj",
  description: "Our provenance guarantee — every Sang-e-Taj sculpture is accompanied by a certificate of Makrana origin and artisan attribution.",
};

export default function ProvenancePage() {
  return (
    <div style={{ backgroundColor: "var(--ivory)", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <p className="label text-[9px] tracking-widest mb-4" style={{ color: "var(--gold)" }}>
          Our Guarantee
        </p>
        <h1
          className="font-heading font-bold mb-3"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Provenance Policy
        </h1>
        <p className="label text-[9px] tracking-widest mb-16" style={{ color: "rgba(244,244,243,0.4)" }}>
          What accompanies every Sang-e-Taj sculpture
        </p>

        <div className="space-y-12" style={{ color: "rgba(244,244,243,0.78)" }}>
          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              The Certificate of Origin
            </h2>
            <p className="text-base leading-loose">
              Every Sang-e-Taj sculpture is accompanied by a hand-signed Certificate of Makrana Origin. This certificate documents the marble grade used,
              the quarry district of origin in Makrana, Rajasthan, the name and generation of the lead artisan, and the approximate production period.
              It is produced on archival paper and signed by the lead artisan.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              What "Makrana White" Means
            </h2>
            <p className="text-base leading-loose">
              All Sang-e-Taj pieces are carved from marble quarried in the Makrana district of Rajasthan, India — the same geological source used in the construction
              of the Taj Mahal. We do not use imported marble, composite stone, or resin-bonded materials. The whiteness and crystalline structure are natural and geological in origin.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Artistic Interpretation
            </h2>
            <p className="text-base leading-loose">
              All Sang-e-Taj sculptures are original works of art. Automotive and maritime sculptures are artistic interpretations inspired by iconic forms —
              they are not licensed reproductions, and Sang-e-Taj is not affiliated with, endorsed by, or associated with any automotive manufacturer
              or maritime institution. The sculptures are sold as decorative art objects.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              No Returns Policy
            </h2>
            <p className="text-base leading-loose">
              Each sculpture is hand-carved to order. Because every piece is unique and made specifically for the client,
              we do not accept returns or exchanges except in the case of damage in transit, which must be reported with photographic evidence within 48 hours of delivery.
              In the event of confirmed transit damage, we will arrange a replacement or provide a full refund at our discretion.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Queries
            </h2>
            <p className="text-base leading-loose">
              For any questions about provenance, materials, or the certificate, contact us at{" "}
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
