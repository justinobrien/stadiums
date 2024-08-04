import React, { ReactFragment } from 'react';
import './menu.scss';
import drinks from '../../jsonfiles/breakfast/breakfast_drinks.json'; // Relative path to your File
import breakfastpg2 from '../../jsonfiles/breakfast/breakfast_pg2.json'; // Relative path to your File
import sides from '../../jsonfiles/breakfast/breakfast_sides.json'; // Relative path to your File
import omelets from '../../jsonfiles/breakfast/omelets.json'; // Relative path to your File
import skillets from '../../jsonfiles/breakfast/skillets.json'; // Relative path to your File
import addMenuItem from './AddMenuItem';

const warning = 'Consuming raw or undercooked meats, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions';
let breakfastMenu: Array<ReactFragment> = [];

const BreakfastMenu = () => {
  if (breakfastMenu.length < 1) {
    breakfastMenu.push(<div className="subtitle-1">Omelets</div>);
    omelets.map(d => addMenuItem(breakfastMenu, d));
  
    breakfastMenu.push(<div className="subtitle-1 margin-top"> Traditional Breakfast </div>);
    breakfastpg2.map(d => addMenuItem(breakfastMenu, d));

    breakfastMenu.push(<div className="subtitle-1 margin-top"> Skillets </div>);
    skillets.map(d => addMenuItem(breakfastMenu, d));

    breakfastMenu.push(<div className="subtitle-1 margin-top"> Sides </div>);
    sides.map(d => addMenuItem(breakfastMenu, d));

    breakfastMenu.push(<div className="subtitle-1 margin-top">Drinks</div>);
    drinks.map(d => addMenuItem(breakfastMenu, d));
  }

  return (
    <div className="menu-outer">
      <div className="menu-main">
        <a className="button" href="/orderonline">Order Online</a>
        {breakfastMenu}
      </div>
    </div>
  );
};

export default BreakfastMenu;
