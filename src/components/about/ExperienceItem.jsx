import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cx } from "../../utils/theme";
import { portfolioData } from "../../data/portfolioData";
import { staggerDelay } from "../../utils/motion";

const ExperienceItem = ({ item, index, darkMode }) => {
  const { t } = useT();
  const desc = typeof item.description === "object" ? t(item.description) : item.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: staggerDelay(index) }}
      viewport={{ once: true }}
      className={`group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t transition-colors duration-300 ${cx(darkMode, "border-white/10 hover:bg-white/[0.02]", "border-black/10 hover:bg-black/[0.02]")}`}
    >
      <div className="md:col-span-3">
        <span className={`font-mono text-xs uppercase tracking-wider block ${cx(darkMode, "text-neutral-500", "text-neutral-400")}`}>
          {item.period}
        </span>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold uppercase tracking-wider mt-1 inline-flex items-center gap-1 hover:underline ${cx(darkMode, "text-neutral-300 hover:text-white", "text-neutral-700 hover:text-black")}`}
          >
            {item.company}
            <span className="text-[10px]">↗</span>
          </a>
        ) : (
          <span className={`text-xs font-semibold uppercase tracking-wider mt-1 block ${cx(darkMode, "text-neutral-400", "text-neutral-600")}`}>
            {item.company}
          </span>
        )}
      </div>

      <div className="md:col-span-9">
        <h4 className={`text-xl md:text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 ${cx(darkMode, "text-white", "text-black")}`}>
          {item.role}
        </h4>

        <p className={`mt-2 text-sm leading-relaxed whitespace-pre-line ${cx(darkMode, "text-neutral-400", "text-neutral-600")}`}>
          {desc}
        </p>

        {item.skills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className={`text-[11px] font-mono uppercase px-2.5 py-1 border transition-colors ${cx(darkMode, "border-white/10 text-neutral-400 group-hover:border-white/20 group-hover:text-neutral-200", "border-black/10 text-neutral-600 group-hover:border-black/20 group-hover:text-black")}`}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceItem;