import { cn } from "../../utils/cn";

export function SectionTitle({ children, darkMode }) {
  return (
    <span className={cn(
      "text-xs font-mono uppercase tracking-[0.25em]",
      darkMode ? "text-neutral-400" : "text-neutral-500"
    )}>
      {children}
    </span>
  );
}