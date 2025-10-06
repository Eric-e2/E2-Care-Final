import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Compliance = () => {
  const { language } = useLanguage();
  const t = content[language].compliance;

  return (
    <section id="compliance" className="section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <ul>
          {t.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Compliance;