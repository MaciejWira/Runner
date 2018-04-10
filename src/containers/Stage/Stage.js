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
      } else if (!this.state.starters.parameters[parameter] && this.state.starters.chosenParameters === 2){
        this.props.showAlert("Aby uruchomić ten parametr, wyłącz jeden z pozostałych.")
      }
  }

  checkStartersHandler = (direction) => {
    if (this.state.starters.chosenParameters === 2) this.changeStageHandler(direction);
    else {
      this.props.showAlert("Za mało parametrów. Wybierz 2 z 3.");
    }
  }

  changeStageHandler = (direction) => {

      let newStage = [...this.state.stage];

      if (direction === "forward"){
        for (let i = newStage.length - 1; i >= 0; i--){
          if (newStage[i] && i < newStage.length - 1){
            newStage[i] = false;
            newStage[i + 1] = true
          }
        }
      } else if (direction === "start"){
        for (let i = 0; i < newStage.length; i++){
            if (i === 0 ) newStage[i] = true;
            else newStage[i] = false;
          }
        this.setState({
          starters: {
            parameters: {
              distance: false,
              tempo: false,
              time: false
            },
            chosenParameters: 0
          },
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
        })
        } else {
        for (let i = 0; i < newStage.length; i++){
          if (newStage[i] && i > 0){
            newStage[i] = false;
            newStage[i - 1] = true
          }
        }
      }
      this.setState({
        stage: newStage
      })
  }

  changeValueHandler = (direction, parameter, subparameter) => {
    if (this.state.starters.chosenParameters === 2 && this.state.starters.parameters[parameter]){

      const limits = (param, subparam, limit) => {
        if (newState[param][subparam] === limit) newState[param][subparam] = limit - 1;
      }

      let newState = {...this.state};
      if (direction === "plus"
          && newState.starters.parameters[parameter]
          && newState.distance.m < 1000
          && newState.tempo.min < 45
          && newState.tempo.s < 60
          && newState.time.min < 60
          && newState.time.s < 60) {
            if (subparameter === "m") newState[parameter][subparameter] += 25;
            else newState[parameter][subparameter]++;
            limits("distance","m",1000);
            limits("tempo","min",45);
            limits("tempo","s",60);
            limits("time","min",60);
            limits("time","s",60);
          }
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
    } else if (this.state.starters.chosenParameters === 2 && !this.state.starters.parameters[parameter]){
     this.props.showAlert("Aby móc zmieniać ten parametr, wyłącz jeden z pozostałych.")
   }
     else {
      this.props.showAlert("Muszą być zaznaczone dwa parametry, aby wyliczyć cokolwiek.")
    }
  }

  render(){

    const presentStage = () => {
      if (this.state.stage[0]) return <StageOne
                                      state={this.state}
                                      chooseStarters={this.startersHandler}
                                      checkStarters={this.checkStartersHandler}/>;
      if (this.state.stage[1]) return <StageTwo
                                      state={this.state}
                                      changeStage={this.changeStageHandler}
                                      chooseStarters={this.startersHandler}
                                      changeValue={this.changeValueHandler}/>;
      if (this.state.stage[2]) return <StageThree
                                      state={this.state}
                                      changeStage={this.changeStageHandler}
                                      chooseStarters={this.startersHandler}
                                      changeValue={this.changeValueHandler}/>;
    }

    return (
        <main className="Stage">
          {presentStage()}
        </main>
    );
  }
}

export default Stage;
