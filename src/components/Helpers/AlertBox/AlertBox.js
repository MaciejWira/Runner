import React from 'react';
import './AlertBox.css';

const alertBox = (props) => {
  return(
    <div className={props.classes[0]}>
      <div className={props.classes[1]}>
        {props.children}
      </div>
    </div>
  );
}

export default alertBox;
