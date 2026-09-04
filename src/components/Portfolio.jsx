import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Portfolio = ({ darkMode = false }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { categories, projects } = portfolioData.portfolio;

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className={`py-32 px-6 border-t scroll-mt-28 ${darkMode ? 'bg-neutral-950 border-white/10' : 'bg-white border-black'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <h2 className={`text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}>
              Portfolio
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter leading-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              A collection of selected digital products and design systems.
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                activeCategory === cat
                  ? (darkMode ? 'text-red-400 border-b-2 border-red-400' : 'text-black border-b-2 border-black')
                  : (darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-400 hover:text-black')
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px ${darkMode ? 'bg-white/10' : 'bg-black'}`}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`p-8 flex flex-col justify-between transition-colors ${darkMode ? 'bg-neutral-900 hover:bg-neutral-800' : 'bg-white hover:bg-neutral-50'}`}
            >
              <div className="mb-8">
                <div className={`aspect-[16/10] mb-6 border ${darkMode ? 'bg-neutral-900 border-white/20' : 'bg-neutral-100 border-black'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className={`text-xl font-bold mb-2 tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-xs font-mono uppercase border px-3 py-1 ${darkMode ? 'text-white border-white/20' : 'text-black border-neutral-200'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
