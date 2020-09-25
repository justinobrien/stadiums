import React from 'react';
import './SideDrawerComponent.scss';
import { NavLink } from 'react-router-dom';

const SideDrawerComponent = (props) => {
  let drawerClasses = 'sideDrawer';
  if (props.show) {
    drawerClasses = 'sideDrawer open';
  }

  return (
    <div className={drawerClasses}>
        <NavLink to="/beermenu" onClick={props.linkClicked} className="link"> Beer menu </NavLink>
        <NavLink to="/beermenu" onClick={props.linkClicked} className="link"> Beer menu </NavLink>
        <NavLink to="/beermenu" onClick={props.linkClicked} className="link"> Beer menu </NavLink>
        <NavLink to="/beermenu" onClick={props.linkClicked} className="link"> Beer menu </NavLink>
        <NavLink to="/beermenu" onClick={props.linkClicked} className="link"> Beer menu </NavLink>
    </div>
  );
};

export default SideDrawerComponent;