import React, { useState } from 'react';
import './FoodMenuComponent.scss';

const FoodMenuComponent = () => {
  const [background, setBackground] = useState('lunch-bg menu');
  const [prevBackground, setPrevBackground] = useState('lunch-bg menu');

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
       <div className={background} onClick={() => { navigateTo()}}>
         <div className='food-menu-button-wrapper'>
          <div className='row'>
            <div className='btn' onClick={(e) => { setBg('breakfast-bg', e)}} onMouseOver={() => previewBg('breakfast-bg')} onMouseOut={() => restoreBg()}> breakfast </div>
            <div className='btn' onClick={(e) => { setBg('lunch-bg', e)}} onMouseOver={() => previewBg('lunch-bg')} onMouseOut={() => restoreBg()}> lunch </div>
          </div>
          <div className='row'>
            <div className='btn' onClick={(e) => { setBg('dinner-bg', e)}} onMouseOver={() => previewBg('dinner-bg')} onMouseOut={() => restoreBg()}> dinner </div>
            <div className='btn' onClick={(e) => { setBg('happy-bg', e)}} onMouseOver={() => previewBg('happy-bg')} onMouseOut={() => restoreBg()}> happy </div>
          </div>
         </div>
       </div>
       
    </div>
  );
};

export default FoodMenuComponent;