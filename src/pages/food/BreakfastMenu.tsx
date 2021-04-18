import React, { ReactFragment } from 'react';
import './BreakfastMenu.scss';
import drinks from '../../menus/breakfast/breakfast_drinks.json'; // Relative path to your File

const breakfastItems = [];
const warning = 'Consuming raw or undercooked meats, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions';
let breakfastMenu: Array<ReactFragment> = [];

const BreakfastMenu = () => {
  if (breakfastMenu.length < 1) {

    breakfastMenu.push(<div className="subtitle-1"> Drink Menu </div>);
    drinks.map(d => breakfastMenu.push(
      <div className="drink-item">
        <div className="row"> 
          <div className="item-name">{d.name}</div>
          <hr></hr>
          <div className='price'>{d.price}</div>
        </div>
        <div className="item-description">{d.desc}</div>
      </div>)
    );
  }

  return (
    <div className="breakfast-outer">
      <div className="breakfast-main">
        <div className="background"><span className="transparent-overlay"></span></div>
        {breakfastMenu}
      </div>
    </div>
  );
};

export default BreakfastMenu;