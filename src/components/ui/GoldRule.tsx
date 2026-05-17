import { cn } from "@/lib/utils";

interface GoldRuleProps {
  className?: string;
  full?: boolean;
}

export function GoldRule({ className, full = false }: GoldRuleProps) {
  return (
    <span
      className={cn(full ? "gold-rule-full" : "gold-rule", className)}
      aria-hidden="true"
    />
  );
}
