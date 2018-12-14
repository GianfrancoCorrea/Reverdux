import React from 'react';
import PropTypes from 'prop-types'
import Button from '../buttons/components/button'
import {playerNames} from '../libs/board-libs'
import '../styles/turn.css';


function Turn(props){
	const btnStyle = {
		margin: '0'
		};
		const divStyle = {
			marginLeft: "20px"
		}
		
		let playerName = playerNames(props.players, props.turn)
	return(
        
		<div className="turn">
           <div style={divStyle}> <b><span> {playerName}</span> turn</b></div>
			<Button handleAction={props.handleAction} style="danger btn--small" addStyle={btnStyle} message="pass"/>
	    </div>
	)
}


export default Turn;

Turn.propTypes = {
	turn:  PropTypes.number.isRequired,
	
}

