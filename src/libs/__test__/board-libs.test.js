import * as boardLibs from '../board-libs';
import { initialState } from '../../reducers/store';

const namePlayers = {
  player1: {
    id: 1,
    name: 'Player1',
  },
  player2: {
    id: 2,
    name: 'Player2',
  },
};
const testBoard = [
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 2, 0, 0, 0,
  0, 0, 1, 1, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

describe('Cells position functions', () => {
  it('should get Coords from a cell number', () => {
    const cellNumber = 19;
    const expectedCoords = { x: 3, y: 2 };
    expect(boardLibs.getCoords(cellNumber, 'x')).toEqual(expectedCoords.x);
    expect(boardLibs.getCoords(cellNumber, 'y')).toEqual(expectedCoords.y);
  });
  it('should get Cell number from coords', () => {
    const cellCoords = { x: 3, y: 2 };
    const expectedCell = 19;
    expect(boardLibs.getCell(cellCoords.y, cellCoords.x)).toEqual(expectedCell);
  });
});

describe('ownerStyle', () => {
  const data = {
    owner: 1,
    mainClassName: 'board__cell',
  };
  it('should return a className for player1 cells', () => {
    data.owner = 1;
    const expectedClassName = 'board__cell board__cell--player1';
    expect(boardLibs.ownerStyle(data.owner, data.mainClassName)).toEqual(expectedClassName);
  });
  it('should return a className for player2 cells', () => {
    data.owner = 2;
    const expectedClassName = 'board__cell board__cell--player2';
    expect(boardLibs.ownerStyle(data.owner, data.mainClassName)).toEqual(expectedClassName);
  });
  it('should return a className for unowned cells', () => {
    data.owner = 0;
    const expectedClassName = 'board__cell ';
    expect(boardLibs.ownerStyle(data.owner, data.mainClassName)).toEqual(expectedClassName);
  });
});

test('switchPlayer expects switch for player number', () => {
  let player = 1;
  expect(boardLibs.switchPlayer(player)).toEqual(2);
  player = 2;
  expect(boardLibs.switchPlayer(player)).toEqual(1);
});
test('count() counts the number of times a value exists within an array', () => {
  const data = {
    arr: testBoard,
    value: 1,
  };
  expect(boardLibs.count(data.arr, data.value)).toEqual(4);
});
test('winner() should return name of winner player', () => {
  const data = {
    state: {
      players: namePlayers,
    },
    score: {
      player1: 27,
      player2: 37,
    },
  };
  expect(boardLibs.winner(data.state, data.score)).toBe('Player2');
  data.score = {
    player1: 37,
    player2: 27,
  };
  expect(boardLibs.winner(data.state, data.score)).toBe('Player1');
});
test('isGameEnd() true if some score equal to 0 or both are equal to 64', () => {
  const scores = {
    player1: 27,
    player2: 37,
  };
  expect(boardLibs.isGameEnd(scores)).toBe(true);
});
test('getScore() return score for both players', () => {
  const board = testBoard;
  const expectedReturn = {
    player1: 4,
    player2: 1,
  };
  expect(boardLibs.getScore(board)).toEqual(expectedReturn);
});
test('playerNames() should return player name of current turn', () => {
  const data = {
    players: namePlayers,
    turn: 1,
  };
  expect(boardLibs.playerNames(data.players, data.turn)).toEqual(namePlayers.player1.name);
  data.turn = 2;
  expect(boardLibs.playerNames(data.players, data.turn)).toEqual(namePlayers.player2.name);
});
test('isValidCell() should return true if cell is unowned', () => {
  const board = testBoard;
  expect(boardLibs.isValidCell(board, 26)).toBe(true);
  expect(boardLibs.isValidCell(board, 27)).toBe(false);
});
test('isOnBoardLimit(y, x) should return true if cell is out of limit of board', () => {
  expect(boardLibs.isOnBoardLimit(0, 4)).toBe(false);
  expect(boardLibs.isOnBoardLimit(4, -1)).toBe(true);
  expect(boardLibs.isOnBoardLimit(3, 6)).toBe(false);
  expect(boardLibs.isOnBoardLimit(3, 8)).toBe(true);
});
test('isEnemy() should return true if cell is owned by the other player', () => {
  const data = {
    board: testBoard,
    cell: 27,
    turn: 1,
  };
  expect(boardLibs.isEnemy(data.board, data.cell, data.turn)).toBe(false);
  data.cell = 25;
  expect(boardLibs.isEnemy(data.board, data.cell, data.turn)).toBe(false);
});
test('changeTurn() should return a switch of actual turn', () => {
  expect(boardLibs.changeTurn(1)).toBe(2);
  expect(boardLibs.changeTurn(2)).toBe(1);
});

describe('playerSetNames()', () => {
  const action = {
    name: 'PlayerName1',
    player: 'Player1',
  };
  test('set name for player1 & 2', () => {
    const expectedState = initialState;
    expectedState.players.player1.name = action.name;
    expect(boardLibs.playerSetNames(initialState, action)).toEqual(expectedState);
    action.name = 'PlayerName2';
    action.player = 'Player2';
    expectedState.players.player1.name = action.name;
    expect(boardLibs.playerSetNames(initialState, action)).toEqual(expectedState);
  });
  test('start game with empty names', () => {
    action.name = '';
    expect(boardLibs.playerSetNames(initialState, action)).toEqual(initialState);
  });
});

describe('showRecord()', () => {
  test('should set pause & showRecord = true / set record to see', () => {
    const action = {
      record: testBoard,
    };
    const expectedState = initialState;
    expectedState.pause = true;
    expectedState.showRecord = true;
    expectedState.recordBoard = action.record;
    expect(boardLibs.showRecord(initialState, action)).toEqual(expectedState);
  });
});

/** TODO: test:
 * checkEnemyInDirection
 * searchForSiblingsCells
 * checkSiblingCell
 * changeBoard
 * hint
 * handlerMove
 *  */

