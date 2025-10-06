import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Integrators = () => {
  const { language } = useLanguage();
  const t = content[language].integrators;

  return (
    <section id="integrators" className="section">
      <div className="container">
        <div className="integrators-content">
          <h2 className="section-title">{t.title}</h2>
          <p className="integrators-description">{t.description}</p>
          
          {/* Integrators Table */}
          <table className="integrators-table">
            <thead>
              <tr>
                <th>{language === 'en' ? 'Region' : 'Région'}</th>
                <th>{language === 'en' ? 'Model' : 'Modèle'}</th>
                <th>{language === 'en' ? 'Responsibilities' : 'Responsabilités'}</th>
                <th>{language === 'en' ? 'E2 Provides' : 'E2 Fournit'}</th>
                <th>{language === 'en' ? 'Revenue Share' : 'Partage Revenus'}</th>
              </tr>
            </thead>
            <tbody>
              {t.tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.region}</td>
                  <td>{row.model}</td>
                  <td>{row.responsibilities}</td>
                  <td>{row.e2Provides}</td>
                  <td>{row.revenueShare}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* CTAs */}
          <div className="integrators-ctas">
            <a href={`/${language}/thank-you`} className="btn btn-white">
              {t.bookMeeting}
            </a>
            <a href={`/${language}/thank-you`} className="btn btn-white">
              {t.applyPartner}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrators;