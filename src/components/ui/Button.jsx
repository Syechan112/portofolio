import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export function Button({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  className, 
  darkMode,
  icon: Icon
}) {
  const baseStyles = "group inline-flex items-center gap-2 px-6 py-3 border-2 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: darkMode 
      ? "border-white bg-white text-black hover:bg-transparent hover:text-white" 
      : "border-black bg-black text-white hover:bg-white hover:text-black",
    secondary: darkMode 
      ? "border-white text-white hover:bg-white hover:text-black" 
      : "border-neutral-200 text-black hover:border-black"
  };

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {content}
    </button>
  );
}
