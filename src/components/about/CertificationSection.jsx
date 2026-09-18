import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cx } from "../../utils/theme";
import { portfolioData } from "../../data/portfolioData";
import CertificationItem from "./CertificationItem";

const CertificationSection = ({ darkMode }) => {
  const { t } = useT();
  const { about } = portfolioData;
  const sectionCert = t(about.sectionTitles?.certifications);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mt-20 border-t ${cx(darkMode, "border-white/10", "border-black")}`}
    >
      <div className="py-5">
        <span className={`text-xs font-mono uppercase tracking-widest ${cx(darkMode, "text-neutral-400", "text-neutral-500")}`}>
          {sectionCert}
        </span>
      </div>

      {about.certifications?.map((cert, i) => (
        <CertificationItem key={i} item={cert} index={i} darkMode={darkMode} />
      ))}
    </motion.div>
  );
};

export default CertificationSection;