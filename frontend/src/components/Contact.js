import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';

const Contact = ({ language }) => {
  const t = content[language];
  
  return (
    <section id="contact" className="section section-grey">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            <Link to={`/${language}/thank-you`} className="btn btn-primary">
              {language === 'en' ? 'Book a Demo' : 'Réserver une Démo'}
            </Link>
            <a href="mailto:contact@e2.dev" className="btn btn-secondary">
              {language === 'en' ? 'Contact Sales' : 'Contacter Ventes'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;