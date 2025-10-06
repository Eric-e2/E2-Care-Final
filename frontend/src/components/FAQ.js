import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { content } from '../data/content';

const FAQ = ({ language }) => {
  const t = content[language];
  
  return (
    <section id="faq" className="section-padding bg-e2-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-1 text-e2-dark mb-4">
            {t.faq.title}
          </h2>
          <p className="body-large text-e2-dark">
            {t.faq.subtitle}
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-e2-white rounded-2xl border-none shadow-soft overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline hover:bg-e2-light/50 transition-colors">
                  <span className="heading-3 text-e2-dark pr-4">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="body-medium text-e2-dark leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;