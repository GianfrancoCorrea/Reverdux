import PropTypes from 'prop-types';
import React from 'react';
import '../styles/turn.css';
import ButtonComponent from './button';

function WinnerMessage(props) {
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
      <span style={textStyle}> {props.winner} wins!</span>
      <ButtonComponent actions={props.actions.newGame} styleBtn="success btn--small" addStyle={btnStyle} message="Play again" />
    </div>
  );
}


export default WinnerMessage;


WinnerMessage.PropTypes = {
  winner: PropTypes.string.isRequired,
}