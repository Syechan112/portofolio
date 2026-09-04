import { portfolioData } from '../data/portfolioData';

const CTASection = ({ darkMode = false }) => {
  return (
    <section id="contact" className={`py-32 px-6 border-t scroll-mt-28 ${darkMode ? 'bg-neutral-950 border-white/10' : 'bg-white border-black'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <h2 className={`text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}>
              Contact
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12 ${darkMode ? 'text-white' : 'text-black'}`}>
              Ready to build something extraordinary? Let's talk.
            </h3>

            <div className="flex flex-wrap gap-8">
              <a
                href={`mailto:${portfolioData.personal.social.email}`}
                className={`text-xl font-bold border-b transition-colors ${darkMode ? 'text-white border-white hover:text-red-400 hover:border-red-400' : 'text-black border-black hover:text-red-600 hover:border-red-600'}`}
              >
                {portfolioData.personal.social.email}
              </a>
              <a
                href="https://cal.com"
                className={`text-xl font-bold border-b transition-colors ${darkMode ? 'text-white border-white hover:text-red-400 hover:border-red-400' : 'text-black border-black hover:text-red-600 hover:border-red-600'}`}
              >
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
