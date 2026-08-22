import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import MoveCleanTeaser from '../components/MoveCleanTeaser';
import ServicesSummary from '../components/ServicesSummary';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutTeaser from '../components/AboutTeaser';
import TestimonialsPreview from '../components/TestimonialsPreview';
import PhotoGallery from '../components/PhotoGallery';
import ServiceAreaPreview from '../components/ServiceAreaPreview';
import FinalQuoteCTA from '../components/FinalQuoteCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <MoveCleanTeaser />
      <ServicesSummary />
      <WhyChooseUs />
      <AboutTeaser />
      <TestimonialsPreview />
      <PhotoGallery />
      <ServiceAreaPreview />
      <FinalQuoteCTA />
    </>
  );
};

export default Home;
