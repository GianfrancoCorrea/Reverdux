import React from 'react';
import '../styles/score.css';
import PropTypes from 'prop-types';


function Score(props) {
  return (
    <div className="score">
      <div className="score__title">Score</div>
      <div className="score__cont">
        <div className="score__player ">
          <div className="coin score__player--one" />
          {props.players.player1.name}:
          <span> 
            {props.score.player1}
          </span>
        </div>
        <div className="score__player ">
          <div className="coin score__player--two">
            {props.players.player2.name}: <span> {props.score.player2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Score;


Score.propTypes = {
    score: PropTypes.object.isRequired,
    players: PropTypes.object.isRequired,

};
