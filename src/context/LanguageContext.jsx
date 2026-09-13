import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('app_lang');
    if (savedLang === 'id' || savedLang === 'en') {
      return savedLang;
    }
    // Check browser preference or default to 'id'
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang?.startsWith('id') ? 'id' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isId: lang === 'id' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
