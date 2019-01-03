import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/gameActions';

describe('actions', () => {
  it('should create an action to make a move', () => {
    const cell = 17;
    const expectedAction = {
      type: types.MAKE_MOVE,
      cell,
    };
    expect(actions.makeMove(cell)).toEqual(expectedAction);
  });
  it('should create an action to set player name ', () => {
    const data = {
      name: 'player name',
      player: 1,
    };
    const expectedAction = {
      type: types.PLAYER_SET_NAME,
      name: data.name,
      player: data.player,
    };
    expect(actions.playerName(data.name, data.player)).toEqual(expectedAction);
  });
  it('should create an action to view a record', () => {
    const record = {
      id: 1,
      boardState: [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 2, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
      ],
      player: 1,
    };
    const expectedAction = {
      type: types.SHOW_RECORD,
      record,
    };
    expect(actions.showRecord(record)).toEqual(expectedAction);
  });
  it('should create an action to restart game', () => {
    const expectedAction = {
      type: types.RESTART_GAME,
    };
    expect(actions.restartGame()).toEqual(expectedAction);
  });
  it('shoueld create an action to pause the game', () => {
    const expectedAction = {
      type: types.PAUSE,
    };
    expect(actions.pause()).toEqual(expectedAction);
  });
  it('should create an action to create a new game', () => {
    const expectedAction = {
      type: types.NEW_GAME,
    };
    expect(actions.newGame()).toEqual(expectedAction);
  });
  it('shoueld create an action to switch turn', () => {
    const expectedAction = {
      type: types.SWITCH_TURN,
    };
    expect(actions.switchTurn()).toEqual(expectedAction);
  });
});
