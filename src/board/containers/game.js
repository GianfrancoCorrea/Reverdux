import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './nombreclass.css';
import Board from '../components/board';
import Row from '../components/row';

import { connect } from 'react-redux';


class Game extends Component {
  state = {}
	handleCellClick = (prop) => {
		alert('asd')
	 console.log(prop)
	}
	render() {
		return (
		 	<Board 
		 		handleCellClick={this.handleCellClick}
		 	 />
		)
	}
}


export default Game