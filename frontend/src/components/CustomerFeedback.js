import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const CustomerFeedback = () => {
  const { language } = useLanguage();
  const t = content[language].stories;

  // Carousel autoplay functionality
  useEffect(() => {
    const carousel = document.querySelector('#stories .carousel-row');
    if (!carousel) return;

    let paused = false;
    
    const handleMouseEnter = () => { paused = true; };
    const handleMouseLeave = () => { paused = false; };
    
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    
    const interval = setInterval(() => {
      if (!paused) {
        carousel.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="stories" className="section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="carousel-row">
          {t.cases.map((story, index) => (
            <div key={index} className="story-card">
              <h4>{story.title}</h4>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;