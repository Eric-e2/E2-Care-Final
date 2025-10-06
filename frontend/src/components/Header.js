import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Header = ({ language }) => {
  const { switchLanguage } = useLanguage();
  const t = content[language];
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          
          {/* Left: Logo + Language Toggle */}
          <div className="header-left">
            {/* Official E2 Logo (SVG only) */}
            <Link to={`/${language}`} className="logo">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="8" fill="#f45053"/>
                <text x="20" y="28" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Quicksand">E2</text>
              </svg>
              E2-Care
            </Link>
            
            {/* Language Toggle EN/FR (never GB) */}
            <div className="lang-toggle">
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => switchLanguage('en')}
              >
                EN
              </button>
              <button 
                className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
                onClick={() => switchLanguage('fr')}
              >
                FR
              </button>
            </div>
          </div>
          
          {/* Right: Navigation ONLY (NO CTAs) */}
          <nav className="nav-menu">
            <a href="#solutions" className="nav-link">{t.nav.solutions}</a>
            <a href="#how-it-works" className="nav-link">{t.nav.howItWorks}</a>
            <a href="#stories" className="nav-link">{t.nav.feedbacks}</a>
            <a href="#integrators" className="nav-link">{t.nav.partners}</a>
            <a href="#faq" className="nav-link">{t.nav.faq}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>
          </nav>
          
        </div>
      </div>
    </header>
  );
};

export default Header;