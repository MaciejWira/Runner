import React from 'react';
import Card from '../Card/Card';

const tempo = (props) => {
  return(
    <div>
      <h2>Wpisz prognozowane tempo</h2>
      <Card
        value={props.min}
        valueUp={props.minUp}
        valueDown={props.minDown}/>
      <Card
        value={props.s}
        valueUp={props.sUp}
        valueDown={props.sDown}/>
    </div>
  )
};

export default tempo;
