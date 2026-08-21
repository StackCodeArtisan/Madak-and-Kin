import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import MoveCleanTeaser from '../components/MoveCleanTeaser';
import ServicesSummary from '../components/ServicesSummary';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutTeaser from '../components/AboutTeaser';
import Testimonials from '../components/Testimonials';
import PhotoGallery from '../components/PhotoGallery';
import ServiceArea from '../components/ServiceArea';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <MoveCleanTeaser />
      <ServicesSummary />
      <WhyChooseUs />
      <AboutTeaser />
      <Testimonials />
      <PhotoGallery />
      <ServiceArea />
      <Contact />
    </>
  );
};

export default Home;
