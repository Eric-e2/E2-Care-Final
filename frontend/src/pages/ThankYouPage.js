import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Download, Calendar, ArrowLeft } from 'lucide-react';
import { content } from '../data/content';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYouPage = ({ language }) => {
  const t = content[language];
  
  const handlePdfDownload = () => {
    // Mock PDF download - will be replaced with actual PDF generation
    const pdfName = language === 'en' ? 'E2-Care_1pager_EN.pdf' : 'E2-Care_1pager_FR.pdf';
    console.log(`Downloading ${pdfName}`);
    // In real implementation: window.open(`/assets/pdf/${pdfName}`);
  };
  
  const handleTidyCalOpen = () => {
    window.open('https://tidycal.com/ericbrisset/30-minute-meeting', '_blank');
  };
  
  return (
    <div className="min-h-screen bg-page">
      <Header language={language} />
      
      <section className="section-padding">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* Success Icon */}
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-coral mx-auto" />
            </div>
            
            {/* Thank You Message */}
            <h1 className="heading-hero text-dark-grey mb-4">
              {t.thankYou.title}
            </h1>
            
            <p className="body-large text-dark-grey mb-12">
              {t.thankYou.message}
            </p>
            
            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              
              {/* TidyCal Booking Card */}
              <Card className="p-6 border-none shadow-soft hover:shadow-elevated transition-all duration-300">
                <CardContent className="text-center p-0">
                  <Calendar className="w-12 h-12 text-deep-blue mx-auto mb-4" />
                  <h3 className="heading-3 text-dark-grey mb-4">
                    {t.thankYou.bookDemo}
                  </h3>
                  <Button 
                    onClick={handleTidyCalOpen}
                    className="btn-primary w-full"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {t.thankYou.bookDemo}
                  </Button>
                </CardContent>
              </Card>
              
              {/* PDF Download Card */}
              <Card className="p-6 border-none shadow-soft hover:shadow-elevated transition-all duration-300">
                <CardContent className="text-center p-0">
                  <Download className="w-12 h-12 text-coral mx-auto mb-4" />
                  <h3 className="heading-3 text-dark-grey mb-4">
                    {t.thankYou.downloadPdf}
                  </h3>
                  <Button 
                    onClick={handlePdfDownload}
                    variant="outline"
                    className="btn-secondary w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t.thankYou.downloadPdf}
                  </Button>
                </CardContent>
              </Card>
              
            </div>
            
            {/* TidyCal Embed */}
            <Card className="p-6 border-none shadow-soft mb-8">
              <CardContent className="p-0">
                <h3 className="heading-3 text-dark-grey mb-6 text-center">
                  {language === 'en' ? 'Schedule Your Demo' : 'Planifiez Votre Démo'}
                </h3>
                <div className="bg-light-grey rounded-2xl p-8">
                  <div className="text-center text-dark-grey">
                    <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="body-medium">
                      {language === 'en' ? 'TidyCal booking calendar will be embedded here' : 'Le calendrier de réservation TidyCal sera intégré ici'}
                    </p>
                    <p className="caption mt-2">
                      https://tidycal.com/ericbrisset/30-minute-meeting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Back to Home */}
            <Link to={`/${language}`}>
              <Button variant="outline" className="btn-secondary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.thankYou.backHome}
              </Button>
            </Link>
            
          </div>
        </div>
      </section>
      
      <Footer language={language} />
    </div>
  );
};

export default ThankYouPage;