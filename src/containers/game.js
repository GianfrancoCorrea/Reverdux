import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../containers/board';
import AppLayout from '../components/app-layout'
import Menu from '../components/menu'
import GameLayout from '../components/game-layout'
import Turn from '../components/turn'
import Score from '../components/score'
import { connect } from 'react-redux';

import Button from '../buttons/components/button'



class Game extends Component {

	newGame = () => {
		setTimeout(() => {
			console.log(this.state)
		},0)
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
							<Button handleAction={this.handlePlay} message="Play" style='success'/>
						</Menu>
					:
						<Menu show={this.props.showInitialScreen}>
							<Button handleAction={this.handlePause} message="Resume" style='success'/>
							<Score score={this.props.score} />
							<Button handleAction={this.handlePlay} message="Restart" style="danger"/>

						</Menu>
				
				: 
				
				<GameLayout>
					<Button handleAction={this.handlePause} message="Pause" style="success"/>
					<Turn turn={this.props.turn} />
					<Board 
						board={this.props.board}
						playerTurn={this.props.turn}
						changeTurn={this.props.changeTurn}
						cellClick={this.handleCellClick}
					>
					</Board>
					<Score score={this.props.score} />
				</GameLayout>
			}
			 </AppLayout>
		)
	}

}

// reduxTest(state, actions) {
// 	 switch (actions) {
//     case 'NEW_GAME':
//       return newBoard()
//     case default:
//     	return state
//   }
// }
const mapStateToProps = (state, props) => {
  return {
    board: state.board,
		turn: state.turn,
		showInitialScreen: state.showInitialScreen,
		score: state.score,
		pause: state.pause
  }
}

export default connect(mapStateToProps)(Game)