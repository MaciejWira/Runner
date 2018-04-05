import React from 'react';
import Distance from '../Distance/Distance';
import Time from '../Time/Time';
import Tempo from '../Tempo/Tempo';

const stageTwo = (props) => {

  let state = props.state;

  let stageTwoParameters = [];
  if (state.starters.parameters.distance) stageTwoParameters.push(<Distance
                                                              key="distance"
                                                              km={state.distance.km}
                                                              kmUp={props.changeValue.bind(this, "plus", "distance", "km")}
                                                              kmDown={props.changeValue.bind(this, "minus", "distance", "km")}
                                                              m={state.distance.m}
                                                              mUp={props.changeValue.bind(this, "plus", "distance", "m")}
                                                              mDown={props.changeValue.bind(this, "minus", "distance", "m")}/>);
  if (state.starters.parameters.tempo) stageTwoParameters.push(<Tempo
                                                          key="tempo"
                                                          min={state.tempo.min}
                                                          minUp={props.changeValue.bind(this, "plus", "tempo", "min")}
                                                          minDown={props.changeValue.bind(this, "minus", "tempo", "min")}
                                                          s={state.tempo.s}
                                                          sUp={props.changeValue.bind(this, "plus", "tempo", "s")}
                                                          sDown={props.changeValue.bind(this, "minus", "tempo", "s")}/>);
  if (state.starters.parameters.time) stageTwoParameters.push(<Time key="time"/>);

  return (
    <div>
      {stageTwoParameters}
      <button onClick={props.changeStage}>DALEJ</button>
    </div>
  );

};

export default stageTwo;
