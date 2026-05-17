"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RevealSection } from "@/components/ui/RevealSection";
import { GoldRule } from "@/components/ui/GoldRule";

const navLinks = [
  { href: "/collections", label: "Collections" },
  { href: "/bespoke", label: "Bespoke" },
  { href: "/heritage", label: "Heritage" },
  { href: "/corporate", label: "Corporate Gifting" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/terms",      label: "Terms & Conditions" },
  { href: "/shipping",   label: "Shipping & Delivery" },
  { href: "/provenance", label: "Provenance Policy" },
  { href: "/care",       label: "Care Guide" },
  { href: "/privacy",    label: "Privacy" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--ivory-dark)", color: "var(--kohl)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-10">
        <RevealSection>
          <GoldRule full />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mt-10 md:mt-16">
          {/* Brand */}
          <RevealSection delay={0.1} className="md:col-span-1">
            <p
              className="font-heading text-3xl font-bold mb-2"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Sang-e-Taj
            </p>
            <p
              className="font-heading text-lg font-bold mb-6"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                color: "var(--gold)",
              }}
            >
              سنگ تاج
            </p>
            <p
              className="label text-[9px] tracking-widest leading-relaxed"
              style={{ color: "rgba(244,244,243,0.4)" }}
            >
              Makrana, Rajasthan — The Gulf
            </p>
            <p
              className="label text-[9px] tracking-widest mt-2"
              style={{ color: "rgba(244,244,243,0.4)" }}
            >
              Carved from the Stone of Emperors
            </p>
          </RevealSection>

          {/* Navigation */}
          <RevealSection delay={0.2}>
            <p className="label text-[9px] tracking-widest mb-6" style={{ color: "var(--gold)" }}>
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="label text-[10px] tracking-widest transition-colors duration-300"
                  style={{ color: "rgba(244,244,243,0.55)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--ivory)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(244,244,243,0.55)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </RevealSection>

          {/* Contact */}
          <RevealSection delay={0.3}>
            <p className="label text-[9px] tracking-widest mb-6" style={{ color: "var(--gold)" }}>
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/917014558962"
                target="_blank"
                rel="noopener noreferrer"
                className="label text-[10px] tracking-widest transition-colors duration-300"
                style={{ color: "rgba(244,244,243,0.55)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#25D366")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(244,244,243,0.55)")
                }
              >
                WhatsApp: +91 70145 58962
              </a>
              <a
                href="mailto:atelier@sangetaj.com"
                className="label text-[10px] tracking-widest transition-colors duration-300"
                style={{ color: "rgba(244,244,243,0.55)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--ivory)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(244,244,243,0.55)")
                }
              >
                atelier@sangetaj.com
              </a>
              <p
                className="label text-[10px] tracking-widest"
                style={{ color: "rgba(244,244,243,0.62)" }}
              >
                Private viewings by appointment
              </p>
            </div>
          </RevealSection>

          {/* Statement */}
          <RevealSection delay={0.4}>
            <p className="label text-[9px] tracking-widest mb-6" style={{ color: "var(--gold)" }}>
              Our Promise
            </p>
            <p
              className="font-heading text-base font-bold leading-relaxed italic"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                color: "rgba(244,244,243,0.6)",
              }}
            >
              Every piece arrives with a hand-signed certificate of Makrana
              origin and artisan attribution. Client identities are never
              disclosed.
            </p>
          </RevealSection>
        </div>

        <RevealSection delay={0.5} className="mt-16">
          <GoldRule full />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
            <div>
              <p
                className="label text-[9px] tracking-widest"
                style={{ color: "rgba(244,244,243,0.52)" }}
              >
                © {new Date().getFullYear()} Sang-e-Taj. All rights reserved.
              </p>
              <p
                className="label text-[8px] tracking-widest mt-2 leading-relaxed"
                style={{ color: "rgba(244,244,243,0.25)", maxWidth: "420px" }}
              >
                Sang-e-Taj is an independent artisan studio. All sculptures are original works of decorative art inspired by generic automotive and maritime forms. Sang-e-Taj is not affiliated with, endorsed by, licensed by, or associated with any automotive manufacturer, maritime institution, or third-party brand. All product names are original and proprietary to Sang-e-Taj. Natural marble variation means finished pieces may differ slightly from images shown.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="label text-[9px] tracking-widest transition-colors duration-300"
                  style={{ color: "rgba(244,244,243,0.52)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </footer>
  );
}
