import React, {Component} from 'react';
import StageOne from '../../components/StageOne/StageOne';
import Distance from '../../components/Distance/Distance';
import Time from '../../components/Time/Time';
import Tempo from '../../components/Tempo/Tempo';

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

  startersHandler = (parameter, event) => {
      let newParameters = {...this.state.starters.parameters};
      newParameters[parameter] = !this.state.starters.parameters[parameter];
      if (!this.state.starters.parameters[parameter] && this.state.starters.chosenParameters < 2){
        event.currentTarget.classList.add("anchorClicked");
        this.setState({
          starters: {
            parameters: newParameters,
            chosenParameters: this.state.starters.chosenParameters + 1
          }
        });
      } else if (this.state.starters.parameters[parameter]){
        event.currentTarget.classList.remove("anchorClicked");
        this.setState({
          starters: {
            parameters: newParameters,
            chosenParameters: this.state.starters.chosenParameters - 1
          }
        });
      }
  }

  checkStartersHandler = () => {
    if (this.state.starters.chosenParameters === 2) this.changeStageHandler();
    else alert("Za mało!")
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

  changeValue = (direction, parameter, subparameter) => {
    let newParameter = {...this.state[parameter]};
    if (direction === "plus") newParameter[subparameter]++;
    else if (direction === "minus" && newParameter[subparameter] > 0) newParameter[subparameter]--;
    this.setState({
      [parameter]: newParameter
    })
  }

  render(){

    let stageTwo = [];
    if (this.state.starters.parameters.distance) stageTwo.push(<Distance
                                                                key="distance"
                                                                km={this.state.distance.km}
                                                                kmUp={this.changeValue.bind(this, "plus", "distance", "km")}
                                                                kmDown={this.changeValue.bind(this, "minus", "distance", "km")}
                                                                m={this.state.distance.m}
                                                                mUp={this.changeValue.bind(this, "plus", "distance", "m")}
                                                                mDown={this.changeValue.bind(this, "minus", "distance", "m")}/>);
    if (this.state.starters.parameters.tempo) stageTwo.push(<Tempo
                                                            key="tempo"
                                                            min={this.state.tempo.min}
                                                            minUp={this.changeValue.bind(this, "plus", "tempo", "min")}
                                                            minDown={this.changeValue.bind(this, "minus", "tempo", "min")}
                                                            s={this.state.tempo.s}
                                                            sUp={this.changeValue.bind(this, "plus", "tempo", "s")}
                                                            sDown={this.changeValue.bind(this, "minus", "tempo", "s")}/>);
    if (this.state.starters.parameters.time) stageTwo.push(<Time key="time"/>);

    const presentStage = () => {
      if (this.state.stage[0]) return <StageOne
                                      changeStage={this.changeStageHandler}
                                      chooseStarters={this.startersHandler}
                                      checkStarters={this.checkStartersHandler}/>;
      if (this.state.stage[1]) return (
        <div>
          {stageTwo}
          <button onClick={this.changeStageHandler}>DALEJ</button>
        </div>
      );
      if (this.state.stage[2]) return (
        <div>
          "General Kenobi..."
        </div>
      );
    }

    return (
        <main>
          {presentStage()}
        </main>
    );
  }
}

export default Stage;
