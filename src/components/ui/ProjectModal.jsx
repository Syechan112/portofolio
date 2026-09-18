import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const ProjectModal = ({ project, isOpen, onClose, darkMode }) => {
  const { lang } = useLanguage();
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 md:p-8 shadow-2xl ${
            darkMode
              ? "bg-neutral-900 border-white/15 text-white"
              : "bg-white border-black/15 text-black"
          }`}>
          
          <button
            onClick={onClose}
            className={`absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm transition-colors ${
              darkMode
                ? "bg-white/10 text-neutral-300 hover:bg-white/20 hover:text-white"
                : "bg-black/5 text-neutral-600 hover:bg-black/10 hover:text-black"
            }`}>
            ✕
          </button>

          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border ${
                darkMode
                  ? "text-neutral-400 border-white/10 bg-white/5"
                  : "text-neutral-600 border-black/10 bg-black/5"
              }`}>
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {project.title}
          </h3>

          <div className="mb-6 rounded-xl overflow-hidden border border-inherit aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center relative">
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
                <span className="text-4xl mb-2">📁</span>
                <span className={`text-xs font-mono uppercase tracking-widest ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}>
                  {project.title} Preview
                </span>
              </div>
            )}
          </div>

          <p
            className={`text-sm md:text-base leading-relaxed mb-6 ${
              darkMode ? "text-neutral-300" : "text-neutral-700"
            }`}>
            {descriptionText}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                  darkMode
                    ? "bg-white/10 text-neutral-300"
                    : "bg-black/5 text-neutral-700"
                }`}>
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-inherit">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 min-w-[140px] px-5 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-200 border ${
                  darkMode
                    ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
                    : "bg-black text-white border-black hover:bg-neutral-800"
                }`}>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub ↗
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 min-w-[140px] px-5 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-200 border ${
                  darkMode
                    ? "bg-white text-black border-white hover:bg-neutral-200"
                    : "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800"
                }`}>
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on Live ↗
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
