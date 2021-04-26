import React, { ReactFragment } from 'react';
import './menu.scss';
import addMenuItem from './AddMenuItem';
import specials from '../../jsonfiles/dinner/dinner.json'; // Relative path to your File

const warning = 'Consuming raw or undercooked meats, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions';
let menu: Array<ReactFragment> = [];

const DinnerMenu = () => {
  if (menu.length < 1) {
    specials.map((item) => addMenuItem(menu, item));
  }

  return (
    <div className="menu-outer dinner-menu-outer">
      <div className="menu-main">
        {menu}
      </div>
    </div>
  );
};

export default DinnerMenu;