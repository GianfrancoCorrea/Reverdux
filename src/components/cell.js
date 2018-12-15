import React from 'react';
import { ownerStyle } from '../libs/board-libs';
import PropTypes from 'prop-types'
import '../styles/cell.css';

function Cell(props) {

	let className = ownerStyle(
		props.owner,
		'board__cell'
	)

	if (props.isHint == true) className = 'board__cell hint'
	return (
		<div
			className={className}
			onClick={() => props.actions.makeMove(props.cell)} >
			<div className='token'></div>
		</div>
	)
}

export default Cell;

// Cell.propTypes = {
// 	owner: PropTypes.number.isRequired,
// 	cellClick: PropTypes.func,
// }