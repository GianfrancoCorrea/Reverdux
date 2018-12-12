import React from 'react';
import './board-layout.css';


function Board(props){
	return(
		<div className="board">
	
			{props.children}
		</div>
	)
}


export default Board;