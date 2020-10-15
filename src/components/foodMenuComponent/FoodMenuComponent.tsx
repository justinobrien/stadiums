import React, { useState } from 'react';
import './FoodMenuComponent.scss';

const FoodMenuComponent = () => {
  const [background, setBackground] = useState('lunch-bg menu');
  const [prevBackground, setPrevBackground] = useState('lunch-bg menu');

  const clickBg = (bg: string, event?: any) => {
    console.warn('clickBg ', prevBackground);
    if (bg === prevBackground) {
      console.warn('navigate to ', prevBackground);
    } else {
      setBg(bg, event);
    }
  }

  const setBg = (bg: string, event?: any) => {
    event?.stopPropagation();

    setBackground(bg + ' menu');
    setPrevBackground(bg + ' menu');

    console.warn('event ', event);
  }

  const previewBg = (bg: string) => {
    console.warn('previewBg', bg + ' menu');

    setBackground(bg + ' menu');
  }

  const restoreBg = () => {
    setBackground(prevBackground);
  }

  const navigateTo = () => {
    console.warn('navigate to');
  }

  return (
    <div className='foodMenu'>
      {/* - layout -
        [ display image ]
        button1 button2
        button3 button4
       */}
       <div className={background}>
         <div className='food-menu-button-wrapper'>
          <div className='row'>
            <button className='btn' onClick={(e) => { clickBg('breakfast-bg', e)}} onMouseOver={() => previewBg('breakfast-bg')} onMouseOut={() => restoreBg()}> breakfast </button>
            <button className='btn' onClick={(e) => { clickBg('lunch-bg', e)}} onMouseOver={() => previewBg('lunch-bg')} onMouseOut={() => restoreBg()}> lunch </button>
          </div>
          <div className='row'>
            <button className='btn' onClick={(e) => { clickBg('dinner-bg', e)}} onMouseOver={() => previewBg('dinner-bg')} onMouseOut={() => restoreBg()}> dinner </button>
            <button className='btn' onClick={(e) => { clickBg('happy-bg', e)}} onMouseOver={() => previewBg('happy-bg')} onMouseOut={() => restoreBg()}> happy </button>
          </div>
         </div>
       </div>
    </div>
  );
};

export default FoodMenuComponent;