import { useLanguage } from "../context/LanguageContext";
import { getLocalized } from "../utils/i18n";

export function useT() {
  const { lang } = useLanguage();
  const t = (value) => getLocalized(value, lang);
  return { lang, t };
}
