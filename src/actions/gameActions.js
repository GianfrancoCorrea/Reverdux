import { SWITCH_TURN, MAKE_MOVE, NEW_GAME } from './actionTypes'

export function switchTurn() {
  return {
    type: SWITCH_TURN,
  }
}

export function makeMove(cell) {
  return {
    type: MAKE_MOVE,
    cell
  }
}

export function newGame() {
    return {
      type: NEW_GAME,
    }
  }