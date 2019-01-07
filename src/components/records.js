import React from 'react';
import PropTypes from 'prop-types';
import '../styles/board-records.css';
import { List } from 'immutable';
import { playerNames } from '../libs/board-libs';

function BoardRecords({
  actions, boardHistory, players,
}) {
  const colorBadge = (player, id) => {
    let classBadge = '';
    if (player === 1) { classBadge = 'badge badge-dark'; }
    if (player === 2) { classBadge = 'badge badge-light'; }
    if (id === 0) { classBadge = 'badge badge-info'; }
    return classBadge;
  };

  return (
    <div className="records">
      <div className="records__top">
        <span>Records:</span>
      </div>

      <div className="records__ul">
        {boardHistory.reverse().map((x, i) => (
          <div
            key={i}
            role="button"
            tabIndex={-1}
            onClick={() => actions.showRecord(x)}
          >
            <div className={colorBadge(x.player, x.id)}>
              {'#'}
              {`${x.id} - `}
              {' '}
              {x.id !== 0 ? `Move ${playerNames(players, x.player)}` : 'Start'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoardRecords;

BoardRecords.propTypes = {
  boardHistory: PropTypes.instanceOf(List).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  players: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number],
      ),
    ),
  ).isRequired,
};
