import React from 'react';
import Row from './row';
import './board.css';


const Board = (props) => (
	<div className="rever-board">
		{[0,1,2,3,4,5,6,7].map(r => (
			<Row key={r} row={r} handleCellClick={props.handleCellClick}>{props.children}</Row>
		))}
	</div>
)


export default Board;