import React from 'react';
import './BeerMenuComponent.css';
import { NavLink } from 'react-router-dom';

const BeerMenuComponent = () => {
  return (
    <div className='beerMenu'>
      <NavLink to="/beermenu"> Beer menu </NavLink>
    </div>
  );
};

export default BeerMenuComponent;