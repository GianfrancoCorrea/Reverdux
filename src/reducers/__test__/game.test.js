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
});
