import React from 'react';
import '../styles/player-input.css';


const PlayerInput = (props) => (
  
    <input
      type="text"
      placeholder={props.for}
      id={props.for}
      className="form-control form-control-lg"
      name={props.for}
      value={props.value}
    />

)

export default PlayerInput
