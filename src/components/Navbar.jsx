import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MoonStar, SunMedium, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ darkMode, toggleTheme }) => {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop or route change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Active section scroll spy
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveId(location.pathname.replace('/', ''));
      return;
    }

    const sections = ['about', 'services', 'why-me', 'portfolio', 'contact'];

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page reached -> activate contact
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveId('contact');
        return;
      }

      // Very top of page (Hero section)
      const firstSection = document.getElementById('about');
      if (firstSection && scrollY < firstSection.offsetTop - 250) {
        setActiveId('');
        return;
      }

      // Check current section based on scroll offset
      const checkPosition = scrollY + 180;
      let current = '';

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && checkPosition >= el.offsetTop) {
          current = sections[i];
          break;
        }
      }

      if (current) {
        setActiveId(current);
      }
    };

    updateActiveSection();
    const t1 = setTimeout(updateActiveSection, 300);
    const t2 = setTimeout(updateActiveSection, 1000);

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  const navLinks = portfolioData.nav.links.map((link) => ({
    name: link.name[lang] || link.name.en,
    hash: link.hash,
  }));

  const scrollToElement = useCallback((targetId) => {
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 70;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
      return true;
    }
    return false;
  }, []);

  const handleNavClick = (e, hash) => {
    e?.preventDefault?.();
    setMobileMenuOpen(false);
    const targetId = hash.replace('#', '');
    setActiveId(targetId);

    if (location.pathname === '/') {
      setTimeout(() => {
        const found = scrollToElement(targetId);
        if (!found) {
          setTimeout(() => scrollToElement(targetId), 150);
        }
      }, 60);
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode
          ? 'bg-neutral-950 text-white border-white/10'
          : 'bg-white text-black border-black/10'
      } ${
        scrolled || mobileMenuOpen
          ? 'py-3.5 border-b shadow-sm'
          : 'py-4 sm:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="/#top"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            setActiveId('');
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }}
          className="text-base sm:text-lg md:text-xl font-bold tracking-tighter truncate max-w-[210px] sm:max-w-none cursor-pointer"
        >
          {portfolioData.personal.name}
          <span
            className={`w-1.5 h-1.5 rounded-full inline-block ml-1 ${
              darkMode ? 'bg-white' : 'bg-black'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.hash.replace('#', '');
            const isActive = activeId === id;
            return (
              <a
                key={link.hash}
                href={`/${link.hash}`}
                onClick={(e) => handleNavClick(e, link.hash)}
                className={`relative text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer py-1 ${
                  isActive
                    ? darkMode
                      ? 'text-white'
                      : 'text-black'
                    : darkMode
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-400 hover:text-black'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={`absolute left-0 -bottom-0.5 h-[2px] w-full ${
                      darkMode ? 'bg-white' : 'bg-black'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div
            className={`inline-flex items-center p-0.5 border rounded-full text-xs font-mono font-bold tracking-wider transition-colors ${
              darkMode
                ? 'border-white/15 bg-neutral-900/80 text-white'
                : 'border-black/15 bg-neutral-100/90 text-black'
            }`}
            role="group"
            aria-label="Language Switcher"
          >
            <button
              type="button"
              onClick={() => setLang('id')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                lang === 'id'
                  ? darkMode
                    ? 'bg-white text-black font-extrabold shadow-sm'
                    : 'bg-black text-white font-extrabold shadow-sm'
                  : darkMode
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-500 hover:text-black'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                lang === 'en'
                  ? darkMode
                    ? 'bg-white text-black font-extrabold shadow-sm'
                    : 'bg-black text-white font-extrabold shadow-sm'
                  : darkMode
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-500 hover:text-black'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 active:scale-95 cursor-pointer ${
              darkMode
                ? 'text-white hover:bg-neutral-900'
                : 'text-black hover:bg-neutral-100'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <SunMedium className="w-5 h-5" />
            ) : (
              <MoonStar className="w-5 h-5" />
            )}
          </button>

          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`px-5 py-2 border-2 font-bold text-sm uppercase tracking-widest transition-all cursor-pointer ${
              activeId === 'contact'
                ? darkMode
                  ? 'border-white bg-white text-black'
                  : 'border-black bg-black text-white'
                : darkMode
                  ? 'border-white/40 text-white hover:border-white hover:bg-white hover:text-black'
                  : 'border-black/40 text-black hover:border-black hover:bg-black hover:text-white'
            }`}
          >
            {portfolioData.nav.contactBtn[lang] || 'Contact'}
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Language Switcher */}
          <div
            className={`inline-flex items-center p-0.5 border rounded-full text-[11px] font-mono font-bold tracking-wider transition-colors ${
              darkMode
                ? 'border-white/15 bg-neutral-900/80 text-white'
                : 'border-black/15 bg-neutral-100/90 text-black'
            }`}
          >
            <button
              type="button"
              onClick={() => setLang('id')}
              className={`px-2 py-0.5 rounded-full transition-all duration-200 cursor-pointer ${
                lang === 'id'
                  ? darkMode
                    ? 'bg-white text-black font-extrabold shadow-sm'
                    : 'bg-black text-white font-extrabold shadow-sm'
                  : darkMode
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-500 hover:text-black'
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-full transition-all duration-200 cursor-pointer ${
                lang === 'en'
                  ? darkMode
                    ? 'bg-white text-black font-extrabold shadow-sm'
                    : 'bg-black text-white font-extrabold shadow-sm'
                  : darkMode
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-500 hover:text-black'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className={`inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all duration-300 active:scale-95 cursor-pointer ${
              darkMode
                ? 'text-white hover:bg-neutral-900'
                : 'text-black hover:bg-neutral-100'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <SunMedium className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <MoonStar className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border transition-all duration-300 active:scale-95 cursor-pointer ${
              darkMode
                ? 'border-white/20 text-white hover:bg-neutral-900'
                : 'border-neutral-200 text-black hover:bg-neutral-100'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <motion.span
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
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
            className={`lg:hidden border-t mt-3.5 px-6 max-h-[80vh] overflow-y-auto ${
              darkMode
                ? 'bg-neutral-950 border-white/10 text-white'
                : 'bg-white border-black/10 text-black shadow-lg'
            }`}
          >
            <div className="py-6 flex flex-col gap-3">
              {navLinks.map((link) => {
                const id = link.hash.replace('#', '');
                const isActive = activeId === id;
                return (
                  <button
                    key={link.hash}
                    type="button"
                    onClick={(e) => handleNavClick(e, link.hash)}
                    className={`text-left text-base font-bold uppercase tracking-wider py-3 px-3 rounded-lg transition-colors cursor-pointer flex items-center justify-between min-h-[44px] ${
                      isActive
                        ? darkMode
                          ? 'text-white bg-neutral-900 font-black'
                          : 'text-black bg-neutral-100 font-black'
                        : darkMode
                          ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                          : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span
                        className={`w-2 h-2 rounded-full ${
                          darkMode ? 'bg-white' : 'bg-black'
                        }`}
                      />
                    )}
                  </button>
                );
              })}

              <div
                className={`pt-4 border-t mt-1 ${
                  darkMode ? 'border-white/10' : 'border-black/10'
                }`}
              >
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className={`w-full text-center px-6 py-3.5 border-2 font-bold text-sm uppercase tracking-widest transition-all cursor-pointer min-h-[44px] active:scale-[0.99] ${
                    activeId === 'contact'
                      ? darkMode
                        ? 'border-white bg-white text-black'
                        : 'border-black bg-black text-white'
                      : darkMode
                        ? 'border-white/40 text-white hover:border-white hover:bg-white hover:text-black'
                        : 'border-black/40 text-black hover:border-black hover:bg-black hover:text-white'
                  }`}
                >
                  {portfolioData.nav.contactMeBtn[lang] || 'Contact Me'}
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
