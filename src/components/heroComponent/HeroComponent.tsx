import React, { useEffect, useState } from 'react';
import LogoComponent from '../logoComponent/LogoComponent';
import './HeroComponent.css';

import Background1 from '../../images/sportsArenas/beavers_compressed.jpg';
import Background2 from '../../images/sportsArenas/ducks_compressed.jpg';
import Background3 from '../../images/sportsArenas/mariners_compressed.jpg';
import Background4 from '../../images/sportsArenas/timbers_compressed.jpg';
import Background5 from '../../images/sportsArenas/blazers_compressed.jpg';
import Background6 from '../../images/sportsArenas/winterhawks_compressed.jpg';

const backgrounds: string[] = [Background2, Background3, Background4, Background5, Background6, Background1];
let backgroundIter: number = 0;

const HeroComponent = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({ backgroundImage: `url(${Background1})` });

  useEffect(() => {
    setInterval(() => {
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