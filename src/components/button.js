import PropTypes from 'prop-types';
import React from 'react';
import '../styles/button.css';


function Button(props) {
  const className = 'btn btn--' + props.styleBtn
  return (
    <div className={className} onClick={props.actions} style={props.addStyle}>
      {props.message}
    </div>
  )
}

export default Button;

Button.propTypes = {
  // handleAction: PropTypes.func.isRequired,
  styleBtn: PropTypes.string.isRequired,

};
