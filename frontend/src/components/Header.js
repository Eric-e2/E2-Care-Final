import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Header = ({ language }) => {
  const { switchLanguage } = useLanguage();
  const t = content[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  
  const handleDownloadPdf = () => {
    // Mock PDF download
    const pdfName = language === 'en' ? 'E2-Care_1pager_EN.pdf' : 'E2-Care_1pager_FR.pdf';
    console.log(`Downloading ${pdfName}`);
  };

  const solutions = [
    { key: 'e2-care', path: `/solutions/e2-care`, label: language === 'en' ? 'E2-Care' : 'E2-Care' },
    { key: 'e2-temp', path: `/solutions/e2-temp-humidity`, label: language === 'en' ? 'E2-Temp & Humidity' : 'E2-Temp & Humidité' },
    { key: 'e2-supply', path: `/solutions/e2-supply-chain`, label: language === 'en' ? 'E2-Supply Chain' : 'E2-Supply Chain' },
    { key: 'e2-asset', path: `/solutions/e2-asset-tracking`, label: language === 'en' ? 'E2-Asset Tracking' : 'E2-Asset Tracking' },
    { key: 'smart-devices', path: `/solutions/smart-devices`, label: language === 'en' ? 'Smart Devices' : 'Appareils Connectés' }
  ];

  const navigation = [
    { label: language === 'en' ? 'Solutions' : 'Solutions', href: '#solutions', hasDropdown: true },
    { label: language === 'en' ? 'How it works' : 'Comment ça marche', href: '#how-it-works' },
    { label: language === 'en' ? 'Feedbacks' : 'Témoignages', href: '#feedbacks' },
    { label: language === 'en' ? 'Partners' : 'Partenaires', href: '#partners' },
    { label: language === 'en' ? 'FAQ' : 'FAQ', href: '#faq' },
    { label: language === 'en' ? 'Contact' : 'Contact', href: '#contact' }
  ];
  
  return (
    <header className="header-nav">
      <div className="container flex items-center justify-between">
        
        {/* Logo - Official E2 SVG */}
        <Link to={`/${language}`} className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" className="mr-2">
            <rect width="32" height="32" rx="6" fill="#f45053"/>
            <text x="16" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif">E2</text>
          </svg>
          <span className="heading-3 text-dark-grey font-medium">E2-Care</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <div className="relative">
                  <button 
                    className="flex items-center text-dark-grey hover:text-e2-coral transition-colors"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {isSolutionsOpen && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border py-2 z-50"
                      onMouseEnter={() => setIsSolutionsOpen(true)}
                      onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                      {solutions.map((solution) => (
                        <Link
                          key={solution.key}
                          to={`/${language}${solution.path}`}
                          className="block px-4 py-2 text-dark-grey hover:bg-e2-light hover:text-e2-coral transition-colors"
                        >
                          {solution.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a href={item.href} className="text-dark-grey hover:text-e2-coral transition-colors">
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          
          {/* Language Selector - EN/FR only */}
          <div className="flex items-center space-x-2 bg-e2-light rounded-full px-3 py-1">
            <button
              onClick={() => switchLanguage('en')}
              className={`text-sm font-medium transition-colors ${
                language === 'en' ? 'text-e2-coral' : 'text-dark-grey hover:text-e2-coral'
              }`}
            >
              EN
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => switchLanguage('fr')}
              className={`text-sm font-medium transition-colors ${
                language === 'fr' ? 'text-e2-coral' : 'text-dark-grey hover:text-e2-coral'
              }`}
            >
              FR
            </button>
          </div>
          
          {/* Download PDF Button */}
          <Button 
            onClick={handleDownloadPdf}
            variant="outline"
            className="btn-secondary hidden md:inline-flex"
          >
            {t.nav.downloadPdf}
          </Button>
          
          {/* Book Demo Button */}
          <Link to={`/${language}/thank-you`}>
            <Button className="btn-primary">
              {t.nav.bookDemo}
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg lg:hidden z-50">
            <div className="container py-4">
              {navigation.map((item, index) => (
                <div key={index} className="py-2">
                  {item.hasDropdown ? (
                    <div>
                      <div className="font-medium text-dark-grey mb-2">{item.label}</div>
                      <div className="ml-4 space-y-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.key}
                            to={`/${language}${solution.path}`}
                            className="block text-dark-grey hover:text-e2-coral"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {solution.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={item.href} 
                      className="block text-dark-grey hover:text-e2-coral"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </header>
  );
};

export default Header;