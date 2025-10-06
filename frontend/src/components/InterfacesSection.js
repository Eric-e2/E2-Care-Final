import React from 'react';
import { Card, CardContent } from './ui/card';
import { Monitor, Smartphone, Download, Code, Building } from 'lucide-react';
import { content } from '../data/content';

const InterfacesSection = ({ language }) => {
  const t = content[language];
  
  const interfaceIcons = [Monitor, Smartphone, Download, Code, Building];
  const interfaceDescriptions = [
    language === 'en' ? 'Complete dashboard with real-time monitoring' : 'Dashboard complet avec surveillance temps réel',
    language === 'en' ? 'Native iOS and Android applications' : 'Applications natives iOS et Android',
    language === 'en' ? 'Field installation and configuration tool' : 'Outil d\'installation et configuration terrain',
    language === 'en' ? 'REST API, MQTT, and webhook integrations' : 'Intégrations API REST, MQTT et webhooks',
    language === 'en' ? 'White-label solution for partners' : 'Solution marque blanche pour partenaires'
  ];
  
  return (
    <section className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-1 text-dark-grey mb-4">
            {t.interfaces.title}
          </h2>
          <p className="body-large text-dark-grey">
            {t.interfaces.subtitle}
          </p>
        </div>
        
        {/* Interfaces Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {t.interfaces.items.map((item, index) => {
              const IconComponent = interfaceIcons[index];
              const isComingSoon = item.includes('Coming Soon') || item.includes('Bientôt');
              
              return (
                <Card 
                  key={index} 
                  className={`voice-card group cursor-pointer border-none shadow-soft hover:shadow-elevated transition-all duration-300 ${
                    isComingSoon ? 'opacity-75' : ''
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                      index % 2 === 0 ? 'bg-coral/10 text-coral' : 'bg-deep-blue/10 text-deep-blue'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="heading-3 text-dark-grey mb-3">
                      {item}
                    </h3>
                    
                    {/* Description */}
                    <p className="body-small text-dark-grey mb-6">
                      {interfaceDescriptions[index]}
                    </p>
                    
                    {/* Coming Soon Badge */}
                    {isComingSoon && (
                      <div className="inline-flex items-center bg-coral/10 text-coral px-3 py-1 rounded-full">
                        <span className="caption font-medium">
                          {language === 'en' ? 'Coming Soon' : 'Bientôt'}
                        </span>
                      </div>
                    )}
                    
                    {/* Mock Dashboard Preview */}
                    <div className="bg-light-grey rounded-lg p-4 mt-4">
                      <div className="h-20 bg-white rounded border-2 border-dashed border-dark-grey/20 flex items-center justify-center">
                        <span className="caption text-dark-grey/60">
                          {language === 'en' ? 'Interface Preview' : 'Aperçu Interface'}
                        </span>
                      </div>
                    </div>
                    
                  </CardContent>
                </Card>
              );
            })}
            
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-deep-blue/5 text-deep-blue px-6 py-3 rounded-2xl">
            <Code className="w-5 h-5 mr-3" />
            <span className="body-medium font-medium">
              {language === 'en' 
                ? 'All interfaces support multi-tenant architecture and white-label customization'
                : 'Toutes les interfaces supportent l\'architecture multi-tenant et personnalisation marque blanche'
              }
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default InterfacesSection;