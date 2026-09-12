import { marbleProfile } from "@/lib/marbles";
import type { MarbleType } from "@/data/products";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { dot: number; gap: number; font: string }> = {
  sm: { dot: 10, gap: 6, font: "0.56rem" },
  md: { dot: 14, gap: 8, font: "0.62rem" },
  lg: { dot: 18, gap: 10, font: "0.7rem" },
};

type Props = {
  marble: MarbleType;
  size?: Size;
  showOrigin?: boolean;
  tone?: "light" | "dark";
};

export function MarbleChip({ marble, size = "sm", showOrigin = false, tone = "light" }: Props) {
  const profile = marbleProfile(marble);
  const s = sizes[size];

  return (
    <span
      className="inline-flex items-center"
      style={{ gap: s.gap, color: tone === "light" ? "var(--ink-soft)" : "var(--marble)" }}
    >
      <span
        aria-hidden
        style={{
          width: s.dot,
          height: s.dot,
          borderRadius: "999px",
          background: `radial-gradient(circle at 35% 30%, ${profile.swatch} 0%, ${profile.swatch} 55%, ${profile.vein} 100%)`,
          border: "1px solid rgba(168,166,164,0.32)",
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.15)",
          flexShrink: 0,
        }}
      />
      <span
        className="label-sm"
        style={{
          fontSize: s.font,
          letterSpacing: "0.22em",
          color: "var(--ink-soft)",
          whiteSpace: "nowrap",
        }}
      >
        {profile.name}
        {showOrigin && (
          <span
            style={{ color: "var(--ink-mute)", marginLeft: "0.6em", letterSpacing: "0.18em" }}
          >
            · {profile.origin}
          </span>
        )}
      </span>
    </span>
  );
}
