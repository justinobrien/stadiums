import React, { ReactFragment } from 'react';
import './menu.scss';
import addMenuItem from './AddMenuItem';
import happyhouritems from '../../jsonfiles/happyhour/happy-hour.json'; // Relative path to your File

const warning = 'Consuming raw or undercooked meats, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions';
let menu: Array<ReactFragment> = [];

const HappyHourMenu = () => {
  if (menu.length < 1) {
    menu.push(<div className="subtitle-1">Happy Hour!  2pm-6pm Mon-Fri </div>);
    happyhouritems.map((item) => addMenuItem(menu, item));
  }

  return (
    <div className="menu-outer happy-menu-outer">
      <a className="button" href="/orderonline">Order Online</a>
      <div className="menu-main">
        {menu}
      </div>
    </div>
  );
};

export default HappyHourMenu;