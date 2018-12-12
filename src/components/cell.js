import React, { PureComponent } from 'react';
import { ownerStyle } from '../libs/board-libs';
import PropTypes from 'prop-types'

import './cell.css';


class Cell extends PureComponent {


	

	handleClick = (event) => {
		this.props.cellClick(this.props)
	}
	render(){
		
		let className = ownerStyle(
			this.props.owner,
			'board__cell'
		)
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