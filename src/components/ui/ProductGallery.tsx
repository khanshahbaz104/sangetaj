"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
  subtitle: string;
}

export function ProductGallery({ images, name, subtitle }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(() => setActive((a) => (a - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActive((a) => (a + 1) % images.length), [images.length]);

  // Keyboard navigation + close on Escape
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next]);

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main image — click to open lightbox */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "4/3", cursor: "zoom-in" }}
          onClick={() => setLightbox(true)}
        >
          <Image
            key={active}
            src={images[active]}
            alt={name}
            fill
            priority
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(8,8,7,0.2) 0%, transparent 25%)" }}
          />
          {/* Expand hint */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2 py-1" style={{ backgroundColor: "rgba(8,8,7,0.55)", backdropFilter: "blur(8px)" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
            <span className="label text-[7px] tracking-widest" style={{ color: "var(--gold)" }}>
              {images.length > 1 ? `${active + 1} / ${images.length}` : "Expand"}
            </span>
          </div>
          {/* Caption */}
          <div className="absolute bottom-5 left-5 z-10">
            <p className="label text-[8px] tracking-[0.25em]" style={{ color: "rgba(138,136,134,0.9)" }}>
              {subtitle}
            </p>
          </div>
          {/* Corner accents */}
          <div className="absolute bottom-0 left-0 w-12 h-12 z-10" style={{ borderBottom: "1px solid rgba(138,136,134,0.5)", borderLeft: "1px solid rgba(138,136,134,0.5)" }} />
          <div className="absolute top-0 right-0 w-12 h-12 z-10" style={{ borderTop: "1px solid rgba(138,136,134,0.5)", borderRight: "1px solid rgba(138,136,134,0.5)" }} />
        </div>

        {/* Scrollable thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                className="shrink-0 relative overflow-hidden transition-all duration-300"
                style={{
                  width: "80px",
                  height: "60px",
                  outline: i === active ? "1px solid var(--gold)" : "1px solid rgba(138,136,134,0.2)",
                  outlineOffset: "2px",
                  opacity: i === active ? 1 : 0.55,
                  cursor: "pointer",
                }}
              >
                <Image src={src} alt={`${name} view ${i + 1}`} fill className="object-cover object-center" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "rgba(5,5,4,0.96)", backdropFilter: "blur(12px)" }}
          onClick={() => setLightbox(false)}
        >
          {/* Image container — stop propagation so clicking image doesn't close */}
          <div
            className="relative"
            style={{ width: "min(92vw, 1200px)", height: "min(88vh, 900px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={name}
              fill
              className="object-contain"
              sizes="92vw"
            />

            {/* Prev / Next arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 flex items-center justify-center w-10 h-10 transition-opacity duration-200 hover:opacity-100"
                  style={{ opacity: 0.6, border: "1px solid rgba(138,136,134,0.35)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--kohl)" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 flex items-center justify-center w-10 h-10 transition-opacity duration-200 hover:opacity-100"
                  style={{ opacity: 0.6, border: "1px solid rgba(138,136,134,0.35)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--kohl)" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="transition-all duration-300"
                      style={{
                        width: i === active ? "24px" : "6px",
                        height: "2px",
                        backgroundColor: i === active ? "var(--gold)" : "rgba(138,136,134,0.4)",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-100"
            style={{ opacity: 0.7, border: "1px solid rgba(138,136,134,0.35)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--kohl)" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Product name */}
          <div className="absolute bottom-6 left-6">
            <p className="label text-[9px] tracking-widest" style={{ color: "var(--gold)" }}>{name}</p>
            <p className="label text-[8px] tracking-widest mt-1" style={{ color: "rgba(138,136,134,0.6)" }}>{subtitle}</p>
          </div>
        </div>
      )}
    </>
  );
}
