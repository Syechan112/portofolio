import { cn } from "../../utils/cn";

export function SectionCount({ children, darkMode }) {
  return (
    <span className={cn(
      "text-xs font-mono",
      darkMode ? "text-neutral-600" : "text-neutral-400"
    )}>
      {children}
    </span>
  );
}