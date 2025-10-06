import React from 'react';
import { content } from '../data/content';

const HowItWorks = ({ language }) => {
  const t = content[language];
  
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">{t.howItWorks.title}</h2>
        <div className="how-description">
          {t.howItWorks.description}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;