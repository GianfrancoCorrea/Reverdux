import React from 'react';
import './board-layout.css';


function Board(props){
	const range = [0,1,2,3,4,5,6,7]
	return(
		<div className="board">
	
	{props.children}
	</div>
	)
}


export default Board;