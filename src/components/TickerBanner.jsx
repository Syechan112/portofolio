import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const TickerBanner = () => {
  const { lang } = useLanguage();
  const items = portfolioData.tickerItems[lang] || portfolioData.tickerItems.en;

  return (
    <div className="relative w-full overflow-hidden py-6 border-b border-neutral-100 dark:border-white/10 z-20 group">
      <div className="flex w-max select-none animate-[marquee_30s_linear_infinite] gap-12 will-change-transform group-hover:[animation-play-state:paused]">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center px-4 transition-all duration-300 group-hover:blur-[2px] hover:!blur-none">
            <span className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-neutral-900 dark:text-white transition-colors duration-300 cursor-pointer">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBanner;
