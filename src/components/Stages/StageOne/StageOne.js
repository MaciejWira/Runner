import React from 'react';
import './StageOne.css';

const stageOne = (props) => {

  const state = props.state;

  const anchorClass = (parameter) => {
    if (!state.starters.parameters[parameter]) return "anchor";
    else  return "anchor anchor--clicked";
  }

  const padlock = (parameter) => {
    if (!state.starters.parameters[parameter]){
      return "fas fa-lock-open padlock"
    } else {
      return "fas fa-lock padlock"
    }
  }

  return (
    <div className="StageOne">
      <h2>KROK 1 z 3</h2>
      <h3>Wybierz 2 z 3 parametrów do założeń</h3>
      <p>(w dalszych krokach będziesz mógł je modyfikować)</p>
      <div className="links-wrapper">
        <a className={anchorClass("distance")} onClick={props.chooseStarters.bind(this, "distance")}>
          <i className="fas fa-road"></i>
          Dystans
          <i className={padlock("distance")}></i></a>
        <a className={anchorClass("tempo")} onClick={props.chooseStarters.bind(this, "tempo")}>
          <i className="fas fa-tachometer-alt"></i>
          Tempo
          <i className={padlock("tempo")}></i></a>
        <a className={anchorClass("time")} onClick={props.chooseStarters.bind(this, "time")}>
          <i className="fas fa-stopwatch"></i>
          Czas
          <i className={padlock("time")}></i></a>
      </div>
      <button onClick={props.checkStarters} className="button-continue">DALEJ</button>
    </div>
  )
}

export default stageOne;
