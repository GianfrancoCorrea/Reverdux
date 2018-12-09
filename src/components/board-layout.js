import React from 'react';
import Cell from './cell';
import './board-layout.css';
import Play from '../buttons/components/play'

function Board(props){
	const range = [0,1,2,3,4,5,6,7]
	return(
		<div className="board">
	
	{props.children}
	</div>
	)
}


export default Board;