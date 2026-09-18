import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cx } from "../../utils/theme";
import { portfolioData } from "../../data/portfolioData";

const AboutHeadline = ({ darkMode }) => {
  const { t } = useT();
  const { about } = portfolioData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-2"
      >
        <span
          className={`text-[100px] md:text-[140px] leading-none font-bold tracking-tighter select-none ${cx(darkMode, "text-white/5", "text-black/5")}`}
        >
          {about.number || "01"}
        </span>
      </motion.div>

      <div className="lg:col-span-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] max-w-6xl ${cx(darkMode, "text-white", "text-black")}`}
        >
          {t(about.headline)}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className={`mt-12 pt-8 border-t max-w-3xl ${cx(darkMode, "border-white/10", "border-black/10")}`}
        >
          <p
            className={`text-lg md:text-xl leading-relaxed whitespace-pre-line ${cx(darkMode, "text-neutral-300", "text-neutral-600")}`}
          >
            {t(about.summary)}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeadline;