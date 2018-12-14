import { createStore } from 'redux';
import reversiApp from './game'
import { Stack, Map } from 'immutable'

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
  winner: '',
  boardHistory: Stack(),
  hint: [],
  showRecordMap: false,
  players: {
    player1: {
      id: 1,
      name: 'Player1'
    },
    player2: {
      id: 2,
      name: 'Player2'
    }
  }
}

const Store = createStore(
  reversiApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store