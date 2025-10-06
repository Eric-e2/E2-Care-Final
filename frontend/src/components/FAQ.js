import React, { useState } from 'react';
import { content } from '../data/content';

const FAQ = ({ language }) => {
  const t = content[language];
  const [openItems, setOpenItems] = useState({});
  
  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  return (
    <section id="faq" className="section section-light">
      <div className="container">
        <h2 className="section-title">{t.faq.title}</h2>
        <p className="section-subtitle">{t.faq.subtitle}</p>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {t.faq.items.map((item, index) => (
            <div key={index} className={`faq-item ${openItems[index] ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {openItems[index] ? '−' : '+'}
                </span>
              </button>
              {openItems[index] && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;