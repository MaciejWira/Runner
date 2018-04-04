import React from 'react';

const input = (props) => {
  return(
    <div>
      <button onClick={props.valueUp}>plus</button>
      <input type="text"
        value={props.value}
        onChange={props.change}/>
      <button onClick={props.valueDown}>minus</button>
    </div>
  );
}

export default input;
