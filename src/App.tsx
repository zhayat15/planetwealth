import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyElements from './components/StickyElements';
import Home from './pages/Home';
import SuccessStories from './pages/SuccessStories';
import Services from './pages/Services';
import CMSApp from './cms/CMSApp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* CMS Routes - Must be first and most specific */}
          <Route path="/cms" element={<CMSApp />} />
          <Route path="/cms/*" element={<CMSApp />} />
          
          {/* Main Website Routes with Layout */}
          <Route path="/*" element={
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/success-stories" element={<SuccessStories />} />
                  <Route path="/services" element={<Services />} />
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