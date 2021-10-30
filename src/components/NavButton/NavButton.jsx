import React, { useState } from 'react';
import './NavButton.scss';
import { useLocation } from 'react-router-dom';

const NavButton = (props) => {
  const [navButtonClass, setNavButtonClass] = useState('navButton-line');
  const [navButtonComponent, setNavButtonComponent] = useState('navButtonComponent');

  let pathLocation = useLocation();

  // Update menu icon color
  if (pathLocation.pathname === '/beermenu' && navButtonClass != 'navButton-line colorPrimary1') {
    setNavButtonClass('navButton-line colorPrimary1');
    setNavButtonComponent('navButtonComponent colorPrimary1');
  } 
  else if (pathLocation.pathname != '/beermenu' && navButtonClass != 'navButton-line') {
    setNavButtonClass('navButton-line');
    setNavButtonComponent('navButtonComponent');
  }

  return (
    <div className={navButtonComponent} onClick={props.click}>
        <div className={navButtonClass}></div>
        <div className={navButtonClass}></div>
        <div className={navButtonClass}></div>
    </div>
  );
};
  
export default NavButton;