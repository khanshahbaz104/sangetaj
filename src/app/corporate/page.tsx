"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { RevealSection } from "@/components/ui/RevealSection";
import { RevealText } from "@/components/ui/RevealText";
import { GoldRule } from "@/components/ui/GoldRule";

const schema = z.object({
  company: z.string().min(2, "Company name required"),
  name: z.string().min(2, "Name required"),
  title: z.string().optional(),
  email: z.string().email("Valid email required"),
  whatsapp: z.string().min(7, "WhatsApp required"),
  country: z.string().min(1, "Country required"),
  occasion: z.string().optional(),
  quantity: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const countries = ["United Arab Emirates","Saudi Arabia","Qatar","Kuwait","Bahrain","Oman","Other"];

const audiences = [
  { icon: "◈", label: "Prestige Showrooms & Marques", desc: "A permanent marble showpiece in your flagship model anchors any showroom or reception. Custom-engraved with institutional mark. Available in corporate quantities from 5 pieces." },
  { icon: "◇", label: "Royal & Government Spaces", desc: "Sculptures crafted for the receiving rooms of palaces, ministries, and protocol offices. Each piece made with heraldic precision. Delivery coordinated discreetly." },
  { icon: "◈", label: "Corporate & Executive Interiors", desc: "Replace transient décor with objects of permanence. A Sang-e-Taj showpiece in a boardroom or executive suite signals taste that no furnishing can replicate." },
];

const proofPoints = [
  { numeral: "5+", label: "Minimum pieces per corporate order" },
  { numeral: "100%", label: "Client confidentiality maintained" },
  { numeral: "GCC", label: "Wide delivery coverage" },
  { numeral: "24h", label: "Response time for all inquiries" },
];

const corporateProcess = [
  { number: "01", label: "Consultation", desc: "Private briefing call or in-person meeting. We understand the occasion, the recipient, and the institutional context." },
  { number: "02", label: "Design Brief", desc: "Custom dimensions, branding integration, quantity, packaging, and delivery requirements — all documented." },
  { number: "03", label: "Proof Piece", desc: "A single sample piece is produced and approved before full production begins. No surprises." },
  { number: "04", label: "Delivery", desc: "White-glove, custom-packaged, coordinated to your deadline. Available across all GCC territories." },
];

export default function CorporatePage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/corporate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please reach us via WhatsApp or email.");
    }
  };

  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      {/* Hero */}
      <div
        className="relative min-h-[65vh] flex items-end pb-20 pt-40 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--ivory-dark)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(120,118,116,0.4) 0%, transparent 65%)" }}
        />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <RevealSection>
            <span className="label text-[9px] tracking-[0.25em] block mb-6" style={{ color: "var(--gold)" }}>
              Corporate & Institutional
            </span>
          </RevealSection>
          <RevealText as="h1" delay={0.1} className="font-heading text-7xl md:text-8xl font-bold" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--kohl)" } as React.CSSProperties}>
            Objects That Define
          </RevealText>
          <RevealText as="h1" delay={0.2} className="font-heading text-7xl md:text-8xl font-bold italic" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--gold)" } as React.CSSProperties}>
            the Spaces of Power
          </RevealText>
          <RevealSection delay={0.3}>
            <p className="mt-8 text-sm max-w-lg" style={{ color: "rgba(244,244,243,0.75)" }}>
              Sang-e-Taj places permanent Makrana marble showpieces in the boardrooms, reception halls, and prestige residences of royal households, corporate institutions, and private collectors across the GCC.
            </p>
          </RevealSection>
        </div>
      </div>

      {/* Who this is for */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <span className="gold-rule mb-8 block" />
            <span className="label text-[9px] tracking-[0.25em] block mb-6" style={{ color: "var(--gold)" }}>
              Who This Is For
            </span>
            <h2 className="font-heading text-5xl font-bold mb-16" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Three Audiences.{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>One Standard.</span>
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {audiences.map((a, i) => (
              <RevealSection key={a.label} delay={i * 0.12}>
                <div className="p-10 border-r" style={{ borderColor: "rgba(120,118,116,0.12)" }}>
                  <span className="text-2xl block mb-6" style={{ color: "var(--gold)" }}>{a.icon}</span>
                  <p className="font-heading text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>{a.label}</p>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.88)" }}>{a.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="py-20" style={{ backgroundColor: "var(--ivory-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {proofPoints.map((p, i) => (
              <RevealSection key={p.label} delay={i * 0.08}>
                <div className="p-10 text-center border-r" style={{ borderColor: "rgba(120,118,116,0.1)" }}>
                  <p className="font-heading text-5xl font-bold mb-3" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--gold)" }}>{p.numeral}</p>
                  <p className="label text-[8px] tracking-widest leading-relaxed" style={{ color: "rgba(244,244,243,0.65)" }}>{p.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality statement */}
      <section className="py-20" style={{ backgroundColor: "var(--ivory-dark)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <RevealSection>
            <span className="gold-rule mx-auto mb-8 block" />
            <p className="font-heading text-3xl font-bold italic" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              "Sang-e-Taj creates permanent showpieces for corporate headquarters, executive offices, and private residences across the GCC. Every commission is conceived and executed under absolute confidentiality."
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <span className="gold-rule mb-8 block" />
            <span className="label text-[9px] tracking-[0.25em] block mb-6" style={{ color: "var(--gold)" }}>
              The Corporate Process
            </span>
            <h2 className="font-heading text-5xl font-bold mb-16" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              From Commission to{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>Installation</span>
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {corporateProcess.map((step, i) => (
              <RevealSection key={step.number} delay={i * 0.1}>
                <div className="p-8 border-r" style={{ borderColor: "rgba(120,118,116,0.12)" }}>
                  <p className="font-heading text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-cormorant), serif", color: "rgba(120,118,116,0.15)" }}>{step.number}</p>
                  <span className="block w-8 h-px mb-4" style={{ backgroundColor: "var(--gold)" }} />
                  <p className="font-heading text-xl font-bold mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>{step.label}</p>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.88)" }}>{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.4} className="mt-10">
            <div className="inline-block px-6 py-3" style={{ backgroundColor: "rgba(120,118,116,0.08)", borderLeft: "2px solid var(--gold)" }}>
              <p className="text-sm" style={{ color: "rgba(240,237,232,0.82)" }}>
                Corporate commissions begin at a minimum of <strong>5 pieces</strong>. Volume pricing is discussed in confidence during consultation.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Corporate inquiry form */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "var(--ivory-dark)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <RevealSection>
            <GoldRule className="mb-8" />
            <span className="label text-[9px] tracking-[0.25em] block mb-5" style={{ color: "var(--gold)" }}>
              Begin a Private Corporate Consultation
            </span>
            <h2 className="font-heading text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--kohl)" }}>
              Let&apos;s Create Something Remarkable
            </h2>
            <p className="text-sm mb-12" style={{ color: "rgba(244,244,243,0.72)" }}>
              Our corporate relations team responds within one business day. All communications are strictly confidential.
            </p>
          </RevealSection>

          {submitted ? (
            <RevealSection>
              <div className="text-center py-16">
                <span className="text-4xl block mb-6" style={{ color: "var(--gold)" }}>◈</span>
                <p className="font-heading text-3xl font-bold italic mb-4" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--kohl)" }}>
                  Your inquiry has reached our corporate team.
                </p>
                <p className="text-sm" style={{ color: "rgba(244,244,243,0.72)" }}>
                  A dedicated corporate relations manager will contact you personally within one business day.
                </p>
              </div>
            </RevealSection>
          ) : (
            <RevealSection delay={0.1}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <BField label="Company Name" error={errors.company?.message}>
                    <input {...register("company")} type="text" placeholder="Your company or institution" style={inp} />
                  </BField>
                  <BField label="Your Name" error={errors.name?.message}>
                    <input {...register("name")} type="text" placeholder="Full name" style={inp} />
                  </BField>
                  <BField label="Title / Role" error={undefined}>
                    <input {...register("title")} type="text" placeholder="e.g. Chief of Protocol" style={inp} />
                  </BField>
                  <BField label="Country" error={errors.country?.message}>
                    <select {...register("country")} style={inp}>
                      <option value="">Select country</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </BField>
                  <BField label="Email" error={errors.email?.message}>
                    <input {...register("email")} type="email" placeholder="your@company.com" style={inp} />
                  </BField>
                  <BField label="WhatsApp" error={errors.whatsapp?.message}>
                    <input {...register("whatsapp")} type="tel" placeholder="+91 70145 58962" style={inp} />
                  </BField>
                  <BField label="Occasion / Purpose" error={undefined}>
                    <input {...register("occasion")} type="text" placeholder="e.g. Executive office showpiece, New HQ lobby installation, VIP gifting" style={inp} />
                  </BField>
                  <BField label="Estimated Quantity" error={undefined}>
                    <input {...register("quantity")} type="text" placeholder="e.g. 25 pieces" style={inp} />
                  </BField>
                </div>
                <BField label="Preferred Timeline" error={undefined}>
                  <input {...register("timeline")} type="text" placeholder="e.g. Needed by Q4 2025" style={inp} />
                </BField>
                <BField label="Additional Notes" error={undefined}>
                  <textarea {...register("message")} rows={4} placeholder="Any context, branding requirements, or special considerations..." style={{ ...inp, resize: "none" }} />
                </BField>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="label text-[10px] tracking-widest w-full py-4 transition-all duration-500"
                  style={{ backgroundColor: isSubmitting ? "rgba(120,118,116,0.6)" : "var(--gold)", color: "var(--kohl)" }}
                >
                  {isSubmitting ? "Sending..." : "Begin the Corporate Conversation"}
                </button>

                <p className="text-center label text-[8px] tracking-widest" style={{ color: "rgba(244,244,243,0.48)" }}>
                  All communications are strictly confidential.
                </p>
                {submitError && (
                  <p className="text-center label text-[8px] tracking-widest mt-2" style={{ color: "#E88" }}>
                    {submitError}
                  </p>
                )}
              </form>
            </RevealSection>
          )}
        </div>
      </section>
    </div>
  );
}

const inp: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(244,244,243,0.05)",
  border: "1px solid rgba(120,118,116,0.25)",
  color: "var(--kohl)",
  padding: "0.875rem 1rem",
  fontSize: "1rem",
  outline: "none",
  fontFamily: "var(--font-jost), sans-serif",
  fontWeight: 400,
};

function BField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="label text-[8px] tracking-widest block mb-2" style={{ color: "var(--gold)" }}>{label}</label>
      {children}
      {error && <p className="label text-[8px] tracking-widest mt-1" style={{ color: "#E88" }}>{error}</p>}
    </div>
  );
}
