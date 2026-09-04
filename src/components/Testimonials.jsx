import { portfolioData } from '../data/portfolioData';

const Testimonials = ({ darkMode = false }) => {
  return (
    <section id="testimonials" className={`py-32 px-6 border-t scroll-mt-28 ${darkMode ? 'bg-neutral-950 border-white/10' : 'bg-white border-black'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <h2 className={`text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}>
              Testimonials
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter leading-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              Feedback from partners and industry leaders.
            </h3>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-px ${darkMode ? 'bg-white/10' : 'bg-black'}`}>
          {portfolioData.testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`p-12 flex flex-col justify-between transition-colors ${darkMode ? 'bg-neutral-900 hover:bg-neutral-800' : 'bg-white hover:bg-neutral-50'}`}
            >
              <p className={`italic text-lg leading-relaxed mb-12 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                &ldquo;{item.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className={`w-12 h-12 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-100'}`}
                  loading="lazy"
                />
                <div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{item.name}</h4>
                  <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
