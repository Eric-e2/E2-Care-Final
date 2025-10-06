import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, MessageSquare, Linkedin, Youtube } from 'lucide-react';
import { content } from '../data/content';

const Footer = ({ language }) => {
  const t = content[language];
  
  return (
    <footer className="bg-dark-grey text-white py-12">
      <div className="container">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link to={`/${language}`} className="flex items-center mb-4">
              <div className="w-8 h-8 bg-coral rounded-md flex items-center justify-center text-white font-bold mr-2">
                E2
              </div>
              <span className="heading-3 text-white font-medium">E2-Care</span>
            </Link>
            
            <p className="body-small text-white/80 max-w-sm">
              {language === 'en' 
                ? 'Connected care solutions bringing peace of mind to families and better service to caregivers.'
                : 'Solutions de care connecté apportant la tranquillité d\'esprit aux familles et un meilleur service aux aidants.'
              }
            </p>
            
            <div className="space-y-2 text-white/80">
              <p className="body-small font-medium">{t.footer.company}</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="heading-3 text-white mb-4">
              {language === 'en' ? 'Contact' : 'Contact'}
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-3 text-coral" />
                <a href="mailto:contact@e2.dev" className="body-small hover:text-white transition-colors">
                  {t.footer.contact}
                </a>
              </div>
              
              <div className="flex items-center text-white/80">
                <Globe className="w-4 h-4 mr-3 text-deep-blue" />
                <a href="https://www.e2.dev" target="_blank" rel="noopener noreferrer" className="body-small hover:text-white transition-colors">
                  {t.footer.website}
                </a>
              </div>
              
              <div className="flex items-center text-white/80">
                <MessageSquare className="w-4 h-4 mr-3 text-coral" />
                <span className="body-small">{t.footer.whatsapp}</span>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h3 className="heading-3 text-white mb-4">
              {language === 'en' ? 'Partners' : 'Partenaires'}
            </h3>
            
            <div className="space-y-3">
              <Link 
                to={`/${language}#integrators`} 
                className="block body-small text-white/80 hover:text-white transition-colors"
              >
                {t.footer.integrators}
              </Link>
              
              <Link 
                to={`/${language}/thank-you`} 
                className="block body-small text-white/80 hover:text-white transition-colors"
              >
                {language === 'en' ? 'Book a Demo' : 'Réserver une démo'}
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              <a 
                href="https://linkedin.com/company/e2-technologies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-coral transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/@e2technologies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-coral transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60">
            
            <p className="body-small">
              © 2025 E2 Technologies OÜ. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to={`/${language}`} className="body-small text-white/60 hover:text-white transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Politique de confidentialité'}
              </Link>
              <Link to={`/${language}`} className="body-small text-white/60 hover:text-white transition-colors">
                {language === 'en' ? 'Terms of Service' : 'Conditions d\'utilisation'}
              </Link>
            </div>
            
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;