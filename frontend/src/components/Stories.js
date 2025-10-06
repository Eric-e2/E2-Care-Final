import React, { useState, useEffect } from 'react';
import { content } from '../data/content';

const Stories = ({ language }) => {
  const t = content[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % t.stories.items.length
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, t.stories.items.length]);
  
  return (
    <section id="stories" className="section section-grey">
      <div className="container">
        <h2 className="section-title">{t.stories.title}</h2>
        <p className="section-subtitle">{t.stories.subtitle}</p>
        
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="carousel">
            {t.stories.items.map((story, index) => (
              <div key={index} className="carousel-item">
                <div className="story-card">
                  <div className="story-location">{story.location}</div>
                  <h3 className="story-result">{story.result}</h3>
                  <div className="story-impact">{story.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', gap: '0.5rem' }}>
          {t.stories.items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentIndex ? 'var(--e2-coral)' : 'rgba(0,0,0,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;