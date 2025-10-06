import React from 'react';
import { content } from '../data/content';

const Solutions = ({ language }) => {
  const t = content[language];
  
  const solutionPaths = [
    'e2-care',
    'e2-temp-humidity', 
    'e2-supply-chain',
    'e2-asset-tracking',
    'integrators'
  ];
  
  return (
    <section id="solutions" className="section section-light">
      <div className="container">
        <h2 className="section-title">{t.solutions.title}</h2>
        <p className="section-subtitle">{t.solutions.subtitle}</p>
        
        <div className="grid">
          {t.solutions.items.map((solution, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <h3 className="card-title">{solution.title}</h3>
                <p className="card-text">{solution.description}</p>
              </div>
              <div className="card-cta">
                <a 
                  href={`/${language}/solutions/${solutionPaths[index]}`}
                  className="btn btn-primary"
                >
                  {solution.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;