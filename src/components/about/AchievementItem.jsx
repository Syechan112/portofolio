import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cx } from "../../utils/theme";
import { staggerDelay } from "../../utils/motion";

const AchievementItem = ({ item, index, darkMode }) => {
  const { t } = useT();
  const achTitle = t(item.title);
  const achDesc = t(item.description);
  const achDetails = item.details ? t(item.details) : null;

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: staggerDelay(index) }}
      viewport={{ once: true }}
      className={`group block py-8 border-t transition-all duration-300 ${cx(darkMode, "border-white/10 hover:bg-white/[0.02]", "border-black/10 hover:bg-black/[0.02]")}`}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h4 className={`text-xl md:text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 ${cx(darkMode, "text-white", "text-black")}`}>
            {achTitle}
            <span className="inline-block ml-2 text-sm font-normal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </h4>

          <p className={`mt-3 max-w-2xl text-sm leading-relaxed ${cx(darkMode, "text-neutral-400", "text-neutral-600")}`}>
            {achDesc}
          </p>

          {achDetails && (
            <ul className={`mt-4 space-y-2 text-xs ${cx(darkMode, "text-neutral-500", "text-neutral-500")}`}>
              {achDetails.map((detail, j) => (
                <li key={j} className="flex gap-2">
                  <span>—</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <span className={`font-mono text-xs shrink-0 px-2 py-1 border transition-colors ${cx(darkMode, "border-white/10 text-neutral-500 group-hover:border-white/30 group-hover:text-white", "border-black/10 text-neutral-400 group-hover:border-black/30 group-hover:text-black")}`}>
          {item.year}
        </span>
      </div>
    </motion.a>
  );
};

export default AchievementItem;