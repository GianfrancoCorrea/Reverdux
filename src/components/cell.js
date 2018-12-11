import React, { PureComponent } from 'react';
import { ownerStyle } from '../libs/board-libs';

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