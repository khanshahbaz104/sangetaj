"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { RevealSection } from "@/components/ui/RevealSection";
import { GoldRule } from "@/components/ui/GoldRule";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  whatsapp: z.string().optional(),
  subject: z.string().min(1, "Subject required"),
  message: z.string().min(10, "Please tell us a little more"),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  "Enquire about a collection piece",
  "Begin a bespoke commission",
  "Corporate / institutional gifting",
  "Press & editorial",
  "Private viewing",
  "Other",
];

const contactDetails = [
  {
    label: "WhatsApp",
    value: "+91 70145 58962",
    sub: "Preferred channel. Responds within hours.",
    href: "https://wa.me/917014558962",
    icon: "◈",
  },
  {
    label: "Email",
    value: "atelier@sangetaj.com",
    sub: "For detailed inquiries. Responds within 24 hours.",
    href: "mailto:atelier@sangetaj.com",
    icon: "◇",
  },
  {
    label: "Private Viewings",
    value: "By appointment",
    sub: "Dubai, Abu Dhabi, Riyadh, Doha. Contact us to arrange.",
    href: null,
    icon: "◈",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try WhatsApp or email us directly.");
    }
  };

  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      {/* Header */}
      <div className="pt-40 pb-20 px-6" style={{ backgroundColor: "var(--ivory-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <span className="label text-[9px] tracking-[0.25em] block mb-6" style={{ color: "var(--gold)" }}>
              Contact the Atelier
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--kohl)" }}>
              Begin a{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>Conversation</span>
            </h1>
            <p className="mt-6 text-sm max-w-md" style={{ color: "rgba(244,244,243,0.75)" }}>
              Every inquiry receives a personal response. We do not use automated replies.
            </p>
          </RevealSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Contact info */}
          <div>
            <RevealSection>
              <span className="gold-rule mb-8 block" />
              <span className="label text-[9px] tracking-[0.25em] block mb-10" style={{ color: "var(--gold)" }}>
                Reach Us Directly
              </span>
            </RevealSection>

            <div className="space-y-10">
              {contactDetails.map((detail, i) => (
                <RevealSection key={detail.label} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <span className="text-lg mt-1" style={{ color: "var(--gold)" }}>{detail.icon}</span>
                    <div>
                      <p className="label text-[8px] tracking-widest mb-2" style={{ color: "var(--gold)" }}>{detail.label}</p>
                      {detail.href ? (
                        <a href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-heading text-2xl font-bold block mb-1 transition-colors duration-300" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-heading text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-cormorant), serif" }}>{detail.value}</p>
                      )}
                      <p className="text-sm" style={{ color: "rgba(240,237,232,0.75)" }}>{detail.sub}</p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>

            {/* WhatsApp large CTA */}
            <RevealSection delay={0.4} className="mt-14">
              <a
                href="https://wa.me/917014558962?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20Sang-e-Taj%20sculpture."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 transition-all duration-300 group"
                style={{ backgroundColor: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#25D366" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="label text-[9px] tracking-widest mb-1" style={{ color: "#25D366" }}>
                    Message Us on WhatsApp
                  </p>
                  <p className="text-sm" style={{ color: "rgba(240,237,232,0.80)" }}>
                    The fastest way to reach our atelier team
                  </p>
                </div>
              </a>
            </RevealSection>
          </div>

          {/* Contact form */}
          <div>
            <RevealSection delay={0.2}>
              <GoldRule className="mb-8" />
              <span className="label text-[9px] tracking-[0.25em] block mb-8" style={{ color: "var(--gold)" }}>
                Send an Inquiry
              </span>
            </RevealSection>

            {submitted ? (
              <RevealSection>
                <div className="py-16 text-center">
                  <span className="text-3xl block mb-6" style={{ color: "var(--gold)" }}>◈</span>
                  <p className="font-heading text-2xl font-bold italic mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    Your message has reached us.
                  </p>
                  <p className="text-sm" style={{ color: "rgba(240,237,232,0.75)" }}>
                    A member of our team will respond personally within 24 hours.
                  </p>
                </div>
              </RevealSection>
            ) : (
              <RevealSection delay={0.25}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <CField label="Your Name" error={errors.name?.message}>
                      <input {...register("name")} type="text" placeholder="Full name" style={inp} />
                    </CField>
                    <CField label="Email" error={errors.email?.message}>
                      <input {...register("email")} type="email" placeholder="your@email.com" style={inp} />
                    </CField>
                  </div>
                  <CField label="WhatsApp (optional)" error={undefined}>
                    <input {...register("whatsapp")} type="tel" placeholder="+91 70145 58962" style={inp} />
                  </CField>
                  <CField label="Subject" error={errors.subject?.message}>
                    <select {...register("subject")} style={inp}>
                      <option value="">Select a subject</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </CField>
                  <CField label="Message" error={errors.message?.message}>
                    <textarea {...register("message")} rows={5} placeholder="Tell us how we can help..." style={{ ...inp, resize: "none" }} />
                  </CField>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="label text-[10px] tracking-widest w-full py-4 transition-all duration-500"
                    style={{ backgroundColor: isSubmitting ? "rgba(120,118,116,0.6)" : "var(--gold)", color: "var(--ivory)" }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-center label text-[8px] tracking-widest" style={{ color: "rgba(240,237,232,0.60)" }}>
                    Responded to personally within 24 hours.
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
        </div>
      </div>
    </div>
  );
}

const inp: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(240,237,232,0.04)",
  border: "1px solid rgba(120,118,116,0.25)",
  color: "var(--kohl)",
  padding: "0.875rem 1rem",
  fontSize: "1rem",
  outline: "none",
  fontFamily: "var(--font-jost), sans-serif",
  fontWeight: 400,
};

function CField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="label text-[8px] tracking-widest block mb-2" style={{ color: "var(--gold)" }}>{label}</label>
      {children}
      {error && <p className="label text-[8px] tracking-widest mt-1" style={{ color: "#C44" }}>{error}</p>}
    </div>
  );
}
