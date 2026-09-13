import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Mail, MessageSquare } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const CTASection = ({ darkMode = false }) => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const { personal, cta } = portfolioData;

  const isId = lang === "id";

  const badgeText = cta.badge[lang] || cta.badge.en;
  const headlineText = cta.headline[lang] || cta.headline.en;
  const subtextText = cta.subtext[lang] || cta.subtext.en;

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    isId
      ? "Halo Syehan, saya tertarik untuk mendiskusikan proyek web bersama Anda."
      : "Hi Syehan, I would like to discuss a web project with you."
  );
  const whatsappUrl = `https://wa.me/628979673149?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className={`py-32 px-6 border-t scroll-mt-28 transition-colors duration-300 font-sans ${
        darkMode ? "bg-neutral-950 border-white/10" : "bg-white border-black"
      }`}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <span
              className={`text-xs uppercase tracking-wider font-semibold ${
                darkMode ? "text-neutral-500" : "text-neutral-400"
              }`}>
              {badgeText}
            </span>
          </div>

          <div className="md:col-span-8">
            <h2
              className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] whitespace-pre-line ${
                darkMode ? "text-white" : "text-black"
              }`}>
              {headlineText}
            </h2>

            <p
              className={`mt-8 max-w-xl text-base md:text-lg leading-relaxed ${
                darkMode ? "text-neutral-400" : "text-neutral-600"
              }`}>
              {subtextText}
            </p>
          </div>
        </div>

        {/* Contact Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={`group flex flex-col justify-between p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "bg-neutral-900/50 border-white/10 hover:border-white/20 hover:shadow-black/40"
                : "bg-white border-black/10 hover:border-black/20 hover:shadow-neutral-200/60"
            }`}>
            <div>
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                      darkMode
                        ? "border-white/10 bg-white/5 text-white"
                        : "border-black/10 bg-black/5 text-black"
                    }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs uppercase tracking-wider font-semibold ${
                      darkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                    Email
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border transition-all cursor-pointer ${
                    copied
                      ? darkMode
                        ? "border-white bg-white text-black font-semibold"
                        : "border-black bg-black text-white font-semibold"
                      : darkMode
                        ? "border-white/15 text-neutral-300 hover:text-white hover:border-white/30 bg-white/5"
                        : "border-black/15 text-neutral-600 hover:text-black hover:border-black/30 bg-black/5"
                  }`}>
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{isId ? "Tersalin" : "Copied"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isId ? "Salin" : "Copy"}</span>
                    </>
                  )}
                </button>
              </div>

              <h3
                className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 break-all ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                {personal.social.email}
              </h3>

              <p
                className={`text-sm md:text-base leading-relaxed ${
                  darkMode ? "text-neutral-400" : "text-neutral-600"
                }`}>
                {isId
                  ? "Kirim pesan melalui email untuk pertanyaan mendalam, tawaran kerjasama, atau lingkup proyek."
                  : "Send an email directly for in-depth inquiries, project scopes, or collaboration opportunities."}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-inherit flex items-center justify-between">
              <span
                className={`text-xs font-medium ${
                  darkMode ? "text-neutral-500" : "text-neutral-400"
                }`}>
                {isId ? "Respon dalam 24 jam" : "Response within 24h"}
              </span>

              <a
                href={`mailto:${personal.social.email}`}
                className={`text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1 transition-transform group-hover:translate-x-1 ${
                  darkMode
                    ? "text-white hover:text-neutral-300"
                    : "text-black hover:text-neutral-600"
                }`}>
                <span>{isId ? "Buka Email" : "Send Email"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className={`group flex flex-col justify-between p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "bg-neutral-900/50 border-white/10 hover:border-white/20 hover:shadow-black/40"
                : "bg-white border-black/10 hover:border-black/20 hover:shadow-neutral-200/60"
            }`}>
            <div>
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                      darkMode
                        ? "border-white/10 bg-white/5 text-white"
                        : "border-black/10 bg-black/5 text-black"
                    }`}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs uppercase tracking-wider font-semibold ${
                      darkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                    WhatsApp
                  </span>
                </div>

                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    darkMode
                      ? "border-white/10 text-neutral-300 bg-white/5"
                      : "border-black/10 text-neutral-600 bg-black/5"
                  }`}>
                  {isId ? "Chat Langsung" : "Direct Chat"}
                </span>
              </div>

              <h3
                className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                +62 897-9673-149
              </h3>

              <p
                className={`text-sm md:text-base leading-relaxed ${
                  darkMode ? "text-neutral-400" : "text-neutral-600"
                }`}>
                {isId
                  ? "Hubungi langsung melalui WhatsApp untuk diskusi singkat, respon lebih cepat, atau pertanyaan awal."
                  : "Reach out via WhatsApp for fast communication, quick questions, or introductory discussions."}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-inherit flex items-center justify-between">
              <span
                className={`text-xs font-medium ${
                  darkMode ? "text-neutral-500" : "text-neutral-400"
                }`}>
                {isId ? "Tersedia untuk chat" : "Available for chat"}
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1 transition-transform group-hover:translate-x-1 ${
                  darkMode
                    ? "text-white hover:text-neutral-300"
                    : "text-black hover:text-neutral-600"
                }`}>
                <span>{isId ? "Mulai Chat" : "Start Chat"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section Footer */}
        <div
          className={`mt-20 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium ${
            darkMode ? "border-white/10 text-neutral-500" : "border-black/10 text-neutral-500"
          }`}>
          <span className="uppercase tracking-wider">{personal.name}</span>
          <span>{isId ? "Jakarta, Indonesia / Remote Seluruh Dunia" : "Jakarta, Indonesia / Remote Worldwide"}</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
