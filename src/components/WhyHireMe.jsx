import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const WhyHireMe = ({ darkMode = false }) => {
  const { whyHireMe } = portfolioData;

  return (
    <section
      id="why-me"
      className={`relative py-28 px-6 border-t scroll-mt-28 ${
        darkMode
          ? "bg-neutral-950 border-white/10"
          : "bg-neutral-100 border-black"
      }`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <span
              className={`text-xs font-mono uppercase tracking-widest ${
                darkMode ? "text-neutral-500" : "text-neutral-500"
              }`}>
              03 - Why Me
            </span>
          </div>

          <div className="lg:col-span-8">
            <h2
              className={`text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] ${
                darkMode ? "text-white" : "text-black"
              }`}>
              {whyHireMe.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {whyHireMe.points.map((point, idx) => {
            const layouts = [
              "md:col-span-7",
              "md:col-span-5",
              "md:col-span-5",
              "md:col-span-7",
            ];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-60px" }}
                className={`${layouts[idx % layouts.length]} group`}>
                <div
                  className={`relative min-h-[320px] md:min-h-[360px] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${
                    darkMode
                      ? "bg-neutral-900 hover:bg-neutral-800"
                      : "bg-white hover:bg-neutral-50"
                  }`}>
                  <span
                    className={`text-xs font-mono ${
                      darkMode ? "text-neutral-600" : "text-neutral-400"
                    }`}>
                    0{idx + 1}
                  </span>

                  <div className="max-w-xl">
                    <h3
                      className={`text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-5 ${
                        darkMode ? "text-white" : "text-black"
                      }`}>
                      {point.title}
                    </h3>

                    <p
                      className={`text-sm md:text-base leading-relaxed max-w-lg ${
                        darkMode ? "text-neutral-400" : "text-neutral-600"
                      }`}>
                      {point.description}
                    </p>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 ${
                      darkMode ? "bg-white/40" : "bg-black/40"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
