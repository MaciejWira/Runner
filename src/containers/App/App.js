import React, { Component } from 'react';
import Stage from '../Stage/Stage';
import './App.css';

class App extends Component {

  render(){

    return (
      <div className="App">
        <p>Komponent nawigacji</p>
        <p>Komponent headera</p>
        <Stage />
        <p>Komponent footera</p>
      </div>
    );
  }
}

export default App;
