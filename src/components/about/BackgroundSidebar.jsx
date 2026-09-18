import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cx } from "../../utils/theme";
import { portfolioData } from "../../data/portfolioData";

const BackgroundSidebar = ({ darkMode }) => {
  const { t } = useT();
  const { about } = portfolioData;

  return (
    <div className="lg:col-span-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:sticky lg:top-12"
      >
        <span className={`text-xs font-mono uppercase tracking-[0.25em] ${cx(darkMode, "text-neutral-500", "text-neutral-400")}`}>
          {t(about.background?.tag)}
        </span>

        <h3 className={`mt-5 text-4xl md:text-5xl font-bold tracking-tighter leading-none whitespace-pre-line ${cx(darkMode, "text-white", "text-black")}`}>
          {t(about.background?.title)}
        </h3>
      </motion.div>
    </div>
  );
};

export default BackgroundSidebar;