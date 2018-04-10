import React from 'react';
import Card from '../../Helpers/Card/Card';
import Panel from '../../Helpers/Panel/Panel';

const tempo = (props) => {

  return (
    <Panel
      parameter="tempo"
      state={props.state}
      chooseStarters={props.chooseStarters}
      panelTitle={props.title}>
      <Card
        value={props.state.tempo.min}
        valueUp={props.changeValue.bind(this, "plus", "tempo", "min")}
        valueDown={props.changeValue.bind(this, "minus", "tempo", "min")}
        />
      <span>:</span>
      <Card
        value={props.state.tempo.s}
        valueUp={props.changeValue.bind(this, "plus", "tempo", "s")}
        valueDown={props.changeValue.bind(this, "minus", "tempo", "s")}
        unit="min/km"/>
    </Panel>
  )

};

export default tempo;
