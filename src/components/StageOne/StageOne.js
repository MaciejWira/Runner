import React from 'react';
import './StageOne.css';

const stageOne = (props) => {

  const state = props.state;

  const anchorClass = (parameter) => {
    if (!state.starters.parameters[parameter]) return "anchor";
    else return "anchor anchor--clicked";
  }

  // const anchorClass = "anchor"

  return (
    <div className="StageOne">
      <h2>Wybierz dwa z trzech parametrów:</h2>
      <div className="links-wrapper">
        <a className={anchorClass("distance")} onClick={props.chooseStarters.bind(this, "distance")}>Dystans</a>
        <a className={anchorClass("tempo")} onClick={props.chooseStarters.bind(this, "tempo")}>Tempo</a>
        <a className={anchorClass("time")} onClick={props.chooseStarters.bind(this, "time")}>Czas</a>
      </div>
      <button onClick={props.checkStarters}>DALEJ</button>
    </div>
  )
}

export default stageOne;
