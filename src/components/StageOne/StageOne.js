import React, {Component} from 'react';
import './StageOne.css';

class StageOne extends Component {

  state = {
    parameters: {
      distance: false,
      tempo: false,
      time: false
    },
    chosenParameters: 0
  }

  parameterHandler = (parameter, event) => {
      let newParameters = {...this.state.parameters};
      newParameters[parameter] = !this.state.parameters[parameter];
      if (!this.state.parameters[parameter] && this.state.chosenParameters < 2){
        event.currentTarget.classList.add("anchorClicked");
        this.setState({
          parameters: newParameters,
          chosenParameters: this.state.chosenParameters + 1
        });
      } else if (this.state.parameters[parameter]){
        event.currentTarget.classList.remove("anchorClicked");
        this.setState({
          parameters: newParameters,
          chosenParameters: this.state.chosenParameters - 1
        });
      }
  }

  render(){

    console.log(this.state);

    let enoughParameters = (<button onClick={() => alert("Mało!")}>DALEJ</button>);
    if (this.state.chosenParameters === 2){
      enoughParameters = (<button onClick={this.props.changeStage}>DALEJ</button>)
    }

    return(
      <div className="StageOne">
        <h2>Wybierz dwa z trzech parametrów:</h2>
        <div className="linksWrapper">
          <a className="anchor" onClick={this.parameterHandler.bind(this, "distance")}>Dystans</a>
          <a className="anchor" onClick={this.parameterHandler.bind(this, "tempo")}>Tempo</a>
          <a className="anchor" onClick={this.parameterHandler.bind(this, "time")}>Czas</a>
        </div>
        {enoughParameters}
      </div>
    )
  }
}

export default StageOne;
