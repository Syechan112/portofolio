import { ArrowUp, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Me", href: "#why-me" },
    { name: "Portfolio", href: "#portfolio" },
  ];

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
                  Portfolio
                </span>
              </div>

              <h2
                className={`text-5xl sm:text-6xl md:text-8xl font-bold tracking-[-0.06em] leading-[0.85] max-w-4xl ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                Let's make
                <br />
                something good.
              </h2>

              <p
                className={`mt-10 max-w-md text-sm md:text-base leading-relaxed ${
                  darkMode ? "text-neutral-500" : "text-neutral-600"
                }`}>
                {portfolioData.personal.tagline}
              </p>
            </div>

            <div className="lg:col-span-2">
              <span
                className={`block mb-6 text-xs font-mono uppercase tracking-[0.2em] ${
                  darkMode ? "text-neutral-600" : "text-neutral-400"
                }`}>
                Navigation
              </span>

              <nav className="flex flex-col">
                {navigation.map((item, index) => (
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
                Connect
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
                href="mailto:syechanmochsinalthubaiti@gmail.com"
                className={`inline-block mt-8 text-sm break-all border-b pb-1 transition-colors ${
                  darkMode
                    ? "text-neutral-400 border-white/20 hover:text-white hover:border-white"
                    : "text-neutral-600 border-black/20 hover:text-black hover:border-black"
                }`}>
                syechanmochsinalthubaiti@gmail.com
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
            className={`group flex items-center gap-3 text-xs font-mono uppercase tracking-widest transition-colors ${
              darkMode
                ? "text-neutral-500 hover:text-white"
                : "text-neutral-500 hover:text-black"
            }`}>
            <span>Back to top</span>

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
