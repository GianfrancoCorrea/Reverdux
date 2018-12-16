import PropTypes from 'prop-types';
import React from 'react';
import '../styles/button.css';


function Button({ message, actions, addStyle, styleBtn }) {
  const className = 'btn btn--' + styleBtn;
  return (
    <div className={className} onClick={actions} style={addStyle}>
      {message}
    </div>
  );
}

export default Button;

Button.propTypes = {
  // handleAction: PropTypes.func.isRequired,
  styleBtn: PropTypes.string.isRequired,
  addStyle: PropTypes.string.isRequired,

};
