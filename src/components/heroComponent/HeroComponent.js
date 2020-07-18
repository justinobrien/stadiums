import React from 'react';
// import SlideShow
import LogoComponent from '../logoComponent/LogoComponent';
import './HeroComponent.css';
import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  '../../../../images/sportsArenas/beavers.jpg',
  '../../images/sportsArenas/ducks.jpg',
  '../../images/sportsArenas/mariners.jpg'
];

const HeroComponent = () => {
  return (
    <div className='hero'>
      <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      <LogoComponent />
    </div> 
  );
};

export default HeroComponent;