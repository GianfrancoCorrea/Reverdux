import { List } from 'immutable';
import {
  MAKE_MOVE,
  NEW_GAME,
  PAUSE,
  PLAYER_SET_NAME,
  RESTART_GAME,
  SHOW_RECORD,
  SWITCH_TURN,
} from '../actions/actionTypes';
import * as boardLibs from '../libs/board-libs';
import { initialState } from './store';

function reversiApp(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return Object.assign({}, state, {
        board: boardLibs.newBoard(),
        showInitialScreen: false,
        score: boardLibs.getScore([1, 1, 2, 2]),
        pause: false,
        isEnd: false,
        boardHistory: List([{ id: 0, boardState: boardLibs.newBoard(), player: state.turn }]),
        hint: boardLibs.hint(boardLibs.changeTurn(state.turn), boardLibs.newBoard()),
      });
    case SWITCH_TURN:
      return Object.assign({}, state, {
        turn: boardLibs.changeTurn(state.turn),
        hint: boardLibs.hint(state.turn, state.board),
      });
    case PAUSE:
      return Object.assign({}, state, {
        showInitialScreen: boardLibs.showMenu(state),
        pause: boardLibs.switchPause(state),
        showRecord: false,
      });
    case MAKE_MOVE:
      return boardLibs.handlerMove(state, action);

    case SHOW_RECORD:
      return boardLibs.showRecord(state, action);

    case PLAYER_SET_NAME:
      return boardLibs.playerSetNames(state, action);
    case RESTART_GAME:
      return initialState;
    default:
      return state;
  }
}

export default reversiApp;
