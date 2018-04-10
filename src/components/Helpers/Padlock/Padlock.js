import React from 'react';

const padlockHandler = (props) => {

  const padlock = (parameter) => {
    if (!props.state.starters.parameters[parameter]){
      return "fas fa-lock-open padlock"
    } else {
      return "fas fa-lock padlock padlock--locked"
    }
  }

  return <i className={padlock(props.parameter)}></i>
}

export default padlockHandler;
