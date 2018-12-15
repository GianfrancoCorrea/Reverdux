import React from 'react';
import '../styles/board-layout.css';


function Board(props) {
	return (
		<div className="board">

			{props.children}
		</div>
	)
}


export default Board;