import { lazy, Suspense } from 'react';
import Hero from '../components/sections/Hero';

const About = lazy(() => import('../pages/AboutPage'));
const TickerBanner = lazy(() => import('../components/TickerBanner'));
const Services = lazy(() => import('../components/sections/Services'));
const WhyHireMe = lazy(() => import('../components/sections/WhyHireMe'));
const Portfolio = lazy(() => import('../components/sections/Portfolio'));
const CTASection = lazy(() => import('../components/sections/CTASection'));

const HomePage = ({ darkMode }) => {
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

export default HomePage;
