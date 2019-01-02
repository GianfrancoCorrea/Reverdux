export const siblingsCells = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

export const getCoords = (cell, param) => {
  if (param === 'y') { return Math.trunc(cell / 8); }
  return cell % 8;
};

export const getCell = (row, col) => row * 8 + col;

export const ownerStyle = (owner, className) => {
  if (owner === 1) {
    return `${className} ${className}--player1`;
  }
  if (owner === 2) {
    return `${className} ${className}--player2`;
  }
  return `${className} `;
  // ${className}--none
};

export const switchPlayer = player => (player === 1 ? 2 : 1);
export const count = (arr, valor) => {
  let counter = 0;
  arr.map((currentValue, index) => {
    if (arr[index] === valor) {
      counter++;
    }
  });
  return counter;
};
export const winner = (state, score) => (
  score.player1 > score.player2 ? state.players.player1.name : state.players.player2.name
);

export const isGameEnd = score => (
  score.player1 === 0 || score.player2 === 0 || score.player1 + score.player2 === 64
);

export const getScore = board => ({
  player1: count(board, 1),
  player2: count(board, 2),
});
export const playerNames = (players, turn) => (
  turn === 1 ? players.player1.name : players.player2.name
);

export const isValidCell = (board, cell) => {
// if cellClicked has owner, cant move
  if (board[cell] === 0) {
    return true;
  }
  return false;
};

export const isOnBoardLimit = (y, x) => {
  if (y < 0 || y > 7 || x < 0 || x > 7) {
    return true;
  }
  return false;
};

export const checkEnemyInDirection = (board, cell, actualPlayer, direction, storageCells) => {
  const ownerCell = board[cell];
  const enemyPlayer = switchPlayer(actualPlayer);
  const emptyCell = 0;

  if (ownerCell === actualPlayer) {
    return storageCells;
  }
  if (ownerCell === emptyCell) {
    return [];
  }
  if (ownerCell === enemyPlayer) {
    let storage = [];
    storage = [...storageCells, cell];
    const nextRow = getCoords(cell, 'y') + siblingsCells[direction][0];
    const nextCol = getCoords(cell, 'x') + siblingsCells[direction][1];
    const nextCell = getCell(nextRow, nextCol);
    if (isOnBoardLimit(nextRow, nextCol)) { return []; }
    return checkEnemyInDirection(board, nextCell, actualPlayer, direction, storage);
  }
};

export const searchForSiblingsCells = (clickedRow, clickedCol) => (
  siblingsCells.map((direction, directionIndex) => {
    const newRow = clickedRow + direction[0];
    const newCol = clickedCol + direction[1];
    return {
      row: newRow,
      col: newCol,
      directionIndex,
      cell: getCell(newRow, newCol),
    };
  })
);

export const isEnemy = (board, siblingCell, turn) => {
  const siblingOwner = board[siblingCell];
  if (siblingOwner !== turn && siblingOwner !== 0) {
    // enemy found
    return true;
  }
  return false;
};

export const checkSiblingCell = (board, row, col, turn) => {
  let cellsToFlip = [];
  searchForSiblingsCells(row, col).map((sibling) => {
    if (isEnemy(board, sibling.cell, turn)) {
      if (!isOnBoardLimit(sibling.row, sibling.col)) {
        const initialCellToFlip = [];
        const cells = checkEnemyInDirection(
          board,
          sibling.cell,
          turn,
          sibling.directionIndex,
          initialCellToFlip,
        );
        if (cellsToFlip == null || cells == null) {
          return false;
        }
        cellsToFlip = [...cellsToFlip, ...cells];
      }
    }
  });
  return cellsToFlip;
};

export const changeTurn = turn => (turn === 1 ? 2 : 1);

export const changeBoard = (oldBoard, cellsToFlip, turn) => {
  // add clicked cell
  const board = oldBoard;

  cellsToFlip.map((c) => {
    board[c] = turn;
  });
  return board;
};

export const hint = (turn, board) => {
  const newTurn = changeTurn(turn);
  let toHint = [];

  board.map((owner, cell) => {
    let cellsToFlip = [];
    if (isValidCell(board, cell, newTurn)) {
      const row = getCoords(cell, 'y');
      const col = getCoords(cell, 'x');
      cellsToFlip = checkSiblingCell(board, row, col, newTurn);
    }
    if (cellsToFlip.length > 0) {
      toHint = [...toHint, cell];
    }
  });
  return toHint;
};

export const handlerMove = (state, action) => {
  const { board } = state;
  const { turn } = state;
  const clickedCell = action.cell;
  const row = getCoords(clickedCell, 'y');
  const col = getCoords(clickedCell, 'x');

  let cellsToFlip = [];
  if (isValidCell(board, clickedCell, turn)) {
    cellsToFlip = checkSiblingCell(board, row, col, turn);
  }
  if (cellsToFlip.length > 0) {
    const changedBoard = changeBoard(state.board, [...cellsToFlip, clickedCell], turn);
    const score = getScore(changedBoard);
    const isEnd = isGameEnd(score);

    let bHistory = state.boardHistory;
    bHistory = bHistory.set(bHistory.size, {
      id: bHistory.size,
      boardState: changedBoard.slice(),
      player: turn,
    });

    let winnerPlayer = '';
    if (isEnd) {
      winnerPlayer = winner(state, score);
    }
    const mapHint = hint(turn, changedBoard);

    return {
      ...state,
      board: changedBoard,
      boardHistory: bHistory,
      turn: changeTurn(turn),
      score,
      isEnd,
      winner: winnerPlayer,
      hint: mapHint,
    };
  }
  return state;
};

export const playerSetNames = (state, action) => {
  const { players } = state;
  if (action.player === 'Player1' && action.name !== '') { players.player1.name = action.name; }
  if (action.player === 'Player2' && action.name !== '') { players.player2.name = action.name; }
  return {
    ...state,
    players,
  };
};

export const showRecord = (state, action) => {
  const { record } = action;
  return {
    ...state,
    pause: true,
    showRecord: true,
    recordBoard: record,
  }
};

export const newBoard = () => [
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 2, 0, 0, 0,
  0, 0, 0, 2, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

export const showMenu = state => state.showInitialScreen === false;
export const switchPause = state => state.pause === false;
