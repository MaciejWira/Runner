import React from 'react';
import './Card.css';

const card = (props) => {

  let unit = props.unit;
  if (props.unit === undefined) unit = "";

  return(
    <div className="Card">
      <div className="Card--main">
        <button onClick={props.valueUp}><i className="fas fa-caret-up"></i></button>
        <span>{props.value}</span>
        <button onClick={props.valueDown}><i className="fas fa-caret-down"></i></button>
      </div>
      <div className="Card--unit">
        <span>{unit}</span>
      </div>
    </div>
  )
}

export default card;
