import React from 'react';
import './BeerMenuComponent.scss';
import { NavLink } from 'react-router-dom';

const BeerMenuComponent = () => {
  return (
    <div className='beerMenu'>
      <NavLink className="beerMenu-navlink" to="/beermenu"> stadiums tap list </NavLink>
    </div>
  );
};

export default BeerMenuComponent;