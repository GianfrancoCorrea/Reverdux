import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './nombreclass.css';
import Board from '../containers/board';


import { connect } from 'react-redux';


class Game extends Component {
  state = {
	  board: [],
	  turn: 0,
  }
  newBoard = () => 
  ([0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 2, 0, 0, 0,
	0, 0, 0, 2, 1, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0])
	
	newGame = () => {
		//newBoard
		this.setState({board: this.newBoard()})
		this.setState({turn: 1})
		setTimeout(() => {
			console.log(this.state)
		},0)

	}
	handlePlay = () => {
		this.newGame()
	}
	changeBoard = (cell, playerTurn) => {
		this.setState(prevState => ({cacheCells: [...prevState.cacheCells[cell], playerTurn]}))
	}
	changeTurn = () => {
		if(this.state.turn == 1){
			this.setState({turn: 2})
		} else { this.setState({turn: 1})}
	}
	render() {
		return (
		 	<Board 
			 	handlePlay={this.handlePlay} 
			 	board={this.state.board}
				playerTurn={this.state.turn}
				changeTurn={this.changeTurn}
			 />
		)
	}
}


export default Game