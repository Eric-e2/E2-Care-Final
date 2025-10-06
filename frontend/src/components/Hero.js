import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';

const Hero = ({ language }) => {
  const t = content[language];
  
  const handleDownloadPdf = () => {
    const pdfName = language === 'en' ? 'E2-Care_1pager_EN.pdf' : 'E2-Care_1pager_FR.pdf';
    console.log(`Downloading ${pdfName}`);
    // In production: window.open(`/assets/pdf/${pdfName}`);
  };
  
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