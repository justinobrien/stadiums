import React from 'react';
import './SideDrawerComponent.scss';
import { NavLink } from 'react-router-dom';

const SideDrawerComponent = (props) => {
  let drawerClasses = 'sideDrawer';
  if (props.show) {
    drawerClasses = 'sideDrawer open';
  }
  const options = [
      <NavLink to="/breakfastmenu" onClick={props.linkClicked} className="link"> Breakfast menu </NavLink>,
      <NavLink to="/lunchmenu" onClick={props.linkClicked} className="link"> Lunch menu </NavLink>,
      <NavLink to="/dinnermenu" onClick={props.linkClicked} className="link"> Dinner menu </NavLink>,
      <NavLink to="/happyhourmenu" onClick={props.linkClicked} className="link"> Happy hour </NavLink>,
  ];

  return (
    <div className={drawerClasses}>
        <NavLink to="/" onClick={props.linkClicked} className="link"> Home </NavLink>
        <NavLink to="/beermenu" onClick={props.linkClicked} className="link"> Beer menu </NavLink>
        <NavLink to="/breakfastmenu" onClick={props.linkClicked} className="link"> Breakfast </NavLink>
        <NavLink to="/lunchmenu" onClick={props.linkClicked} className="link"> Lunch </NavLink>
        <NavLink to="/dinnermenu" onClick={props.linkClicked} className="link"> Dinner </NavLink>
        <NavLink to="/happyhourmenu" onClick={props.linkClicked} className="link"> Happy hour specials </NavLink>
    </div>
  );
};

export default SideDrawerComponent;