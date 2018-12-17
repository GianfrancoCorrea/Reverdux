import React from 'react';
import PropTypes from 'prop-types';
import '../styles/app-layout.css';

function AppLayout({
  children,
}) {
  AppLayout.defaultProps = {
    children: null,
  };
  return (
    <div className="AppLayout">
      <div>
        <h1>REVERDUX</h1>
        <span className="subtitle">A Reversi game made with React and Redux</span>
      </div>

      { children }
    </div>
  );
}

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
