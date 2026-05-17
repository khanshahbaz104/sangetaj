"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { RevealSection } from "@/components/ui/RevealSection";
import { GoldRule } from "@/components/ui/GoldRule";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  country: z.string().min(1, "Country is required"),
  whatsapp: z.string().min(7, "WhatsApp number is required"),
  email: z.string().email("Valid email required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Other",
];

export function ProductInquiryForm({ productName }: { productName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { message: `I am interested in ${productName}.` },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, productName }),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try WhatsApp or email us directly.");
    }
  };

  return (
    <section
      className="py-12 md:py-16"
      style={{ backgroundColor: "var(--ivory-dark)" }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <RevealSection>
          <GoldRule className="mb-8" />
          <span
            className="label text-[9px] tracking-[0.25em] block mb-5"
            style={{ color: "var(--gold)" }}
          >
            Private Inquiry
          </span>
          <h2
            className="font-heading text-4xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: "var(--kohl)",
            }}
          >
            Receive a Private Quotation
          </h2>
          <p
            className="text-sm mb-10"
            style={{ color: "rgba(244,244,243,0.45)" }}
          >
            All inquiries receive a personal response within 24 hours.
          </p>
        </RevealSection>

        {submitted ? (
          <RevealSection>
            <div className="text-center py-12">
              <span className="text-3xl block mb-6" style={{ color: "var(--gold)" }}>◈</span>
              <p
                className="font-heading text-2xl font-bold italic mb-3"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: "var(--kohl)",
                }}
              >
                Your inquiry has reached us.
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(244,244,243,0.45)" }}
              >
                A member of our atelier team will be in contact personally
                within 24 hours.
              </p>
            </div>
          </RevealSection>
        ) : (
          <RevealSection delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Your Name"
                  error={errors.name?.message}
                >
                  <input
                    {...register("name")}
                    type="text"
                    className="form-input"
                    placeholder="Full name"
                    style={inputStyle}
                  />
                </FormField>

                <FormField label="Country" error={errors.country?.message}>
                  <select
                    {...register("country")}
                    style={inputStyle}
                  >
                    <option value="">Select country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="WhatsApp Number"
                  error={errors.whatsapp?.message}
                >
                  <input
                    {...register("whatsapp")}
                    type="tel"
                    placeholder="+91 70145 58962"
                    style={inputStyle}
                  />
                </FormField>

                <FormField label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="your@email.com"
                    style={inputStyle}
                  />
                </FormField>
              </div>

              <FormField label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={4}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </FormField>

              <button
                type="submit"
                disabled={isSubmitting}
                className="label text-[10px] tracking-widest w-full py-4 transition-all duration-500"
                style={{
                  backgroundColor: isSubmitting ? "rgba(120,118,116,0.6)" : "var(--gold)",
                  color: "var(--kohl)",
                }}
              >
                {isSubmitting ? "Sending..." : "Begin the Conversation"}
              </button>

              <p
                className="text-center label text-[8px] tracking-widest"
                style={{ color: "rgba(244,244,243,0.52)" }}
              >
                Your information is used only to respond to your enquiry and is never shared with third parties.{" "}
                <a href="/privacy" style={{ color: "var(--gold)", textDecoration: "underline" }}>Privacy Policy</a>
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
  );
}

const inputStyle: React.CSSProperties = {
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

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="label text-[8px] tracking-widest block mb-2"
        style={{ color: "var(--gold)" }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          className="label text-[8px] tracking-widest mt-1"
          style={{ color: "#E88" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
