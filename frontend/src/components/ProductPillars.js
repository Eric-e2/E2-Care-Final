import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Activity, Thermometer, Truck, MapPin, Watch } from 'lucide-react';
import { content } from '../data/content';

const ProductPillars = ({ language }) => {
  const t = content[language];
  
  const pillarIcons = [
    Activity,    // E2-Care
    Thermometer, // E2-Temp & Humidity
    Truck,       // E2-Supply Chain
    MapPin,      // E2-Asset Tracking
    Watch        // Smart Devices for Seniors
  ];
  
  return (
    <section id="solutions" className="section-padding bg-e2-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-1 text-e2-dark mb-4">
            {t.pillars.title}
          </h2>
          <p className="body-large text-e2-dark">
            {t.pillars.subtitle}
          </p>
        </div>
        
        {/* Pillars Grid */}
        <div className="ai-grid">
          {t.pillars.items.map((pillar, index) => {
            const IconComponent = pillarIcons[index];
            const accentColors = [
              'bg-e2-coral/10 text-e2-coral',
              'bg-e2-blue/10 text-e2-blue', 
              'bg-e2-coral/15 text-e2-coral',
              'bg-e2-blue/15 text-e2-blue',
              'bg-e2-coral/20 text-e2-coral'
            ];
            
            return (
              <Card 
                key={index} 
                className="voice-card group cursor-pointer border-none shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <CardContent className="p-0">
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${accentColors[index]} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="voice-card-title">
                    {pillar.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="voice-card-description">
                    {pillar.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {pillar.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-e2-dark">
                          <div className="w-1.5 h-1.5 bg-e2-coral rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <Link to={`/${language}/solutions/${['e2-care', 'e2-temp-humidity', 'e2-supply-chain', 'e2-asset-tracking', 'smart-devices'][index]}`}>
                    <Button 
                      variant="outline" 
                      className="btn-secondary w-full group-hover:bg-e2-dark group-hover:text-white transition-all duration-300"
                    >
                      {t.pillars.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  
                </CardContent>
              </Card>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default ProductPillars;