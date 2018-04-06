import React from 'react';

const card = (props) => {
  return(
    <div>
      <button onClick={props.valueUp}>plus</button>
      <input type="text" value={props.value} readOnly/>
      <button onClick={props.valueDown}>minus</button>
    </div>
  )
}

export default card;
