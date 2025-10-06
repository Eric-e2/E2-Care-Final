import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Contact = () => {
  const { language } = useLanguage();
  const t = content[language].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to backend
    console.log('Form submitted:', formData);
    // Redirect to thank you page
    window.location.href = `/${language}/thank-you`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.form.name}
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t.form.email}
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder={t.form.company}
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.form.message}
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="form-input"
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              {t.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;