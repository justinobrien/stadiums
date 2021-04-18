import React, { useState,  } from 'react';
import { useHistory } from "react-router-dom";
import './FoodMenuComponent.scss';


const FoodMenuComponent = () => {
  const [background, setBackground] = useState('lunch-bg menu');
  const [prevBackground, setPrevBackground] = useState('lunch-bg menu');
  const history = useHistory();

  const clickBg = (bg: string) => {
    if (prevBackground.includes(bg)) {
      history.push('/' + bg + 'menu');
    } else {
      setBg(bg);
    }
  }

  const setBg = (bg: string) => {
    setBackground(bg + '-bg menu');
    setPrevBackground(bg + '-bg menu');
  }

  const previewBg = (bg: string) => {
    setBackground(bg + '-bg menu');
  }

  const restoreBg = () => {
    setBackground(prevBackground);
  }

  return (
    <div className='foodMenu'>
       { /*   - layout -
            [ display image ]
            button1 button2
            button3 button4
         */ }
       <div className={background}>
         <div className='food-menu-button-wrapper'>
          <div className='row'>
            <button className='btn' onClick={(e) => { clickBg('breakfast')}} onMouseOver={() => previewBg('breakfast')} onMouseOut={() => restoreBg()}> breakfast </button>
            <button className='btn' onClick={(e) => { clickBg('lunch')}} onMouseOver={() => previewBg('lunch')} onMouseOut={() => restoreBg()}> lunch </button>
          </div>
          <div className='row'>
            <button className='btn' onClick={(e) => { clickBg('dinner')}} onMouseOver={() => previewBg('dinner')} onMouseOut={() => restoreBg()}> dinner </button>
            <button className='btn' onClick={(e) => { clickBg('happyhour')}} onMouseOver={() => previewBg('happyhour')} onMouseOut={() => restoreBg()}> happy </button>
          </div>
         </div>
       </div>
    </div>
  );
};

export default FoodMenuComponent;