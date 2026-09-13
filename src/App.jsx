import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import { portfolioData } from './data/portfolioData';
import { useLanguage } from './context/LanguageContext';

const About = lazy(() => import('./components/About'));
const TickerBanner = lazy(() => import('./components/TickerBanner'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const WhyHireMe = lazy(() => import('./components/WhyHireMe'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CTASection = lazy(() => import('./components/CTASection'));

const Home = ({ darkMode }) => {
  return (
    <div className="w-full flex flex-col">
      <Hero darkMode={darkMode} />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <About darkMode={darkMode} />
        <TickerBanner />
        <Services darkMode={darkMode} />
        <WhyHireMe darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <CTASection darkMode={darkMode} />
      </Suspense>
    </div>
  );
};

function App() {
  const { lang } = useLanguage();
  const seo = portfolioData.seo[lang] || portfolioData.seo.en;
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.replace('#', '');
    let timeoutId;

    const tryScroll = (attempts = 0) => {
      const elem = document.getElementById(targetId);
      if (elem) {
        const headerOffset = 70;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: attempts === 0 ? 'auto' : 'smooth',
        });
      } else if (attempts < 6) {
        timeoutId = setTimeout(() => tryScroll(attempts + 1), 120);
      }
    };

    tryScroll();
    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    window.setTimeout(() => {
      setDarkMode((value) => !value);
    }, 140);
    window.setTimeout(() => {
      setIsTransitioning(false);
    }, 520);
  };

  return (
    <div className={`w-full min-h-screen font-sans antialiased transition-colors duration-300 ${
      darkMode ? 'bg-neutral-950 text-white selection:bg-red-600 selection:text-white' : 'bg-white text-black selection:bg-black selection:text-white'
    }`}>
      <Helmet>
        <html lang={lang} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content="Syehan Mochsin Althubaiti, Junior Full-Stack Developer, Frontend Developer, Web Developer, React, Vue.js, Laravel, Portfolio" />
        <meta name="author" content={portfolioData.personal.name} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seans.biz.id/" />
        <meta property="og:image" content="https://www.seans.biz.id/syehan.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://www.seans.biz.id/syehan.png" />
        <link rel="canonical" href="https://www.seans.biz.id/" />
      </Helmet>

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1, originY: 0 }}
            exit={{ scaleY: 0, originY: 1 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed inset-0 z-[100] pointer-events-none ${darkMode ? 'bg-white' : 'bg-neutral-950'}`}
          />
        )}
      </AnimatePresence>

      <CustomCursor darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <main className="w-full pt-16">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/services" element={<Services darkMode={darkMode} />} />
            <Route path="/experience" element={<Experience darkMode={darkMode} />} />
            <Route path="/why-me" element={<WhyHireMe darkMode={darkMode} />} />
            <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
            <Route path="/testimonials" element={<Testimonials darkMode={darkMode} />} />
            <Route path="/contact" element={<CTASection darkMode={darkMode} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
