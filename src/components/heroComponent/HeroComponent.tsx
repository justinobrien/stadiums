import React, { useEffect, useState } from 'react';
import LogoComponent from '../logoComponent/LogoComponent';
import './HeroComponent.css';

import Background1 from '../../images/sportsArenas/beavers.jpg';
import Background2 from '../../images/sportsArenas/ducks.jpg';
import Background3 from '../../images/sportsArenas/mariners.jpg';
import Background4 from '../../images/sportsArenas/timbers.jpg';
import Background5 from '../../images/sportsArenas/blazers.png';
import Background6 from '../../images/sportsArenas/winterhawks.png';

const backgrounds: string[] = [Background1, Background2, Background3, Background4, Background5, Background6];
let backgroundIter: number = 0;

const HeroComponent = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({ backgroundImage: `url(${Background1})` });

  useEffect(() => {
    const timer = setInterval(() => {
      backgroundIter++;

      if (backgroundIter > 5) {
        backgroundIter = 0;
      }
  
      
      setBackgroundStyle({backgroundImage: `url(${backgrounds[backgroundIter]})`});
    }, 20000);
  }, []);

  return (
    <div className='hero-container'>
      <LogoComponent />
      <div className='hero' style={ backgroundStyle }></div>
    </div>
  );
};

export default HeroComponent;