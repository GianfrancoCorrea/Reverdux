import React from 'react';
import './board-records.css';
import PropTypes from 'prop-types'
import { Stack } from 'immutable'

function BoardRecords(props){
 
    console.log(props.boardH)
	return(
		<div className="records">
        <div className="records__top"><span>Records:</span></div>
        
            <ul>
            { props.boardH.map((x, i) => {
                
               return <li key={i}><a href="#"  className="badge badge-dark">#{x.id}- Move Player{x.player}</a></li>
            })}
               
            </ul>
	    </div>
	)
}


export default BoardRecords;

BoardRecords.propTypes = {
	boardH:  PropTypes.instanceOf(Stack).isRequired,
	
}