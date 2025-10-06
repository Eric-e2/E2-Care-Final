import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const FAQ = () => {
  const { language } = useLanguage();
  const t = content[language].faq;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section section-light">
      <div className="container">
        <h2 className="section-title">{t.faq.title}</h2>
        
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