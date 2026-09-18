import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export function SectionBadge({ children, darkMode }) {
  return (
    <span className={cn(
      "text-xs font-mono uppercase tracking-[0.3em]",
      darkMode ? "text-neutral-500" : "text-neutral-400"
    )}>
      {children}
    </span>
  );
}

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

export function SectionDivider({ children, className, darkMode }) {
  return (
    <div className={cn(
      "flex items-center justify-between py-5",
      className
    )}>
      {children}
    </div>
  );
}
