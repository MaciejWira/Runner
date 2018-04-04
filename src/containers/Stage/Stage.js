import React, {Component} from 'react';
import StageOne from '../../components/StageOne/StageOne';

class Stage extends Component {

  state = {
    stage: [
      true,
      false,
      false
    ],
    distance: [0,25],
    tempo: 0,
    speed: 0,
    time: [0,0,0]
  }

  changeStageHandler = () => {
    if (this.state.stage[0]){
      this.setState({
        stage: [false,true,false]
      });
    }
  }

  render(){

    const presentStage = () => {
      if (this.state.stage[0]) return <StageOne changeStage={this.changeStageHandler}/>;
      if (this.state.stage[1]) return "Scena druga";
    }

    return (
        <main>
          {presentStage()}
        </main>
    );
  }
}

export default Stage;
