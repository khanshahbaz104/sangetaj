"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "view";

export function CustomCursor() {
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Ring follows with a soft spring lag
  const ringX = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.6 });

  const [state, setState] = useState<CursorState>("default");
  const [isMobile, setIsMobile] = useState(true);
  const stateRef = useRef<CursorState>("default");

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setIsMobile(false);

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      let next: CursorState = "default";
      if (t.closest("[data-cursor='view']") || t.closest(".cursor-view")) {
        next = "view";
      } else if (t.closest("a") || t.closest("button") || t.closest("label")) {
        next = "hover";
      }
      if (next !== stateRef.current) {
        stateRef.current = next;
        setState(next);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [rawX, rawY]);

  if (isMobile) return null;

  const isHover = state === "hover";
  const isView  = state === "view";

  return (
    <>
      {/* ── Dot — follows mouse exactly ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{ x: rawX, y: rawY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width:  isView ? 0 : isHover ? 4 : 5,
            height: isView ? 0 : isHover ? 4 : 5,
            backgroundColor: isHover ? "var(--kohl)" : "var(--gold)",
            opacity: isView ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* ── Ring — lags behind with spring ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full flex items-center justify-center"
          animate={{
            width:  isView ? 72 : isHover ? 36 : 24,
            height: isView ? 72 : isHover ? 36 : 24,
            border: isView
              ? "1px solid rgba(168,166,164,0.55)"
              : isHover
              ? "1px solid rgba(240,237,232,0.65)"
              : "1px solid rgba(168,166,164,0.38)",
            backgroundColor: isView
              ? "rgba(168,166,164,0.06)"
              : "transparent",
            rotate: isView ? 45 : 0,
          }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* "View" label inside ring */}
          {isView && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "7px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(168,166,164,0.9)",
                rotate: -45,
                display: "block",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              View
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
