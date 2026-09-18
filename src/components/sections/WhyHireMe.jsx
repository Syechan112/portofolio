import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";

const WhyHireMe = ({ darkMode = false }) => {
  const { lang } = useLanguage();
  const { whyHireMe } = portfolioData;

  const targetRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [maxScroll, setMaxScroll] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const badgeText = whyHireMe.badge[lang] || whyHireMe.badge.en;
  const titleText = whyHireMe.title[lang] || whyHireMe.title.en;
  const subtitleText = whyHireMe.subtitle[lang] || whyHireMe.subtitle.en;
  const nextBadgeText = whyHireMe.nextBadge[lang] || whyHireMe.nextBadge.en;
  const nextTitleText = whyHireMe.nextTitle[lang] || whyHireMe.nextTitle.en;
  const scrollText = whyHireMe.scrollText[lang] || whyHireMe.scrollText.en;

  /*
   * Hitung jarak horizontal sebenarnya.
   * Jadi tidak bergantung pada jumlah card atau ukuran layar.
   */
  useLayoutEffect(() => {
    const calculateScroll = () => {
      if (!viewportRef.current || !trackRef.current) return;

      const viewportWidth = viewportRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;

      setMaxScroll(Math.max(trackWidth - viewportWidth, 0));
    };

    calculateScroll();

    const resizeObserver = new ResizeObserver(calculateScroll);

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", calculateScroll);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateScroll);
    };
  }, [whyHireMe.points, lang]);

  /*
   * Geser tepat sampai elemen terakhir berada
   * di dalam viewport.
   */
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="why-me"
      ref={targetRef}
      className={`relative h-[360vh] md:h-[320vh] border-t ${
        darkMode
          ? "bg-neutral-950 border-white/10"
          : "bg-[#f5f5f3] border-black/10"
      }`}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-12 w-full max-w-[1400px] px-6 md:mb-16 md:px-12">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span
                  className={`h-px w-7 ${
                    darkMode ? "bg-white/30" : "bg-black/30"
                  }`}
                />

                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                    darkMode ? "text-neutral-500" : "text-neutral-500"
                  }`}>
                  {badgeText}
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2
                className={`max-w-4xl text-4xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                {titleText}
              </h2>

              <p
                className={`mt-6 max-w-md text-sm leading-6 ${
                  darkMode ? "text-neutral-500" : "text-neutral-500"
                }`}>
                {subtitleText}
              </p>
            </div>
          </div>
        </div>

        <div ref={viewportRef} className="relative w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-4 px-6 md:gap-6 md:px-12">
            {whyHireMe.points.map((point, idx) => {
              const pointTitle = point.title[lang] || point.title.en;
              const pointDesc = point.description[lang] || point.description.en;

              return (
                <article
                  key={idx}
                  className="group w-[82vw] max-w-[460px] flex-shrink-0">
                  <div
                    className={`relative flex h-[360px] flex-col justify-between overflow-hidden border transition-all duration-500 sm:h-[390px] md:h-[430px] ${
                      darkMode
                        ? "border-white/10 bg-neutral-900 hover:border-white/20"
                        : "border-black/10 bg-white hover:border-black/20"
                    }`}>
                    <div
                      className={`pointer-events-none absolute -right-5 -top-12 select-none text-[150px] font-bold leading-none tracking-[-0.1em] transition-transform duration-700 sm:text-[180px] ${
                        darkMode ? "text-white/[0.035]" : "text-black/[0.045]"
                      } group-hover:-translate-y-3`}>
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <div className="relative z-10 flex items-center justify-between p-6 sm:p-7 md:p-9">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                          darkMode ? "text-neutral-500" : "text-neutral-400"
                        }`}>
                        0{idx + 1}
                      </span>

                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-transform duration-500 group-hover:scale-[2] ${
                          darkMode ? "bg-white/40" : "bg-black/30"
                        }`}
                      />
                    </div>

                    <div className="relative z-10 p-6 sm:p-7 md:p-9">
                      <h3
                        className={`mb-4 max-w-[390px] text-2xl font-semibold leading-[1] tracking-[-0.04em] md:text-3xl ${
                          darkMode ? "text-white" : "text-black"
                        }`}>
                        {pointTitle}
                      </h3>

                      <p
                        className={`max-w-[390px] text-sm leading-6 md:text-[15px] md:leading-7 ${
                          darkMode ? "text-neutral-400" : "text-neutral-600"
                        }`}>
                        {pointDesc}
                      </p>
                    </div>

                    <div
                      className={`relative z-10 h-px w-full origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100 ${
                        darkMode ? "bg-white/40" : "bg-black/30"
                      }`}
                    />
                  </div>
                </article>
              );
            })}

            <article className="flex w-[82vw] max-w-[650px] flex-shrink-0 items-center">
              <div className="px-2 sm:px-6 md:px-8">
                <span
                  className={`mb-5 block font-mono text-[10px] uppercase tracking-[0.2em] ${
                    darkMode ? "text-neutral-600" : "text-neutral-400"
                  }`}>
                  {nextBadgeText}
                </span>

                <h3
                  className={`text-4xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-5xl md:text-7xl whitespace-pre-line ${
                    darkMode ? "text-white" : "text-black"
                  }`}>
                  {nextTitleText}
                </h3>

                <div
                  className={`mt-7 h-px w-16 ${
                    darkMode ? "bg-white/30" : "bg-black/30"
                  }`}
                />
              </div>
            </article>
          </motion.div>

          <div className="mx-6 mt-8 flex items-center gap-4 md:mx-12 md:mt-10">
            <div
              className={`h-px flex-1 ${
                darkMode ? "bg-white/10" : "bg-black/10"
              }`}>
              <motion.div
                style={{ width: progress }}
                className={`h-full ${darkMode ? "bg-white/40" : "bg-black/40"}`}
              />
            </div>

            <span
              className={`font-mono text-[9px] tracking-[0.2em] ${
                darkMode ? "text-neutral-600" : "text-neutral-400"
              }`}>
              {scrollText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
