import React from 'react';
import Button from '../buttons/components/button'
import './turn.css'

function WinnerMessage(props){
    const btnStyle = {
		marginLeft: '20px'
	  };
	return(
        
		<div className="turn">
           Ganador player {props.winner}!
           <Button handleAction={props.handleAction} style="success btn--small" addStyle={btnStyle} message="Play again"/>
	    </div>
	)
}


export default WinnerMessage;


