import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language].hero;
  
  return (
    <section className="hero">
      <div className="container">
        <h1>{t.hero.headline}</h1>
        <p>{t.hero.subtitle}</p>
        
        <div className="hero-buttons">
          <Link to={`/${language}/thank-you`} className="btn btn-primary">
            {t.hero.bookDemo}
          </Link>
          <button onClick={handleDownloadPdf} className="btn btn-secondary">
            {t.hero.downloadPdf}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;