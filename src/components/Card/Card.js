import React from 'react';
import Input from '../Input/Input';

const card = (props) => {
  return(
    <div>
      <button onClick={props.valueUp}>plus</button>
      <input type="text" value={props.value}/>
      <button onClick={props.valueDown}>minus</button>
    </div>
  )
}

export default card;
