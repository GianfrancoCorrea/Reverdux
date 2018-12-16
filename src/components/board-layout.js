import React from 'react';
import '../styles/board-layout.css';

function Board({ children }) {
  return <div className="board">{children}</div>;
}

export default Board;
