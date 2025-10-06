import React from 'react';
import { Card, CardContent } from './ui/card';
import { Wifi, Cpu, Cloud, ArrowRight } from 'lucide-react';
import { content } from '../data/content';

const HowItWorks = ({ language }) => {
  const t = content[language];
  
  const stepIcons = [Cpu, Wifi, Cloud];
  const stepNumbers = ['01', '02', '03'];
  
  return (
    <section className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-1 text-dark-grey mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="body-large text-dark-grey">
            {t.howItWorks.subtitle}
          </p>
        </div>
        
        {/* Steps Flow */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {t.howItWorks.steps.map((step, index) => {
              const IconComponent = stepIcons[index];
              const isLastStep = index === t.howItWorks.steps.length - 1;
              
              return (
                <div key={index} className="flex flex-col items-center relative">
                  
                  {/* Step Card */}
                  <Card className="w-full max-w-xs border-none shadow-soft hover:shadow-elevated transition-all duration-300">
                    <CardContent className="text-center p-6">
                      
                      {/* Step Number */}
                      <div className="mono-text text-coral mb-4 font-medium text-lg">
                        {stepNumbers[index]}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-deep-blue/10 text-deep-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="heading-3 text-dark-grey mb-3">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="body-small text-dark-grey">
                        {step.description}
                      </p>
                      
                    </CardContent>
                  </Card>
                  
                  {/* Arrow Connector - Hidden on Mobile, Last Step */}
                  {!isLastStep && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white border-2 border-light-grey rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-dark-grey/70" />
                      </div>
                    </div>
                  )}
                  
                </div>
              );
            })}
            
          </div>
          
          {/* Mobile Connectors */}
          <div className="md:hidden mt-8 flex justify-center">
            <div className="flex items-center space-x-4">
              {[0, 1].map((index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-coral rounded-full"></div>
                  {index < 1 && <ArrowRight className="w-4 h-4 text-dark-grey/50 mx-2" />}
                </div>
              ))}
              <div className="w-3 h-3 bg-coral rounded-full"></div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;