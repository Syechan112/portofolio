import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const About = ({ darkMode = false }) => {
  const { lang } = useLanguage();
  const { about } = portfolioData;

  const badgeText = about.badge[lang] || about.badge.en;
  const headlineText = about.headline[lang] || about.headline.en;
  const summaryText = about.summary[lang] || about.summary.en;
  const stackHeader = about.technicalStackHeader[lang] || about.technicalStackHeader.en;
  const backgroundTag = about.background?.tag[lang] || about.background?.tag.en;
  const backgroundTitle = about.background?.title[lang] || about.background?.title.en;
  const sectionEdu = about.sectionTitles?.education[lang] || about.sectionTitles?.education.en;
  const sectionAch = about.sectionTitles?.achievements[lang] || about.sectionTitles?.achievements.en;
  const sectionCert = about.sectionTitles?.certifications[lang] || about.sectionTitles?.certifications.en;

  return (
    <section
      id="about"
      className={`relative py-28 px-6 border-b scroll-mt-28 ${
        darkMode ? "bg-neutral-950 border-white/10" : "bg-white border-black"
      }`}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-16">
          <span
            className={`text-xs font-mono uppercase tracking-[0.3em] ${
              darkMode ? "text-neutral-500" : "text-neutral-400"
            }`}>
            {badgeText}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2">
            <span
              className={`text-[100px] md:text-[140px] leading-none font-bold tracking-tighter select-none ${
                darkMode ? "text-white/5" : "text-black/5"
              }`}>
              {about.number || "01"}
            </span>
          </motion.div>

          <div className="lg:col-span-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] max-w-6xl ${
                darkMode ? "text-white" : "text-black"
              }`}>
              {headlineText}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className={`mt-12 pt-8 border-t max-w-3xl ${
                darkMode ? "border-white/10" : "border-black/10"
              }`}>
              <p
                className={`text-lg md:text-xl leading-relaxed whitespace-pre-line ${
                  darkMode ? "text-neutral-300" : "text-neutral-600"
                }`}>
                {summaryText}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex items-center justify-between border-t border-b py-5 ${
              darkMode ? "border-white/10" : "border-black/10"
            }`}>
            <span
              className={`text-xs font-mono uppercase tracking-[0.25em] ${
                darkMode ? "text-neutral-400" : "text-neutral-500"
              }`}>
              {stackHeader}
            </span>
          </motion.div>

          {about.technicalStack?.map((group) => {
            const groupLabel = group.label[lang] || group.label.en;
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
                className={`group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b transition-colors duration-300 ${
                  darkMode
                    ? "border-white/10 hover:bg-white/[0.015]"
                    : "border-black/10 hover:bg-black/[0.015]"
                }`}>
                <div className="md:col-span-3">
                  <span
                    className={`text-xs font-mono uppercase tracking-widest ${
                      darkMode ? "text-neutral-500" : "text-neutral-400"
                    } transition-colors duration-300 group-hover:text-current`}>
                    {groupLabel}
                  </span>
                </div>

                <div className="md:col-span-9 flex flex-wrap gap-x-8 gap-y-4">
                  {group.items.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className={`text-2xl md:text-3xl font-bold tracking-tight cursor-default transition-colors duration-300 ${
                        darkMode
                          ? "text-neutral-300 hover:text-white"
                          : "text-neutral-700 hover:text-black"
                      }`}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-12">
              <span
                className={`text-xs font-mono uppercase tracking-[0.25em] ${
                  darkMode ? "text-neutral-500" : "text-neutral-400"
                }`}>
                {backgroundTag}
              </span>

              <h3
                className={`mt-5 text-4xl md:text-5xl font-bold tracking-tighter leading-none whitespace-pre-line ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                {backgroundTitle}
              </h3>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`border-t ${
                darkMode ? "border-white/10" : "border-black"
              }`}>
              <div className="flex justify-between items-center py-5">
                <span
                  className={`text-xs font-mono uppercase tracking-widest ${
                    darkMode ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                  {sectionEdu}
                </span>

                <span
                  className={`text-xs font-mono ${
                    darkMode ? "text-neutral-600" : "text-neutral-400"
                  }`}>
                  {about.education?.length.toString().padStart(2, "0")}
                </span>
              </div>

              {about.education?.map((edu, i) => {
                const eduTitle = edu.title[lang] || edu.title.en;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className={`group grid grid-cols-1 md:grid-cols-12 gap-4 py-7 border-t transition-colors duration-300 ${
                      darkMode
                        ? "border-white/10 hover:bg-white/[0.02]"
                        : "border-black/10 hover:bg-black/[0.02]"
                    }`}>
                    <div className="md:col-span-2">
                      <span
                        className={`font-mono text-xs ${
                          darkMode ? "text-neutral-500" : "text-neutral-400"
                        }`}>
                        {edu.period}
                      </span>
                    </div>

                    <div className="md:col-span-10">
                      <h4
                        className={`text-xl md:text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 ${
                          darkMode ? "text-white" : "text-black"
                        }`}>
                        {eduTitle}
                      </h4>

                      <p
                        className={`mt-2 text-sm ${
                          darkMode ? "text-neutral-400" : "text-neutral-500"
                        }`}>
                        {edu.school}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`mt-20 border-t ${
                darkMode ? "border-white/10" : "border-black"
              }`}>
              <div className="py-5">
                <span
                  className={`text-xs font-mono uppercase tracking-widest ${
                    darkMode ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                  {sectionAch}
                </span>
              </div>

              {about.achievements?.map((ach, i) => {
                const achTitle = ach.title[lang] || ach.title.en;
                const achDesc = ach.description[lang] || ach.description.en;
                const achDetails = ach.details ? (ach.details[lang] || ach.details.en) : null;

                return (
                  <motion.a
                    key={i}
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className={`group block py-8 border-t transition-all duration-300 ${
                      darkMode
                        ? "border-white/10 hover:bg-white/[0.02]"
                        : "border-black/10 hover:bg-black/[0.02]"
                    }`}>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h4
                          className={`text-xl md:text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 ${
                            darkMode ? "text-white" : "text-black"
                          }`}>
                          {achTitle}
                          <span className="inline-block ml-2 text-sm font-normal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            ↗
                          </span>
                        </h4>

                        <p
                          className={`mt-3 max-w-2xl text-sm leading-relaxed ${
                            darkMode ? "text-neutral-400" : "text-neutral-600"
                          }`}>
                          {achDesc}
                        </p>

                        {achDetails && (
                          <ul
                            className={`mt-4 space-y-2 text-xs ${
                              darkMode ? "text-neutral-500" : "text-neutral-500"
                            }`}>
                            {achDetails.map((detail, j) => (
                              <li key={j} className="flex gap-2">
                                <span>—</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <span
                        className={`font-mono text-xs shrink-0 px-2 py-1 border transition-colors ${
                          darkMode
                            ? "border-white/10 text-neutral-500 group-hover:border-white/30 group-hover:text-white"
                            : "border-black/10 text-neutral-400 group-hover:border-black/30 group-hover:text-black"
                        }`}>
                        {ach.year}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`mt-20 border-t ${
                darkMode ? "border-white/10" : "border-black"
              }`}>
              <div className="py-5">
                <span
                  className={`text-xs font-mono uppercase tracking-widest ${
                    darkMode ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                  {sectionCert}
                </span>
              </div>

              {about.certifications?.map((cert, i) => {
                const certTitle = cert.title[lang] || cert.title.en;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className={`group flex items-center justify-between gap-6 py-6 border-t transition-colors duration-300 ${
                      darkMode
                        ? "border-white/10 hover:bg-white/[0.02]"
                        : "border-black/10 hover:bg-black/[0.02]"
                    }`}>
                    <div>
                      <h4
                        className={`font-semibold transition-transform duration-300 group-hover:translate-x-1.5 ${
                          darkMode ? "text-white" : "text-black"
                        }`}>
                        {certTitle}
                      </h4>

                      <p
                        className={`mt-1 text-xs ${
                          darkMode ? "text-neutral-500" : "text-neutral-500"
                        }`}>
                        {cert.issuer}
                      </p>
                    </div>

                    <span
                      className={`font-mono text-xs ${
                        darkMode ? "text-neutral-500" : "text-neutral-400"
                      }`}>
                      {cert.year}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
