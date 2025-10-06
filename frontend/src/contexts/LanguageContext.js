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
  
  // Initialize language from URL or localStorage or browser default
  const getInitialLanguage = () => {
    const path = location.pathname;
    if (path.startsWith('/fr')) return 'fr';
    if (path.startsWith('/en')) return 'en';
    
    // Check localStorage for saved preference
    const savedLanguage = localStorage.getItem('e2-lang');
    if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Default from browser language
    const browserLang = navigator.language?.toLowerCase();
    return browserLang?.startsWith('fr') ? 'fr' : 'en';
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  // Update URL when language changes - instant routing
  useEffect(() => {
    const currentPath = location.pathname;
    let newPath;
    
    // Handle root path
    if (currentPath === '/') {
      newPath = `/${language}`;
    }
    // Handle existing language paths
    else if (currentPath.startsWith('/en') || currentPath.startsWith('/fr')) {
      const pathWithoutLang = currentPath.substring(3) || '';
      newPath = `/${language}${pathWithoutLang}`;
    }
    // Handle paths without language prefix
    else {
      newPath = `/${language}${currentPath}`;
    }
    
    // Navigate to new path if different
    if (currentPath !== newPath) {
      navigate(newPath, { replace: true });
    }
  }, [language, location.pathname, navigate]);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('e2-lang', language);
  }, [language]);

  // Toggle between EN and FR
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  // Set language directly
  const setLanguageDirectly = (lang) => {
    if (['en', 'fr'].includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: setLanguageDirectly, 
      toggleLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};