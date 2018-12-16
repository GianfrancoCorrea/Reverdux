import React from 'react';
import PropTypes from 'prop-types';
import '../styles/player-input.css';

const PlayerInput = ({ forPlayer, actions }) => {
  const placeholder = `${forPlayer} name`;

  return (

    <input
      type="text"
      placeholder={placeholder}
      id={placeholder}
      className="form-control form-control-lg"
      name={forPlayer}
      onKeyUp={e => actions.playerName(e.target.value, forPlayer)}

    />

  );
};

export default PlayerInput;

PlayerInput.propTypes = {
  forPlayer: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};
