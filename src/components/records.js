import React from 'react';
import PropTypes from 'prop-types';
import '../styles/board-records.css';
import { Stack } from 'immutable';
import { playerNames } from '../libs/board-libs';

function BoardRecords({ actions, board, boardHistory, players }) {
  const colorBadge = (player, id) => {
    if (id === 0) return 'badge badge-info';
    if (player === 1) return 'badge badge-dark';
    if (player === 2) return 'badge badge-light';
  };
  return (
    <div className="records">
      <div className="records__top">
        <span>Records:</span>
      </div>

      <ul>
        {boardHistory.reverse().map((x, i) => (
          <li key={i} onClick={() => actions.showRecord(x.boardState)}>
            <div className={colorBadge(x.player, x.id)}>
              {'#'}
              {`${x.id} - `}
              {' '}
              {x.id !== 0 ? `Move ${playerNames(players, x.player)}` : 'Start'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardRecords;

BoardRecords.propTypes = {
  // boardH:  PropTypes.instanceOf(Stack).isRequired,
};
