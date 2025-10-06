import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';

const Contact = ({ language }) => {
  const t = content[language];
  
  return (
    <section id="contact" className="section section-blue">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">{t.contact.title}</h2>
          
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            marginTop: '3rem' 
          }}>
            <Link to={`/${language}/thank-you`} className="btn btn-primary">
              {language === 'en' ? 'Book a Demo' : 'Réserver une Démo'}
            </Link>
            <a 
              href="mailto:contact@e2.dev" 
              className="btn" 
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white'
              }}
            >
              {language === 'en' ? 'Contact Sales' : 'Contacter Ventes'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;