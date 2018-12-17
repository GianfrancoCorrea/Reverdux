import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import BoardLayout from './board-layout';
import Cell from './cell';

function Board({
  hint, board, actions,
}) {
  Board.defaultProps = {
    hint: null,
  };
  const toHint = List(hint);
  const cell = board.map((r, x) => (
    <Cell owner={r} cell={x} key={x} isHint={toHint.includes(x)} actions={actions} />
  ));

  return <BoardLayout>{cell}</BoardLayout>;
}

export default Board;

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.number).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  hint: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};
