import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Speak to the atelier about your project, a commission or a piece in the collection.",
};

export default function ContactPage() {
  return (
    <div className="bg-marble">
      <section className="pt-40 pb-16 px-6 lg:px-10 marble-veined">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Contact</SectionLabel>
          <h1
            className="font-display mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.04 }}
          >
            Speak with <br />
            <span className="italic text-gold">the atelier.</span>
          </h1>
          <p className="mt-6 max-w-xl">
            Tell us about your project, a piece you have your eye on or a commission you would like to discuss. We reply within one business day.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <form className="flex flex-col gap-5">
          {[
            { id: "name", label: "Your name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "phone", label: "Phone or WhatsApp", type: "tel" },
            { id: "subject", label: "What can we help with?", type: "text" },
          ].map((f) => (
            <label key={f.id} className="block">
              <span className="label-sm" style={{ color: "var(--ink-mute)" }}>
                {f.label}
              </span>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                className="block w-full mt-2 bg-transparent border-b border-vein focus:border-gold outline-none pb-2 text-ink"
              />
            </label>
          ))}
          <label className="block">
            <span className="label-sm" style={{ color: "var(--ink-mute)" }}>
              Message
            </span>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="block w-full mt-2 bg-transparent border-b border-vein focus:border-gold outline-none pb-2 text-ink resize-none"
            />
          </label>

          <button
            type="submit"
            className="label-sm mt-4 self-start transition-colors duration-300 hover:bg-gold"
            style={{
              backgroundColor: "var(--ink)",
              color: "var(--marble)",
              padding: "16px 38px",
              borderRadius: "999px",
            }}
          >
            Send Enquiry
          </button>
        </form>

        <aside className="border-t md:border-t-0 md:border-l border-line md:pl-12 pt-10 md:pt-0">
          <p className="label" style={{ color: "var(--gold)" }}>
            Direct lines
          </p>
          <ul className="mt-5 flex flex-col gap-4">
            <li>
              <p className="label-sm" style={{ color: "var(--ink-mute)" }}>WhatsApp</p>
              <a
                href="https://wa.me/917014558962"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display italic text-ink mt-1 inline-block hover-rule"
                style={{ fontSize: "1.3rem" }}
              >
                +91 70145 58962
              </a>
            </li>
            <li>
              <p className="label-sm" style={{ color: "var(--ink-mute)" }}>Email</p>
              <a
                href="mailto:hello@marble.sangetaj.com"
                className="font-display italic text-ink mt-1 inline-block hover-rule"
                style={{ fontSize: "1.3rem" }}
              >
                hello@marble.sangetaj.com
              </a>
            </li>
            <li>
              <p className="label-sm" style={{ color: "var(--ink-mute)" }}>Workshop</p>
              <p className="font-display italic mt-1" style={{ fontSize: "1.2rem", color: "var(--ink)" }}>
                Makrana, Rajasthan, India
              </p>
              <p className="mt-1" style={{ color: "var(--ink-soft)" }}>
                Private viewings by appointment in Dubai and Riyadh.
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
