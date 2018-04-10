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
      state={props.state}
      changeValue={props.changeValue}
      changeStage={props.changeStage}
      chooseStarters={props.chooseStarters}/>);
  if (state.starters.parameters.tempo) stageTwoParameters.push(
    <Tempo
      key="tempo"
      title="Tempo"
      state={props.state}
      changeValue={props.changeValue}
      changeStage={props.changeStage}
      chooseStarters={props.chooseStarters}/>);
  if (state.starters.parameters.time) stageTwoParameters.push(
    <Time
      key="time"
      title="Czas"
      state={props.state}
      changeValue={props.changeValue}
      changeStage={props.changeStage}
      chooseStarters={props.chooseStarters}/>);

  return (
    <div className="StageTwo">
      <h2>KROK 2 z 3</h2>
      <p>Dokonaj wstępnych założeń<br/>
      (będziesz mógł je później modyfikować)</p>
      <div className="panel-wrapper">
        {stageTwoParameters}
      </div>
      <button onClick={props.changeStage.bind(this, "back")} className="button-continue">WRÓĆ</button>
      <button onClick={props.changeStage.bind(this, "forward")} className="button-continue">DALEJ</button>
    </div>
  );

};

export default stageTwo;
