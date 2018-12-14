import React from 'react';
import '../styles/player-input.css';


const PlayerInput = (props) => (
  <form
    className="PlayerName"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Enter player1 name"
      className="Name-input"
      name="PlayerName"
      value={props.value}
    />
  </form>
)

export default PlayerInput
