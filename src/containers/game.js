import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../containers/board';
import AppLayout from '../components/app-layout';
import Menu from '../components/menu';
import GameLayout from '../components/game-layout';
import Turn from '../components/turn';
import Score from '../components/score';
import { connect } from 'react-redux';
import Button from '../buttons/components/button';
import WinnerMessage from '../components/winner-message'
import PlayerInput from '../components/player-input'
import BoardRecords from '../components/board-records'
import {Stack} from 'immutable'

class Game extends Component {


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
	
	render() {
		return (
			<AppLayout >
				{
				this.props.showInitialScreen == true ? 
					this.props.pause == false ? 
						<Menu show={this.props.showInitialScreen}>
					
							<Button handleAction={this.handlePlay} message="Play" style='success btn--big'/>
						</Menu>
					:
						<Menu show={this.props.showInitialScreen}>
							<Button handleAction={this.handlePause} message="Resume" style='success btn--big'/>
							<Score score={this.props.score}  handleAction={this.switchTurn}/>
							<Button handleAction={this.handlePlay} message="Restart" style="danger btn--big"/>
						</Menu>
				: 
					
				<GameLayout>
					<Button handleAction={this.handlePause} message="Pause" style="success btn--big"/>
					{this.props.isEnd ? 
						<WinnerMessage winner={this.props.winner} handleAction={this.handlePlay}/>
					: 
						<Turn turn={this.props.turn} handleAction={this.switchTurn}/>
					}
					<Board 
						board={this.props.board}
						playerTurn={this.props.turn}
						changeTurn={this.props.changeTurn}
						cellClick={this.handleCellClick}
					>
					</Board>
					<Score score={this.props.score} />
					<BoardRecords boardHistory={this.props.boardHistory} />
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
		boardHistory: state.boardHistory
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
		winner: PropTypes.number,
		boardHistory: PropTypes.instanceOf(Stack)
}