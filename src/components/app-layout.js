import React from 'react';
import './app-layout.css';


function AppLayout(props){
	return(
		<div className="AppLayout">
		<div><h1>REVERDUX</h1>
		<span className="subtitle">A Reversi game made with React and Redux</span>
		</div>
	            {props.children}
		</div>
	)
}


export default AppLayout;