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
          {/* CMS Route - Must be first to avoid conflicts */}
          <Route path="/cms" element={<CMSApp />} />
          <Route path="/cms/*" element={<CMSApp />} />
          
          {/* Main Website Routes */}
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Home />
              </main>
              <Footer />
              <StickyElements />
            </>
          } />
          <Route path="/success-stories" element={
            <>
              <Header />
              <main>
                <SuccessStories />
              </main>
              <Footer />
              <StickyElements />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header />
              <main>
                <Services />
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