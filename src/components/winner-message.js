import React from 'react';
import Button from '../buttons/components/button'
import '../styles/turn.css'

function WinnerMessage(props){
    const btnStyle = {
		margin: '0',
		float: 'left'
		};
		const textStyle = {
			color: 'red',
			marginLeft: '20px '
		}
	return(
        
		<div className="turn">
           <span style={textStyle}> Winner player{props.winner}!!!</span> 
           <Button handleAction={props.handleAction} style="success btn--small" addStyle={btnStyle} message="Play again"/>
	    </div>
	)
}


export default WinnerMessage;


