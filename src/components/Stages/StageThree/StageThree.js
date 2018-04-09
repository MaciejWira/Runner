import React from 'react';
import Distance from '../../Parameters/Distance/Distance';
import Time from '../../Parameters/Time/Time';
import Tempo from '../../Parameters/Tempo/Tempo';

const stageThree = (props) => {

  const state = props.state;

  return (
      <div>
        <Distance
          key="distance"
          title="Dystans"
          km={state.distance.km}
          kmUp={props.changeValue.bind(this, "plus", "distance", "km")}
          kmDown={props.changeValue.bind(this, "minus", "distance", "km")}
          m={state.distance.m}
          mUp={props.changeValue.bind(this, "plus", "distance", "m")}
          mDown={props.changeValue.bind(this, "minus", "distance", "m")}
          changeStarters={props.chooseStarters.bind(this, "distance")}z
          locked={state.starters.parameters["distance"]}
          stageThree={state.stage[2]}
          state={props.state}/>
        <Tempo
          key="tempo"
          title="Tempo"
          min={state.tempo.min}
          minUp={props.changeValue.bind(this, "plus", "tempo", "min")}
          minDown={props.changeValue.bind(this, "minus", "tempo", "min")}
          s={state.tempo.s}
          sUp={props.changeValue.bind(this, "plus", "tempo", "s")}
          sDown={props.changeValue.bind(this, "minus", "tempo", "s")}
          changeStarters={props.chooseStarters.bind(this, "tempo")}
          locked={state.starters.parameters["tempo"]}
          stageThree={state.stage[2]}
          state={props.state}/>
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
          sDown={props.changeValue.bind(this, "minus", "time", "s")}
          changeStarters={props.chooseStarters.bind(this, "time")}
          locked={state.starters.parameters["time"]}
          stageThree={state.stage[2]}
          state={props.state}/>
      </div>
    )
};

export default stageThree;
