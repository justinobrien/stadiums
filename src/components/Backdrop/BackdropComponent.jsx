import React from 'react';
import './BackdropComponent.css';

const BackdropComponent = (props) => {
  return (
    <div className='backdrop' onClick={props.click}></div>
  );
};

export default BackdropComponent;