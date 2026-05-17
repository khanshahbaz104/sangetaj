import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Sang-e-Taj",
  description: "Terms and conditions governing the purchase and commission of Sang-e-Taj Makrana marble sculptures.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://sangetaj.com/terms" },
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

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "var(--ivory)", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <p className="label text-[9px] tracking-widest mb-4" style={{ color: "var(--gold)" }}>
          Legal
        </p>
        <h1
          className="font-heading font-bold mb-3"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Terms &amp; Conditions
        </h1>
        <p className="label text-[9px] tracking-widest mb-16" style={{ color: "rgba(244,244,243,0.4)" }}>
          Last updated: May 2026
        </p>

        <div className="space-y-12" style={{ color: "rgba(244,244,243,0.78)" }}>

          <Section title="1. About Sang-e-Taj">
            <p>
              Sang-e-Taj is an independent artisan studio operating from Makrana, Rajasthan, India.
              We specialise in hand-carved Makrana marble sculptures and showpieces. By submitting an
              enquiry, commissioning a piece, or placing an order through our website or via WhatsApp,
              you agree to be bound by these Terms and Conditions.
            </p>
          </Section>

          <Section title="2. Products & Artistic Nature">
            <p>
              All Sang-e-Taj sculptures are original works of decorative art. Automotive and maritime
              sculptures are artistic interpretations inspired by generic vehicle and vessel forms.
              They are not licensed reproductions of any trademarked product, are not affiliated with
              or endorsed by any automotive manufacturer or maritime institution, and are sold solely
              as decorative objects.
            </p>
            <p>
              Product images shown on our website are representative of the form and finish. Because
              every piece is hand-carved from a natural stone with unique mineral veining, the finished
              sculpture may differ slightly from images shown. This variation is a feature of the
              medium, not a defect.
            </p>
          </Section>

          <Section title="3. Commission Process & Contract Formation">
            <p>
              All pieces are made to order. No contract exists until:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "We have received your enquiry and confirmed availability.",
                "You have reviewed and approved our written proposal (dimensions, finish, lead time, price).",
                "A deposit has been received where applicable.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: "var(--gold)", fontSize: "0.5rem", marginTop: "10px" }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              We reserve the right to decline any commission at our sole discretion.
            </p>
          </Section>

          <Section title="4. Pricing & Payment">
            <p>
              Prices are provided privately upon enquiry and quoted in USD unless otherwise agreed.
              All prices are exclusive of applicable taxes, customs duties, and import charges, which
              are the sole responsibility of the buyer. We reserve the right to adjust pricing at any
              time prior to contract formation.
            </p>
            <p>
              For bespoke commissions, a deposit (typically 50% of the agreed price) is required
              before work commences. The balance is due prior to dispatch. Payment terms are confirmed
              in the written proposal.
            </p>
          </Section>

          <Section title="5. Lead Times & Delivery">
            <p>
              Lead times are estimates only and commence from the date a commission is confirmed and
              any required deposit received. Typical lead times are 6–14 weeks depending on complexity.
              We will notify you if there are material delays. We accept no liability for delays caused
              by force majeure, customs, courier delays, or circumstances outside our control.
            </p>
            <p>
              Delivery is via insured, white-glove courier service. Risk passes to the buyer upon
              delivery to the address provided. Customs duties, import taxes, and handling fees at
              destination are the buyer&apos;s sole responsibility. We are not able to predict or
              guarantee the customs treatment applicable in your country.
            </p>
          </Section>

          <Section title="6. Cancellation Policy">
            <p>
              Because all sculptures are hand-carved to order, cancellations after commission
              confirmation may result in forfeiture of any deposit paid to cover materials and
              artisan time already expended. Cancellations within 48 hours of commission confirmation
              will receive a full deposit refund. We will consider exceptional circumstances on a
              case-by-case basis.
            </p>
          </Section>

          <Section title="7. Returns, Refunds & Damage">
            <p>
              We do not accept returns or exchanges on bespoke or made-to-order sculptures, as each
              piece is uniquely created for the commissioning client. If your sculpture arrives damaged
              in transit, you must notify us within 48 hours of delivery with clear photographic
              evidence of the damage and the packaging. Upon verification, we will offer a replacement
              or full refund at our discretion. We will not be liable for damage reported after this
              48-hour window.
            </p>
            <p>
              Natural variation in marble colour, veining, or surface texture does not constitute a
              defect and does not entitle the buyer to a refund or replacement.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              All content on this website — including text, design, imagery, and branding — is the
              intellectual property of Sang-e-Taj. You may not reproduce, distribute, or use any
              content without our express written permission.
            </p>
            <p>
              Sang-e-Taj sculptures are original artistic works. The sculptural forms, names, and
              associated branding are proprietary. Any reproduction, copying, or casting of our
              sculptures without authorisation constitutes an infringement of our intellectual
              property rights.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Sang-e-Taj shall not be liable for
              any indirect, incidental, special, or consequential loss arising from your use of our
              website, products, or services. Our total liability for any claim shall not exceed the
              price paid for the sculpture in question.
            </p>
            <p>
              We make no representations about the investment value, appreciation, or resale value
              of any sculpture.
            </p>
          </Section>

          <Section title="10. Website Use">
            <p>
              This website is provided for information and enquiry purposes only. We make reasonable
              efforts to ensure accuracy, but we do not warrant that the website is error-free,
              continuously available, or free from viruses. Use of the website is at your own risk.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms are governed by the laws of Rajasthan, India. Any disputes shall be subject
              to the exclusive jurisdiction of the courts of Rajasthan, India. Nothing in these Terms
              affects any statutory rights you may have under the mandatory consumer protection laws
              of your own jurisdiction.
            </p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>
              We may update these Terms from time to time. The current version is always available
              at sangetaj.com/terms. Continued use of our services after any update constitutes
              acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              For any questions regarding these Terms, please contact us at{" "}
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
