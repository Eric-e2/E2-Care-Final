import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Solutions = () => {
  const { language } = useLanguage();
  const t = content[language].solutions;

  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="grid">
          {t.cards.map((solution, index) => (
            <div key={index} className="solution-card">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <a href={solution.link} className="btn btn-primary">
                {solution.learnMore}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;