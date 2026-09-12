import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sang_e_taj/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sangetaj",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 11.5l4 8 1.5-4.5L17 10" />
      </svg>
    ),
  },
];

const collectionLinks = [
  { href: "/collections/luxe", label: "The Luxe Collection" },
  { href: "/collections/home-decor", label: "Home Decor" },
  { href: "/collections/bathroom", label: "Bathroom" },
  { href: "/collections/kitchen-dining", label: "Kitchen & Dining" },
  { href: "/collections/furniture", label: "Furniture" },
  { href: "/collections/lighting", label: "Lighting" },
  { href: "/collections/office", label: "Office" },
  { href: "/collections/garden-outdoor", label: "Garden & Outdoor" },
  { href: "/collections/hospitality", label: "Hospitality" },
  { href: "/collections/architectural", label: "Architectural" },
  { href: "/collections/luxury-accessories", label: "Luxury Accessories" },
];

const aboutLinks = [
  { href: "/heritage", label: "Our Heritage" },
  { href: "/corporate", label: "Corporate & Institutional" },
  { href: "/provenance", label: "Provenance" },
  { href: "/bespoke", label: "Custom Orders" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/trade", label: "Trade Program" },
];

const legalLinks = [
  { href: "/shipping", label: "Shipping" },
  { href: "/care", label: "Care Guide" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-marble-deep relative">
      <div className="absolute inset-0 marble-veined opacity-60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-4">
            <p
              className="font-display"
              style={{
                fontSize: "2rem",
                fontStyle: "italic",
                fontWeight: 700,
                color: "#EDD07C",
                textShadow:
                  "0 1px 0 #C49828, 0 2px 0 #A07818, 0 3px 0 #7A5808, 0 4px 5px rgba(0,0,0,0.55)",
              }}
            >
              Sange Taj
            </p>
            <p className="label-sm mt-3" style={{ color: "var(--gold)", letterSpacing: "0.32em" }}>
              Marble · Lifestyle Collection
            </p>

            <p className="mt-6 max-w-sm" style={{ fontSize: "0.95rem" }}>
              Handcrafted marble pieces for modern living. A division of Sange Taj, working with
              skilled artisans and the finest natural stones from quarries across the world.
            </p>

            <div className="flex items-center gap-5 mt-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-ink-mute hover:text-gold transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-5" style={{ color: "var(--gold)" }}>
              Shop
            </p>
            <nav className="flex flex-col gap-3">
              {collectionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover-rule inline-block w-fit"
                  style={{ fontSize: "0.92rem", color: "var(--ink-soft)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-5" style={{ color: "var(--gold)" }}>
              House
            </p>
            <nav className="flex flex-col gap-3">
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover-rule inline-block w-fit"
                  style={{ fontSize: "0.92rem", color: "var(--ink-soft)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="label mb-5" style={{ color: "var(--gold)" }}>
              Newsletter
            </p>
            <p style={{ fontSize: "0.92rem" }}>
              Receive new arrivals, private viewings and atelier notes. No noise, never shared.
            </p>
            <form className="mt-5 flex items-center border-b border-vein pb-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent outline-none text-ink placeholder:text-ink-mute"
                style={{ fontSize: "0.95rem" }}
              />
              <button
                type="submit"
                className="label-sm pl-3"
                style={{ color: "var(--gold)" }}
              >
                Join
              </button>
            </form>

            <div className="mt-8">
              <p className="label-sm" style={{ color: "var(--ink-mute)" }}>
                Talk to us
              </p>
              <a
                href="https://wa.me/917014558962"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 hover-rule w-fit"
                style={{ fontSize: "0.95rem", color: "var(--ink)" }}
              >
                WhatsApp +91 70145 58962
              </a>
              <a
                href="mailto:hello@marble.sangetaj.com"
                className="block mt-1 hover-rule w-fit"
                style={{ fontSize: "0.95rem", color: "var(--ink)" }}
              >
                hello@marble.sangetaj.com
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <p className="label-sm" style={{ color: "var(--ink-mute)" }}>
            © {year} Sange Taj Marble. A division of Sange Taj.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label-sm hover-rule"
                style={{ color: "var(--ink-mute)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
