import React from 'react';

const addMenuItem = (arr: Array<any>, item: any) => {
    arr.push(
      <div className="menu-item">
        {item?.day?.length ? <div className="item-day subtitle-1">{item.day}</div>: null}
        {item?.img?.length ?<div className="item-img" style={{ backgroundImage: `url(${item.img})` }} /> : null}
        <div className="row">
          <div className="item-name">{item.name}</div>
          <hr></hr>
          <div className='price'>{item.price}</div>
        </div>
        <div className="item-description">{item.desc}</div>
      </div>)
}

export default addMenuItem;