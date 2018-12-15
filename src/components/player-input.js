import React from 'react';
import '../styles/player-input.css';

const PlayerInput = (props) => {
  let placeholder = props.for + ' name'

  return (

    <input
      type="text"
      placeholder={placeholder}
      id={placeholder}
      className="form-control form-control-lg"
      name={props.for}
      onKeyUp={(e) => props.actions.playerName(e.target.value, props.for)}

    />

  )
}

export default PlayerInput
