import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import { playerNames } from '../libs/board-libs';
import '../styles/turn.css';
import '../styles/score.css';

function Turn({
  turn, players, actions, isRecord,
}) {
  Turn.defaultProps = {
    isRecord: false,
    actions: () => {},
  };

  const btnStyle = {
    margin: '0',
    fontWeight: '600',
  };
  const divStyle = {
    marginLeft: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const coinStyle = {
    marginLeft: '10px',
    boxShadow: '1px 1px 2px 1px rgb(0,0,0,.3)',
  };
  const coinClass = turn === 1 ? 'coin score__player--one' : 'coin score__player--two';
  const playerName = playerNames(players, turn);
  return !isRecord ? (
    <div className="turn">
      <div style={divStyle}>
        <b>Turn: &nbsp;</b>
        <b>
          <span>
            {' '}
            {playerName}
            {' '}
          </span>
        </b>
        <div className={coinClass} style={coinStyle} />
      </div>
      <Button actions={actions} styleBtn="danger btn--small" addStyle={btnStyle} message="PASS" />
    </div>
  ) : (
    <div className="turn">
      <div style={divStyle}>
        <b>Turn played by: &nbsp;</b>
        <b>
          <span>
            {' '}
            {playerName}
          </span>
        </b>
        <div className={coinClass} style={coinStyle} />
      </div>
    </div>
  );
}

export default Turn;

Turn.propTypes = {
  turn: PropTypes.number.isRequired,
  players: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number],
      ),
    ),
  ).isRequired,
  actions: PropTypes.func,
  isRecord: PropTypes.bool,
};
