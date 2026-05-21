import Link from "next/link";

export const metadata = {
  title: "Shipping & Delivery | Sang-e-Taj",
  description: "Shipping, delivery, and customs information for Sang-e-Taj Makrana marble sculptures delivered across the Gulf.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://sangetaj.com/shipping" },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2
      className="font-heading font-bold text-2xl mb-4"
      style={{ fontFamily: "var(--font-cormorant), serif" }}
    >
      {title}
    </h2>
    <div className="text-base leading-loose space-y-4">{children}</div>
  </section>
);

export default function ShippingPage() {
  return (
    <div style={{ backgroundColor: "var(--ivory)", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <p className="label text-[9px] tracking-widest mb-4" style={{ color: "var(--gold)" }}>
          Delivery
        </p>
        <h1
          className="font-heading font-bold mb-3"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Shipping &amp; Delivery
        </h1>
        <p className="label text-[9px] tracking-widest mb-16" style={{ color: "rgba(244,244,243,0.4)" }}>
          Last updated: May 2026
        </p>

        <div className="space-y-12" style={{ color: "rgba(244,244,243,0.78)" }}>

          <Section title="Production Lead Times">
            <p>
              Every Sang-e-Taj sculpture is hand-carved to order in Makrana, Rajasthan. Lead times
              begin from the date your commission is confirmed and any required deposit received.
            </p>
            <ul className="space-y-3 pl-4">
              {[
                { label: "Standard collection pieces", value: "6–8 weeks" },
                { label: "Collection pieces with engraving", value: "8–10 weeks" },
                { label: "Maritime sculptures (Sang-e-Nakhoda)", value: "6–8 weeks" },
                { label: "Full-rigged dhow (Sang-e-Zafar)", value: "4–5 weeks from confirmation · With calligraphy: 8–10 weeks" },
                { label: "Fully bespoke commissions", value: "Quoted individually" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span style={{ color: "var(--gold)", fontSize: "0.5rem", marginTop: "10px" }}>◆</span>
                  <span><strong>{item.label}</strong> — {item.value}</span>
                </li>
              ))}
            </ul>
            <p>
              Lead times are estimates. We will contact you if there is any material change to your
              expected completion date. Delays caused by material availability, artisan scheduling,
              or force majeure are outside our control.
            </p>
          </Section>

          <Section title="Packaging">
            <p>
              Every sculpture is wrapped in archival-grade tissue, cradled in a custom-cut foam
              interior, and packed in a hand-finished wooden presentation case. The outer shipping
              carton is double-walled and engineered for international freight. Each piece is
              photographed before dispatch.
            </p>
          </Section>

          <Section title="Shipping Method & Insurance">
            <p>
              We ship via insured, white-glove international courier. All shipments are fully insured
              for the declared value of the piece from the moment of collection to confirmed delivery.
              Tracking details are provided once your piece has been dispatched.
            </p>
          </Section>

          <Section title="Delivery Regions">
            <p>We deliver to all six GCC countries:</p>
            <ul className="space-y-2 pl-4">
              {[
                "United Arab Emirates (UAE)",
                "Kingdom of Saudi Arabia",
                "Qatar",
                "Kuwait",
                "Bahrain",
                "Sultanate of Oman",
              ].map((country) => (
                <li key={country} className="flex items-start gap-3">
                  <span style={{ color: "var(--gold)", fontSize: "0.5rem", marginTop: "10px" }}>◆</span>
                  {country}
                </li>
              ))}
            </ul>
            <p>
              Delivery to other regions may be available upon request. Please enquire at the time
              of commission for availability and any additional charges.
            </p>
          </Section>

          <Section title="Customs, Duties & Import Taxes">
            <p>
              All customs duties, import taxes, VAT, and handling fees charged by the destination
              country are the sole responsibility of the buyer. Sang-e-Taj has no control over and
              cannot predict the customs treatment applied by any country&apos;s customs authority.
            </p>
            <p>
              Sculptures are declared as &quot;hand-carved decorative marble sculpture — original
              artwork&quot; on all customs documentation. We are not able to under-declare the value
              of any shipment. Please ensure you are familiar with the import regulations applicable
              in your country before commissioning.
            </p>
          </Section>

          <Section title="Delivery Address & Responsibility">
            <p>
              Please ensure the delivery address provided is accurate and complete. Once a piece
              has been dispatched, we are not responsible for failed deliveries arising from
              incorrect or incomplete address details. Redelivery charges, where applicable, are
              the buyer&apos;s responsibility.
            </p>
          </Section>

          <Section title="Damage in Transit">
            <p>
              In the unlikely event your sculpture arrives damaged, you must notify us within
              48 hours of delivery with photographic evidence of the damage and the packaging
              (both inner and outer). We cannot investigate damage claims reported after this
              48-hour window. Upon verification, we will arrange a replacement or provide a full
              refund at our discretion.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For any delivery-related queries, contact us at{" "}
              <a href="mailto:atelier@sangetaj.com" style={{ color: "var(--gold)" }}>
                atelier@sangetaj.com
              </a>{" "}
              or via WhatsApp at +91 70145 58962.
            </p>
          </Section>

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
