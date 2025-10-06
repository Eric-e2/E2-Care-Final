import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import SolutionPage from './pages/SolutionPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  // CUSTOM JS: Recompute layout on resize (reactive)
  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty('--vw', window.innerWidth + 'px');
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="App">
      <Router>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/en" element={<LandingPage language="en" />} />
            <Route path="/fr" element={<LandingPage language="fr" />} />
            <Route path="/en/thank-you" element={<ThankYouPage language="en" />} />
            <Route path="/fr/thank-you" element={<ThankYouPage language="fr" />} />
            
            {/* Solution Pages */}
            <Route path="/solutions/e2-care" element={<SolutionPage />} />
            <Route path="/solutions/e2-temp-humidity" element={<SolutionPage />} />
            <Route path="/solutions/e2-supply-chain" element={<SolutionPage />} />
            <Route path="/solutions/e2-asset-tracking" element={<SolutionPage />} />
            <Route path="/solutions/smart-devices" element={<SolutionPage />} />
            <Route path="/solutions/integrators" element={<SolutionPage />} />
          </Routes>
        </LanguageProvider>
      </Router>
    </div>
  );
}

export default App;