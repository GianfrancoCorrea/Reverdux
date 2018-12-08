import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './nombreclass.css';

class NombreClass extends Component {
	// constructor(){
	// 	super(props) //para usar los props
	// 	this.handleClick = this.handleClick.bind(this)
	// }
	handleClick = (event) => {
		console.log(this.props.title)
	}
	render() {
		const styles = {
			container: {
				color: 'black',
				cursor: 'pointer'
			}
		}
		return {
		 	<div classNme="clase" onClick={this.handleClick}></div>
		}
	}
}

NombreClass.propTypes = {
	prop1: PropTypes.string.isRequired,
	prop2: PropTypes.number,
	propx: PropTypes.func,
	propy: PropTypes.oneOf(['string1','tring2']) 
}

export default component;