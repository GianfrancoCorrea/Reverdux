import {
  SWITCH_TURN,
  MAKE_MOVE,
  NEW_GAME,
  PAUSE,
  SHOW_RECORD,
  PLAYER_NAME,
  RESTART_GAME,
} from './actionTypes';

export function switchTurn() {
  return {
    type: SWITCH_TURN,
  };
}

export function makeMove(cell) {
  return {
    type: MAKE_MOVE,
    cell,
  };
}

export function newGame() {
  return {
    type: NEW_GAME,
  };
}

export function pause() {
  return {
    type: PAUSE,
  };
}

export function playerName(name, player) {
  return {
    type: PLAYER_NAME,
    name,
    player,
  };
}

export function showRecord(record) {
  return {
    type: SHOW_RECORD,
    record,
  };
}

export function restartGame() {
  return {
    type: RESTART_GAME,
  };
}
