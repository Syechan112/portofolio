import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import ProjectModal from "../ui/ProjectModal";

const Portfolio = ({ darkMode = false }) => {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const { badge, title, categories, projects, exploreBtn } =
    portfolioData.portfolio;

  const badgeText = badge[lang] || badge.en;
  const titleText = title[lang] || title.en;
  const exploreText = exploreBtn[lang] || exploreBtn.en;

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className={`py-32 px-6 border-t scroll-mt-28 ${
        darkMode ? "bg-neutral-950 border-white/10" : "bg-white border-black"
      }`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <span
              className={`text-xs font-mono uppercase tracking-[0.3em] ${
                darkMode ? "text-neutral-500" : "text-neutral-400"
              }`}>
              {badgeText}
            </span>
          </div>

          <div className="md:col-span-8">
            <h2
              className={`text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] ${
                darkMode ? "text-white" : "text-black"
              }`}>
              {titleText}
            </h2>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center gap-x-8 gap-y-4 mb-16 pb-5 border-b ${
            darkMode ? "border-white/10" : "border-black/10"
          }`}>
          {categories.map((cat) => {
            const catLabel = cat.label[lang] || cat.label.en;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? darkMode
                      ? "text-white font-bold"
                      : "text-black font-bold"
                    : darkMode
                      ? "text-neutral-600 hover:text-neutral-300"
                      : "text-neutral-400 hover:text-black"
                }`}>
                {catLabel}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(300px,auto)] gap-6">
          {filteredProjects.map((project, index) => {
            const total = filteredProjects.length;
            const projectTagline = project.tagline[lang] || project.tagline.en;

            const getBento = () => {
              if (total === 1) return "md:col-span-12";
              if (total === 2) return "md:col-span-6";
              if (total === 3 && index === 2) return "md:col-span-12";
              const patterns = [
                "md:col-span-8 md:min-h-[380px]",
                "md:col-span-4 md:min-h-[380px]",
                "md:col-span-4 md:min-h-[340px]",
                "md:col-span-8 md:min-h-[340px]",
                "md:col-span-6",
                "md:col-span-6",
              ];
              if (index === total - 1 && index % 6 === 0 && total > 3)
                return "md:col-span-12";
              return patterns[index % patterns.length];
            };
            return (
              <motion.article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${getBento()} ${
                  darkMode
                    ? "bg-neutral-900/50 border-white/10 hover:border-white/20 hover:shadow-black/40"
                    : "bg-white border-black/10 hover:border-black/20 hover:shadow-neutral-200/60"
                }`}>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span
                      className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border ${
                        darkMode
                          ? "text-neutral-400 border-white/10 bg-white/5"
                          : "text-neutral-600 border-black/10 bg-black/5"
                      }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl font-bold tracking-tight mb-3 transition-colors ${
                      darkMode
                        ? "text-white group-hover:text-neutral-200"
                        : "text-black group-hover:text-neutral-700"
                    }`}>
                    <span
                      className="inline-flex items-center gap-1.5 focus:outline-none">
                      {project.title}
                      <span className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </h3>

                  <p
                    className={`text-sm md:text-base leading-relaxed mb-6 ${
                      darkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                    {projectTagline}
                  </p>
                </div>

                <div className="pt-6 border-t border-inherit flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-xs font-mono px-2 py-0.5 rounded ${
                          darkMode
                            ? "bg-white/5 text-neutral-400"
                            : "bg-black/5 text-neutral-600"
                        }`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`text-xs font-mono font-medium inline-flex items-center gap-1 ${
                      darkMode
                        ? "text-white hover:text-neutral-300"
                        : "text-black hover:text-neutral-600"
                    }`}>
                    {exploreText}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
};

export default Portfolio;
