import React from 'react';
import Padlock from '../Padlock/Padlock';
import './Panel.css';

const panel = (props) => {

  let padlock = (<a onClick={props.chooseStarters.bind(this,props.parameter)}>
                    <Padlock
                      parameter={props.parameter}
                      state={props.state}
                      chooseStarters={props.chooseStarters}/>
                  </a>);

  if (props.state.stage[1]){
    padlock = null
  };

  let panelClass = "Panel";
  if (!props.state.starters.parameters[props.parameter]) panelClass = "Panel Panel--locked"

  return(
    <div className={panelClass}>
      <h3>{props.panelTitle}</h3>
      <div className="card-wrapper">
        {props.children}
      </div>
      {padlock}
    </div>
  )
};

export default panel;
