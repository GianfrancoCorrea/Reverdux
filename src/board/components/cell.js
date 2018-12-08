import React, { PureComponent } from 'react';
import './cell.css';


class Cell extends PureComponent {
	state = {}

	handleClick = (event) => {
		this.props.cellClick(this.props)
	}
	render(){
		return (

		    	<div className="cell" onClick={this.handleClick} ></div>
			)
		
	}
}



export default Cell;