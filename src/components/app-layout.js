import React from 'react';
import '../styles/app-layout.css';

function AppLayout({ children }) {
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
