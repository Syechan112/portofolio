import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const Services = ({ darkMode = false }) => {
  const { lang } = useLanguage();
  const { services } = portfolioData;

  const badgeText = services.badge[lang] || services.badge.en;
  const titleText = services.title[lang] || services.title.en;
  const subtitleText = services.subtitle[lang] || services.subtitle.en;
  const footerLabel = services.footerLabel[lang] || services.footerLabel.en;
  const footerCount = services.footerCount[lang] || services.footerCount.en;

  return (
    <section
      id="services"
      className={`py-28 px-6 border-t scroll-mt-28 ${
        darkMode ? "bg-neutral-950 border-white/10" : "bg-white border-black"
      }`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span
              className={`text-xs font-mono uppercase tracking-[0.3em] ${
                darkMode ? "text-neutral-500" : "text-neutral-400"
              }`}>
              {badgeText}
            </span>

            <h2
              className={`mt-5 text-5xl md:text-7xl font-bold tracking-tighter leading-none ${
                darkMode ? "text-white" : "text-black"
              }`}>
              {titleText}
            </h2>
          </div>

          <p
            className={`max-w-md text-sm leading-relaxed ${
              darkMode ? "text-neutral-400" : "text-neutral-600"
            }`}>
            {subtitleText}
          </p>
        </div>

        <div className="border-t border-current">
          {services.items.map((service, index) => {
            const servTitle = service.title[lang] || service.title.en;
            const servDesc = service.description[lang] || service.description.en;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group relative border-b transition-all duration-500 ${
                  darkMode
                    ? "border-white/10 hover:bg-white/[0.03]"
                    : "border-black/10 hover:bg-black/[0.025]"
                }`}>
                <div className="grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 items-start">
                  <div className="col-span-12 md:col-span-5">
                    <h3
                      className={`text-3xl md:text-4xl font-bold tracking-tighter transition-transform duration-500 group-hover:translate-x-2 ${
                        darkMode ? "text-white" : "text-black"
                      }`}>
                      {servTitle}
                    </h3>
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <p
                      className={`max-w-lg leading-relaxed ${
                        darkMode ? "text-neutral-400" : "text-neutral-600"
                      }`}>
                      {servDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 border ${
                            darkMode
                              ? "text-neutral-300 border-white/15"
                              : "text-neutral-700 border-black/15"
                          }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`hidden md:flex col-span-1 justify-end text-2xl transition-all duration-500 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 ${
                      darkMode ? "text-white" : "text-black"
                    }`}>
                    ↗
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ${
                    darkMode ? "bg-white" : "bg-black"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        <div
          className={`flex justify-between mt-8 text-[10px] font-mono uppercase tracking-widest ${
            darkMode ? "text-neutral-600" : "text-neutral-400"
          }`}>
          <span>{footerLabel}</span>
          <span>
            {services.items.length} {footerCount}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
