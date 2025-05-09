import React from 'react';
import Slider from './Slider'; // assuming Slider.js is in the same folder
import heroBg from '../images/hero-bg.png';
const HeroSection = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src={heroBg} alt="Hero Background" />
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default HeroSection;
