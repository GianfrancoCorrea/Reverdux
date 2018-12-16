import React from 'react';
import '../styles/menu.css';
import ButtonComponent from './button';
import Score from './score';
import PlayerInput from './player-input';


function Menu(props) {
	return (

		props.pause == false ?
			<div className="Menu">
				<PlayerInput for="Player1" actions={props.actions}></PlayerInput>
				<PlayerInput for="Player2" actions={props.actions}></PlayerInput>
				<ButtonComponent actions={props.actions.newGame} message="Play" styleBtn='success btn--big' />
			</div>
			:
			<div className="Menu">
				<ButtonComponent actions={props.actions.pause} message="Resume" styleBtn='success btn--big no-bottom-radius' />
				<Score score={props.score} players={props.players} />
				<div className="mb-3">
					<ButtonComponent actions={props.actions.newGame} message="New board" styleBtn="info btn--big " />
				</div>
				<div className="mb-3">
					<ButtonComponent actions={props.actions.restartGame} message="Restart game" styleBtn="danger btn--big " />
				</div>
			</div>


	)
}


export default Menu;
