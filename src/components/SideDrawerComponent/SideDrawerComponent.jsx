import React from 'react';
import './SideDrawerComponent.scss';
import { NavLink, useLocation } from 'react-router-dom';

const SideDrawerComponent = (props) => {
  let drawerClasses = 'sideDrawer';
  
  if (props.show) {
    drawerClasses = 'sideDrawer open';
  }
  const options = [
      <NavLink to="/breakfastmenu" onClick={props.linkClicked} className="link"> Breakfast menu </NavLink>,
      <NavLink to="/specialsmenu" onClick={props.linkClicked} className="link"> Daily Specials </NavLink>,
      <NavLink to="/dinnermenu" onClick={props.linkClicked} className="link"> Dinner menu </NavLink>,
      <NavLink to="/happyhourmenu" onClick={props.linkClicked} className="link"> Happy hour </NavLink>,
  ];

  return (
    <div className={drawerClasses}>
        <NavLink to="/" onClick={props.linkClicked} className="link"> Home </NavLink>
        <NavLink to="/beermenu" onClick={props.linkClicked} className="link"> Beer menu </NavLink>
        <NavLink to="/orderonline" onClick={props.linkClicked} className="link"> Order Online </NavLink>
        <NavLink to="/breakfastmenu" onClick={props.linkClicked} className="link"> Breakfast </NavLink>
        <NavLink to="/specialsmenu" onClick={props.linkClicked} className="link"> Daily Specials </NavLink>
        <NavLink to="/dinnermenu" onClick={props.linkClicked} className="link"> Dinner </NavLink>
        <NavLink to="/happyhourmenu" onClick={props.linkClicked} className="link"> Happy hour specials </NavLink>
        <NavLink to="/about" onClick={props.linkClicked} className="link"> About </NavLink>
    </div>
  );
};

export default SideDrawerComponent;