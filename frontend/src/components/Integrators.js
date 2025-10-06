import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';

const Integrators = ({ language }) => {
  const t = content[language];
  
  const tableData = {
    en: {
      headers: ['Region', 'Model', 'Responsibilities', 'E2 Provides', 'Revenue Share'],
      rows: [
        ['Baltics', 'JV', 'Sales, local install, L1 support', 'Platform, APIs, L2/L3 support, marketing kit', '30–50%'],
        ['France', 'Integrator', 'Presales, deployment', 'SaaS, training, white-label assets', '25–40%'],
        ['DACH', 'JV', 'Bizdev, ops, SLAs', 'Hardware supply, platform, partner portal', '30–50%']
      ]
    },
    fr: {
      headers: ['Région', 'Modèle', 'Responsabilités', 'E2 Fournit', 'Partage Revenus'],
      rows: [
        ['Baltiques', 'JV', 'Ventes, install locale, support L1', 'Plateforme, APIs, support L2/L3, kit marketing', '30–50%'],
        ['France', 'Intégrateur', 'Préventes, déploiement', 'SaaS, formation, assets marque blanche', '25–40%'],
        ['DACH', 'JV', 'Bizdev, ops, SLAs', 'Fourniture hardware, plateforme, portail partenaire', '30–50%']
      ]
    }
  };
  
  const table = tableData[language];
  
  return (
    <section id="integrators" className="section section-blue">
      <div className="container">
        <h2 className="section-title">{t.integrators.title}</h2>
        <p className="section-subtitle">{t.integrators.description}</p>
        
        {/* Partner Table */}
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                {table.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      {cellIndex === 4 ? (
                        <strong style={{ color: 'var(--e2-coral)' }}>{cell}</strong>
                      ) : cellIndex === 1 ? (
                        <span style={{ 
                          background: 'rgba(244, 80, 83, 0.2)', 
                          color: 'var(--e2-coral)', 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '12px', 
                          fontSize: '0.875rem',
                          fontWeight: '600'
                        }}>
                          {cell}
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* CTA Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
          <Link to={`/${language}/thank-you`} className="btn btn-primary">
            {t.integrators.bookMeeting}
          </Link>
          <Link to={`/${language}/solutions/integrators`} className="btn" style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid white'
          }}>
            {t.integrators.applyPartner}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Integrators;