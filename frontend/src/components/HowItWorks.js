import React from 'react';
import { content } from '../data/content';

const HowItWorks = ({ language }) => {
  const t = content[language];
  
  // Convert **text** to <strong>text</strong>
  const formatDescription = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };
  
  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="container">
        <h2 className="section-title">{t.howItWorks.title}</h2>
        <div className="how-it-works-content">
          <p dangerouslySetInnerHTML={{ __html: formatDescription(t.howItWorks.description) }} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;