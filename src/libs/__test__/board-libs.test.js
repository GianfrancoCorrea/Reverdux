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
