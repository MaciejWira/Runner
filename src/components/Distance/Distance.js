import React from 'react';
import Card from '../Card/Card';

const distance = (props) => {

  let distanceClass = "";

  if (props.locked) distanceClass = "locked"

  return(
    <div className={distanceClass}>
      <h2>Wpisz prognozowany dystans</h2>
      <Card
        value={props.km}
        valueUp={props.kmUp}
        valueDown={props.kmDown}/>
      <Card
        value={props.m}
        valueUp={props.mUp}
        valueDown={props.mDown}/>
      <button onClick={props.changeStarters}>Wyłącz</button>
    </div>
  )
};

export default distance;
