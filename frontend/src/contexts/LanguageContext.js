import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Get language from URL
    const pathLang = location.pathname.split('/')[1];
    if (pathLang === 'fr' || pathLang === 'en') {
      setLanguage(pathLang);
      localStorage.setItem('e2care-language', pathLang);
    } else {
      // Check localStorage first, then browser language
      const savedLang = localStorage.getItem('e2care-language');
      const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
      const preferredLang = savedLang || browserLang;
      setLanguage(preferredLang);
    }
  }, [location.pathname]);

  const switchLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('e2care-language', newLang);
    
    // Update URL
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/');
    pathSegments[1] = newLang;
    const newPath = pathSegments.join('/');
    navigate(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};