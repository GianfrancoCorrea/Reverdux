import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import Board from './board';
import Records from './records';
import ButtonComponent from './button';
import Score from './score';
import Turn from './turn';
import WinnerMessage from './winner-message';

function GameLayout({
  actions, board, turn, players, score, winner, isEnd, boardHistory, hint,
}) {
  return (
    <div className="GameLayout">
      <ButtonComponent
        actions={actions.pause}
        message="Pause"
        styleBtn="secondary btn--big no-bottom-radius"
      />
      {isEnd ? (
        <WinnerMessage winner={winner} actions={actions} />
      ) : (
        <Turn players={players} turn={turn} actions={actions} />
      )}
      <Board
        board={board}
        playerTurn={turn}
        hint={hint}
        actions={actions}
        boardHistory={boardHistory}
      />
      <Score score={score} players={players} />
      <Records
        boardHistory={boardHistory}
        actions={actions}
        players={players}
      />
    </div>
  );
}

export default GameLayout;

GameLayout.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  board: PropTypes.arrayOf(PropTypes.number).isRequired,
  turn: PropTypes.number.isRequired,
  players: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number],
      ),
    ),
  ).isRequired,
  score: PropTypes.objectOf(PropTypes.number).isRequired,
  winner: PropTypes.string.isRequired,
  isEnd: PropTypes.bool.isRequired,
  hint: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  boardHistory: PropTypes.instanceOf(List).isRequired,
};
