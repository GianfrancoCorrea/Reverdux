import * as boardLibs from '../board-libs';

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
  const player = 1;
  expect(boardLibs.switchPlayer(player)).toEqual(2);
});
test('count() counts the number of times a value exists within an array', () => {
  const data = {
    arr: [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 2, 0, 0, 0,
      0, 0, 1, 1, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ],
    value: 1,
  };
  expect(boardLibs.count(data.arr, data.value)).toEqual(4);
});
test('winner() should return name of winner player', () => {
  const data = {
    state: {
      players: {
        player1: {
          name: 'player1',
        },
        player2: {
          name: 'player2',
        },
      },
    },
    score: {
      player1: 27,
      player2: 37,
    },
  };
  expect(boardLibs.winner(data.state, data.score)).toBe('player2');
});
test('isGameEnd() true if some score equal to 0 or both are equal to 64', () => {
  const scores = {
    player1: 27,
    player2: 37,
  };
  expect(boardLibs.isGameEnd(scores)).toBe(true);
});
