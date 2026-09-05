import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Portfolio = ({ darkMode = false }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { categories, projects } = portfolioData.portfolio;

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
              04 — Portfolio
            </span>
          </div>

          <div className="md:col-span-8">
            <h2
              className={`text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] ${
                darkMode ? "text-white" : "text-black"
              }`}>
              Selected work.
            </h2>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center gap-x-8 gap-y-4 mb-16 pb-5 border-b ${
            darkMode ? "border-white/10" : "border-black/10"
          }`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                activeCategory === cat
                  ? darkMode
                    ? "text-white"
                    : "text-black"
                  : darkMode
                    ? "text-neutral-600 hover:text-neutral-300"
                    : "text-neutral-400 hover:text-black"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div>
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className={`group border-b ${
                darkMode ? "border-white/10" : "border-black/10"
              }`}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-12">
                <div className="md:col-span-1">
                  <span
                    className={`text-xs font-mono ${
                      darkMode ? "text-neutral-600" : "text-neutral-400"
                    }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3
                    className={`text-3xl md:text-4xl font-bold tracking-tighter leading-none transition-transform duration-300 group-hover:translate-x-1 ${
                      darkMode ? "text-white" : "text-black"
                    }`}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 inline-flex">
                      {project.title}
                      <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ↗
                      </span>
                    </a>
                  </h3>
                </div>

                <div className="md:col-span-5">
                  <p
                    className={`max-w-lg text-sm md:text-base leading-relaxed ${
                      darkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-xs font-mono ${
                          darkMode ? "text-neutral-600" : "text-neutral-400"
                        }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 md:text-right flex flex-col justify-between items-start md:items-end gap-2">
                  <span
                    className={`text-xs font-mono uppercase tracking-widest ${
                      darkMode ? "text-neutral-600" : "text-neutral-400"
                    }`}>
                    {project.category}
                  </span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-mono underline underline-offset-4 ${
                      darkMode
                        ? "text-neutral-400 hover:text-white"
                        : "text-neutral-600 hover:text-black"
                    }`}>
                    View Project ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
