import React from 'react';
import './board-records.css';
import PropTypes from 'prop-types'
import { Stack } from 'immutable'

function BoardRecords(props){
    let boardHistory = props.boardHistory.toJS()
	return(
        
		<div className="records">
        <div className="records__top"><span>Records:</span></div>
        
            <ul>
            {props.boardHistory.toJS().map((x, i) => {
                <li>Board </li>
                
            })}
               
            </ul>
	    </div>
	)
}


export default BoardRecords;


BoardRecords.propTypes = {
	boardHistory:  PropTypes.instanceOf(Stack).isRequired,
	
}