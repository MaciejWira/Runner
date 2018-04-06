import React from 'react';
import Card from '../Card/Card';

const time = (props) => {
  return(
    <div>
      <h2>Wpisz prognozowany czas</h2>
      <Card
        value={props.hours}
        valueUp={props.hoursUp}
        valueDown={props.hoursDown}/>
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

export default time;
