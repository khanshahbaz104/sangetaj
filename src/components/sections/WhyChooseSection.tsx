import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    title: "Premium Natural Marble",
    body: "Sourced from celebrated quarries. Each block hand-selected for veining, density and finish.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 17l9 4 9-4" />
        <path d="M3 12l9 4 9-4" />
      </svg>
    ),
  },
  {
    title: "Handmade by Skilled Artisans",
    body: "Carved and finished by craftspeople who have shaped stone across generations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l9-9" />
        <path d="M14 5l5 5" />
        <path d="M14 5l-2-2 5-2 2 2-2 5z" />
      </svg>
    ),
  },
  {
    title: "Sustainable Craftsmanship",
    body: "Low-waste workshops, slow processes and stone offcuts returned to the workshop floor.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 5 5 9 8 12 3-3 8-7 8-12a8 8 0 0 0-8-8z" />
        <path d="M8 11l3 3 5-5" />
      </svg>
    ),
  },
  {
    title: "Worldwide Shipping",
    body: "Carefully crated and insured. We deliver to homes and projects in over forty countries.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20z" />
      </svg>
    ),
  },
  {
    title: "Secure Packaging",
    body: "Custom foam beds, double-walled cases and dedicated crating for the larger pieces.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
      </svg>
    ),
  },
  {
    title: "Luxury Quality",
    body: "Polishing, edging and finishing checked piece by piece before it leaves the workshop.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4 2 8L12 17l-6.5 4 2-8L2 9h7z" />
      </svg>
    ),
  },
  {
    title: "Custom Manufacturing",
    body: "We make pieces to your sketches, measurements and stone preferences.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-32 marble-veined relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none marble-veined" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 flex flex-col items-center">
          <SectionLabel align="center">Why Choose Sange Taj</SectionLabel>
          <h2 className="font-display mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}>
            Quietly excellent,
            <br />
            <span className="italic text-gold">in every detail.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div
                className="h-full p-7 bg-marble shadow-stone transition-shadow duration-500 hover:shadow-stone-hover group"
                style={{ borderRadius: "8px", border: "1px solid var(--line)" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-gold border border-vein group-hover:border-gold transition-colors duration-300"
                  style={{ borderRadius: "999px" }}
                >
                  {f.icon}
                </div>
                <p className="font-display italic mt-6" style={{ fontSize: "1.3rem", color: "var(--ink)" }}>
                  {f.title}
                </p>
                <p className="mt-3" style={{ fontSize: "0.95rem" }}>
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
