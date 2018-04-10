import React from 'react';
import Card from '../../Helpers/Card/Card';
import Panel from '../../Helpers/Panel/Panel';

const distance = (props) => {

  return (
    <Panel
      parameter="distance"
      state={props.state}
      chooseStarters={props.chooseStarters}
      panelTitle={props.title}>
      <Card
        value={props.state.distance.km}
        valueUp={props.changeValue.bind(this, "plus", "distance", "km")}
        valueDown={props.changeValue.bind(this, "minus", "distance", "km")}
        unit="km"/>
      <Card
        value={props.state.distance.m}
        valueUp={props.changeValue.bind(this, "plus", "distance", "m")}
        valueDown={props.changeValue.bind(this, "minus", "distance", "m")}
        unit="m"/>
    </Panel>
  )
};

export default distance;
