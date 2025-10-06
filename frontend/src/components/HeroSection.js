import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { content } from '../data/content';

const HeroSection = ({ language }) => {
  const t = content[language];
  
  const handleDownloadPdf = () => {
    const pdfName = language === 'en' ? 'E2-Care_1pager_EN.pdf' : 'E2-Care_1pager_FR.pdf';
    console.log(`Downloading ${pdfName}`);
  };
  
  return (
    <section className="hero-section">
      <div className="hero-content">
        
        {/* Announcement Badge */}
        <div className="hero-announcement">
          <span className="w-2 h-2 bg-coral rounded-full"></span>
          <span>{language === 'en' ? 'Connected care = peace of mind' : 'Care connecté = tranquillité d\'esprit'}</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="heading-hero text-dark-grey mb-6">
          {t.hero.headline}
        </h1>
        
        {/* Subtitle */}
        <p className="hero-subtitle body-large text-dark-grey mb-8">
          {t.hero.subtitle}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to={`/${language}/thank-you`}>
            <Button className="btn-primary min-w-[200px]">
              {t.hero.bookDemo}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          
          <Button 
            onClick={handleDownloadPdf}
            variant="outline"
            className="btn-secondary min-w-[200px]"
          >
            <Download className="w-4 h-4 mr-2" />
            {t.hero.downloadPdf}
          </Button>
        </div>
        
        {/* Hero Visual Placeholder */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
            <div className="grid grid-cols-3 gap-6 items-center">
              
              {/* Sensors */}
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 bg-deep-blue rounded-full"></div>
                </div>
                <p className="caption text-dark-grey font-medium uppercase tracking-wide">
                  {language === 'en' ? 'Sensors' : 'Capteurs'}
                </p>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-dark-grey/50" />
              </div>
              
              {/* Cloud */}
              <div className="text-center">
                <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 bg-coral rounded-full"></div>
                </div>
                <p className="caption text-dark-grey font-medium uppercase tracking-wide">
                  {language === 'en' ? 'Cloud Dashboard' : 'Dashboard Cloud'}
                </p>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;