import React from 'react';
import Card from '../../Helpers/Card/Card';
import Panel from '../../Helpers/Panel/Panel';

const distance = (props) => {

  const state = props.state;

  const padlock = (parameter) => {
    if (!state.starters.parameters[parameter]){
      return "fas fa-lock-open padlock"
    } else {
      return "fas fa-lock padlock"
    }
  }

  return (
    <Panel
      locked={props.locked}
      changeStarters={props.changeStarters}
      panelTitle={props.title}
      stageThree={props.stageThree}
      padlockClass={padlock("distance")}>
      <Card
        value={props.km}
        valueUp={props.kmUp}
        valueDown={props.kmDown}
        unit="km"/>
      <Card
        value={props.m}
        valueUp={props.mUp}
        valueDown={props.mDown}
        unit="m"/>
    </Panel>
  )
};

export default distance;
