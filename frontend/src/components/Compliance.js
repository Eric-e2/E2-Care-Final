import React from 'react';
import { content } from '../data/content';

const Compliance = ({ language }) => {
  const t = content[language];
  
  return (
    <section id="compliance" className="section section-blue">
      <div className="container">
        <h2 className="section-title">{t.compliance.title}</h2>
        
        <div className="grid">
          {t.compliance.bullets.map((bullet, index) => (
            <div key={index} className="card" style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center'
            }}>
              <div className="card-content">
                <h3 className="card-title" style={{ color: 'white', fontSize: '1.25rem' }}>
                  {bullet}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;