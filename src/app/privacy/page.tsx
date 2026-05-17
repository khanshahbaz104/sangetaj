import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Sang-e-Taj",
  description: "How Sang-e-Taj collects, uses, and protects your personal information.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://sangetaj.com/privacy" },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="label text-[9px] tracking-widest mb-16" style={{ color: "rgba(244,244,243,0.4)" }}>
          Last updated: May 2026
        </p>

        <div className="space-y-12" style={{ color: "rgba(244,244,243,0.78)" }}>
          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Who We Are
            </h2>
            <p className="text-base leading-loose">
              Sang-e-Taj is an independent artisan studio specialising in hand-carved Makrana marble sculptures.
              We operate from Makrana, Rajasthan, India, and serve clients primarily across the Gulf Cooperation Council (GCC) region.
              Our contact address is: atelier@sangetaj.com.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              What Information We Collect
            </h2>
            <p className="text-base leading-loose mb-4">
              When you submit an enquiry through our website, we collect:
            </p>
            <ul className="space-y-2 pl-4">
              {["Your name", "Email address", "WhatsApp number", "Country of residence", "Your message or commission brief"].map(item => (
                <li key={item} className="flex items-start gap-3 text-base">
                  <span style={{ color: "var(--gold)", fontSize: "0.5rem", marginTop: "8px" }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base leading-loose mt-4">
              We do not collect payment information, government identification, or any sensitive personal data through this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              How We Use Your Information
            </h2>
            <p className="text-base leading-loose">
              We use the information you provide solely to respond to your enquiry, provide a private quotation, or fulfil a commission you have requested.
              We do not sell, rent, or share your personal information with any third party for marketing purposes.
              Your contact details may be used to follow up on an active commission or enquiry. We will not contact you for unrelated purposes.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Data Storage and Security
            </h2>
            <p className="text-base leading-loose">
              Enquiry submissions are transmitted via encrypted email (TLS) to our atelier inbox. We do not store form submissions in a database.
              We take reasonable precautions to protect your information, but no internet transmission is completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Your Rights
            </h2>
            <p className="text-base leading-loose">
              You have the right to request access to the personal information we hold about you, to request correction of inaccurate data,
              or to request deletion of your information. To exercise any of these rights, contact us at atelier@sangetaj.com.
              We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Cookies
            </h2>
            <p className="text-base leading-loose">
              This website does not use tracking cookies or third-party analytics. We do not use advertising cookies or behavioural profiling.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Contact
            </h2>
            <p className="text-base leading-loose">
              For any privacy-related queries, please contact us at{" "}
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
