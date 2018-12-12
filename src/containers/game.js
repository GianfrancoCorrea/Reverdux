import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../containers/board';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/gameActions'

// import reversiApp from '../reducers/game'
class Game extends Component {
  // state = {
	//   board: [],
	//   turn: 0,
  // }
 
	
	newGame = () => {
		//newBoard
		//this.setState({board: this.newBoard()})
		//this.setState({turn: 1})

		setTimeout(() => {
			console.log(this.state)
		},0)

	}
	handlePlay = () => {
		//this.newGame()
		this.props.dispatch({
			type: 'NEW_GAME',

		})
	}
	handleCellClick = (eventData) => {
		//Y * 7 + X = Board[cell]
	//	console.log(eventData)
		this.props.dispatch({
			type: 'MAKE_MOVE',
			cell: eventData.cell
		})
}
	
	render() {
		return (
		 	<Board 
			 	handlePlay={this.handlePlay} 
			 	board={this.props.board}
				playerTurn={this.props.turn}
				changeTurn={this.props.changeTurn}
				cellClick={this.handleCellClick}
			 />
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
    turn: state.turn
  }
}

export default connect(mapStateToProps)(Game)