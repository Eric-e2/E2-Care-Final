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
        
        <div className="footer-bottom">
          <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2025 E2 Technologies OÜ. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
          
          {/* Language Toggle in Footer */}
          <div className="lang-toggle">
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button 
              className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;