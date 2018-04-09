import React from 'react';
import Distance from '../../Parameters/Distance/Distance';
import Time from '../../Parameters/Time/Time';
import Tempo from '../../Parameters/Tempo/Tempo';
import './StageTwo.css';

const stageTwo = (props) => {

  let state = props.state;

  let stageTwoParameters = [];
  if (state.starters.parameters.distance) stageTwoParameters.push(
    <Distance
      key="distance"
      title="Dystans"
      km={state.distance.km}
      kmUp={props.changeValue.bind(this, "plus", "distance", "km")}
      kmDown={props.changeValue.bind(this, "minus", "distance", "km")}
      m={state.distance.m}
      mUp={props.changeValue.bind(this, "plus", "distance", "m")}
      mDown={props.changeValue.bind(this, "minus", "distance", "m")}/>);
  if (state.starters.parameters.tempo) stageTwoParameters.push(
    <Tempo
      key="tempo"
      title="Tempo"
      min={state.tempo.min}
      minUp={props.changeValue.bind(this, "plus", "tempo", "min")}
      minDown={props.changeValue.bind(this, "minus", "tempo", "min")}
      s={state.tempo.s}
      sUp={props.changeValue.bind(this, "plus", "tempo", "s")}
      sDown={props.changeValue.bind(this, "minus", "tempo", "s")}/>);
  if (state.starters.parameters.time) stageTwoParameters.push(
    <Time
      key="time"
      title="Czas"
      hours={state.time.hours}
      hoursUp={props.changeValue.bind(this, "plus", "time", "hours")}
      hoursDown={props.changeValue.bind(this, "minus", "time", "hours")}
      min={state.time.min}
      minUp={props.changeValue.bind(this, "plus", "time", "min")}
      minDown={props.changeValue.bind(this, "minus", "time", "min")}
      s={state.time.s}
      sUp={props.changeValue.bind(this, "plus", "time", "s")}
      sDown={props.changeValue.bind(this, "minus", "time", "s")}/>);

  return (
    <div className="StageTwo">
      <div className="panel-wrapper">
        {stageTwoParameters}
      </div>
      <button onClick={props.changeStage} className="button-continue">WRÓĆ</button>
      <button onClick={props.changeStage} className="button-continue">DALEJ</button>
    </div>
  );

};

export default stageTwo;
