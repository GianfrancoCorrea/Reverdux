import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './nombreclass.css';
import BoardLayout from '../components/board-layout';
import Cell from '../components/cell'
import Play from '../buttons/components/play'


import { connect } from 'react-redux';


class Board extends Component {
  state = {

      play: false,
  }

          /* cords
          let y = Math.trunc(28 / 8)
          let x = 28 % 8
          let cord = [y, x]
          */
              
    handleCellClick = (prop) => {
        //let board = this.newBoard()
      
        //Y * 7 + X = Board[cell]
	    console.log(prop)
	 
    }
 
	render() {
        const range = [0,1,2,3,4,5,6,7]
		return (
		 	<BoardLayout
		 		handleCellClick={this.handleCellClick}
		 	 >
              	{this.props.board.map((r,x) => (

        
                   

                    <Cell

                        owner={r}
                        cell={x}
                        cellClick={this.handleCellClick}
                        key={x}
                    />
                    ))}
              
           
              <Play handlePlay={this.props.handlePlay}/>
              </BoardLayout>
		)
	}
}


export default Board