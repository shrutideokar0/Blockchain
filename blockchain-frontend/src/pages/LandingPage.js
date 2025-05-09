import React from 'react'
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <About /> 
      <WhyUs />
      <Footer />
    </>
  );
};

export default LandingPage;
