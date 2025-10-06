import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, MapPin, TrendingUp } from 'lucide-react';
import { content } from '../data/content';

const CustomerFeedback = ({ language }) => {
  const t = content[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % t.feedback.testimonials.length
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, t.feedback.testimonials.length]);
  
  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % t.feedback.testimonials.length
    );
  };
  
  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? t.feedback.testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };
  
  return (
    <section id="feedbacks" className="section-padding bg-e2-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-1 text-e2-dark mb-4">
            {t.feedback.title}
          </h2>
          <p className="body-large text-e2-dark mb-8">
            {t.feedback.subtitle}
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              
              {t.feedback.testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="voice-card bg-white border-none shadow-soft mx-auto max-w-2xl">
                    <CardContent className="p-8 text-center">
                      
                      {/* Location Badge */}
                      <div className="inline-flex items-center bg-coral/10 text-coral px-4 py-2 rounded-2xl mb-6">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="body-small font-medium">{testimonial.location}</span>
                      </div>
                      
                      {/* Result */}
                      <h3 className="heading-2 text-dark-grey mb-4">
                        {testimonial.result}
                      </h3>
                      
                      {/* Impact */}
                      <div className="flex items-center justify-center bg-deep-blue/5 text-deep-blue px-6 py-3 rounded-2xl">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        <span className="body-medium font-medium">{testimonial.impact}</span>
                      </div>
                      
                    </CardContent>
                  </Card>
                </div>
              ))}
              
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button 
              onClick={goToPrev}
              variant="outline"
              size="sm"
              className="btn-nav"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {t.feedback.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-coral scale-110' 
                      : 'bg-dark-grey/30 hover:bg-dark-grey/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              onClick={goToNext}
              variant="outline"
              size="sm"
              className="btn-nav"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="caption text-dark-grey/70 hover:text-dark-grey transition-colors"
            >
              {isAutoPlaying 
                ? (language === 'en' ? 'Auto-playing • Click to pause' : 'Lecture auto • Cliquer pour pause')
                : (language === 'en' ? 'Paused • Click to resume' : 'En pause • Cliquer pour reprendre')
              }
            </button>
          </div>
          
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-secondary">
            {t.feedback.cta}
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default CustomerFeedback;