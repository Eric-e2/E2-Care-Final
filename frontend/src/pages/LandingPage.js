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