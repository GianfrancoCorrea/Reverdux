import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardLayout from '../components/board-layout';
import Cell from '../components/cell'

class Board extends Component {
  
	render() {
		return (
		 	<BoardLayout >
              	{this.props.board.map((r,x) => (
                    <Cell
                        owner={r}
                        cell={x}
                        cellClick={this.props.cellClick}
                        key={x}
                    />
                    ))}
              </BoardLayout>
		)
	}
}


export default Board

Board.propTypes = {
	board:  PropTypes.arrayOf(PropTypes.number).isRequired,
	cellClick: PropTypes.func.isRequired,
}