"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { RevealSection } from "@/components/ui/RevealSection";
import { RevealText } from "@/components/ui/RevealText";
import { GoldRule } from "@/components/ui/GoldRule";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  country: z.string().min(1, "Country required"),
  whatsapp: z.string().min(7, "WhatsApp required"),
  email: z.string().email("Valid email required"),
  pieceType: z.string().min(1, "Please select a type"),
  subject: z.string().min(2, "Please describe the subject"),
  purpose: z.string().min(1, "Purpose required"),
  scale: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  personalisation: z.array(z.string()).optional(),
  message: z.string().optional(),
  referral: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const countries = ["United Arab Emirates","Saudi Arabia","Qatar","Kuwait","Bahrain","Oman","Other"];
const pieceTypes = ["Automotive showpiece","Maritime heritage showpiece","Falcon or cultural symbol","Architectural or palace motif","Custom interior statement piece","Other"];
const purposes = ["Personal interior showpiece","Permanent display in a private residence","Corporate or executive interior","Institutional / government space","Gift for an individual","Other"];
const scales = ["1:18","1:12","1:8","Monumental (life-size or larger)","Not sure — advise me"];
const timelines = ["Under 8 weeks","8–12 weeks","12–20 weeks","Flexible"];
const budgets = ["Under USD 5,000","USD 5,000–15,000","USD 15,000–50,000","USD 50,000+","Prefer not to say"];
const personalisationOptions = ["Engraving (English calligraphy)","Engraving (Arabic calligraphy)","Branded or institutional base plaque","Custom stone finish or colour wash","Bespoke presentation case"];
const referrals = ["Referral from a contact","Instagram / Social media","WhatsApp","Private event or exhibition","Other"];

const steps = [
  { number: "01", label: "The Brief", desc: "You describe the vision. We ask questions. No commitment required at this stage." },
  { number: "02", label: "The Proposal", desc: "Within five working days, we deliver a written proposal: dimensions, material grade, finish options, timeline, and investment." },
  { number: "03", label: "The Making", desc: "A dedicated artisan in Makrana begins the work. You receive photographic progress updates at agreed milestones." },
  { number: "04", label: "Delivery", desc: "The finished piece arrives in a hand-finished wooden presentation case, with a certificate of provenance and artisan signature." },
];

export default function BespokePage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/bespoke", {
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
        className="relative min-h-[60vh] flex items-end pb-20 pt-40 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--ivory-dark)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(120,118,116,0.3) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <RevealSection>
            <span
              className="label text-[9px] tracking-[0.25em] block mb-6"
              style={{ color: "var(--gold)" }}
            >
              Bespoke Commission
            </span>
          </RevealSection>
          <RevealText
            as="h1"
            delay={0.1}
            className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold"
            style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--kohl)" } as React.CSSProperties}
          >
            There Is No Catalogue
          </RevealText>
          <RevealText
            as="h1"
            delay={0.2}
            className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold italic"
            style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--gold)" } as React.CSSProperties}
          >
            for the Unprecedented
          </RevealText>
          <RevealSection delay={0.3}>
            <p
              className="mt-8 text-sm max-w-md"
              style={{ color: "rgba(244,244,243,0.75)" }}
            >
              Every Sang-e-Taj bespoke commission begins the same way —
              with a conversation about the space, the vision, and what
              should stand in it permanently.
            </p>
          </RevealSection>
        </div>
      </div>

      {/* Process */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-6">
        <RevealSection>
          <span className="gold-rule mb-8 block" />
          <span
            className="label text-[9px] tracking-[0.25em] block mb-6"
            style={{ color: "var(--gold)" }}
          >
            The Journey
          </span>
          <h2
            className="font-heading text-5xl font-bold mb-16"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            From Vision to{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Masterpiece
            </span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mb-12">
          {steps.map((step, i) => (
            <RevealSection key={step.number} delay={i * 0.1}>
              <div
                className="p-6 md:p-8"
                style={{ borderColor: "rgba(120,118,116,0.15)", borderBottom: "1px solid rgba(120,118,116,0.15)", borderRight: "1px solid rgba(120,118,116,0.15)" }}
              >
                <p
                  className="font-heading text-5xl font-bold mb-5"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "rgba(120,118,116,0.15)",
                  }}
                >
                  {step.number}
                </p>
                <span className="block w-8 h-px mb-4" style={{ backgroundColor: "var(--gold)" }} />
                <p
                  className="font-heading text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {step.label}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.88)" }}>
                  {step.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.4}>
          <div
            className="inline-block px-6 py-3"
            style={{ backgroundColor: "rgba(120,118,116,0.08)", borderLeft: "2px solid var(--gold)" }}
          >
            <p className="text-sm" style={{ color: "rgba(240,237,232,0.82)" }}>
              Standard commissions: <strong>8–12 weeks</strong> from brief approval. Complex or monumental pieces: quoted individually.
            </p>
          </div>
        </RevealSection>
      </section>

      {/* Inquiry form */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: "var(--ivory-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <RevealSection>
            <GoldRule className="mb-8" />
            <span
              className="label text-[9px] tracking-[0.25em] block mb-5"
              style={{ color: "var(--gold)" }}
            >
              Begin the Conversation
            </span>
            <h2
              className="font-heading text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--kohl)" }}
            >
              Commission a Bespoke Piece
            </h2>
            <p
              className="text-sm mb-12"
              style={{ color: "rgba(244,244,243,0.72)" }}
            >
              All inquiries receive a personal response within 24 hours.
            </p>
          </RevealSection>

          {submitted ? (
            <RevealSection>
              <div className="text-center py-16">
                <span className="text-4xl block mb-6" style={{ color: "var(--gold)" }}>◈</span>
                <p
                  className="font-heading text-3xl font-bold italic mb-4"
                  style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--kohl)" }}
                >
                  Your inquiry has reached us.
                </p>
                <p className="text-sm" style={{ color: "rgba(244,244,243,0.72)" }}>
                  A member of our atelier team will be in contact personally within 24 hours.
                  You will also receive a WhatsApp message from our team shortly.
                </p>
              </div>
            </RevealSection>
          ) : (
            <RevealSection delay={0.1}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {/* Personal details */}
                <fieldset>
                  <legend className="label text-[8px] tracking-widest mb-6 block pb-3 w-full" style={{ color: "var(--gold)", borderBottom: "1px solid rgba(120,118,116,0.2)" }}>
                    Your Details
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <BField label="Your Name" error={errors.name?.message}>
                      <input {...register("name")} type="text" placeholder="Full name" style={inp} />
                    </BField>
                    <BField label="Country" error={errors.country?.message}>
                      <select {...register("country")} style={inp}>
                        <option value="">Select country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </BField>
                    <BField label="WhatsApp Number (preferred)" error={errors.whatsapp?.message}>
                      <input {...register("whatsapp")} type="tel" placeholder="+91 70145 58962" style={inp} />
                    </BField>
                    <BField label="Email Address" error={errors.email?.message}>
                      <input {...register("email")} type="email" placeholder="your@email.com" style={inp} />
                    </BField>
                  </div>
                </fieldset>

                {/* Piece details */}
                <fieldset>
                  <legend className="label text-[8px] tracking-widest mb-6 block pb-3 w-full" style={{ color: "var(--gold)", borderBottom: "1px solid rgba(120,118,116,0.2)" }}>
                    The Piece
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <BField label="Type of Piece" error={errors.pieceType?.message}>
                      <select {...register("pieceType")} style={inp}>
                        <option value="">Select type</option>
                        {pieceTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </BField>
                    <BField label="Intended Purpose" error={errors.purpose?.message}>
                      <select {...register("purpose")} style={inp}>
                        <option value="">Select purpose</option>
                        {purposes.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </BField>
                    <BField label="Desired Scale" error={errors.scale?.message}>
                      <select {...register("scale")} style={inp}>
                        <option value="">Select scale</option>
                        {scales.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </BField>
                    <BField label="Preferred Timeline" error={errors.timeline?.message}>
                      <select {...register("timeline")} style={inp}>
                        <option value="">Select timeline</option>
                        {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </BField>
                  </div>
                  <div className="mt-5">
                    <BField label="What should we sculpt?" error={errors.subject?.message}>
                      <input {...register("subject")} type="text" placeholder="e.g. A 1:18 marble sculpture for my entrance hall, with my name engraved in Arabic" style={inp} />
                    </BField>
                  </div>
                </fieldset>

                {/* Personalisation */}
                <fieldset>
                  <legend className="label text-[8px] tracking-widest mb-6 block pb-3 w-full" style={{ color: "var(--gold)", borderBottom: "1px solid rgba(120,118,116,0.2)" }}>
                    Personalisation (select all that apply)
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {personalisationOptions.map(opt => (
                      <label key={opt} className="flex items-start gap-3 cursor-none">
                        <input
                          type="checkbox"
                          value={opt}
                          {...register("personalisation")}
                          className="mt-0.5"
                          style={{ accentColor: "var(--gold)" }}
                        />
                        <span className="text-base leading-relaxed" style={{ color: "rgba(244,244,243,0.85)" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Budget & message */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <BField label="Budget Guidance (optional)" error={undefined}>
                    <select {...register("budget")} style={inp}>
                      <option value="">Prefer not to say</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </BField>
                  <BField label="How did you hear about us?" error={undefined}>
                    <select {...register("referral")} style={inp}>
                      <option value="">Select</option>
                      {referrals.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </BField>
                </div>

                <BField label="Tell us more" error={undefined}>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Any additional details, references, or context that will help us understand your vision..."
                    style={{ ...inp, resize: "none" }}
                  />
                </BField>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="label text-[10px] tracking-widest w-full py-4 transition-all duration-500"
                  style={{ backgroundColor: isSubmitting ? "rgba(120,118,116,0.6)" : "var(--gold)", color: "var(--kohl)" }}
                >
                  {isSubmitting ? "Sending..." : "Begin the Conversation"}
                </button>

                <p
                  className="text-center label text-[8px] tracking-widest"
                  style={{ color: "rgba(244,244,243,0.48)" }}
                >
                  Your information is never shared or disclosed.
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
