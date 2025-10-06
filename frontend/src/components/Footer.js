import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Footer = ({ language }) => {
  const { setLanguage } = useLanguage();
  const t = content[language];
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Company Info */}
          <div className="footer-section">
            <h3>E2-Care</h3>
            <p>{t.footer.company}</p>
            <p>
              <a href="mailto:contact@e2.dev" className="footer-link">{t.footer.email}</a>
            </p>
            <p>
              <a href="https://www.e2.dev" target="_blank" rel="noopener noreferrer" className="footer-link">
                {t.footer.website}
              </a>
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              {t.footer.whatsapp}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h3>{language === 'en' ? 'Quick Links' : 'Liens Rapides'}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#solutions" className="footer-link">{language === 'en' ? 'Solutions' : 'Solutions'}</a>
              <a href="#how-it-works" className="footer-link">{language === 'en' ? 'How it Works' : 'Comment ça Marche'}</a>
              <a href="#stories" className="footer-link">{language === 'en' ? 'Success Stories' : 'Témoignages'}</a>
              <a href="#integrators" className="footer-link">{t.footer.integrators}</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>
          </div>
          
          {/* Partners */}
          <div className="footer-section">
            <h3>{language === 'en' ? 'Partners' : 'Partenaires'}</h3>
            <p>
              <a href="#integrators" className="footer-link">{t.footer.integrators}</a>
            </p>
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