import React from 'react';
// import './app-layout.css';


function GameLayout(props){
	return(
		<div className="GameLayout">
		
	            {props.children}
		</div>
	)
}


export default GameLayout;