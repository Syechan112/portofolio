import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import profile from "../assets/profile/profile.webp";

const Hero = ({ darkMode = false }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const imageX = useTransform(mouseXSpring, [-0.5, 0.5], ["-16px", "16px"]);
  const imageY = useTransform(mouseYSpring, [-0.5, 0.5], ["-16px", "16px"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / rect.width - 0.5;
    const yPct = mouseYPos / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className={`w-full relative min-h-[85vh] mb-20 pt-16 pb-0 px-6 flex flex-col justify-end overflow-hidden scroll-mt-28 ${darkMode ? "bg-neutral-950 text-white" : "bg-white text-black"}`}>
      <motion.div
        style={{ opacity: opacityFade }}
        className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end z-10">
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 pb-8 lg:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-3 py-1 border text-xs font-mono uppercase tracking-widest ${darkMode ? "border-white text-white" : "border-black text-black"}`}>
            <span className="font-medium">{portfolioData.personal.role}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl xl:text-6xl font-bold tracking-tighter leading-[1]">
            Building Modern Web Apps with Full-Stack &amp; AI Workflows.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg sm:text-xl max-w-xl leading-relaxed ${darkMode ? "text-neutral-300" : "text-neutral-600"}`}>
            {portfolioData.personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 pt-2">
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
              className={`group inline-flex items-center gap-2 px-6 py-3 border-2 font-bold text-sm sm:text-base transition-all duration-200 ${darkMode ? "border-white bg-white text-black hover:bg-transparent hover:text-white" : "border-black bg-black text-white hover:bg-white hover:text-black"}`}>
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
              className={`inline-flex items-center gap-2 px-6 py-3 border-2 font-bold text-sm sm:text-base transition-all duration-200 ${darkMode ? "border-white text-white hover:bg-white hover:text-black" : "border-neutral-200 text-black hover:border-black"}`}>
              <span>Get in Touch</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`grid grid-cols-2 gap-8 pt-6 w-full border-t ${darkMode ? "border-white/10" : "border-neutral-200"}`}>
            {portfolioData.personal.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span
                  className={`text-xs uppercase tracking-widest mt-2 font-mono ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex items-end justify-center lg:justify-end h-full relative self-end [perspective:1200px]">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.025 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full max-w-xl xl:max-w-2xl aspect-[3/4] overflow-hidden rounded-sm cursor-pointer will-change-transform">
            {/* Grid Reveal Overlay */}
            <motion.div
              className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-[2px] z-30 pointer-events-none"
              initial={false}>
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`${darkMode ? "bg-neutral-950" : "bg-white"}`}
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                  viewport={{ once: false, amount: 0.2 }}
                />
              ))}
            </motion.div>

            {/* Parallax Image Layer */}
            <motion.div
              style={{
                x: imageX,
                y: imageY,
                transformStyle: "preserve-3d",
              }}
              className="w-full h-full scale-[1.08] origin-center">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-700 block select-none pointer-events-none"
              />
            </motion.div>

            {/* Dynamic Glare Reflection */}
            <motion.div
              style={{
                background: `radial-gradient(circle at center, ${darkMode ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.3)"} 0%, transparent 70%)`,
                left: glareX,
                top: glareY,
                transform: "translate(-50%, -50%)",
              }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="absolute w-[180%] h-[180%] pointer-events-none rounded-full z-20 mix-blend-overlay"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
