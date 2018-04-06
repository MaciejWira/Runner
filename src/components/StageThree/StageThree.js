import React from 'react';
import Distance from '../Distance/Distance';
import Time from '../Time/Time';
import Tempo from '../Tempo/Tempo';

const stageThree = (props) => {

  let state = props.state,
      showDistanceKm = 0,
      showDistanceM = 0,
      showTempoMin = 0,
      showTempoS = 0,
      showTimeHours = 0,
      showTimeMin = 0,
      showTimeS = 0;

  const time = state.time.s + (60 * state.time.min) + (3600 * state.time.hours),
        distance = state.distance.m + (1000 * state.distance.km),
        tempo = (state.tempo.s + (60 * state.tempo.min)) / 1000;

  if (!state.starters.parameters.distance){
    const showDistance = time / tempo;
    showDistanceKm = Math.floor(showDistance / 1000);
    showDistanceM = Math.floor(showDistance % 1000);
  } else {
    showDistanceKm = state.distance.km;
    showDistanceM = state.distance.m;
  }

  if (!state.starters.parameters.tempo){
    const showTempo = time / (distance / 1000);
    showTempoMin = Math.floor(showTempo / 60);
    showTempoS = Math.floor(showTempo % 60);
  } else {
    showTempoMin = state.tempo.min;
    showTempoS = state.tempo.s;
  }

  if (!state.starters.parameters.time){
    const showTime = distance * tempo;
    showTimeHours = Math.floor(showTime / 3600);
    showTimeMin = Math.floor((showTime % 3600) / 60);
    showTimeS = Math.floor((showTime % 3600) % 60);
  } else {
    showTimeHours = state.time.hours;
    showTimeMin = state.time.min;
    showTimeS = state.time.s;
  }

  return (
      <div>
        <p>Dystans:</p>
        <Distance
          key="distance"
          km={showDistanceKm}
          kmUp={props.changeValue.bind(this, "plus", "distance", "km")}
          kmDown={props.changeValue.bind(this, "minus", "distance", "km")}
          m={showDistanceM}
          mUp={props.changeValue.bind(this, "plus", "distance", "m")}
          mDown={props.changeValue.bind(this, "minus", "distance", "m")}
          changeStarters={props.chooseStarters.bind(this, "distance")}
          locked={state.starters.parameters["distance"]}/>
        <p>Tempo:</p>
        <Tempo
          key="tempo"
          min={showTempoMin}
          minUp={props.changeValue.bind(this, "plus", "tempo", "min")}
          minDown={props.changeValue.bind(this, "minus", "tempo", "min")}
          s={showTempoS}
          sUp={props.changeValue.bind(this, "plus", "tempo", "s")}
          sDown={props.changeValue.bind(this, "minus", "tempo", "s")}/>
        <p>Czas:</p>
        <Time
          key="time"
          hours={showTimeHours}
          hoursUp={props.changeValue.bind(this, "plus", "time", "hours")}
          hoursDown={props.changeValue.bind(this, "minus", "time", "hours")}
          min={showTimeMin}
          minUp={props.changeValue.bind(this, "plus", "time", "min")}
          minDown={props.changeValue.bind(this, "minus", "time", "min")}
          s={showTimeS}
          sUp={props.changeValue.bind(this, "plus", "time", "s")}
          sDown={props.changeValue.bind(this, "minus", "time", "s")}/>
      </div>
    )
};

export default stageThree;
