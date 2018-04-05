import React from 'react';
import Card from '../Card/Card';

const distance = (props) => {
  return(
    <div>
      <h2>Wpisz prognozowany dystans</h2>
      <Card
        value={props.km}
        valueUp={props.kmUp}
        valueDown={props.kmDown}/>
      <Card
        value={props.m}
        valueUp={props.mUp}
        valueDown={props.mDown}/>
    </div>
  )
};

export default distance;
