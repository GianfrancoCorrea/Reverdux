import PropTypes from 'prop-types';
import React from 'react';
import ButtonComponent from './button';
import Board from './board';
import Turn from './turn';

function RecordBoard({ actions, record, players }) {
  return (
    <div>
      <ButtonComponent actions={actions.pause} message="Resume" styleBtn="success btn--big mb-3" />
      <Turn turn={record.player} actions={actions} isRecord players={players} />
      <Board
        board={record.boardState}
        actions={actions}
        isHint={[]}
      />
    </div>
  );
}

export default RecordBoard;

RecordBoard.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  players: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number],
      ),
    ),
  ).isRequired,
  record: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.array])).isRequired,
};
