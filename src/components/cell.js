import React, { PureComponent } from 'react';
import './cell.css';


class Cell extends PureComponent {
	state = {}

	

	handleClick = (event) => {
		this.props.cellClick(this.props)
	}
	render(){
		const styles = ownerStyle(
			this.props.owner
		)
		return (

		    	<div 
					style={styles}
					className="board__cell" onClick={this.handleClick} >{this.props.cell} -- {this.props.owner}</div>
			)

	function ownerStyle(owner) {
		if(owner == 1){
			return {background: 'black', color: 'white'}
		} else if(owner == 2) {
			return {background: 'white'}
		} else return {background: 'lightgreen'}
	}
		
	}
}



export default Cell;