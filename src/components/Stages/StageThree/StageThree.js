import React from 'react';
import Distance from '../../Parameters/Distance/Distance';
import Time from '../../Parameters/Time/Time';
import Tempo from '../../Parameters/Tempo/Tempo';
import './StageThree.css';

const stageThree = (props) => {

  return (
      <div className="StageThree">
        <h2>KROK 3 z 3</h2>
        <p>Możesz teraz do woli modyfikować parametry, ale tylko te z zamkniętą kłódką.<br/>
        Jeżeli chcesz modyfikować inny parametr, to wybierz go za pomocą kłódki.<br/>
        Aby móc swobodnie zmieniać założenia, muszą być wybrane dokładnie dwa parametry.</p>
        <div className="panel-wrapper">
          <Distance
            title="Dystans"
            state={props.state}
            changeValue={props.changeValue}
            changeStage={props.changeStage}
            chooseStarters={props.chooseStarters}/>
          <Tempo
            title="Tempo"
            state={props.state}
            changeValue={props.changeValue}
            changeStage={props.changeStage}
            chooseStarters={props.chooseStarters}/>
          <Time
            title="Czas"
            state={props.state}
            changeValue={props.changeValue}
            changeStage={props.changeStage}
            chooseStarters={props.chooseStarters}/>
        </div>
        <button onClick={props.changeStage.bind(this, "start")} className="button-continue">OD NOWA</button>
      </div>
    )
};

export default stageThree;
