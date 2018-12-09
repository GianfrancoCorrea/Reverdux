import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './nombreclass.css';
import Board from '../containers/board';


import { connect } from 'react-redux';


class Game extends Component {
  state = {
	  board: []
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
		setTimeout(() => {
			console.log(this.state)
		},0)

	}
	handlePlay = () => {
		this.newGame()
	}
	render() {
		return (
		 	<Board handlePlay={this.handlePlay} board={this.state.board}/>
		)
	}
}


export default Game