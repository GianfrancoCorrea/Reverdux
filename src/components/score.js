import React from 'react';
import './score.css';
import PropTypes from 'prop-types'


function Score(props){
	return(
        
		<div className="score">
            <div className="score__title">Score</div>
            <div className="score__cont">
                <div className="score__player ">
                
                Player1: <span>{props.score.player1}
                </span> 
                </div>
                <div className="score__player ">
                
                    Player2: <span>{props.score.player2}
                </span> 
                </div>

            </div>
	    </div>
	)
}


export default Score;


Score.propTypes = {
	score:  PropTypes.object.isRequired,
	
}