import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${darkMode ? 'bg-neutral-950 text-white border-white/10' : 'bg-neutral-100 text-black border-black/10'} border-t py-16 px-6 sm:px-8 relative`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-current/10">
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight group">
              <span className="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center text-white">
                <span className="w-5 h-5 inline-block" />
              </span>
              <span>
                {portfolioData.personal.name}
                <span className="text-red-500 ml-0.5">.</span>
              </span>
            </a>
            <p className="text-sm max-w-sm leading-relaxed text-current/70">
              {portfolioData.personal.tagline}
            </p>
            <p className="text-xs text-current/50">
              {portfolioData.personal.location}
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-current/70">Navigation</h4>
            <ul className="space-y-2">
              {['Services', 'Experience', 'Why Me', 'Portfolio', 'Testimonials'].map((name) => (
                <li key={name}>
                  <a href={`/#${name === 'Why Me' ? 'why-me' : name.toLowerCase()}`} className="text-sm text-current/60 hover:text-red-500 transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-current/70">Connect</h4>
            <div className="flex items-center gap-3">
              <a href={portfolioData.personal.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-transparent border border-current/10 hover:border-red-500 hover:text-red-500 flex items-center justify-center text-current/60 transition-all" aria-label="GitHub Profile">GitHub</a>
              <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-transparent border border-current/10 hover:border-red-500 hover:text-red-500 flex items-center justify-center text-current/60 transition-all" aria-label="LinkedIn Profile">In</a>
              <a href={portfolioData.personal.social.dribbble} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-transparent border border-current/10 hover:border-red-500 hover:text-red-500 flex items-center justify-center text-current/60 transition-all" aria-label="Dribbble Profile">Db</a>
              <a href={portfolioData.personal.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-transparent border border-current/10 hover:border-red-500 hover:text-red-500 flex items-center justify-center text-current/60 transition-all" aria-label="Twitter Profile">X</a>
            </div>
            <p className="text-xs text-current/50">
              Direct: <span className="text-current/80">{portfolioData.personal.social.email}</span>
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-current/50">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved. Crafted with React, Tailwind CSS &amp; Framer Motion.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-current/60 hover:text-red-500 transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-transparent border border-current/10 flex items-center justify-center group-hover:border-red-500 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
