import React from 'react';
import PropTypes from 'prop-types'
import Button from './button'
import { playerNames } from '../libs/board-libs'
import '../styles/turn.css';
import '../styles/score.css'


function Turn(props) {
	const btnStyle = {
		margin: '0',
		fontWeight: '600',
	};
	const divStyle = {
		marginLeft: "15px",
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
	const coinStyle = {
		marginLeft: '10px',
		boxShadow: '1px 1px 2px 1px rgb(0,0,0,.3)'
	}
	let coinClass =  props.turn === 1 ? "coin score__player--one" : "coin score__player--two"
	let playerName = playerNames(props.players, props.turn)
	return (

		<div className="turn">
			<div style={divStyle}> 
				<b>Turn: <span> {playerName}</span></b>
				<div className={coinClass} style={coinStyle}></div>
			</div>
			<Button actions={props.actions} style="danger btn--small" addStyle={btnStyle} message="PASS" />
		</div>
	)
}


export default Turn;

Turn.propTypes = {
	turn: PropTypes.number.isRequired,

}

