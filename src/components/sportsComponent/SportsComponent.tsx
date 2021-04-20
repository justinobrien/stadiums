import React from 'react';
import './SportsComponent.css';
import { NavLink } from 'react-router-dom';

const SportsComponent = () => {
  return (
    <div className='sports'>
      <div className="row">
        <a className="sports-component-icon" href="https://www.ufc.com/events">
          <div className="UFC"></div>
        </a>
        <a className="sports-component-icon" href="https://www.nhl.com/schedule">
          <div className="NHL"></div>
        </a>
        <a className="sports-component-icon" href="https://www.nba.com/schedule">
          <div className="NBA"></div>
        </a>
      </div>
      <div className="row">
        <a className="sports-component-icon" href="https://www.nba.com/blazers/schedule">
          <div className="Blazers"></div>
        </a>
        <a className="sports-component-icon" href="https://www.timbers.com/schedule">
          <div className="Timbers"></div>
        </a>
        <a className="sports-component-icon" href="https://www.mlb.com/schedule">
          <div className="MLB"></div>
        </a>
      </div>
    </div>
  );
};

export default SportsComponent;