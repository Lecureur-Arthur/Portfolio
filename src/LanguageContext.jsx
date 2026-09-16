import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'fr' ? 'en' : 'fr'));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  // J'ajoute setLanguage aux valeurs exportées pour l'utiliser dans la barre de navigation.
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);