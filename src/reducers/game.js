import { siblingsCells, getCoords, getCell, switchPlayer, count } from '../libs/board-libs';
import { SWITCH_TURN, MAKE_MOVE, NEW_GAME, PAUSE, SHOW_RECORD, PLAYER_NAME, RESTART_GAME } from '../actions/actionTypes';
import { Stack, List, fromJS } from 'immutable'
import { initialState } from './store'

function reversiApp(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return Object.assign({}, state, {
        board: newBoard(),
        showInitialScreen: false,
        score: getScore([1, 1, 2, 2]),
        pause: false,
        isEnd: false,
        boardHistory: List([
          { id: 0, boardState: newBoard(), player: state.turn },
        ]),
        hint: hint(changeTurn(state.turn), newBoard()),

      })
    case SWITCH_TURN:
      return Object.assign({}, state, {
        turn: changeTurn(state.turn),
        hint: hint(state.turn, state.board)
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

    case PLAYER_NAME:
      return playerNames(state, action)
    case RESTART_GAME:
      return initialState
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

  let cellsToFlip = []
  if (isValidCell(board, clickedCell, turn)) {
    cellsToFlip = checkSiblingCell(board, row, col, turn);
  }
  if (cellsToFlip.length > 0) {
    const changedBoard = changeBoard(state.board, [...cellsToFlip, clickedCell], turn)
    const score = getScore(changedBoard)
    const isEnd = isGameEnd(score)

    let bHistory = state.boardHistory
    bHistory = bHistory.set(bHistory.size, { id: bHistory.size, boardState: changedBoard.slice(), player: turn })

    let winnerPlayer = '';
    if (isEnd) { winnerPlayer = winner(state, score) }
    const mapHint = hint(turn, changedBoard)

    return {
      ...state,
      board: changedBoard,
      boardHistory: bHistory,
      turn: changeTurn(turn),
      score: score,
      isEnd: isEnd,
      winner: winnerPlayer,
      hint: mapHint,
    }

  }
  return state
}

const hint = (turn, board) => {
  const newTurn = changeTurn(turn)
  let toHint = []

  board.map((owner, cell) => {
    let cellsToFlip = []
    if (isValidCell(board, cell, newTurn)) {
      let row = getCoords(cell, 'y')
      let col = getCoords(cell, 'x')
      cellsToFlip = checkSiblingCell(board, row, col, newTurn);
    }
    if (cellsToFlip.length > 0) { toHint = [...toHint, cell] }
  })
  return toHint
}
const playerNames = (state, action) => {
  let players = state.players
  if (action.player == 'Player1' && action.name !== "") players.player1.name = action.name
  if (action.player == 'Player2' && action.name !== "") players.player2.name = action.name
  return {
    ...state,
    players: players
  }
}

const showRecord = (state, action) => {
  // const boardHistory = state.boardHistory
  // console.log( boardHistory)

  return {
    ...state,
    board: action.record,
    showRecordMap: true,
  }
}

const changeBoard = (oldBoard, cellsToFlip, turn) => {
  //add clicked cell
  const board = oldBoard

  cellsToFlip.map(c => {
    board[c] = turn
  })
  return board
}

const searchForSiblingsCells = (clickedRow, clickedCol) => siblingsCells.map((direction, directionIndex) => {
  const newRow = clickedRow + direction[0]
  const newCol = clickedCol + direction[1]
  return { row: newRow, col: newCol, directionIndex: directionIndex, cell: getCell(newRow, newCol) }
})

const checkSiblingCell = (board, row, col, turn) => {
  let cellsToFlip = []
  searchForSiblingsCells(row, col).map(sibling => {
    if (isEnemy(board, sibling.cell, turn)) {
      if (!isOnBoardLimit(sibling.row, sibling.col)) {
        let initialCellToFlip = []
        let cells = checkEnemyInDirection(board, sibling.cell, turn, sibling.directionIndex, initialCellToFlip)
        if (cellsToFlip == null || cells == null) { return false }
        cellsToFlip = [...cellsToFlip, ...cells]
      }
    }
  })
  return cellsToFlip
}

const winner = (state, score) => {
  return score.player1 > score.player2 ? state.players.player1.name : state.players.player2.name
}

const isGameEnd = (score) => {
  return score.player1 == 0 || score.player2 == 0 || score.player1 + score.player2 == 64
}

const getScore = (board) => {
  return {
    player1: count(board, 1),
    player2: count(board, 2)
  }
}
const isValidCell = (board, cell, turn) => {
  //if cellClicked has owner, cant move
  if (board[cell] == 0) {
    return true
  }
}

const isOnBoardLimit = (y, x) => {
  if (y < 0 || y > 7 || x < 0 || x > 7) {
    return true
  }
  return false
}
const isEnemy = (board, siblingCell, turn) => {
  const siblingOwner = board[siblingCell]
  if (siblingOwner !== turn && siblingOwner !== 0) {
    //enemy found
    return true
  }
}

const checkEnemyInDirection = (board, cell, actualPlayer, direction, storageCells) => {
  const ownerCell = board[cell];
  const enemyPlayer = switchPlayer(actualPlayer);
  const emptyCell = 0;

  if (ownerCell == actualPlayer) { return storageCells }
  if (ownerCell == emptyCell) { return [] }
  if (ownerCell == enemyPlayer) {
    storageCells = [...storageCells, cell]
    const nextRow = getCoords(cell, 'y') + siblingsCells[direction][0]
    const nextCol = getCoords(cell, 'x') + siblingsCells[direction][1]
    const nextCell = getCell(nextRow, nextCol)
    if (isOnBoardLimit(nextRow, nextCol)) return []
    return checkEnemyInDirection(board, nextCell, actualPlayer, direction, storageCells)
  }
}



const changeTurn = (turn) => {
  return turn == 1 ? 2 : 1
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