type Props = {
  children: React.ReactNode;
  align?: "left" | "center";
  tone?: "gold" | "mute";
};

export function SectionLabel({ children, align = "left", tone = "gold" }: Props) {
  return (
    <div
      className="flex items-center gap-3"
      style={{ justifyContent: align === "center" ? "center" : "flex-start" }}
    >
      <span
        className="block h-px"
        style={{
          width: "28px",
          background:
            tone === "gold"
              ? "linear-gradient(90deg, var(--gold), transparent)"
              : "linear-gradient(90deg, var(--ink-mute), transparent)",
        }}
      />
      <span
        className="label-sm"
        style={{ color: tone === "gold" ? "var(--gold)" : "var(--ink-mute)" }}
      >
        {children}
      </span>
    </div>
  );
}
