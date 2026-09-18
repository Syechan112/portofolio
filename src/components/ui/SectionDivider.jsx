import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

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