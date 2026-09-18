import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cx } from "../../utils/theme";
import { portfolioData } from "../../data/portfolioData";
import { staggerDelay } from "../../utils/motion";

const EducationItem = ({ item, index, darkMode }) => {
  const { t } = useT();
  const eduTitle = t(item.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: staggerDelay(index) }}
      viewport={{ once: true }}
      className={`group grid grid-cols-1 md:grid-cols-12 gap-4 py-7 border-t transition-colors duration-300 ${cx(darkMode, "border-white/10 hover:bg-white/[0.02]", "border-black/10 hover:bg-black/[0.02]")}`}
    >
      <div className="md:col-span-2">
        <span className={`font-mono text-xs ${cx(darkMode, "text-neutral-500", "text-neutral-400")}`}>
          {item.period}
        </span>
      </div>

      <div className="md:col-span-10">
        <h4 className={`text-xl md:text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 ${cx(darkMode, "text-white", "text-black")}`}>
          {eduTitle}
        </h4>

        <p className={`mt-2 text-sm ${cx(darkMode, "text-neutral-400", "text-neutral-500")}`}>
          {item.school}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationItem;