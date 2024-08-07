import React, { ReactFragment } from 'react';
import './menu.scss';
import addMenuItem from './AddMenuItem';
import specialitems from '../../jsonfiles/dailySpecials/daily-specials.json'; // Relative path to your File

const warning = 'Consuming raw or undercooked meats, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions';
let dailySpecialsMenu: Array<ReactFragment> = [];

const SpecialsMenu = () => {
  if (dailySpecialsMenu.length < 1) {
    specialitems.map(item => addMenuItem(dailySpecialsMenu, item));
  }

  return (
    <div className="menu-outer specials-menu-outer">
      <div className="menu-main">
      <a className="button" href="/orderonline">Order Online</a>
        {dailySpecialsMenu}
      </div>
    </div>
  );
};

export default SpecialsMenu;