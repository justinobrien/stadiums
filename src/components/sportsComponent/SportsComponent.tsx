import React from 'react';
import './SportsComponent.css';
import { NavLink } from 'react-router-dom';

const SportsComponent = () => {
  return (
    <div className='sports'>
      <a href="https://www.ufc.com/events">
        <div className="UFC"></div>
      </a>
      <NavLink className="NHL" to="https://www.ufc.com/events"></NavLink>
      <NavLink className="NBA" to="https://www.ufc.com/events"></NavLink>
      <NavLink className="NHL" to="https://www.ufc.com/events"></NavLink>
      <NavLink className="MLB" to="https://www.ufc.com/events"></NavLink>
      <NavLink className="Blazers" to="https://www.ufc.com/events"></NavLink>
      <NavLink className="Timbers" to="https://www.ufc.com/events"></NavLink>
    </div>
  );
};

export default SportsComponent;