import React from 'react';
import PropTypes from 'prop-types'
import Button from '../buttons/components/button'
import './turn.css';


function Turn(props){
	const btnStyle = {
		margin: '0'
		};
		const divStyle = {
			marginLeft: "20px"
		}
	return(
        
		<div className="turn">
           <div style={divStyle}> <b>Juega <span>Player{props.turn}</span></b></div>
			<Button handleAction={props.handleAction} style="danger btn--small" addStyle={btnStyle} message="pass"/>
	    </div>
	)
}


export default Turn;

Turn.propTypes = {
	turn:  PropTypes.number.isRequired,
	
}