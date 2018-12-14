import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardLayout from '../components/board-layout';
import Cell from '../components/cell'
import {List} from 'immutable'

class Board extends Component {
  
	render() {
    let hint;
    let toHint = List(this.props.hint)
    console.log(toHint)
    let cell = this.props.board.map((r,x) => {
        
            return( <Cell
                 owner={r}
                 cell={x}
                 cellClick={this.props.cellClick}
                 key={x}
                 isHint={toHint.includes(x)}
             />)
           })

		return (
		 	<BoardLayout >
              	{cell}
              </BoardLayout>
		)
	}
}


export default Board

Board.propTypes = {
	board:  PropTypes.arrayOf(PropTypes.number).isRequired,
	cellClick: PropTypes.func.isRequired,
}