import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const t = content[language].footer;
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-company">
            {t.company}
          </div>
          
          <div className="footer-contact">
            {t.contact}
          </div>
          
          <div className="footer-links">
            <a href={`/${language}#integrators`}>
              {t.integrators}
            </a>
          </div>
          
        </div>
        
          <div className="footer-language">
            <div className="language-toggle">
              <span 
                className={`lang-badge ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageClick('en')}
              >
                EN
              </span>
              <span>/</span>
              <span 
                className={`lang-badge ${language === 'fr' ? 'active' : ''}`}
                onClick={() => handleLanguageClick('fr')}
              >
                FR
              </span>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;