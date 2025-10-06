import React from 'react';
import { Card, CardContent } from './ui/card';
import { Zap } from 'lucide-react';
import { content } from '../data/content';

const HowItWorks = ({ language }) => {
  const t = content[language];
  
  return (
    <section id="how-it-works" className="section-padding bg-e2-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="heading-1 text-e2-dark mb-6">
            {t.howItWorks.title}
          </h2>
          
          {/* Simple Description Card */}
          <Card className="bg-e2-light border-none shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-start justify-center mb-6">
                <div className="w-12 h-12 bg-e2-coral/10 text-e2-coral rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="body-large text-e2-dark leading-relaxed">
                    {t.howItWorks.description}
                  </p>
                </div>
              </div>
              
              {/* Key Points */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-10 h-10 bg-e2-coral rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="body-small text-e2-dark font-medium">
                    {language === 'en' ? 'Install in minutes' : 'Installation en minutes'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-e2-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="body-small text-e2-dark font-medium">
                    {language === 'en' ? 'Live data dashboard' : 'Données temps réel'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-e2-coral rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="body-small text-e2-dark font-medium">
                    {language === 'en' ? 'AI does the rest' : 'L\'IA fait le reste'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;