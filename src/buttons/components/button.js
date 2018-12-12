import React from 'react';
import './button.css';
import PropTypes from 'prop-types'


function Button(props) {
  const className = 'btn btn__play btn__play--'+props.style
  return (
    <div className={className} onClick={props.handleAction}>
        {props.message}
      </div>
  )
}

export default Button;

Button.propTypes = {
	handleAction: PropTypes.func.isRequired,
	style: PropTypes.string.isRequired,
}