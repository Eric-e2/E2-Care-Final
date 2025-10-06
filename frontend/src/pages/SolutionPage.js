import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { solutionsContent } from '../data/solutions';

const SolutionPage = ({ language }) => {
  const { solutionId } = useParams();
  const solution = solutionsContent[language]?.[solutionId];
  
  if (!solution) {
    return (
      <div className="min-h-screen bg-e2-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-1 text-e2-dark mb-4">Solution Not Found</h1>
          <Link to={`/${language}`}>
            <Button className="btn-primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-e2-white">
      <Header language={language} />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-e2-light">
        <div className="container">
          <nav className="flex items-center space-x-2 text-sm text-e2-dark mb-6">
            <Link to={`/${language}`} className="hover:text-e2-coral transition-colors">
              {language === 'en' ? 'Home' : 'Accueil'}
            </Link>
            <span>→</span>
            <Link to={`/${language}#solutions`} className="hover:text-e2-coral transition-colors">
              {language === 'en' ? 'Solutions' : 'Solutions'}
            </Link>
            <span>→</span>
            <span className="text-e2-coral font-medium">{solution.title}</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="section-padding bg-e2-light">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="heading-hero text-e2-dark mb-6">
                {solution.title}
              </h1>
              
              {/* Problem */}
              <Card className="mb-8 border-none shadow-soft">
                <CardContent className="p-8">
                  <h2 className="heading-2 text-e2-coral mb-4">
                    {language === 'en' ? 'Problem' : 'Problème'}
                  </h2>
                  <p className="body-large text-e2-dark leading-relaxed">
                    {solution.problem}
                  </p>
                </CardContent>
              </Card>
              
              {/* Solution */}
              <Card className="mb-8 border-none shadow-soft">
                <CardContent className="p-8">
                  <h2 className="heading-2 text-e2-blue mb-4">
                    {language === 'en' ? 'Solution' : 'Solution'}
                  </h2>
                  <p className="body-large text-e2-dark leading-relaxed">
                    {solution.solution}
                  </p>
                </CardContent>
              </Card>
              
              {/* Benefits & ROI */}
              <Card className="mb-8 border-none shadow-soft">
                <CardContent className="p-8">
                  <h2 className="heading-2 text-e2-coral mb-6">
                    {language === 'en' ? 'Benefits & ROI' : 'Bénéfices & ROI'}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {solution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-e2-coral mr-3 mt-1 flex-shrink-0" />
                        <p className="body-medium text-e2-dark">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Mini Case */}
              <Card className="border-none shadow-soft bg-e2-light">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-e2-blue mr-3" />
                    <h2 className="heading-2 text-e2-blue">
                      {language === 'en' ? 'Success Story' : 'Cas de Succès'}
                    </h2>
                  </div>
                  <p className="body-large text-e2-dark leading-relaxed">
                    {solution.miniCase}
                  </p>
                </CardContent>
              </Card>
              
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                
                {/* CTA Card */}
                <Card className="border-none shadow-soft mb-6">
                  <CardContent className="p-8 text-center">
                    <h3 className="heading-3 text-e2-dark mb-4">
                      {language === 'en' ? 'Ready to get started?' : 'Prêt à commencer ?'}
                    </h3>
                    <p className="body-medium text-e2-dark mb-6">
                      {language === 'en' 
                        ? 'Book a demo and see how E2-Care can help your organization.'
                        : 'Réservez une démo et voyez comment E2-Care peut aider votre organisation.'
                      }
                    </p>
                    <Link to={`/${language}/thank-you`}>
                      <Button className="btn-primary w-full mb-4">
                        {solution.cta}
                      </Button>
                    </Link>
                    <Link to={`/${language}#contact`}>
                      <Button variant="outline" className="btn-secondary w-full">
                        {language === 'en' ? 'Get a Quote' : 'Obtenir un Devis'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                {/* Back to Solutions */}
                <Link 
                  to={`/${language}#solutions`}
                  className="inline-flex items-center text-e2-coral hover:text-e2-blue transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Back to Solutions' : 'Retour aux Solutions'}
                </Link>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Final CTA Band */}
      <section className="section-padding bg-e2-blue text-white">
        <div className="container text-center">
          <h2 className="heading-1 text-white mb-6">
            {language === 'en' ? 'Start Your Pilot Today' : 'Lancez Votre Pilote Aujourd\'hui'}
          </h2>
          <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Join hundreds of organizations already using E2-Care to improve safety and efficiency.'
              : 'Rejoignez des centaines d\'organisations utilisant déjà E2-Care pour améliorer sécurité et efficacité.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`/${language}/thank-you`}>
              <Button className="bg-e2-coral hover:bg-e2-coral/90 text-white border-none min-w-[200px]">
                {language === 'en' ? 'Start a Pilot' : 'Lancer un Pilote'}
              </Button>
            </Link>
            <Link to={`/${language}#contact`}>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 min-w-[200px]">
                {language === 'en' ? 'Contact Sales' : 'Contacter Ventes'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer language={language} />
    </div>
  );
};

export default SolutionPage;