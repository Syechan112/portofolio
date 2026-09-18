import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cx } from "../../utils/theme";
import { staggerDelay } from "../../utils/motion";

const CertificationItem = ({ item, index, darkMode }) => {
  const { t } = useT();
  const certTitle = t(item.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: staggerDelay(index) }}
      viewport={{ once: true }}
      className={`group flex items-center justify-between gap-6 py-6 border-t transition-colors duration-300 ${cx(darkMode, "border-white/10 hover:bg-white/[0.02]", "border-black/10 hover:bg-black/[0.02]")}`}
    >
      <div>
        <h4 className={`font-semibold transition-transform duration-300 group-hover:translate-x-1.5 ${cx(darkMode, "text-white", "text-black")}`}>
          {certTitle}
        </h4>

        <p className={`mt-1 text-xs ${cx(darkMode, "text-neutral-500", "text-neutral-500")}`}>
          {item.issuer}
        </p>
      </div>

      <span className={`font-mono text-xs ${cx(darkMode, "text-neutral-500", "text-neutral-400")}`}>
        {item.year}
      </span>
    </motion.div>
  );
};

export default CertificationItem;