import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Provenance Policy",
  description:
    "Every Luxe commission is accompanied by a certificate of Makrana origin and artisan attribution. What that certificate covers, and what it does not.",
};

const sections = [
  {
    title: "The Certificate of Origin",
    body: "Every Luxe sculpture is accompanied by a hand-signed Certificate of Makrana Origin. It documents the marble grade used, the quarry district of origin in Makrana, Rajasthan, the name and generation of the lead artisan, and the approximate production period. It is produced on archival paper and signed by the lead artisan.",
  },
  {
    title: 'What "Makrana White" means',
    body: "All Luxe pieces are carved from marble quarried in the Makrana district of Rajasthan, India, the same geological source used in the construction of the Taj Mahal. We do not use imported marble, composite stone, or resin-bonded materials. The whiteness and crystalline structure are natural and geological in origin.",
  },
  {
    title: "Artistic interpretation",
    body: "All Luxe sculptures are original works of art. The automotive and maritime pieces are artistic interpretations inspired by iconic forms. They are not licensed reproductions, and we are not affiliated with, endorsed by, or associated with any automotive manufacturer or maritime institution. They are sold as decorative art objects.",
  },
  {
    title: "Returns on commissioned work",
    body: "Each sculpture is hand-carved to order. Because every piece is unique and made specifically for the client, we do not accept returns or exchanges except in the case of damage in transit, which must be reported with photographic evidence within 48 hours of delivery. In the event of confirmed transit damage we will arrange a replacement or provide a full refund at our discretion.",
  },
];

export default function ProvenancePage() {
  return (
    <div className="bg-marble">
      <section className="pt-40 pb-12 px-6 lg:px-10 marble-veined">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Our Guarantee</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.04 }}
          >
            Provenance <span className="italic text-gold">policy.</span>
          </h1>
          <p className="mt-5" style={{ fontSize: "1.02rem", color: "var(--ink-soft)" }}>
            What accompanies every piece in the Luxe Collection.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto flex flex-col">
          {sections.map((s) => (
            <div key={s.title} className="py-8 border-t border-line">
              <h2 className="font-display italic text-ink" style={{ fontSize: "1.5rem" }}>
                {s.title}
              </h2>
              <p className="mt-4" style={{ fontSize: "1rem", color: "var(--ink-soft)" }}>
                {s.body}
              </p>
            </div>
          ))}

          <div className="py-8 border-t border-line">
            <h2 className="font-display italic text-ink" style={{ fontSize: "1.5rem" }}>
              Queries
            </h2>
            <p className="mt-4" style={{ fontSize: "1rem", color: "var(--ink-soft)" }}>
              For any question about provenance, materials or the certificate, write to{" "}
              <a href="mailto:hello@marble.sangetaj.com" className="hover-rule text-gold">
                hello@marble.sangetaj.com
              </a>{" "}
              or{" "}
              <Link href="/contact" className="hover-rule text-gold">
                send us an enquiry
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
