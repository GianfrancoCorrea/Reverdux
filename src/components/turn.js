import React from 'react';
import PropTypes from 'prop-types'

import './turn.css';


function Turn(props){
	return(
        
		<div className="turn">
           Juega <b><span>Player{props.turn}</span></b>
	    </div>
	)
}


export default Turn;

Turn.propTypes = {
	turn:  PropTypes.number.isRequired,

}