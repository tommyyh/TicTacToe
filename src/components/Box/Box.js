import React from 'react';
import style from './box.module.css';

const Box = () => {
  const onClick = () => {
    console.log('kokot');
  };

  return <div className={style.box} onClick={onClick}></div>;
};

export default Box;
