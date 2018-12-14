import React, { PureComponent } from 'react';
import { ownerStyle } from '../libs/board-libs';
import PropTypes from 'prop-types'

import '../styles/cell.css';


class Cell extends PureComponent {


	

	handleClick = (event) => {
		this.props.cellClick(this.props)
	}
	render(){
		
		let className = ownerStyle(
			this.props.owner,
			'board__cell'
		)

		if(this.props.isHint == true) className = 'board__cell hint'
		console.log(this.props.isHint)
		return (
		    	<div 
					className={className} 
					onClick={this.handleClick} >
						<div className='token'></div>
				</div>

			)

	
		
	}
}



export default Cell;

Cell.propTypes = {
	owner: PropTypes.number.isRequired,
	cellClick: PropTypes.func,
}