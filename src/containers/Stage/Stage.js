import React, {Component} from 'react';
import StageOne from '../../components/Stages/StageOne/StageOne';
import StageTwo from '../../components/Stages/StageTwo/StageTwo';
import StageThree from '../../components/Stages/StageThree/StageThree';
import './Stage.css';

class Stage extends Component {

  state = {
    starters: {
      parameters: {
        distance: false,
        tempo: false,
        time: false
      },
      chosenParameters: 0
    },
    stage: [
      true,
      false,
      false
    ],
    distance: {
      km: 0,
      m: 0
    },
    tempo: {
      min: 0,
      s: 0
    },
    speed: {
      seperate: 0,
      hundredth: 0
    },
    time: {
      hours: 0,
      min: 0,
      s: 0
    }
  }

  startersHandler = (parameter) => {
      let newParameters = {...this.state.starters.parameters};
      newParameters[parameter] = !this.state.starters.parameters[parameter];
      if (!this.state.starters.parameters[parameter] && this.state.starters.chosenParameters < 2){
        this.setState((prevState,props) => {
          return {
            starters: {
              parameters: newParameters,
              chosenParameters: prevState.starters.chosenParameters + 1
            }
          }
        });
      } else if (this.state.starters.parameters[parameter]){
        this.setState((prevState,props) => {
          return {
            starters: {
              parameters: newParameters,
              chosenParameters: prevState.starters.chosenParameters - 1
            }
          }
        });
      }
  }

  checkStartersHandler = () => {
    if (this.state.starters.chosenParameters === 2) this.changeStageHandler();
    else {
      this.props.showAlert("Za mało parametrów. Wybierz 2 z 3.");
    }
  }

  changeStageHandler = () => {
    if (this.state.stage[0]){
      this.setState({
        stage: [false,true,false]
      });
    } else if (this.state.stage[1]){
      this.setState({
        stage: [false,false,true]
      });
    };
  }

  changeValueHandler = (direction, parameter, subparameter) => {
    if (this.state.starters.chosenParameters === 2){

      let newState = {...this.state};
      if (direction === "plus"
          && newState.starters.parameters[parameter]) newState[parameter][subparameter]++;
      else if (direction === "minus"
              && newState[parameter][subparameter] > 0
              && newState.starters.parameters[parameter]) newState[parameter][subparameter]--;

      const time = newState.time.s + (60 * newState.time.min) + (3600 * newState.time.hours),
            distance = newState.distance.m + (1000 * newState.distance.km),
            tempo = (newState.tempo.s + (60 * newState.tempo.min)) / 1000;

        if (!newState.starters.parameters.distance){
          const showDistance = time / tempo;
          newState.distance.km = Math.floor(showDistance / 1000);
          newState.distance.m = Math.floor(showDistance % 1000);
        }

        if (!newState.starters.parameters.tempo){
          const showTempo = time / (distance / 1000);
          newState.tempo.min = Math.floor(showTempo / 60);
          newState.tempo.s = Math.floor(showTempo % 60);
        }

        if (!newState.starters.parameters.time){
          const showTime = distance * tempo;
          newState.time.hours = Math.floor(showTime / 3600);
          newState.time.min = Math.floor((showTime % 3600) / 60);
          newState.time.s = Math.floor((showTime % 3600) % 60);
        }

      this.setState({
        distance: newState.distance,
        tempo: newState.tempo,
        speed: newState.speed,
        time: newState.time
      });
    } else {
      alert("Za mało parametrów!")
    }
  }

  render(){

    const presentStage = () => {
      if (this.state.stage[0]) return <StageOne
                                      state={this.state}
                                      changeStage={this.changeStageHandler}
                                      chooseStarters={this.startersHandler}
                                      checkStarters={this.checkStartersHandler}/>;
      if (this.state.stage[1]) return <StageTwo
                                      state={this.state}
                                      changeValue={this.changeValueHandler}
                                      changeStage={this.changeStageHandler}/>;
      if (this.state.stage[2]) return <StageThree
                                      state={this.state}
                                      changeValue={this.changeValueHandler}
                                      changeStage={this.changeStageHandler}
                                      chooseStarters={this.startersHandler}/>;
    }

    return (
        <main className="Stage">
          {presentStage()}
        </main>
    );
  }
}

export default Stage;
