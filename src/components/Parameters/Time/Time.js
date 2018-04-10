import React from 'react';
import Card from '../../Helpers/Card/Card';
import Panel from '../../Helpers/Panel/Panel';

const time = (props) => {

  return(
    <Panel
      parameter="time"
      state={props.state}
      chooseStarters={props.chooseStarters}
      panelTitle={props.title}>
      <Card
        value={props.state.time.hours}
        valueUp={props.changeValue.bind(this, "plus", "time", "hours")}
        valueDown={props.changeValue.bind(this, "minus", "time", "hours")}
        unit="h"/>
      <Card
        value={props.state.time.min}
        valueUp={props.changeValue.bind(this, "plus", "time", "min")}
        valueDown={props.changeValue.bind(this, "minus", "time", "min")}
        unit="min"/>
      <Card
        value={props.state.time.s}
        valueUp={props.changeValue.bind(this, "plus", "time", "s")}
        valueDown={props.changeValue.bind(this, "minus", "time", "s")}
        unit="s"/>
    </Panel>
  );
};

export default time;
