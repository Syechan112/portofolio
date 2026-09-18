import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const ProjectModal = ({ project, isOpen, onClose, darkMode }) => {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const taglineText = project.tagline[lang] || project.tagline.en;
  const descriptionText = project.description ? (project.description[lang] || project.description.en) : taglineText;
  const githubLink = project.github;
  const liveLink = project.live;
  const projectImage = project.image || (project.github ? `https://opengraph.githubassets.com/1/${project.github.split('/').slice(-2).join('/')}` : null);
  
  const placeholderFallback = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="800" height="450" fill="#27272a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="20" fill="#71717a">${project.title} — Preview</text></svg>`
  )}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{ willChange: "opacity" }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80">
          <motion.div
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.3 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 80 || info.velocity.y > 300) {
                onClose();
              }
            }}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{ willChange: "transform, opacity" }}
            className={`relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] flex flex-col rounded-t-[28px] sm:rounded-2xl border-t sm:border shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing ${
              darkMode
                ? "bg-neutral-900 border-white/15 text-white"
                : "bg-white border-black/15 text-black"
            }`}>
            
            {/* Mobile Drag Indicator */}
            <div className="sm:hidden flex justify-center pt-3 pb-1 cursor-pointer" onClick={onClose}>
              <div className={`w-12 h-1.5 rounded-full ${darkMode ? "bg-white/20" : "bg-black/15"}`} />
            </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className={`absolute top-4 right-4 sm:top-5 sm:right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm transition-all active:scale-95 ${
              darkMode
                ? "bg-white/10 text-neutral-300 hover:bg-white/20 hover:text-white"
                : "bg-black/5 text-neutral-600 hover:bg-black/10 hover:text-black"
            }`}>
            ✕
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto px-5 sm:px-8 pt-4 sm:pt-8 pb-6 space-y-5">
            <div className="flex items-center gap-2">
              <span
                className={`text-[11px] sm:text-xs font-mono font-medium px-2.5 py-0.5 sm:py-1 rounded-full border ${
                  darkMode
                    ? "text-neutral-400 border-white/10 bg-white/5"
                    : "text-neutral-600 border-black/10 bg-black/5"
                }`}>
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-bold tracking-tight pr-8">
              {project.title}
            </h3>

            <div className="rounded-xl overflow-hidden border border-inherit aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center relative shadow-inner">
              {projectImage ? (
                <img
                  src={projectImage}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    if (e.currentTarget.src !== placeholderFallback) {
                      e.currentTarget.src = placeholderFallback;
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-3xl sm:text-4xl mb-2">📁</span>
                  <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-widest ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}>
                    {project.title} Preview
                  </span>
                </div>
              )}
            </div>

            <p
              className={`text-xs sm:text-base leading-relaxed ${
                darkMode ? "text-neutral-300" : "text-neutral-700"
              }`}>
              {descriptionText}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md ${
                    darkMode
                      ? "bg-white/10 text-neutral-300"
                      : "bg-black/5 text-neutral-700"
                  }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer Buttons */}
          <div className={`p-4 sm:p-6 border-t flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mt-auto ${
            darkMode ? "border-white/10 bg-neutral-900/90" : "border-black/10 bg-white/90"
          } backdrop-blur-md`}>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:flex-1 py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.99] border ${
                  darkMode
                    ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
                    : "bg-black text-white border-black hover:bg-neutral-800"
                }`}>
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View on GitHub</span>
                <span className="text-sm">↗</span>
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:flex-1 py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.99] border ${
                  darkMode
                    ? "bg-white text-black border-white hover:bg-neutral-200"
                    : "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800"
                }`}>
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 shrink-0" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View on Live</span>
                <span className="text-sm">↗</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
