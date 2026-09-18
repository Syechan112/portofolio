import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import ProjectModal from "../ui/ProjectModal";

const Portfolio = ({ darkMode = false }) => {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const { badge, title, categories, projects } =
    portfolioData.portfolio;

  const badgeText = badge[lang] || badge.en;
  const titleText = title[lang] || title.en;

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className={`py-20 sm:py-32 px-4 sm:px-6 border-t scroll-mt-28 ${
        darkMode ? "bg-neutral-950 border-white/10" : "bg-white border-black"
      }`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 mb-10 sm:mb-20">
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
              className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] ${
                darkMode ? "text-white" : "text-black"
              }`}>
              {titleText}
            </h2>
          </div>
        </div>

        <div
          className={`flex overflow-x-auto gap-4 sm:gap-8 sm:flex-wrap items-center mb-10 sm:mb-16 pb-4 border-b px-1 -mx-4 sm:mx-0 sm:px-0 ${
            darkMode ? "border-white/10" : "border-black/10"
          }`}>
          {categories.map((cat) => {
            const catLabel = cat.label[lang] || cat.label.en;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[11px] sm:text-xs font-mono uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
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

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto sm:auto-rows-[minmax(300px,auto)] gap-4 sm:gap-6">
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
            const projectImage = project.image || (project.github ? `https://opengraph.githubassets.com/1/${project.github.split('/').slice(-2).join('/')}` : null);

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
                className={`group relative flex flex-col justify-between p-5 sm:p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${getBento()} ${
                  darkMode
                    ? "bg-neutral-900/40 border-white/10 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                    : "bg-white border-black/10 hover:border-black/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                }`}>
                
                {/* Image Preview on Hover/Mobile */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                  {projectImage && (
                    <img 
                      src={projectImage} 
                      alt="" 
                      className="w-full h-full object-cover grayscale"
                    />
                  )}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-5 sm:mb-8">
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${
                        darkMode
                          ? "text-neutral-400 border-white/10 bg-white/5"
                          : "text-neutral-500 border-black/10 bg-black/5"
                      }`}>
                      {project.category}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-500 group-hover:rotate-45 ${
                      darkMode ? "border-white/10 text-white" : "border-black/10 text-black"
                    }`}>
                      <span className="text-sm">↗</span>
                    </div>
                  </div>

                  <h3
                    className={`text-xl sm:text-3xl font-bold tracking-tight mb-3 transition-colors ${
                      darkMode
                        ? "text-white group-hover:text-neutral-200"
                        : "text-black group-hover:text-neutral-700"
                    }`}>
                    {project.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-base leading-relaxed mb-6 line-clamp-2 sm:line-clamp-none ${
                      darkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                    {projectTagline}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-inherit flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded ${
                          darkMode
                            ? "bg-white/5 text-neutral-500"
                            : "bg-black/5 text-neutral-400"
                        }`}>
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
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
