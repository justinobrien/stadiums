import React from 'react';
import './NavButton.css';

const NavButton = (props) => {
    return (
      <div className='navButtonComponent' onClick={props.click}>
          <div className="navButton-line"></div>
          <div className="navButton-line"></div>
          <div className="navButton-line"></div>
      </div>
    );
  };
  
export default NavButton;