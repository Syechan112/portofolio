import { motion } from "framer-motion";
import { useT } from "../../hooks/useT";
import { cx } from "../../utils/theme";
import { portfolioData } from "../../data/portfolioData";
import { SectionDivider, SectionTitle, SectionCount } from "../ui/SectionBadge";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = ({ darkMode }) => {
  const { t } = useT();
  const { about } = portfolioData;
  const sectionExp = t(about.sectionTitles?.experience);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`border-t ${cx(darkMode, "border-white/10", "border-black")}`}
    >
      <div className="flex justify-between items-center py-5">
        <span className={`text-xs font-mono uppercase tracking-widest ${cx(darkMode, "text-neutral-400", "text-neutral-500")}`}>
          {sectionExp}
        </span>

        <span className={`text-xs font-mono ${cx(darkMode, "text-neutral-600", "text-neutral-400")}`}>
          {portfolioData.experience?.length.toString().padStart(2, "0")}
        </span>
      </div>

      {portfolioData.experience?.map((item, i) => (
        <ExperienceItem key={i} item={item} index={i} darkMode={darkMode} />
      ))}
    </motion.div>
  );
};

export default ExperienceSection;