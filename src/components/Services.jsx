import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Services = ({ darkMode = false }) => {
  return (
    <section id="services" className={`py-28 px-6 border-t scroll-mt-28 ${darkMode ? 'bg-neutral-950 border-white/10' : 'bg-white border-black'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <h2 className={`text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}>
              Services
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter leading-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              Crafting digital products with a focus on usability and technical excellence.
            </h3>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${darkMode ? 'bg-white/10' : 'bg-black'}`}>
          {portfolioData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`flex flex-col justify-between p-12 transition-colors ${darkMode ? 'bg-neutral-900 hover:bg-neutral-800' : 'bg-white hover:bg-neutral-50'}`}
            >
              <div>
                <span className={`text-xs font-mono uppercase tracking-widest mb-6 block ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  0{service.id}
                </span>
                <h4 className={`text-2xl font-bold mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
                  {service.title}
                </h4>
                <p className={`leading-relaxed mb-8 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
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

export default Services;
