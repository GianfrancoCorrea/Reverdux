import React from 'react';
import Board from '../components/board';
import Turn from '../components/turn';
import Score from '../components/score';
import ButtonComponent from '../components/button';
import WinnerMessage from '../components/winner-message'
import BoardRecords from '../components/board-records'


function GameLayout(props) {
	return (
		<div className="GameLayout">

			<ButtonComponent actions={props.actions.pause} message="Pause" style="secondary btn--big no-bottom-radius" />
			{
				props.isEnd ?
					<WinnerMessage winner={props.winner} actions={props.actions} />
					:
					<Turn players={props.players} turn={props.turn} actions={props.actions.switchTurn} />
			}
			<Board
				board={props.board}
				playerTurn={props.turn}
				changeTurn={props.changeTurn}
				hint={props.hint}
				actions={props.actions}
				boardHistory={props.boardHistory}
			>
			</Board>
			<Score score={props.score} players={props.players} />
			<BoardRecords boardHistory={props.boardHistory} actions={props.actions} players={props.players} />
		</div>
	)
}


export default GameLayout;