import React from 'react';
import './SportsComponent.css';
import { NavLink } from 'react-router-dom';

const SportsComponent = () => {
  return (
    <div className='sports'>
      <div className="row">
        <a href="https://www.ufc.com/events">
          <div className="UFC"></div>
        </a>
        <a href="https://www.nhl.com/schedule">
          <div className="NHL"></div>
        </a>
        <a href="https://www.nba.com/schedule">
          <div className="NBA"></div>
        </a>
      </div>
      <div className="row">
        <a href="https://www.nba.com/blazers/schedule">
          <div className="Blazers"></div>
        </a>
        <a href="https://www.timbers.com/schedule">
          <div className="Timbers"></div>
        </a>
        <a href="https://www.mlb.com/schedule">
          <div className="MLB"></div>
        </a>
      </div>
    </div>
  );
};

export default SportsComponent;