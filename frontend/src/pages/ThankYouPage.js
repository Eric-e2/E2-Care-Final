import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYouPage = ({ language }) => {
  const t = content[language];
  
  const handlePdfDownload = () => {
    const pdfName = language === 'en' ? 'E2-Care_1pager_EN.pdf' : 'E2-Care_1pager_FR.pdf';
    console.log(`Downloading ${pdfName}`);
    // In production: window.open(`/assets/pdf/${pdfName}`);
  };
  
  const handleTidyCalOpen = () => {
    window.open('https://tidycal.com/ericbrisset/30-minute-meeting', '_blank');
  };
  
  return (
    <div>
      <Header language={language} />
      
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            
            {/* Success Icon */}
            <div style={{ 
              width: '80px', 
              height: '80px', 
              background: 'var(--e2-coral)', 
              borderRadius: '50%', 
              margin: '0 auto 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>✓</span>
            </div>
            
            <h1 className="hero-title">{t.thankYou.title}</h1>
            <p className="hero-subtitle">{t.thankYou.message}</p>
            
            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button onClick={handleTidyCalOpen} className="btn btn-primary">
                {t.thankYou.bookDemo}
              </button>
              <button onClick={handlePdfDownload} className="btn btn-secondary">
                {t.thankYou.downloadPdf}
              </button>
            </div>
            
            {/* TidyCal Embed Placeholder */}
            <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
              <h3 className="card-title">
                {language === 'en' ? 'Schedule Your Demo' : 'Planifiez Votre Démo'}
              </h3>
              <div style={{ 
                background: 'var(--e2-light)', 
                padding: '2rem', 
                borderRadius: '12px',
                color: 'var(--e2-dark)'
              }}>
                <p>{language === 'en' ? 'TidyCal booking calendar will be embedded here' : 'Le calendrier de réservation TidyCal sera intégré ici'}</p>
                <p style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '1rem' }}>
                  https://tidycal.com/ericbrisset/30-minute-meeting
                </p>
              </div>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <Link to={`/${language}`} className="btn btn-secondary">
                {t.thankYou.backHome}
              </Link>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer language={language} />
    </div>
  );
};

export default ThankYouPage;