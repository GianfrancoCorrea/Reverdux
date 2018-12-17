import React from 'react';
import PropTypes from 'prop-types';

import '../styles/board-layout.css';

function Board({
  children,
}) {
  Board.defaultProps = {
    children: null,
  };
  return <div className="board">{children}</div>;
}

export default Board;

Board.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
