import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import HowItWorks from '../components/HowItWorks';
import Compliance from '../components/Compliance';
import Stories from '../components/Stories';
import Integrators from '../components/Integrators';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = ({ language }) => {
  return (
    <div>
      <Header language={language} />
      <Hero language={language} />
      <Solutions language={language} />
      <HowItWorks language={language} />
      <Compliance language={language} />
      <Stories language={language} />
      <Integrators language={language} />
      <FAQ language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default LandingPage;