import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './nombreclass.css';
import Board from '../containers/board';


import { connect } from 'react-redux';
// import reversiApp from '../reducers/game'
class Game extends Component {
  state = {
	  board: [],
	  turn: 0,
  }
 
	
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
	changeBoard = (cell, playerTurn) => {
		this.setState(prevState => ({cacheCells: [...prevState.cacheCells[cell], playerTurn]}))
	}
	
	render() {
		return (
		 	<Board 
			 	handlePlay={this.handlePlay} 
			 	board={this.props.board}
				playerTurn={this.state.turn}
				changeTurn={this.props.changeTurn}
			 />
		)
	}
// 	const SWITCH_TURN = 'SWITCH_TURN'
// const MAKE_MOVE = 'MAKE_MOVE'
// const NEW_GAME = 'NEW_GAME'

  reversiApp = (state = initialState, action) => {
    switch (action.type) {
        case NEW_GAME:
          return Object.assign({}, state, {
            board: this.newBoard()
          })
        case SWITCH_TURN:
          return Object.assign({}, state, {
            turn: action.switchTurn
          })    
        case MAKE_MOVE:
        return action.makeMove
        default:
          return state
        }
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