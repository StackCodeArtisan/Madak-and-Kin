import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import StorageSection from './components/StorageSection';
import SisterCompanySection from './components/SisterCompanySection';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <StorageSection />
      <SisterCompanySection />
      <WhyChooseUs />
      <Process />
      <ServiceArea />
      <FAQ />
      <QuoteForm />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-white text-slate-800 selection:bg-gold selection:text-navy">
        {/* Navigation bar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp, Call, and Back-to-Top buttons */}
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
