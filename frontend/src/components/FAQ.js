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
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="faq-container">
          {t.items.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'active' : ''}`}>
                  +
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'active' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;