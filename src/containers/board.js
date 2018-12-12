import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './nombreclass.css';
import BoardLayout from '../components/board-layout';
import Cell from '../components/cell'
import Play from '../buttons/components/play'
// import { Map, list} from 'immutable'
// import { siblingsCells, getCoords, getCell } from '../libs/board-libs'
// import { connect } from 'react-redux';


class Board extends Component {
  
	render() {
        // const range = [0,1,2,3,4,5,6,7]
		return (
		 	<BoardLayout
		 		
		 	 >
              	{this.props.board.map((r,x) => (

        
                   

                    <Cell
                        
                        owner={r}
                        cell={x}
                        cellClick={this.props.cellClick}
                        key={x}
                    />
                    ))}
              
           
              <Play handlePlay={this.props.handlePlay}/>
              </BoardLayout>
		)
	}
}


export default Board