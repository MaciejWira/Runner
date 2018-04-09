import React, { Component } from 'react';
import Stage from '../Stage/Stage';
import Header from '../../components/Header/Header';
import Alert from '../../components/Helpers/AlertBox/AlertBox';
import Aux from '../../hoc/Auxy/Auxy';
import './App.css';

class App extends Component {

  state = {
    showAlert: false
  }

  showAlertHandler = (text) => {
    document.querySelector(".AlertBox .message").innerHTML = text;    
    if (!this.state.showAlert){
      this.setState((prevState, props) => {
        return {
          showAlert: !prevState.showAlert
        }
      });
    }
    document.querySelector(".AlertBox").addEventListener("click", () => {
      if (this.state.showAlert){
        this.setState((prevState, props) => {
          return {
            showAlert: !prevState.showAlert
          }
        });
      }
    })
  }

  render(){

    let alertBoxClass = [];
    if (!this.state.showAlert) {
      alertBoxClass.push("AlertBox");
      alertBoxClass.push("message");
    }
    else {
      alertBoxClass.push("AlertBox AlertBox--show");
      alertBoxClass.push("message message--show");
    }

    return (
      <Aux>
        <Alert classes={alertBoxClass}>Przykładowy alert!</Alert>
        <Header />
        <Stage showAlert={this.showAlertHandler}/>
      </Aux>
    );
  }
}

export default App;
