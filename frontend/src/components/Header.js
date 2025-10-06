import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Header = ({ language }) => {
  const { switchLanguage } = useLanguage();
  const t = content[language];
  
  const handleDownloadPdf = () => {
    const pdfName = language === 'en' ? 'E2-Care_1pager_EN.pdf' : 'E2-Care_1pager_FR.pdf';
    console.log(`Downloading ${pdfName}`);
    // In production: window.open(`/assets/pdf/${pdfName}`);
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          
          {/* Left: Logo + Language Toggle */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Official E2 Logo */}
            <Link to={`/${language}`} className="logo">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="8" fill="#f45053"/>
                <text x="20" y="28" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Quicksand">E2</text>
              </svg>
              E2-Care
            </Link>
            
            {/* Language Toggle */}
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
          
          {/* Right: Navigation + CTAs */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Navigation Menu */}
            <nav className="nav-menu">
              <a href="#solutions" className="nav-link">{t.nav.solutions}</a>
              <a href="#how-it-works" className="nav-link">{t.nav.howItWorks}</a>
              <a href="#stories" className="nav-link">{t.nav.feedbacks}</a>
              <a href="#integrators" className="nav-link">{t.nav.partners}</a>
              <a href="#faq" className="nav-link">{t.nav.faq}</a>
              <a href="#contact" className="nav-link">{t.nav.contact}</a>
            </nav>
            
            {/* CTA Buttons */}
            <button onClick={handleDownloadPdf} className="btn btn-secondary" style={{ marginRight: '1rem' }}>
              {t.nav.downloadPdf}
            </button>
            <Link to={`/${language}/thank-you`} className="btn btn-primary">
              {t.nav.bookDemo}
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;