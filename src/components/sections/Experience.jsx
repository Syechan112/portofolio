import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

const Experience = ({ darkMode = false }) => {
  const { lang } = useLanguage();

  return (
    <section id="experience" className={`py-32 px-6 border-t scroll-mt-28 ${darkMode ? 'bg-neutral-950 border-white/10' : 'bg-white border-black'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <h2 className={`text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}>
              {lang === 'id' ? 'Pengalaman' : 'Experience'}
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter leading-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              {lang === 'id' ? 'Catatan peran, tanggung jawab, dan kontribusi nyata.' : 'A record of roles, responsibilities, and impactful contributions.'}
            </h3>
          </div>
        </div>

        <div className="space-y-16">
          {portfolioData.experience.map((item, index) => {
            const desc = typeof item.description === 'object' ? (item.description[lang] || item.description.en) : item.description;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 border-t pt-16 ${darkMode ? 'border-white/10' : 'border-black'}`}
              >
                <div className="md:col-span-4">
                  <p className={`text-sm font-mono uppercase tracking-widest ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {item.period}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xl font-bold mt-2 inline-flex items-center gap-1 hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
                    >
                      {item.company} <span className="text-sm">↗</span>
                    </a>
                  ) : (
                    <h4 className={`text-xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                      {item.company}
                    </h4>
                  )}
                </div>
                <div className="md:col-span-8">
                  <h5 className={`text-2xl font-bold mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
                    {item.role}
                  </h5>
                  <p className={`leading-relaxed mb-6 max-w-2xl whitespace-pre-line ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs font-mono uppercase border px-3 py-1 ${darkMode ? 'text-white border-white/20' : 'text-black border-neutral-200'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
