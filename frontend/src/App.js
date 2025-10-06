import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
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
          </Routes>
        </LanguageProvider>
      </Router>
    </div>
  );
}

export default App;