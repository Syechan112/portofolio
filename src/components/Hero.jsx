import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import profile from "../assets/profile/syehan.png";

const Hero = ({ darkMode = false }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <section
        id="top"
        ref={containerRef}
        className={`w-full relative min-h-[80vh] mb-20 pt-16 pb-0 px-6 flex flex-col justify-end overflow-hidden scroll-mt-28 ${darkMode ? "bg-neutral-950 text-white" : "bg-white text-black"}`}
      >
        <motion.div
          style={{ opacity: opacityFade }}
          className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end z-10"
        >
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 pb-8 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3 py-1 border text-xs font-mono uppercase tracking-widest ${darkMode ? "border-white text-white" : "border-black text-black"}`}
            >
              <span className="font-medium">{portfolioData.personal.role}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl xl:text-6xl font-bold tracking-tighter leading-[1]"
            >
              Building Modern Web Apps with Full-Stack &amp; AI Workflows.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg sm:text-xl max-w-xl leading-relaxed ${darkMode ? "text-neutral-300" : "text-neutral-600"}`}
            >
              {portfolioData.personal.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <a
                href="/#portfolio"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    document
                      .getElementById("portfolio")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`group inline-flex items-center gap-2 px-6 py-3 border-2 font-bold text-sm sm:text-base transition-all duration-200 ${darkMode ? "border-white bg-white text-black hover:bg-transparent hover:text-white" : "border-black bg-black text-white hover:bg-white hover:text-black"}`}
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/#contact"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`inline-flex items-center gap-2 px-6 py-3 border-2 font-bold text-sm sm:text-base transition-all duration-200 ${darkMode ? "border-white text-white hover:bg-white hover:text-black" : "border-neutral-200 text-black hover:border-black"}`}
              >
                <span>Get in Touch</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`grid grid-cols-2 gap-8 pt-6 w-full border-t ${darkMode ? "border-white/10" : "border-neutral-200"}`}
            >
              {portfolioData.personal.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest mt-2 font-mono ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end h-full relative self-end">
            <div
              className={`w-full max-w-xl xl:max-w-2xl aspect-[3/4] p-0 m-0 self-end border-b ${darkMode ? "border-white/10" : "border-black"}`}
            >
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-500 block scale-100 lg:scale-[1.05] origin-bottom"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className={`w-full min-h-[50vh] px-6 py-24 border-b flex items-center ${darkMode ? "bg-neutral-950 border-white/10" : "bg-white border-black"}`}
      >
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p
              className={`text-sm font-mono uppercase tracking-widest mb-6 ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
            >
              Introduction
            </p>
            <h2
              className={`text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1] ${darkMode ? "text-white" : "text-black"}`}
            >
              Build clean products with sharp systems and strong visual
              identity.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <div
              className={`max-w-md border-t pt-8 ${darkMode ? "border-white/10" : "border-black"}`}
            >
              <p
                className={`text-lg leading-relaxed ${darkMode ? "text-neutral-300" : "text-neutral-600"}`}
              >
                Self portfolio focused on product design, frontend craft, and
                editorial presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
