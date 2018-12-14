import { createStore } from 'redux';
import reversiApp from './game'
import { Stack } from 'immutable'

const initialState = {
  board: [],
  turn: 1,
  score: {
    player1: 0,
    player2: 0,
  },
  showInitialScreen: true,
  pause: false,
  isEnd: false,
  winner: 0,
  boardHistory: Stack(),
  hint: [],
  showRecordMap: false,
}

const Store = createStore(
  reversiApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store