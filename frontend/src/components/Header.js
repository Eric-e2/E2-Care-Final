import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Header = ({ language }) => {
  const { switchLanguage } = useLanguage();
  const t = content[language];
  
  const handleDownloadPdf = () => {
    // Mock PDF download
    const pdfName = language === 'en' ? 'E2-Care_1pager_EN.pdf' : 'E2-Care_1pager_FR.pdf';
    console.log(`Downloading ${pdfName}`);
  };
  
  return (
    <header className="header-nav">
      <div className="container flex items-center justify-between">
        
        {/* Logo */}
        <Link to={`/${language}`} className="flex items-center">
          <div className="w-8 h-8 bg-coral rounded-md flex items-center justify-center text-white font-bold mr-2">
            E2
          </div>
          <span className="heading-3 text-dark-grey font-medium">E2-Care</span>
        </Link>
        
        {/* Navigation Actions */}
        <div className="nav-actions">
          
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => switchLanguage('en')}
              className={`text-lg transition-opacity ${
                language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
              aria-label="Switch to English"
            >
              🇬🇧
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => switchLanguage('fr')}
              className={`text-lg transition-opacity ${
                language === 'fr' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
              aria-label="Passer au français"
            >
              🇫🇷
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
          
        </div>
        
      </div>
    </header>
  );
};

export default Header;