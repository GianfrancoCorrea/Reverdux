import { siblingsCells, getCoords, getCell, switchPlayer, count } from '../libs/board-libs';
import {SWITCH_TURN, MAKE_MOVE, NEW_GAME, PAUSE, SHOW_RECORD, PLAYER_NAMES} from '../actions/actionTypes';
import { Stack } from 'immutable'


function reversiApp(state = initialState, action) {
    switch (action.type) {
        case NEW_GAME:
          return Object.assign({}, state, {
            board: newBoard(),
            showInitialScreen: showMenu(state),
            score: getScore([1,1,2,2]),
            pause: false,
            isEnd: false,
            boardHistory: Stack([
              { id: 0,  board: newBoard(), player: state.turn},
            ]),
            hint: [],
            
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

        case SHOW_RECORD: 
          return showRecord(state, action)

        case PLAYER_NAMES: 
          return playerNames(state, action)  
        default:
          return state
        }
}

const playerNames = (state, action) => {
  let players = state.players
  players.player1.name = action.player1
  players.player2.name = action.player2
  console.log(players)
  return {
    ...state,
    nameSeted: true,
    players: players
  }
}
const showRecord = (state, action) => {
  const boardHistory = state.boardHistory
  console.log( boardHistory.get(action.boardID).board)
  return {
    ...state,
    board: boardHistory.get(action.boardID).board,
    showRecordMap: true,
  }
}

const handlerMove = (state, action) => {
  let board = state.board
  let turn = state.turn
  const clickedCell = action.cell
  const row = getCoords(clickedCell, 'y')
  const col = getCoords(clickedCell, 'x')
// _.flatten
  let cellsToFlip = []
if(isValidCell(board, clickedCell, turn)) {
   cellsToFlip = checkSiblingCell(board, row, col, turn);
    }
      if(cellsToFlip.length > 0) {
        const newBoard =  changeBoard(board, cellsToFlip, clickedCell, turn)
        const score = getScore(newBoard)
        const isEnd = isGameEnd(score)
        let bHistory = state.boardHistory
        let winnerPlayer = '';
        if(isEnd){winnerPlayer = winner(state, score)}
        const mapHint = hint(state, newBoard, row, col)
        return {
          ...state,
          board: newBoard,
          boardHistory: bHistory.push({ id: bHistory.size,  board: newBoard, player: state.turn}),
          turn: changeTurn(turn),
          score: score,
          isEnd: isEnd,
          winner: winnerPlayer,
          hint: mapHint,
        } 
      
  } 
  return state
}

const hint = (state, board, row, col) => {
  const enemys = allEnemyCells(board, changeTurn(state.turn)) 
  let cellsHint =[]
  enemys.map( enemy => {
  let cellsToFlip = []

    if(!isValidCell(board, enemy, changeTurn(state.turn))) {
      cellsToFlip = checkSiblingCell(board, row, col, state.turn);
      if(cellsToFlip.length > 0) {cellsHint = [...cellsHint],[...cellsToFlip]}
       }
  })
  console.log(cellsHint)
  return cellsHint
}

const allEnemyCells = (board, turn) => {
  let enemys = []
  board.map( (owner, cell) => {
   return owner !== turn && owner !== 0 ? enemys.push(cell) : false
  })
  // console.log(enemys)
  return enemys
}

const winner = (state, score) => {
  
  return score.player1 > score.player2 ? state.players.player1.name : state.players.player2.name
}
const isGameEnd = (score) => {
  if(score.player1 == 0 || score.player2 == 0 || score.player1 + score.player2 == 64 ){
    return  true
  } else {
    return false
  }
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

const checkSiblingCell = (board, row, col, turn) => {     
  let cellsToFlip = []
  searchForSiblingsCells(row, col).map( sibling => {
    if(isEnemy(board, sibling.cell, turn)) {
       if(!isOnBoardLimit(sibling.row, sibling.col)) {
        //------------------------------------------------
        let initialCellToFlip = []
        let cells = checkEnemyInDirection(board, sibling.cell, turn, sibling.directionIndex, initialCellToFlip)
        if(cellsToFlip == null || cells == null){return false}
        cellsToFlip =[...cellsToFlip, ...cells]
        // -----------------------------------------------
       } 
    }  
  })
  return cellsToFlip
}

const isValidCell = (board, cell, turn) => {
        //if cellClicked has owner, cant move
        if(board[cell] == 0){
            return true
         } 
}

 const isOnBoardLimit = (y, x) => {
    // checkLimits (board borders)
    if (y < 0 || y > 7 || x < 0 || x > 7) {
        return true
      } 
    return false
}
const isEnemy = (board, siblingCell, turn) => {
  // const siblingCell = getCell(y, x)
  const siblingOwner = board[siblingCell]
  if( siblingOwner !== turn && siblingOwner !== 0){
      //enemy found
      return true
  } 
}




const checkEnemyInDirection = (board, cell, actualPlayer, direction, storageCells) => {
  //to-do en los bordes come como si no consultara esos bordes.
  const ownerCell = board[cell];
  const enemyPlayer = switchPlayer(actualPlayer);
  const emptyCell = 0;

  if( ownerCell == actualPlayer){return storageCells}
  if( ownerCell == emptyCell){return []}
  if( ownerCell == enemyPlayer ){
    storageCells = [...storageCells, cell]
    const nextRow = getCoords(cell,'y') + siblingsCells[direction][0]
    const nextCol = getCoords(cell,'x') + siblingsCells[direction][1]
    const nextCell = getCell(nextRow, nextCol)
    if(isOnBoardLimit(nextRow, nextCol)) return []
    return checkEnemyInDirection(board, nextCell, actualPlayer, direction, storageCells)
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