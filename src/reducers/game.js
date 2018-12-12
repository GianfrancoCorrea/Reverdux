import { siblingsCells, getCoords, getCell, switchPlayer, count } from '../libs/board-libs';
import {SWITCH_TURN, MAKE_MOVE, NEW_GAME, PAUSE} from '../actions/actionTypes';


function reversiApp(state = initialState, action) {
    switch (action.type) {
        case NEW_GAME:
          return Object.assign({}, state, {
            board: newBoard(),
            showInitialScreen: showMenu(state),
            score: getScore([1,1,2,2]),
            pause: false
          })
        case SWITCH_TURN:
          return Object.assign({}, state, {
            turn: changeTurn(state.turn)
          }) 
          case PAUSE:
          return Object.assign({}, state, {
            showInitialScreen: showMenu(state),
            pause: switchPause(state)
          })    
        case MAKE_MOVE:
        return handlerMove(state, action)
          
        default:
          return state
        }
}




const handlerMove = (state, action) => {
  let board = state.board
  let turn = state.turn
  const clickedCell = action.cell
  const row = getCoords(clickedCell, 'y')
  const col = getCoords(clickedCell, 'x')
// _.flatten
  let cellsToFlip = [];
  if(checkValidMove(board, clickedCell, turn)) {
      searchForSiblingsCells(row, col).map( sibling => {
        if(isEnemy(board, sibling.cell, turn)) {
          if(checkLimits(sibling.row, sibling.col)) {
            //------------------------------------------------
            let initialCellToFlip = []
            let cells = checkEnemyDirection(board, sibling.row, sibling.col, turn, sibling.directionIndex, initialCellToFlip)
            cellsToFlip = [...cellsToFlip, ...cells]
            // -----------------------------------------------
          } 
        }  
      })

      if(cellsToFlip.length > 0) {
        return {
          ...state,
          board: changeBoard(board, cellsToFlip, clickedCell, turn),
          turn: changeTurn(turn),
          score: getScore(board)
        } 
      }
  } 
  return state
}

const getScore = (board) => {
  return {
    player1: count(board, 1),
    player2: count(board, 2)
  }
}
const changeBoard = (board, cellsToFlip, cell, turn) => {
  //add clicked cell
  cellsToFlip = [...cellsToFlip, cell]
        cellsToFlip.map(cell =>{
          board[cell] = turn
        })
        return board
} 
const searchForSiblingsCells = (clickedRow, clickedCol) => siblingsCells.map( (direction, directionIndex) => {
      const newRow = clickedRow + direction[0]
      const newCol = clickedCol + direction[1]
      return {row: newRow, col: newCol, directionIndex: directionIndex, cell: getCell(newRow, newCol)}
    })
const checkSiblingCell = (board, clickedRow, clickedCol, turn) => {       

  
}

const checkValidMove = (board, cell, turn) => {
        //if cellClicked has owner, cant move
        if(board[cell] == 0){
            return true
         } 
}

 const checkLimits = (y, x) => {
    // checkLimits (board borders)
    if (y < 0 || y > 7 || x < 0 || x > 7) {
        return false
      } 
    return true
}
const isEnemy = (board, siblingCell, turn) => {
  // const siblingCell = getCell(y, x)
  const siblingOwner = board[siblingCell]
  if( siblingOwner !== turn && siblingOwner !== 0){
      //enemy found
      return true
  } 
}

const checkEnemyDirection = (board, y, x, turn, direction, prevCellList) => {
  if( !checkLimits(y, x)) return false
  const actualCell = getCell(y,x)

  //next coords to check
  const newRow = y + siblingsCells[direction][0]
  const newCol = x + siblingsCells[direction][1]
  const cell = getCell(newRow, newCol)

  const owner = board[cell] 
  let cellList = [...prevCellList]

  if( owner ==  turn){    
      cellList = [...cellList, actualCell]
      return cellList         
  } else if( owner == switchPlayer(turn) ){
      //keep checking for enemys
      cellList = [...cellList, actualCell]
      let keepChecking = checkEnemyDirection(board, newRow, newCol, turn, direction, cellList)
      if(keepChecking.length > 0){
          //more enemys found
          cellList = cellList.concat(keepChecking)
      } else {
          //cant move
          cellList = []
      }
      return cellList
  } else if (owner == 0 ){
      //cant move
      cellList = []
      return cellList
  } 
}

const changeTurn = (turn) => {
		if(turn == 1){
			return 2
		} else { return 1 }
	}
 const newBoard = () => 
  ([0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 2, 0, 0, 0,
    0, 0, 0, 2, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0])

const showMenu = (state) => (
  state.showInitialScreen === false ? true : false
)
const switchPause = (state) => {
  return state.pause === false ? true : false
}
export default reversiApp