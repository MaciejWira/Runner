import React from 'react';
import Distance from '../Distance/Distance';
import Time from '../Time/Time';
import Tempo from '../Tempo/Tempo';

const stageTwo = (props) => {

  let stageTwoParameters = [];
  if (props.distance) stageTwoParameters.push(<Distance
                                              key="distance"
                                              km={this.state.distance.km}
                                              kmUp={this.changeValue.bind(this, "plus", "distance", "km")}
                                              kmDown={this.changeValue.bind(this, "minus", "distance", "km")}
                                              m={this.state.distance.m}
                                              mUp={this.changeValue.bind(this, "plus", "distance", "m")}
                                              mDown={this.changeValue.bind(this, "minus", "distance", "m")}/>);
  if (props.tempo) stageTwoParameters.push(<Tempo key="tempo"/>);
  if (props.time) stageTwoParameters.push(<Time key="time"/>);

  return(
    {stageTwoParameters}
  );

};

export default stageTwo;
