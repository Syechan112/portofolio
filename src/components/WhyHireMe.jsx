import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const WhyHireMe = ({ darkMode = false }) => {
  const { whyHireMe } = portfolioData;

  return (
    <section id="why-me" className={`min-h-screen py-28 px-6 border-t scroll-mt-28 ${darkMode ? 'bg-neutral-950 border-white/10' : 'bg-neutral-100 border-black'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <h2 className={`text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}>
              Why Me
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className={`text-4xl md:text-6xl font-bold tracking-tighter leading-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              {whyHireMe.title}
            </h3>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px ${darkMode ? 'bg-white/10' : 'bg-black'}`}>
          {whyHireMe.points.map((point, idx) => (
            <div
              key={idx}
              className={`p-12 flex flex-col justify-start transition-colors ${darkMode ? 'bg-neutral-900 hover:bg-neutral-800' : 'bg-neutral-100 hover:bg-white'}`}
            >
              <span className={`text-xs font-mono uppercase tracking-widest mb-8 block ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                0{idx + 1}
              </span>
              <h4 className={`text-xl font-bold mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
                {point.title}
              </h4>
              <p className={`leading-relaxed text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
