import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
          <div className="hero-buttons">
            <a href={`/${language}/thank-you`} className="btn btn-primary">
              {t.bookDemo}
            </a>
            <a 
              href={`/assets/pdf/E2-Care_1pager_${language.toUpperCase()}.pdf`} 
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.downloadPdf}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;