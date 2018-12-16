import PropTypes from 'prop-types';
import React from 'react';
// import '../styles/turn.css';
import ButtonComponent from './button';
import Board from './board'

function RecordBoard({ actions, record,  }) {
  const btnStyle = {
    margin: '0',
    float: 'left',
  };
  const textStyle = {
    color: 'red',
    marginLeft: '20px ',
  };
  return (

    <div>
        <ButtonComponent actions={actions.pause} message="Resume" styleBtn="success btn--big"/>
        <Board
        board={record}
        actions={actions}
        isHint={[]}
      />
    </div>
  );
}


export default RecordBoard;


RecordBoard.propTypes = {
  winner: PropTypes.string.isRequired,
};