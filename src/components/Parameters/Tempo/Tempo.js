import React from 'react';
import Card from '../../Helpers/Card/Card';
import Panel from '../../Helpers/Panel/Panel';

const tempo = (props) => {

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
      padlockClass={padlock("tempo")}>
      <Card
        value={props.min}
        valueUp={props.minUp}
        valueDown={props.minDown}
        />
      <Card
        value={props.s}
        valueUp={props.sUp}
        valueDown={props.sDown}
        unit="min/km"/>
    </Panel>
  )

};

export default tempo;
