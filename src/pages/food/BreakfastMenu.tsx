import React, { ReactFragment } from 'react';
import './BreakfastMenu.scss';
import drinks from '../../jsonfiles/breakfast/breakfast_drinks.json'; // Relative path to your File
import breakfastpg2 from '../../jsonfiles/breakfast/breakfast_pg2.json'; // Relative path to your File
import sides from '../../jsonfiles/breakfast/breakfast_sides.json'; // Relative path to your File
import omolets from '../../jsonfiles/breakfast/omolets.json'; // Relative path to your File
import skillets from '../../jsonfiles/breakfast/skillets.json'; // Relative path to your File

const breakfastItems = [];
const warning = 'Consuming raw or undercooked meats, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions';
let breakfastMenu: Array<ReactFragment> = [];

const addMenuItem = (item: any) => {
  breakfastMenu.push(
    <div className="drink-item">
      <div className="row"> 
        <div className="item-name">{item.name}</div>
        <hr></hr>
        <div className='price'>{item.price}</div>
      </div>
      <div className="item-description">{item.desc}</div>
    </div>)
}

const BreakfastMenu = () => {
  if (breakfastMenu.length < 1) {
    breakfastMenu.push(<div className="subtitle-1 no-margin">Omolets</div>);
    omolets.map(d => addMenuItem(d));
  
    breakfastMenu.push(<div className="subtitle-1"> Traditional Breakfast </div>);
    breakfastpg2.map(d => addMenuItem(d));

    breakfastMenu.push(<div className="subtitle-1"> Skillets </div>);
    skillets.map(d => addMenuItem(d));

    breakfastMenu.push(<div className="subtitle-1"> Sides </div>);
    sides.map(d => addMenuItem(d));

    breakfastMenu.push(<div className="subtitle-1">Drinks</div>);
    drinks.map(d => addMenuItem(d));
  }

  return (
    <div className="breakfast-outer">
      <div className="breakfast-main">
        {breakfastMenu}
      </div>
    </div>
  );
};

export default BreakfastMenu;