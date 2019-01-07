import * as actions from '../../actions/gameActions';
import { initialState } from '../store';
import game from '../game';
import * as boardLibs from '../../libs/board-libs';
import { List } from 'immutable';

describe('game reducer', () => {
  const state = initialState;
  test('should return the initial state', () => {
    expect(game(undefined, {})).toEqual(initialState);
  });
  test('should return a state with new game', () => {
    const expectedState = {
      ...initialState,
      board: boardLibs.newBoard(),
      showInitialScreen: false,
      score: boardLibs.getScore([1, 1, 2, 2]),
      pause: false,
      isEnd: false,
      boardHistory: List([{ id: 0, boardState: boardLibs.newBoard(), player: state.turn }]),
      hint: boardLibs.hint(boardLibs.changeTurn(state.turn), boardLibs.newBoard()),
    };
    expect(game(initialState, actions.newGame())).toEqual(expectedState);
  });
  test('should switch turn', () => {
    const expectedState = {
      ...state,
      turn: 2,
      hint: boardLibs.hint(state.turn, state.board),
    };
    expect(game(state, actions.switchTurn())).toEqual(expectedState);
  });
  test('should return pause', () => {
    const expectedState = {
      ...state,
      pause: boardLibs.switchPause(state),
      showRecord: false,
    };
    expect(game(state, actions.pause())).toEqual(expectedState);
  });
  test('should return record', () => {
    const record = {};
    const expectedState = {
      ...state,
      pause: true,
      showRecord: true,
      recordBoard: record,
    };
    expect(game(state, actions.showRecord(record))).toEqual(expectedState);
  });
  test('should set player name', () => {
    const { players } = initialState;
    const expectedState = {
      ...state,
      players,
    };
    expect(game(state, actions.playerName(players))).toEqual(expectedState);
  });
  test('should return initial state (restart game)', () => {
    const expectedState = {
      ...initialState,
    };
    expect(game(state, actions.restartGame())).toEqual(expectedState);
  });
  test('should makeMove', () => {
    const expectedState = {
      ...state,
    };
    expect(game(state, actions.makeMove(1))).toEqual(expectedState);
  });
});
