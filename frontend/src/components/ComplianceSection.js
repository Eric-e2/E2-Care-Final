import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Server, FileText, Users, CheckCircle, Lock } from 'lucide-react';
import { content } from '../data/content';

const ComplianceSection = ({ language }) => {
  const t = content[language];
  
  const featureIcons = [Shield, Server, FileText, Users, CheckCircle, Lock];
  
  return (
    <section id="compliance" data-section="compliance" className="section-padding bg-e2-blue text-white">
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
        
        {/* Key Compliance Bullets */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-3 text-white mb-2">GDPR Compliant</h3>
              <p className="body-medium text-white/90">EU data hosting</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-3 text-white mb-2">GxP Best Practices</h3>
              <p className="body-medium text-white/90">Audit-ready logs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-3 text-white mb-2">Role-Based Access</h3>
              <p className="body-medium text-white/90">Healthcare-grade security</p>
            </div>
            
          </div>
        </div>

        {/* Additional Features */}
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
          
          {/* CTA Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={`/${language}/thank-you`}>
                <Button className="bg-e2-coral hover:bg-e2-coral/90 text-white border-none min-w-[200px]">
                  {language === 'en' ? 'Get Compliance Guide' : 'Guide de Conformité'}
                </Button>
              </Link>
              <Link to={`/${language}#contact`}>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 min-w-[200px]">
                  {language === 'en' ? 'Talk to Expert' : 'Parler à un Expert'}
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ComplianceSection;