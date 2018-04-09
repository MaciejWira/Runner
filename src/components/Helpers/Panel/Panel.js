import React from 'react';
import './Panel.css';

const panel = (props) => {

  let panelClass = "Panel",
      buttonClass ="button";

  if (props.locked) panelClass += " locked";
  if (props.stageThree) buttonClass += " show";

  return(
    <div className={panelClass}>
      <h3>{props.panelTitle}</h3>
      <div className="card-wrapper">
        {props.children}
      </div>
      <a onClick={props.changeStarters}>
        <i className={props.padlockClass}></i></a>
      <button className={buttonClass} onClick={props.changeStarters}>PRZEŁĄCZ</button>
    </div>
  )
};

export default panel;
