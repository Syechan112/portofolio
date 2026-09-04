import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MoonStar, SunMedium } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', hash: '#services' },
    { name: 'Experience', hash: '#experience' },
    { name: 'Why Me', hash: '#why-me' },
    { name: 'Portfolio', hash: '#portfolio' },
    { name: 'Testimonials', hash: '#testimonials' },
  ];

  const handleNavClick = (e, hash) => {
    e?.preventDefault?.();
    setMobileMenuOpen(false);
    const targetId = hash.replace('#', '');

    const scrollToTarget = () => {
      const elem = document.getElementById(targetId);
      if (elem) {
        const headerOffset = 70;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (location.pathname === '/') {
      setTimeout(scrollToTarget, 60);
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-neutral-950/95 text-white border-white/10' : 'bg-white/95 text-black border-black/10'
    } ${scrolled ? 'py-3.5 border-b backdrop-blur-md shadow-sm' : 'py-4 sm:py-6 border-b border-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="/#top"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }}
          className="text-base sm:text-lg md:text-xl font-bold tracking-tighter truncate max-w-[210px] sm:max-w-none cursor-pointer"
        >
          {portfolioData.personal.name}
          <span className={`w-1.5 h-1.5 rounded-full inline-block ml-1 ${darkMode ? 'bg-white' : 'bg-black'}`} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/${link.hash}`}
              onClick={(e) => handleNavClick(e, link.hash)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-400 hover:text-black'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 active:scale-95 cursor-pointer ${darkMode ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'}`}
            aria-label="Toggle theme"
          >
            {darkMode ? <SunMedium className="w-5 h-5" /> : <MoonStar className="w-5 h-5" />}
          </button>
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`px-6 py-2 border-2 font-bold text-sm uppercase tracking-widest transition-all cursor-pointer ${
              darkMode
                ? 'border-white text-white hover:bg-white hover:text-black'
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 active:scale-95 cursor-pointer ${darkMode ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'}`}
            aria-label="Toggle theme"
          >
            {darkMode ? <SunMedium className="w-5 h-5" /> : <MoonStar className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-300 active:scale-95 cursor-pointer ${
              darkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-neutral-200 text-black hover:bg-black/5'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <motion.span
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={`lg:hidden border-b px-6 max-h-[80vh] overflow-y-auto ${
              darkMode ? 'bg-neutral-950 border-white/10 text-white' : 'bg-white border-neutral-200 text-black shadow-xl'
            }`}
          >
            <div className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className={`text-left text-lg font-bold uppercase tracking-tight py-2.5 px-3 rounded-md transition-colors cursor-pointer active:bg-red-500/10 ${
                    darkMode ? 'text-neutral-200 hover:text-white hover:bg-white/5' : 'text-neutral-800 hover:text-black hover:bg-neutral-100'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className={`pt-4 border-t mt-2 ${darkMode ? 'border-white/10' : 'border-neutral-200'}`}>
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className={`w-full text-center px-6 py-3.5 border-2 font-bold text-sm uppercase tracking-widest transition-all cursor-pointer active:scale-98 ${
                    darkMode ? 'border-white bg-white text-black' : 'border-black bg-black text-white'
                  }`}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
