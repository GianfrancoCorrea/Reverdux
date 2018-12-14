import React, { PureComponent } from 'react';
import '../styles/board-records.css';
import PropTypes from 'prop-types'
import { Stack } from 'immutable'

class BoardRecords extends PureComponent {
    
    
	handleClickLI = (boardID) => {
        console.log(boardID)
		this.props.recordClick(boardID)
    }
    colorBadge = (player, id) => {
        if(id == 0) return 'badge badge-info'
        if(player == 1) return 'badge badge-dark'
        if(player == 2) return 'badge badge-light'
    }
	render(){
	return(
		<div className="records">
        <div className="records__top"><span>Records:</span></div>
        
            <ul>
            { this.props.boardH.map((x, i) => {
                
               return <li key={i} onClick={() => this.handleClickLI(this.props.boardH.get(x).id)}><a href="#"  className={this.colorBadge(x.player, x.id)}>#{x.id}- Move Player{x.player}</a></li>
            })}
               
            </ul>
	    </div>
	)
    }
}


export default BoardRecords;



BoardRecords.propTypes = {
	boardH:  PropTypes.instanceOf(Stack).isRequired,
	
}