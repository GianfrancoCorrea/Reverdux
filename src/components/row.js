import React from 'react';
import Cell from './cell';
import './row.css';
	const range = [0,1,2,3,4,5,6,7]

const Row = props => (
  <div className="rever-row">
    {range.map(c => (
      <Cell
        row={props.row}
        cell={c}
        key={c}
        cellClick={props.handleCellClick}
      />
    ))}
  </div>
)
 


export default Row;