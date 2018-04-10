import React from 'react';
import Padlock from '../../Helpers/Padlock/Padlock';
import './StageOne.css';

const stageOne = (props) => {

  const anchorClass = (parameter) => {
    if (!props.state.starters.parameters[parameter]) return "anchor";
    else  return "anchor anchor--clicked";
  }

  return (
    <div className="StageOne">
      <h2>KROK 1 z 3</h2>
      <p>Wybierz 2 z 3 parametrów do założeń<br/>
      (będziesz mógł je później modyfikować)</p>
      <div className="links-wrapper">
        <a className={anchorClass("distance")} onClick={props.chooseStarters.bind(this, "distance")}>
          <i className="fas fa-road"></i>
          <h3>Dystans</h3>
          <Padlock
            parameter="distance"
            state={props.state}
            chooseStarters={props.chooseStarters}/>
        </a>
        <a className={anchorClass("tempo")} onClick={props.chooseStarters.bind(this, "tempo")}>
          <i className="fas fa-tachometer-alt"></i>
          <h3>Tempo</h3>
          <Padlock
            parameter="tempo"
            state={props.state}
            chooseStarters={props.chooseStarters}/>
        </a>
        <a className={anchorClass("time")} onClick={props.chooseStarters.bind(this, "time")}>
          <i className="fas fa-stopwatch"></i>
          <h3>Czas</h3>
          <Padlock
            parameter="time"
            state={props.state}
            chooseStarters={props.chooseStarters}/>
        </a>
      </div>
      <button onClick={props.checkStarters.bind(this, "forward")} className="button-continue">DALEJ</button>
    </div>
  )
}

export default stageOne;
