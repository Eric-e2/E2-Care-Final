import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Server, FileText, Users, CheckCircle, Lock } from 'lucide-react';
import { content } from '../data/content';

const ComplianceSection = ({ language }) => {
  const t = content[language];
  
  const featureIcons = [Shield, Server, FileText, Users, CheckCircle, Lock];
  
  return (
    <section className="section-padding bg-e2-blue text-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-1 text-white mb-4">
            {t.compliance.title}
          </h2>
          <p className="body-large text-white/90">
            {t.compliance.subtitle}
          </p>
        </div>
        
        {/* Compliance Features */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {t.compliance.features.map((feature, index) => {
              const IconComponent = featureIcons[index];
              
              return (
                <Card 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Feature Text */}
                    <p className="body-medium text-white font-medium">
                      {feature}
                    </p>
                    
                  </CardContent>
                </Card>
              );
            })}
            
          </div>
          
          {/* Compliance Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3">
              <CheckCircle className="w-5 h-5 text-white mr-3" />
              <span className="body-medium text-white font-medium">
                {language === 'en' 
                  ? 'Healthcare-grade security and compliance standards'
                  : 'Sécurité et standards de conformité grade healthcare'
                }
              </span>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ComplianceSection;