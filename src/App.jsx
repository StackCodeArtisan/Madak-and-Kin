import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import MoveCleanPage from './pages/MoveCleanPage';
import AboutPage from './pages/AboutPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-white text-slate-800 selection:bg-gold selection:text-navy">
        {/* Navigation bar */}
        <Navbar />
        
        {/* Main Page Routing Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/move-clean" element={<MoveCleanPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp and Back-to-Top buttons */}
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
