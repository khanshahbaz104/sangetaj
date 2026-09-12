"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/collections/luxe", label: "Luxe" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/bespoke", label: "Bespoke" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          height: "72px",
          backgroundColor: transparent ? "rgba(8, 8, 7, 0.2)" : "rgba(8, 8, 7, 0.94)",
          backdropFilter: transparent ? "blur(6px)" : "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: transparent ? "blur(6px)" : "blur(20px) saturate(1.4)",
          borderBottom: `1px solid ${transparent ? "rgba(168,166,164,0.18)" : "rgba(168,166,164,0.14)"}`,
          transition:
            "background-color 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease",
        }}
      >
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <span
              className="font-display"
              style={{
                fontSize: "1.65rem",
                fontWeight: 700,
                fontStyle: "italic",
                letterSpacing: "-0.01em",
                lineHeight: 1,
                color: "#EDD07C",
                textShadow:
                  "0 1px 0 #C49828, 0 2px 0 #A07818, 0 3px 0 #7A5808, 0 4px 5px rgba(0,0,0,0.55)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Sange Taj
            </span>
            <span
              className="label-sm mt-1"
              style={{
                color: "var(--gold)",
                letterSpacing: "0.3em",
                fontSize: "0.42rem",
              }}
            >
              Marble · Lifestyle Collection
            </span>
          </Link>

          <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-9">
            {navLinks.map(({ href, label }) => {
              const active = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="group relative"
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    paddingBottom: "2px",
                    color: active
                      ? "var(--gold)"
                      : transparent
                      ? "rgba(244,244,243,0.92)"
                      : "rgba(240,237,232,0.82)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {label}
                  <span
                    className="absolute bottom-0 left-0 h-px group-hover:w-full transition-all duration-300"
                    style={{
                      width: active ? "100%" : "0%",
                      backgroundColor: "var(--gold)",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://sangetaj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex label-sm hover-rule"
              style={{
                color: "rgba(244,244,243,0.5)",
                transition: "color 0.3s ease",
              }}
            >
              Visit Sange Taj
            </a>

            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 group"
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: transparent ? "rgba(244,244,243,0.92)" : "var(--ink)",
                transition: "color 0.3s ease",
              }}
            >
              Enquire
              <span
                className="block h-px group-hover:w-6 w-3 transition-all duration-300"
                style={{ background: "var(--gold)" }}
              />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-9 h-9"
            >
              <motion.span
                className="block h-px"
                style={{
                  width: 22,
                  backgroundColor: "var(--ink)",
                }}
                animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.span
                className="block h-px"
                style={{
                  width: 22,
                  backgroundColor: "var(--ink)",
                }}
                animate={menuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-center px-8 marble-veined"
          >
            <nav className="relative flex flex-col">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={href}
                    className="font-display block py-3"
                    style={{
                      fontSize: "clamp(2rem, 7vw, 2.8rem)",
                      fontWeight: 500,
                      borderBottom: "1px solid var(--line)",
                      color: pathname.startsWith(href) ? "var(--gold)" : "var(--ink)",
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative mt-10 pt-6 flex items-center justify-between"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              <a
                href="https://wa.me/917014558962"
                target="_blank"
                rel="noopener noreferrer"
                className="label-sm"
                style={{ color: "var(--gold)" }}
              >
                Chat on WhatsApp
              </a>
              <a
                href="https://sangetaj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-sm"
                style={{ color: "var(--ink-mute)" }}
              >
                sangetaj.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
