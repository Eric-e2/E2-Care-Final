import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { solutionsContent } from '../data/solutions';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SolutionPage = () => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Extract solution ID from path
  const solutionId = location.pathname.split('/').pop();
  const solution = solutionsContent[language]?.[solutionId];
  
  if (!solution) {
    return (
      <div>
        <Header />
        <div className="section">
          <div className="container text-center">
            <h1 className="section-title">Solution Not Found</h1>
            <a href={`/${language}`} className="btn btn-primary">Back to Home</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div>
      <Header />
      
      {/* Breadcrumb */}
      <section className="section" style={{ padding: '2rem 0 1rem', background: 'var(--e2-light)' }}>
        <div className="container">
          <nav style={{ fontSize: '0.875rem', color: 'var(--e2-dark)' }}>
            <a href={`/${language}`} style={{ color: 'var(--e2-coral)', textDecoration: 'none' }}>
              {language === 'en' ? 'Home' : 'Accueil'}
            </a>
            <span style={{ margin: '0 0.5rem' }}>→</span>
            <a href={`/${language}#solutions`} style={{ color: 'var(--e2-coral)', textDecoration: 'none' }}>
              {language === 'en' ? 'Solutions' : 'Solutions'}
            </a>
            <span style={{ margin: '0 0.5rem' }}>→</span>
            <span>{solution.title}</span>
          </nav>
        </div>
      </section>
      
      {/* Solution Content */}
      <section className="section" style={{ background: 'var(--e2-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <h1 style={{ fontSize: '3rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: 'var(--e2-dark)' }}>{solution.title}</h1>
            
            {/* Problem */}
            <div className="card mb-4">
              <h2 className="section-title" style={{ 
                color: 'var(--e2-coral)', 
                fontSize: '2rem',
                textAlign: 'left',
                marginBottom: '1rem'
              }}>
                {language === 'en' ? 'Problem' : 'Problème'}
              </h2>
              <p className="card-text" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
                {solution.problem}
              </p>
            </div>
            
            {/* Solution */}
            <div className="card mb-4">
              <h2 className="section-title" style={{ 
                color: 'var(--e2-blue)', 
                fontSize: '2rem',
                textAlign: 'left',
                marginBottom: '1rem'
              }}>
                {language === 'en' ? 'Solution' : 'Solution'}
              </h2>
              <p className="card-text" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
                {solution.solution}
              </p>
            </div>
            
            {/* Benefits & ROI */}
            <div className="card mb-4">
              <h2 className="section-title" style={{ 
                color: 'var(--e2-coral)', 
                fontSize: '2rem',
                textAlign: 'left',
                marginBottom: '1rem'
              }}>
                {language === 'en' ? 'Benefits & ROI' : 'Bénéfices & ROI'}
              </h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {solution.benefits.map((benefit, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ 
                      color: 'var(--e2-coral)', 
                      fontWeight: 'bold', 
                      marginRight: '0.75rem',
                      marginTop: '0.25rem'
                    }}>
                      ✓
                    </span>
                    <p className="card-text">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mini Case */}
            <div className="card mb-4" style={{ background: 'var(--e2-light)' }}>
              <h2 className="section-title" style={{ 
                color: 'var(--e2-blue)', 
                fontSize: '2rem',
                textAlign: 'left',
                marginBottom: '1rem'
              }}>
                {language === 'en' ? 'Success Story' : 'Cas de Succès'}
              </h2>
              <p className="card-text" style={{ 
                fontSize: '1.125rem', 
                lineHeight: '1.6', 
                fontStyle: 'italic' 
              }}>
                {solution.miniCase}
              </p>
            </div>
            
            {/* CTAs */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <a href={`/${language}/thank-you`} className="btn btn-primary">
                  {solution.cta}
                </a>
                <a href={`/${language}#contact`} className="btn btn-secondary">
                  {language === 'en' ? 'Get a Quote' : 'Obtenir un Devis'}
                </a>
              </div>
              
              <a 
                href={`/${language}#solutions`}
                style={{ color: 'var(--e2-coral)', textDecoration: 'none', fontSize: '1rem' }}
              >
                ← {language === 'en' ? 'Back to Solutions' : 'Retour aux Solutions'}
              </a>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Final CTA Band */}
      <section id="final-cta" className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            {language === 'en' ? 'Start Your Pilot Today' : 'Lancez Votre Pilote Aujourd\'hui'}
          </h2>
          <p className="section-subtitle">
            {language === 'en'
              ? 'Join hundreds of organizations already using E2-Care to improve safety and efficiency.'
              : 'Rejoignez des centaines d\'organisations utilisant déjà E2-Care pour améliorer sécurité et efficacité.'
            }
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`/${language}/thank-you`} className="btn btn-primary">
              {language === 'en' ? 'Start a Pilot' : 'Lancer un Pilote'}
            </a>
            <a href="mailto:contact@e2.dev" className="btn btn-secondary">
              {language === 'en' ? 'Contact Sales' : 'Contacter Ventes'}
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SolutionPage;