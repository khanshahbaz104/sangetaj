"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";

const navHrefs = [
  { href: "/collections", key: "collections" },
  { href: "/bespoke",     key: "bespoke" },
  { href: "/heritage",    key: "heritage" },
  { href: "/corporate",   key: "corporate" },
  { href: "/contact",     key: "contact" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const pathname                  = usePathname();
  const { lang, setLang, isAr }   = useLanguage();
  const T                         = translations[lang].nav;
  const isHome    = pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          height: "62px",
          backgroundColor: transparent ? "rgba(8,8,7,0.18)" : "rgba(8,8,7,0.96)",
          backdropFilter: transparent ? "blur(4px)" : "blur(20px) saturate(1.3)",
          borderBottom: `1px solid ${transparent ? "rgba(138,136,134,0.18)" : "rgba(138,136,134,0.15)"}`,
          transition: "background-color 0.6s ease, backdrop-filter 0.6s ease, border-color 0.6s ease",
        }}
      >
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none shrink-0"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <span style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.65rem",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              color: "#EDD07C",
              /* Sharp 3-D extrusion — directional shadows only, no spread glow at rest */
              textShadow: logoHovered
                ? "0 1px 0 #C49828, 0 2px 0 #A07818, 0 3px 0 #7A5808, 0 4px 5px rgba(0,0,0,0.65), 0 0 20px rgba(230,185,70,0.68)"
                : "0 1px 0 #C49828, 0 2px 0 #A07818, 0 3px 0 #7A5808, 0 4px 5px rgba(0,0,0,0.55)",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              transition: "text-shadow 0.35s ease",
            } as React.CSSProperties}>
              Sang-e-Taj
            </span>
            <span style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.38rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontWeight: 600,
              lineHeight: 1,
              marginTop: "5px",
              color: logoHovered ? "#F0DC9A" : "var(--gold)",
              textShadow: logoHovered ? "0 0 8px rgba(230,190,70,0.55)" : "none",
              WebkitFontSmoothing: "antialiased",
              transition: "color 0.35s ease, text-shadow 0.35s ease",
            } as React.CSSProperties}>
              Makrana · Craft Since 1631
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-9">
            {navHrefs.map(({ href, key }) => {
              const active = pathname === href || pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="group relative"
                  style={{ fontSize: "0.5625rem", letterSpacing: isAr ? "0.06em" : "0.17em", textTransform: "uppercase", fontWeight: 700, paddingBottom: "2px", color: active ? "var(--gold)" : transparent ? "rgba(244,244,243,0.92)" : "rgba(240,237,232,0.82)", transition: "color 0.3s ease" }}
                >
                  {T[key]}
                  <span className="absolute bottom-0 left-0 h-px group-hover:w-full transition-all duration-300" style={{ width: active ? "100%" : "0%", backgroundColor: "var(--gold)" }} />
                </Link>
              );
            })}
          </nav>

          {/* Right side: Enquire + lang toggle + hamburger */}
          <div className="flex items-center gap-4 shrink-0">

            {/* EN / AR toggle */}
            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="hidden lg:flex items-center gap-1 label text-[8px] tracking-widest transition-colors duration-300"
              style={{ color: "rgba(240,237,232,0.45)" }}
              aria-label="Switch language"
            >
              <span style={{ color: isAr ? "rgba(240,237,232,0.35)" : "var(--gold)" }}>EN</span>
              <span style={{ color: "rgba(240,237,232,0.2)" }}>·</span>
              <span style={{ color: isAr ? "var(--gold)" : "rgba(240,237,232,0.35)" }}>AR</span>
            </button>

            <Link
              href="/contact"
              className="hidden lg:inline-flex label text-[9px] tracking-widest items-center gap-2 group"
              style={{ color: transparent ? "rgba(244,244,243,0.92)" : "var(--kohl)", transition: "color 0.3s ease" }}
            >
              {T.enquire}
              <span className="block h-px group-hover:w-6 w-3 transition-all duration-300" style={{ background: "var(--gold)" }} />
            </Link>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8">
              <motion.span className="block h-px" style={{ width: 20, backgroundColor: "var(--kohl)", transition: "background-color 0.4s ease" }} animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }} />
              <motion.span className="block h-px" style={{ width: 20, backgroundColor: "var(--kohl)", transition: "background-color 0.4s ease" }} animate={menuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-center px-8"
            style={{ backgroundColor: "var(--ivory-dark)" }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 15%, rgba(138,136,134,0.09) 0%, transparent 55%)" }} />

            {/* Mobile lang toggle */}
            <div className="relative flex justify-end mb-6">
              <button
                onClick={() => setLang(isAr ? "en" : "ar")}
                className="label text-[9px] tracking-widest flex items-center gap-2"
                style={{ color: "rgba(244,244,243,0.4)" }}
              >
                <span style={{ color: isAr ? "rgba(244,244,243,0.3)" : "var(--gold)" }}>EN</span>
                <span style={{ color: "rgba(244,244,243,0.15)" }}>·</span>
                <span style={{ color: isAr ? "var(--gold)" : "rgba(244,244,243,0.3)" }}>AR</span>
              </button>
            </div>

            <nav className="relative flex flex-col">
              {navHrefs.map(({ href, key }, i) => (
                <motion.div key={href} initial={{ opacity: 0, x: isAr ? 12 : -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.12 + i * 0.07, duration: 0.4 }}>
                  <Link
                    href={href}
                    style={{ fontFamily: isAr ? "var(--font-cairo), sans-serif" : "var(--font-cormorant), serif", fontSize: "clamp(2rem, 7vw, 2.8rem)", fontWeight: 600, letterSpacing: isAr ? "0.01em" : "0.01em", display: "block", paddingTop: "0.65rem", paddingBottom: "0.65rem", borderBottom: "1px solid rgba(244,244,243,0.07)", color: pathname === href || pathname.startsWith(href) ? "var(--gold)" : "rgba(244,244,243,0.88)" }}
                  >
                    {T[key]}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="relative mt-10 pt-6 flex items-center justify-between" style={{ borderTop: "1px solid rgba(244,244,243,0.07)" }}>
              <a href="https://wa.me/917014558962" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.5625rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 400, color: "var(--gold)" }}>
                {T.whatsappCta}
              </a>
              <span style={{ fontSize: "0.42rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(244,244,243,0.22)" }}>
                سنگ تاج
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
