import PropTypes from 'prop-types';
import React from 'react';
import '../styles/score.css';


function Score({ players, score }) {
  return (
    <div className="score">
      <div className="score__title">Score</div>
      <div className="score__cont">
        <div className="score__player ">
          <div className="coin score__player--one" />
          {players.player1.name}
          {':'}
          <span>
            {score.player1}
          </span>
        </div>
        <div className="score__player ">
          <div className="coin score__player--two" />
          {players.player2.name}
          {':'}
          <span>
            {score.player2}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Score;


Score.propTypes = {
  score: PropTypes.objectOf(PropTypes.object).isRequired,
  players: PropTypes.objectOf(PropTypes.object).isRequired,
};
