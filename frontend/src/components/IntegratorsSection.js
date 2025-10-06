import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Handshake, Globe, DollarSign, Zap, Users, Code } from 'lucide-react';
import { content } from '../data/content';

const IntegratorsSection = ({ language }) => {
  const t = content[language];
  
  const benefitIcons = [Globe, DollarSign, Users, Zap, Code, Handshake];
  
  return (
    <section className="section-padding bg-gradient-to-br from-deep-blue to-deep-blue/90 text-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="heading-1 text-white mb-6">
            {t.integrators.title}
          </h2>
          <p className="body-large text-white/90 mb-8">
            {t.integrators.description}
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {t.integrators.benefits.map((benefit, index) => {
              const IconComponent = benefitIcons[index];
              
              return (
                <Card 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <CardContent className="p-6 flex items-center">
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-coral/20 text-coral rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    {/* Benefit Text */}
                    <p className="body-medium text-white font-medium">
                      {benefit}
                    </p>
                    
                  </CardContent>
                </Card>
              );
            })}
            
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            
            <Link to={`/${language}/thank-you`} className="w-full sm:w-auto">
              <Button 
                className="bg-coral hover:bg-coral/90 text-white border-none w-full sm:w-auto min-w-[200px]"
              >
                <Users className="w-4 h-4 mr-2" />
                {t.integrators.bookMeeting}
              </Button>
            </Link>
            
            <Link to={`/${language}/thank-you`} className="w-full sm:w-auto">
              <Button 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto min-w-[200px]"
              >
                <Handshake className="w-4 h-4 mr-2" />
                {t.integrators.applyPartner}
              </Button>
            </Link>
            
          </div>
          
          {/* Partner Info */}
          <div className="mt-8 text-center">
            <p className="body-small text-white/70">
              {language === 'en' 
                ? 'Join our growing network of healthcare technology partners worldwide'
                : 'Rejoignez notre réseau croissant de partenaires technologie santé dans le monde'
              }
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default IntegratorsSection;