import PropTypes from 'prop-types';
import React from 'react';
import '../styles/turn.css';
import ButtonComponent from './button';

function WinnerMessage({ actions, winner }) {
  const btnStyle = {
    margin: '0',
    float: 'left',
  };
  const textStyle = {
    color: 'red',
    marginLeft: '20px ',
  };
  return (

    <div className="turn">
      <span style={textStyle}>
        {winner}
        {'wins!'}
      </span>
      <ButtonComponent actions={actions.newGame} styleBtn="success btn--small" addStyle={btnStyle} message="Play again" />
    </div>
  );
}


export default WinnerMessage;


WinnerMessage.propTypes = {
  winner: PropTypes.string.isRequired,
};
