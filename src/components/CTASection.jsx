import { portfolioData } from "../data/portfolioData";

const CTASection = ({ darkMode = false }) => {
  return (
    <section
      id="contact"
      className={`relative py-32 md:py-40 px-6 border-t scroll-mt-28 overflow-hidden ${
        darkMode ? "bg-neutral-950 border-white/10" : "bg-white border-black"
      }`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-mono uppercase tracking-[0.3em] ${
                  darkMode ? "text-neutral-500" : "text-neutral-400"
                }`}>
                05 — Contact
              </span>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="max-w-5xl">
              <h2
                className={`text-5xl sm:text-6xl md:text-8xl font-bold tracking-[-0.06em] leading-[0.88] ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                Have a project
                <br />
                in mind?
              </h2>

              <p
                className={`mt-10 max-w-xl text-base md:text-lg leading-relaxed ${
                  darkMode ? "text-neutral-400" : "text-neutral-600"
                }`}>
                I'm open to interesting projects, collaborations, and
                opportunities to build something useful together.
              </p>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:syechanmochsinalthubaiti@gmail.com"
                  className={`group relative min-h-[150px] p-7 border transition-colors duration-300 ${
                    darkMode
                      ? "border-white/10 hover:border-white/30 bg-neutral-900/40"
                      : "border-black/10 hover:border-black/30 bg-neutral-50"
                  }`}>
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-xs font-mono uppercase tracking-widest ${
                        darkMode ? "text-neutral-600" : "text-neutral-400"
                      }`}>
                      Email
                    </span>

                    <span
                      className={`text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        darkMode ? "text-neutral-400" : "text-neutral-500"
                      }`}>
                      ↗
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7">
                    <span
                      className={`text-base md:text-lg font-medium break-all ${
                        darkMode ? "text-white" : "text-black"
                      }`}>
                      syechanmochsinalthubaiti@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/628979673149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative min-h-[150px] p-7 border transition-colors duration-300 ${
                    darkMode
                      ? "border-white/10 hover:border-white/30 bg-neutral-900/40"
                      : "border-black/10 hover:border-black/30 bg-neutral-50"
                  }`}>
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-xs font-mono uppercase tracking-widest ${
                        darkMode ? "text-neutral-600" : "text-neutral-400"
                      }`}>
                      WhatsApp
                    </span>

                    <span
                      className={`text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        darkMode ? "text-neutral-400" : "text-neutral-500"
                      }`}>
                      ↗
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-7">
                    <span
                      className={`text-xl md:text-2xl font-bold tracking-tight ${
                        darkMode ? "text-white" : "text-black"
                      }`}>
                      Schedule a call
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-24 pt-5 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-3 ${
            darkMode ? "border-white/10" : "border-black/10"
          }`}>
          <span
            className={`text-xs font-mono uppercase tracking-widest ${
              darkMode ? "text-neutral-600" : "text-neutral-400"
            }`}>
            Let's build something useful.
          </span>

          <span
            className={`text-xs font-mono ${
              darkMode ? "text-neutral-700" : "text-neutral-400"
            }`}>
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
