import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cx } from "../../utils/theme";
import { portfolioData } from "../../data/portfolioData";
import EducationItem from "./EducationItem";

const EducationSection = ({ darkMode }) => {
  const { t } = useT();
  const { about } = portfolioData;
  const sectionEdu = t(about.sectionTitles?.education);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mt-20 border-t ${cx(darkMode, "border-white/10", "border-black")}`}
    >
      <div className="flex justify-between items-center py-5">
        <span className={`text-xs font-mono uppercase tracking-widest ${cx(darkMode, "text-neutral-400", "text-neutral-500")}`}>
          {sectionEdu}
        </span>

        <span className={`text-xs font-mono ${cx(darkMode, "text-neutral-600", "text-neutral-400")}`}>
          {about.education?.length.toString().padStart(2, "0")}
        </span>
      </div>

      {about.education?.map((edu, i) => (
        <EducationItem key={i} item={edu} index={i} darkMode={darkMode} />
      ))}
    </motion.div>
  );
};

export default EducationSection;