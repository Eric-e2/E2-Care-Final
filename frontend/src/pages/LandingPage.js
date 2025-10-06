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

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Solutions />
      <HowItWorks />
      <Compliance />
      <Stories />
      <Integrators />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;