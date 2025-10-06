import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYouPage = () => {
  const { language } = useLanguage();
  
  // Load TidyCal script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePdfDownload = () => {
    const pdfName = language === 'en' ? 'E2-Care_1pager_EN.pdf' : 'E2-Care_1pager_FR.pdf';
    window.open(`/assets/pdf/${pdfName}`, '_blank');
  };
  
  return (
    <div>
      <Header />
      
      <section className="section" style={{ background: 'var(--e2-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            
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
            
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--e2-dark)' }}>
              {language === 'en' ? 'Thank You!' : 'Merci !'}
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--e2-dark)', opacity: 0.8 }}>
              {language === 'en' 
                ? 'We\'ll be in touch soon. In the meantime, schedule a demo or download our 1-pager.'
                : 'Nous vous recontacterons bientôt. En attendant, planifiez une démo ou téléchargez notre 1-pager.'
              }
            </p>
            
            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button onClick={handlePdfDownload} className="btn btn-primary">
                {language === 'en' ? 'Download PDF' : 'Télécharger le PDF'}
              </button>
            </div>
            
            {/* TidyCal Embed */}
            <div style={{ 
              background: 'var(--e2-white)', 
              padding: '2rem', 
              borderRadius: '12px',
              marginBottom: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--e2-blue)' }}>
                {language === 'en' ? 'Schedule Your Demo' : 'Planifiez Votre Démo'}
              </h3>
              
              {/* TidyCal Embed */}
              <div 
                className="tidycal-embed" 
                data-path="ericbrisset/30-minute-meeting"
                style={{ minHeight: '500px' }}
              />
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <a href={`/${language}`} className="btn btn-secondary">
                {language === 'en' ? '← Back to Home' : '← Retour à l\'Accueil'}
              </a>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ThankYouPage;