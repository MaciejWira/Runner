import React from 'react';
import './StageOne.css';

const stageOne = (props) => {

  return (
    <div className="StageOne">
      <h2>Wybierz dwa z trzech parametrów:</h2>
      <div className="linksWrapper">
        <a className="anchor" onClick={props.chooseStarters.bind(this, "distance")}>Dystans</a>
        <a className="anchor" onClick={props.chooseStarters.bind(this, "tempo")}>Tempo</a>
        <a className="anchor" onClick={props.chooseStarters.bind(this, "time")}>Czas</a>
      </div>
      <button onClick={props.checkStarters}>DALEJ</button>
    </div>
  )
}

export default stageOne;
