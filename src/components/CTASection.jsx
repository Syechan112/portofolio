import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const CTASection = ({ darkMode = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/628979673149?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
    setMessage("");
  };

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
                Open to projects, collaborations, and useful builds.
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

                <button
                  onClick={() => setIsModalOpen(true)}
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
                  </div>

                  <div className="absolute bottom-7 left-7">
                    <span
                      className={`text-xl md:text-2xl font-bold tracking-tight ${
                        darkMode ? "text-white" : "text-black"
                      }`}>
                      Say what you need
                    </span>
                  </div>
                </button>
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
            Build something useful.
          </span>

          <span
            className={`text-xs font-mono ${
              darkMode ? "text-neutral-700" : "text-neutral-400"
            }`}>
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`relative w-full max-w-lg p-6 border shadow-xl ${
                darkMode ? "bg-neutral-900 border-white/10" : "bg-white border-black"
              }`}>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:opacity-70 transition-opacity">
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleWhatsAppSend} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Send via WhatsApp</h3>
                  <p className={`mt-2 text-xs font-mono ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}>
                    To +62 897-9673-149
                  </p>
                </div>

                <textarea
                  autoFocus
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  className={`w-full p-4 bg-transparent border focus:outline-none transition-colors text-sm ${
                    darkMode 
                      ? "border-white/10 focus:border-white/30 placeholder:text-neutral-700" 
                      : "border-black/10 focus:border-black/30 placeholder:text-neutral-400"
                  }`}
                />

                <button
                  type="submit"
                  className={`w-full py-3 flex items-center justify-center gap-2 font-medium text-sm transition-all ${
                    darkMode
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-black text-white hover:bg-neutral-800"
                  }`}>
                  <span>Send</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;

