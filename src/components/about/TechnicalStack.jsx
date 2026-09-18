import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cn } from "../../utils/cn";
import { portfolioData } from "../../data/portfolioData";

const TechnicalStack = ({ darkMode }) => {
  const { t } = useT();
  const { about } = portfolioData;

  return (
    <div className="mb-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between border-t border-b py-5 ${cx(darkMode, "border-white/10", "border-black/10")}`}
      >
        <span className={`text-xs font-mono uppercase tracking-[0.25em] ${cx(darkMode, "text-neutral-400", "text-neutral-500")}`}>
          {t(about.technicalStackHeader)}
        </span>
      </motion.div>

      {about.technicalStack?.map((group) => {
        const groupLabel = t(group.label);
        return (
          <motion.div
            key={groupLabel}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className={`group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b transition-colors duration-300 ${cx(darkMode, "border-white/10 hover:bg-white/[0.015]", "border-black/10 hover:bg-black/[0.015]")}`}>
            <div className="md:col-span-3">
              <span
                className={`text-xs font-mono uppercase tracking-widest ${cx(darkMode, "text-neutral-500", "text-neutral-400")} transition-colors duration-300 group-hover:text-current`}>
                {groupLabel}
              </span>
            </div>

            <div className="md:col-span-9 flex flex-wrap gap-x-8 gap-y-4">
              {group.items.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`text-2xl md:text-3xl font-bold tracking-tight cursor-default transition-colors duration-300 ${cx(darkMode, "text-neutral-300 hover:text-white", "text-neutral-700 hover:text-black")}`}>
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechnicalStack;