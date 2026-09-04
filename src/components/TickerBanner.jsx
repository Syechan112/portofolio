import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const TickerBanner = () => {
  const items = portfolioData.tickerItems;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-red-600 to-red-500 py-4 text-white z-20">
      <div className="flex w-max select-none animate-[marquee_24s_linear_infinite] will-change-transform">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 px-6 whitespace-nowrap">
            <span className="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-wider text-white">
              {item}
            </span>
            <Sparkles className="w-4 h-4 text-white/70 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBanner;
