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
  const className = `btn btn--${styleBtn}`;
  const handlerKeyDown = (event) => {
    if (event.keyCode === 13) {
      actions();
    }
  };
  return (
    <div
      role="button"
      tabIndex={0}
      className={className}
      onClick={actions}
      onKeyDown={handlerKeyDown}
      style={addStyle}
    >
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
