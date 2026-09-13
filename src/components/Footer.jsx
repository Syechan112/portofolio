import { ArrowUp, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const Footer = ({ darkMode }) => {
  const { lang } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigation = portfolioData.nav.links.map((link) => ({
    name: link.name[lang] || link.name.en,
    href: link.hash,
  }));

  const { footer } = portfolioData;
  const footerBadge = footer.badge[lang] || footer.badge.en;
  const footerHeadline = footer.headline[lang] || footer.headline.en;
  const taglineText = portfolioData.personal.tagline[lang] || portfolioData.personal.tagline.en;
  const navLabel = footer.navLabel[lang] || footer.navLabel.en;
  const connectLabel = footer.connectLabel[lang] || footer.connectLabel.en;
  const backToTopText = footer.backToTop[lang] || footer.backToTop.en;

  return (
    <footer
      className={`relative border-t ${
        darkMode
          ? "bg-neutral-950 text-white border-white/10"
          : "bg-neutral-100 text-black border-black/10"
      }`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="mb-12">
                <span
                  className={`text-xs font-mono uppercase tracking-[0.3em] ${
                    darkMode ? "text-neutral-600" : "text-neutral-400"
                  }`}>
                  {footerBadge}
                </span>
              </div>

              <h2
                className={`text-5xl sm:text-6xl md:text-8xl font-bold tracking-[-0.06em] leading-[0.85] max-w-4xl whitespace-pre-line ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                {footerHeadline}
              </h2>

              <p
                className={`mt-10 max-w-md text-sm md:text-base leading-relaxed ${
                  darkMode ? "text-neutral-500" : "text-neutral-600"
                }`}>
                {taglineText}
              </p>
            </div>

            <div className="lg:col-span-2">
              <span
                className={`block mb-6 text-xs font-mono uppercase tracking-[0.2em] ${
                  darkMode ? "text-neutral-600" : "text-neutral-400"
                }`}>
                {navLabel}
              </span>

              <nav className="flex flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center justify-between py-2.5 text-sm transition-colors ${
                      darkMode
                        ? "text-neutral-400 hover:text-white"
                        : "text-neutral-600 hover:text-black"
                    }`}>
                    <span>{item.name}</span>

                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-3">
              <span
                className={`block mb-6 text-xs font-mono uppercase tracking-[0.2em] ${
                  darkMode ? "text-neutral-600" : "text-neutral-400"
                }`}>
                {connectLabel}
              </span>

              <div className="flex flex-col">
                {portfolioData.personal.social.github && (
                  <a
                    href={portfolioData.personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between py-2.5 text-sm border-b ${
                      darkMode
                        ? "border-white/10 text-neutral-400 hover:text-white"
                        : "border-black/10 text-neutral-600 hover:text-black"
                    } transition-colors`}>
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                  </a>
                )}

                {/* Instagram */}
                {portfolioData.personal.social.instagram && (
                  <a
                    href={portfolioData.personal.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between py-2.5 text-sm border-b ${
                      darkMode
                        ? "border-white/10 text-neutral-400 hover:text-white"
                        : "border-black/10 text-neutral-600 hover:text-black"
                    } transition-colors`}>
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                  </a>
                )}

                {/* LinkedIn */}
                {portfolioData.personal.social.linkedin && (
                  <a
                    href={portfolioData.personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between py-2.5 text-sm border-b ${
                      darkMode
                        ? "border-white/10 text-neutral-400 hover:text-white"
                        : "border-black/10 text-neutral-600 hover:text-black"
                    } transition-colors`}>
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                  </a>
                )}

                <a
                  href="https://wa.me/628979673149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between py-2.5 text-sm border-b ${
                    darkMode
                      ? "border-white/10 text-neutral-400 hover:text-white"
                      : "border-black/10 text-neutral-600 hover:text-black"
                  } transition-colors`}>
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                </a>
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=syechanmochsinalthubaiti@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-8 text-sm break-all border-b pb-1 transition-colors ${
                  darkMode
                    ? "text-neutral-400 border-white/20 hover:text-white hover:border-white"
                    : "text-neutral-600 border-black/20 hover:text-black hover:border-black"
                }`}>
                {portfolioData.personal.social.email}
              </a>
            </div>
          </div>
        </div>

        <div
          className={`py-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 ${
            darkMode ? "border-white/10" : "border-black/10"
          }`}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <p
              className={`text-xs font-mono ${
                darkMode ? "text-neutral-600" : "text-neutral-400"
              }`}>
              © {new Date().getFullYear()} {portfolioData.personal.name}
            </p>

            <span
              className={`hidden sm:block w-1 h-1 rounded-full ${
                darkMode ? "bg-neutral-700" : "bg-neutral-300"
              }`}
            />

            <p
              className={`text-xs ${
                darkMode ? "text-neutral-700" : "text-neutral-400"
              }`}>
              Built with React & Tailwind CSS
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={`group flex items-center gap-3 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer ${
              darkMode
                ? "text-neutral-500 hover:text-white"
                : "text-neutral-500 hover:text-black"
            }`}>
            <span>{backToTopText}</span>

            <span
              className={`w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "border-white/10 group-hover:border-white/40"
                  : "border-black/10 group-hover:border-black/40"
              }`}>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
