import React from 'react';
// import SlideShow
import LogoComponent from '../logoComponent/LogoComponent';
import './HeroComponent.css';

const HeroComponent = () => {
  return (
    <div className='hero-container'>
      <LogoComponent />
      <div className='hero'></div>
    </div>
  );
};

export default HeroComponent;