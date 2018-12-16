import React from 'react';
import PropTypes from 'prop-types';
import { ownerStyle } from '../libs/board-libs';
import '../styles/cell.css';

function Cell({ actions, isHint, owner, cell }) {
  let className = ownerStyle(owner, 'board__cell');

  if (isHint === true) className = 'board__cell hint';
  return (
    <div className={className} onClick={() => actions.makeMove(cell)}>
      <div className="token" />
    </div>
  );
}

export default Cell;

// Cell.propTypes = {
// 	owner: PropTypes.number.isRequired,
// 	cellClick: PropTypes.func,
// }
