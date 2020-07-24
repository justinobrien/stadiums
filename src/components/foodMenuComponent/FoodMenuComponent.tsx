import React from 'react';
import './FoodMenuComponent.css';

const FoodMenuComponent = () => {

  // TODO: add food carousel, for mobile at least
  return (
    <div className='foodMenu row'>
      <div className='menu specials'></div>
      <div className='menu standard'></div>
      <div className='menu lunch'></div>
      <div className='menu breakfast'></div>
    </div>
  );
};

export default FoodMenuComponent;