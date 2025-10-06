import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Header = () => {
  const { language, toggleLanguage, setLanguage } = useLanguage();
  const t = content[language].header;

  const handleLanguageClick = (lang) => {
    setLanguage(lang);
  };

  // E2 SVG Logo
  const E2Logo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#2d4a8f"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Quicksand">E2</text>
    </svg>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <a href={`/${language}`} className="logo">
            <E2Logo />
          </a>
          
          <div className="header-right">
            {/* Navigation Links */}
            <nav className="nav-links">
              <a href={`/${language}#solutions`} className="nav-link">{t.nav.solutions}</a>
              <a href={`/${language}#how-it-works`} className="nav-link">{t.nav.howItWorks}</a>
              <a href={`/${language}#stories`} className="nav-link">{t.nav.feedbacks}</a>
              <a href={`/${language}#integrators`} className="nav-link">{t.nav.partners}</a>
              <a href={`/${language}#faq`} className="nav-link">{t.nav.faq}</a>
              <a href={`/${language}#contact`} className="nav-link">{t.nav.contact}</a>
            </nav>
            
            {/* Language Toggle - Text Badges (EN / FR) */}
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
      </div>
    </header>
  );
};

export default Header;