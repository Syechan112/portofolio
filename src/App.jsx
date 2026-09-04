import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBanner from './components/TickerBanner';
import Services from './components/Services';
import Experience from './components/Experience';
import WhyHireMe from './components/WhyHireMe';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

// Unified Home Landing Page containing all sections seamlessly
const Home = ({ darkMode }) => {
  return (
    <div className="w-full flex flex-col">
      <Hero darkMode={darkMode} />
      <TickerBanner />
      <Services darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <WhyHireMe darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <CTASection darkMode={darkMode} />
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  // Handle hash scrolling when navigating to #services, #experience, etc.
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

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
        <title>{portfolioData.personal.name} | Portfolio</title>
        <meta name="description" content="Personal portfolio for product design, full-stack engineering, and AI workflows." />
        <meta name="keywords" content="portfolio, full stack developer, frontend engineer, react, web development" />
        <meta name="author" content={portfolioData.personal.name} />
        <meta property="og:title" content={`${portfolioData.personal.name} | Portfolio`} />
        <meta property="og:description" content="Personal portfolio for product design, full-stack engineering, and AI workflows." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <link rel="canonical" href="/" />
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

      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <main className="w-full pt-16">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/experience" element={<Experience darkMode={darkMode} />} />
          <Route path="/why-me" element={<WhyHireMe darkMode={darkMode} />} />
          <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
          <Route path="/testimonials" element={<Testimonials darkMode={darkMode} />} />
          <Route path="/contact" element={<CTASection darkMode={darkMode} />} />
        </Routes>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
