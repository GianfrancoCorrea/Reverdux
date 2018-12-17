import PropTypes from 'prop-types';
import React from 'react';
import '../styles/button.css';


function Button({
  message, actions, addStyle, styleBtn,
}) {
  Button.defaultProps = {
    styleBtn: '',
    addStyle: { backgoundColor: '#fafafa' },
  };
  const className = 'btn btn--' + styleBtn;
  return (
    <div className={className} onClick={actions} style={addStyle}>
      {message}
    </div>
  );
}

export default Button;

Button.propTypes = {
  styleBtn: PropTypes.string,
  addStyle: PropTypes.objectOf(PropTypes.string),
  message: PropTypes.string.isRequired,
  actions: PropTypes.func.isRequired,
};
