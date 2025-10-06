import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { content } from '../data/content';

const ContactSection = ({ language }) => {
  const t = content[language];
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    country: '',
    useCase: '',
    message: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert(language === 'en' 
        ? 'Please accept the consent to proceed.' 
        : 'Veuillez accepter le consentement pour continuer.'
      );
      return;
    }
    
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      navigate(`/${language}/thank-you`);
    }, 1000);
  };
  
  const countries = [
    'France', 'Germany', 'Estonia', 'Latvia', 'Lithuania', 'UK', 'Belgium', 
    'Netherlands', 'Spain', 'Italy', 'Other'
  ];
  
  const useCases = [
    language === 'en' ? 'Elderly Care Monitoring' : 'Surveillance Care Seniors',
    language === 'en' ? 'Pharmacy Temperature Control' : 'Contrôle Température Pharmacie',
    language === 'en' ? 'Hospital Asset Tracking' : 'Suivi Actifs Hôpital',
    language === 'en' ? 'Cold Chain Transport' : 'Transport Chaîne Froide',
    language === 'en' ? 'Smart Building Monitoring' : 'Surveillance Bâtiment Connecté',
    language === 'en' ? 'Partner Integration' : 'Intégration Partenaire',
    language === 'en' ? 'Other' : 'Autre'
  ];
  
  return (
    <section id="contact" className="section-padding bg-e2-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-1 text-e2-dark mb-4">
            {t.contact.title}
          </h2>
          <p className="body-large text-e2-dark">
            {t.contact.subtitle}
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-soft">
            <CardContent className="p-8">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="body-medium text-dark-grey font-medium">
                      {t.contact.form.name} *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-border-input focus:border-border-input-focus"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="body-medium text-dark-grey font-medium">
                      {t.contact.form.email} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-border-input focus:border-border-input-focus"
                      required
                    />
                  </div>
                </div>
                
                {/* Company & Role Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="body-medium text-dark-grey font-medium">
                      {t.contact.form.company}
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="border-border-input focus:border-border-input-focus"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role" className="body-medium text-dark-grey font-medium">
                      {t.contact.form.role}
                    </Label>
                    <Input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="border-border-input focus:border-border-input-focus"
                    />
                  </div>
                </div>
                
                {/* Country & Use Case Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="body-medium text-dark-grey font-medium">
                      {t.contact.form.country}
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('country', value)}>
                      <SelectTrigger className="border-border-input focus:border-border-input-focus">
                        <SelectValue placeholder={language === 'en' ? 'Select country' : 'Sélectionner pays'} />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="body-medium text-dark-grey font-medium">
                      {t.contact.form.useCase}
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('useCase', value)}>
                      <SelectTrigger className="border-border-input focus:border-border-input-focus">
                        <SelectValue placeholder={language === 'en' ? 'Select use case' : 'Sélectionner cas usage'} />
                      </SelectTrigger>
                      <SelectContent>
                        {useCases.map((useCase) => (
                          <SelectItem key={useCase} value={useCase}>
                            {useCase}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="body-medium text-dark-grey font-medium">
                    {t.contact.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="border-border-input focus:border-border-input-focus min-h-[120px]"
                    placeholder={language === 'en' 
                      ? 'Tell us about your project and how we can help...'
                      : 'Parlez-nous de votre projet et comment nous pouvons aider...'
                    }
                  />
                </div>
                
                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange('consent', checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="body-small text-dark-grey leading-relaxed">
                    {t.contact.form.consent}
                  </Label>
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        {language === 'en' ? 'Sending...' : 'Envoi...'}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t.contact.form.submit}
                      </>
                    )}
                  </Button>
                </div>
                
              </form>
              
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-dark-grey">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-coral" />
                <span className="body-medium">contact@e2.dev</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-deep-blue" />
                <span className="body-medium">
                  {language === 'en' ? 'WhatsApp available on request' : 'WhatsApp disponible sur demande'}
                </span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;