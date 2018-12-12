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

          /* cords
          let y = Math.trunc(28 / 8)
          let x = 28 % 8
          let cord = [y, x]
          */
              
    // handleCellClick = (eventData) => {
    //     //Y * 7 + X = Board[cell]
    //     let board = this.props.board

    //     let cell = eventData.cell
    //     // cell to coord
    //     //if cellClicked has owner cant move
    //     if(board[cell] == this.switchPlayer(this.props.playerTurn) || board[cell] == this.props.playerTurn){
    //         return false
    //     } else {
    //         let row = getCoords(cell, 'y')
    //         let col = getCoords(cell, 'x')
    //         //console.log(coordY, coordX, cell)
    //         this.checkSiblingCell(board, row, col)

    //     }
    // }
 

    // checkSiblingCell = (board, clickedRow, clickedCol) => {
    //     //search in all directions   
    //     siblingsCells.map( (direction, directionIndex) => {
    //         const newRow = clickedRow + direction[0]
    //         const newCol = clickedCol + direction[1]

    //         //ceall functions
            
    //         if(this.checkLimits(newRow, newCol)){
    //             if(this.checkEnemy(newRow, newCol)){
    //                 let initialCellToFlip = [getCell(clickedRow, clickedCol)]
    //                 let cellsToFlip = this.checkEnemyDirection(newRow, newCol, directionIndex, initialCellToFlip)

    //             if(cellsToFlip.length > 0) {
    //                 console.log('llega: '+ cellsToFlip)
    //                 cellsToFlip.map(c =>{
    //                     this.props.board[c] = this.props.playerTurn
    //                     })
    //                  this.props.changeTurn()
    //             } 
    //             }}
    //         })       
    //     }
    // checkLimits = (y, x) => {
    //     // checkLimits (board borders)
    //     if (y < 0 || y > 7 || x < 0 || x > 7) {
    //         return false
    //       } else return true
    // }
    // checkEnemy = (y, x) => {
    //     const siblingCell = getCell(y, x)
    //     const siblingOwner = this.props.board[siblingCell]
    //     if( siblingOwner !== this.props.playerTurn && siblingOwner !== 0){
    //         //enemy found
    //         return true
    //     } 
    // }
    // checkEnemyDirection = (y, x, direction, prevCellList) => {
 

    //     const actualCell = getCell(y,x)

    //     //next coords to check
    //     const newRow = y + siblingsCells[direction][0]
    //     const newCol = x + siblingsCells[direction][1]
    //     const cell = getCell(newRow, newCol)

    //     const owner = this.props.board[cell] 
    //     let cellList = [...prevCellList]

    //     if( owner ==  this.props.playerTurn){    
    //         cellList = [...cellList, actualCell]
    //         return cellList         
    //     } else if( owner == this.switchPlayer(this.props.playerTurn) ){
    //         //keep checking for enemys
    //         cellList = [...cellList, actualCell]
    //         let keepChecking = this.checkEnemyDirection(newRow, newCol, direction, cellList)
    //         if(keepChecking.length > 0){
    //             //more enemys found
    //             cellList = cellList.concat(keepChecking)
    //         } else {
    //             //cant move
    //             cellList = []
    //         }
    //         return cellList
    //     } else if (owner == 0 ){
    //         //cant move
    //         cellList = []
    //         return cellList
    //     } 

    // }
    // switchPlayer = (player) => {
    //     if(player == 1) return 2
    //         else return 1
    // }


    
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