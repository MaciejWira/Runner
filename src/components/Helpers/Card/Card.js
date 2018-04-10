import React, {Component} from 'react';
import './Card.css';

class Card extends Component  {

  state = {}

  render(){

          let unit = this.props.unit;

          if (this.props.unit === undefined) unit = "";

          return(
            <div className="Card">
              <div className="Card--main">
                <button
                  onClick={this.props.valueUp}
                  onMouseDown={() => {
                    const intervalId = setInterval(this.props.valueUp,100);
                    this.setState({
                      intervalId: intervalId
                    })
                  }}
                  onMouseUp={() => {
                    if (this.state.intervalId) clearInterval(this.state.intervalId);
                  }}
                  onMouseLeave={() => {
                    if (this.state.intervalId) clearInterval(this.state.intervalId);
                  }}>
                  <i className="fas fa-caret-up"></i>
                </button>
                  <span>{this.props.value}</span>
                <button
                onClick={this.props.valueDown}
                onMouseDown={() => {
                  const intervalId = setInterval(this.props.valueDown,100);
                  this.setState({
                    intervalId: intervalId
                  })
                }}
                onMouseUp={() => {
                  if (this.state.intervalId) clearInterval(this.state.intervalId);
                }}
                onMouseLeave={() => {
                  if (this.state.intervalId) clearInterval(this.state.intervalId);
                }}>
                  <i className="fas fa-caret-down"></i>
                </button>
              </div>
              <div className="Card--unit">
                <span>{unit}</span>
              </div>
            </div>
          )
  }

}

export default Card;
