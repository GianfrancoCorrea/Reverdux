import React from 'react';
import './turn.css';


function Turn(props){
	return(
        
		<div className="turn">
           Juega <b><span>Player{props.turn}</span></b>
	    </div>
	)
}


export default Turn;