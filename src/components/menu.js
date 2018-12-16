import React from 'react';
import '../styles/menu.css';
import ButtonComponent from './button';
import Score from './score';
import PlayerInput from './player-input';

function Menu({pause, actions, players, score}) {
  return pause === false ? (
    <div className="Menu">
      <PlayerInput forPlayer="Player1" actions={actions} />
      <PlayerInput forPlayer="Player2" actions={actions} />
      <ButtonComponent actions={actions.newGame} message="Play" styleBtn="success btn--big" />
    </div>
  ) : (
    <div className="Menu">
      <ButtonComponent
        actions={actions.pause}
        message="Resume"
        styleBtn="success btn--big no-bottom-radius"
      />
      <Score score={score} players={players} />
      <div className="mb-3">
        <ButtonComponent
          actions={actions.newGame}
          message="New board"
          styleBtn="info btn--big "
        />
      </div>
      <div className="mb-3">
        <ButtonComponent
          actions={actions.restartGame}
          message="Restart game"
          styleBtn="danger btn--big "
        />
      </div>
    </div>
  );
}

export default Menu;
