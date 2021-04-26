import React, { ReactFragment } from 'react';
import './menu.scss';
import addMenuItem from './AddMenuItem';
import happyhouritems from '../../jsonfiles/happyhour/happy-hour.json'; // Relative path to your File

const warning = 'Consuming raw or undercooked meats, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions';
let menu: Array<ReactFragment> = [];

const HappyHourMenu = () => {
  if (menu.length < 1) {
    happyhouritems.map((item) => addMenuItem(menu, item));
  }

  return (
    <div className="menu-outer happy-menu-outer">
      <div className="menu-main">
        {menu}
      </div>
    </div>
  );
};

export default HappyHourMenu;