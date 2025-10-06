import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductPillars from '../components/ProductPillars';
import HowItWorks from '../components/HowItWorks';
import ComplianceSection from '../components/ComplianceSection';
import CustomerFeedback from '../components/CustomerFeedback';
import IntegratorsSection from '../components/IntegratorsSection';
import InterfacesSection from '../components/InterfacesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { content } from '../data/content';

const LandingPage = ({ language }) => {
  const t = content[language];
  
  return (
    <div className="min-h-screen bg-page">
      {/* SEO Meta Tags */}
      <head>
        <title>{language === 'en' ? 'E2-Care - Connected Care Solutions' : 'E2-Care - Solutions de Care Connecté'}</title>
        <meta name="description" content={t.hero.subtitle} />
        <link rel="canonical" href={`https://e2.dev/${language}`} />
        <link rel="alternate" hrefLang="en" href="https://e2.dev/en" />
        <link rel="alternate" hrefLang="fr" href="https://e2.dev/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://e2.dev/en" />
      </head>
      
      <Header language={language} />
      <HeroSection language={language} />
      <ProductPillars language={language} />
      <HowItWorks language={language} />
      <ComplianceSection language={language} />
      <CustomerFeedback language={language} />
      <IntegratorsSection language={language} />
      <InterfacesSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default LandingPage;