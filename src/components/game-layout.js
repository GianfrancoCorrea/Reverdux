import React from 'react';
import Board from './board';
import BoardRecords from './board-records';
import ButtonComponent from './button';
import Score from './score';
import Turn from './turn';
import WinnerMessage from './winner-message';

function GameLayout(props) {
  return (
    <div className="GameLayout">
      <ButtonComponent
        actions={props.actions.pause}
        message="Pause"
        styleBtn="secondary btn--big no-bottom-radius"
      />
      {props.isEnd ? (
        <WinnerMessage winner={props.winner} actions={props.actions} />
      ) : (
        <Turn players={props.players} turn={props.turn} actions={props.actions.switchTurn} />
      )}
      <Board
        board={props.board}
        playerTurn={props.turn}
        changeTurn={props.changeTurn}
        hint={props.hint}
        actions={props.actions}
        boardHistory={props.boardHistory}
      />
      <Score score={props.score} players={props.players} />
      <BoardRecords
        boardHistory={props.boardHistory}
        actions={props.actions}
        players={props.players}
      />
    </div>
  );
}

export default GameLayout;
