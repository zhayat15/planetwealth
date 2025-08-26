import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyElements from './components/StickyElements';
import Home from './pages/Home';
import SuccessStories from './pages/SuccessStories';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import Calculator from './pages/Calculator';
import HowItWorks from './pages/HowItWorks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FinancialServicesGuide from './pages/FinancialServicesGuide';
import CreditGuide from './pages/CreditGuide';
import CMSApp from './cms/CMSApp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* CMS Routes - Must be first */}
          <Route path="/cms/*" element={<CMSApp />} />
          
          {/* Main Website Routes */}
          <Route path="/*" element={
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/success-stories" element={<SuccessStories />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/financial-services-guide" element={<FinancialServicesGuide />} />
                  <Route path="/credit-guide" element={<CreditGuide />} />
                  
                  {/* Catch-all route for 404 */}
                  <Route path="*" element={
                    <div className="pt-20 min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                        <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                          Return Home
                        </a>
                      </div>
                    </div>
                  } />
                </Routes>
              </main>
              <Footer />
              <StickyElements />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;