import React from 'react';

const addMenuItem = (arr: Array<any>, item: any) => {
    arr.push(
      <div className="menu-item">
        <div className="row">
          <div className="item-img">{item.img}</div>
          <div className="item-name">{item.name}</div>
          <hr></hr>
          <div className='price'>{item.price}</div>
        </div>
        <div className="item-description">{item.desc}</div>
      </div>)
}

export default addMenuItem;