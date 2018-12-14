import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../containers/board';
import AppLayout from '../components/app-layout';
import Menu from '../components/menu';
import GameLayout from '../components/game-layout';
import Turn from '../components/turn';
import Score from '../components/score';
import { connect } from 'react-redux';
import ButtonComponent from '../buttons/components/button';
import WinnerMessage from '../components/winner-message'
import PlayerNames from '../components/player-names'
import BoardRecords from '../components/board-records'
import {Stack} from 'immutable'

class Game extends Component {

	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handlePlay = () => {
		this.props.dispatch({
			type: 'NEW_GAME',
		})
	}
	handlePause = () => {
		this.props.dispatch({
			type: 'PAUSE',
			
		})
	}
	switchTurn = () => {
		this.props.dispatch({
			type: 'SWITCH_TURN',
			
		})
	}
	handleCellClick = (eventData) => {
		this.props.dispatch({
			type: 'MAKE_MOVE',
			cell: eventData.cell
		})
}
	handleRecordClick = (recordData) => {
		this.props.dispatch({
			type: 'SHOW_RECORD',
			boardID: recordData
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(e.target)
		this.props.dispatch({
			type: 'PLAYER_NAMES',
			player1: e.target.querySelector('#Player1').value,
			player2: e.target.querySelector('#Player2').value
		})
	}


	render() {
		return (
			<AppLayout >
				{
				this.props.showInitialScreen == true ? 
					this.props.pause == false ? 
						<Menu show={this.props.showInitialScreen}>
							<PlayerNames handleSubmit={this.handleSubmit} playerNames={this.props.players} nameSeted={this.props.nameSeted}>
							</PlayerNames>
							<ButtonComponent handleAction={this.handlePlay} message="Play" style='success btn--big'/>
						</Menu>
					:
						<Menu show={this.props.showInitialScreen}>
							<ButtonComponent handleAction={this.handlePause} message="Resume" style='success btn--big no-bottom-radius'/>
							<Score score={this.props.score}  players={this.props.players}/>
							<ButtonComponent handleAction={this.handlePlay} message="Restart" style="danger btn--big "/>
						</Menu>
				: 
					
				<GameLayout>
					<ButtonComponent handleAction={this.handlePause} message="Pause" style="secondary btn--big no-bottom-radius"/>
					{this.props.isEnd ? 
						<WinnerMessage winner={this.props.winner} handleAction={this.handlePlay}/>
					: 
						<Turn players={this.props.players} turn={this.props.turn} handleAction={this.switchTurn} />
					}
					<Board 
						board={this.props.board}
						playerTurn={this.props.turn}
						changeTurn={this.props.changeTurn}
						cellClick={this.handleCellClick}
					>
					</Board>
					<Score score={this.props.score} players={this.props.players}/>
					<BoardRecords boardH={this.props.boardHistory} recordClick={this.handleRecordClick}  players={this.props.players} />
				</GameLayout>
			}
			 </AppLayout>
		)
	}

}

const mapStateToProps = (state, props) => {
  return {
     	board: state.board,
		turn: state.turn,
		showInitialScreen: state.showInitialScreen,
		score: state.score,
		pause: state.pause,
		isEnd: state.isEnd,
		winner: state.winner,
		boardHistory: state.boardHistory,
		players: state.players,
		nameSeted: state.nameSeted,
		players: state.players
  }
}

export default connect(mapStateToProps)(Game)

Game.propTypes = {
		board: PropTypes.array.isRequired,
		pause:  PropTypes.bool.isRequired,
		showInitialScreen: PropTypes.bool.isRequired,
		turn: PropTypes.number.isRequired,
		score: PropTypes.objectOf(PropTypes.number).isRequired,
		isEnd: PropTypes.bool.isRequired,
		winner: PropTypes.string,
		boardHistory: PropTypes.instanceOf(Stack).isRequired
}